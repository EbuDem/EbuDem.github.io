window.onload = function()
{
    menu();
    // startSlide(3000,3000);
    startSlide(1000,4500);
}
let head;
let current;
function startSlide(transition, pause)
{
    
    head  = document.getElementById("slider-container");

    let slideSource = document.getElementById("slides");
    head.style.transition = "transform   " + transition + "ms ease";

    for(let i = 0; i< slideSource.children.length;i++)
    {
        let el = slideSource.children[i];
        let title = el.getAttribute("title");
        let subtitle = el.getAttribute("subtitle");
        let img = el.getAttribute("image");
        let color = el.getAttribute("color");
        let url = el.getAttribute("url");
        let slide = createSlide(title,subtitle,img,color,url);
        head.appendChild(slide);
    }

    current = head.children[0];
    setInterval(() => { slide(transition) }, transition+pause);
}
function createSlide(title,subtitle,image,color,url)
{
    let a = document.createElement("a")
    a.setAttribute("href", url);

    let slide = document.createElement("div");
    a.appendChild(slide);
    slide.classList.add("slide");
    console.log(image,color);
    if(image && image != "")
        slide.style.background = `url("${image}")`;
    else if(color)
        slide.style.background = color;
    let headerContainer = document.createElement("div");
    headerContainer.classList.add("head-title-container")

    let headerTitle = document.createElement("div");
    headerTitle.classList.add("head-title");
    headerTitle.innerHTML = title;

    let headerSubTitle = document.createElement("div");
    headerSubTitle.classList.add("head-title-sub");
    headerSubTitle.innerHTML = subtitle;


    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(headerSubTitle);
    slide.appendChild(headerContainer)

    return a;
}


function slide(transition)
{
    // let str = "-" + (head.offsetWidth-0)  + "px";
    head.style.transition = "transform   " + transition + "ms ease";
    let str = "translate(-100%,0)";
    head.style.transform = str;

    setTimeout(() => {
        head.style.transition = "none";
        head.style.transform = "translate(0)";
        head.removeChild(current);
       
        head.appendChild(current);    
        current = head.children[0];
      
    }, transition);

 
}


function menu()
{
    let elements = document.getElementById("nav").children[0].children;

    for(let i = 0; i< elements.length;i++)
    {
        let cur = elements[i];
        let pathname = window.location.pathname;
        let curhref = cur.children[0].getAttribute("href");
        pathname = (pathname == "/" ? "/index.html" : pathname);
        if(curhref == pathname)
        {
            cur.classList.add("selected");
        }
    }
}