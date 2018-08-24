

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