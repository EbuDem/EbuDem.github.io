
const sections = document.querySelectorAll('.section');
const container = document.querySelector(".container");

let lastScrollY = 0;
let currentSectionIndex = 0;
let nextSectionIndex = 0;
container.addEventListener("scroll", () => {
    calculateScroll();
});

function calculateScroll() {
    const sectionTop = sections[0].offsetTop;
    const scrollMin = sections[0].clientHeight / 15;
    const scrollY = container.scrollTop;
    const scrollDir = Math.sign(scrollY - lastScrollY);
    if (Math.abs(scrollY - sectionTop) < scrollMin) {
        document.querySelector('.logo').classList.remove('small');
    }
    else {
        document.querySelector('.logo').classList.add('small');
    }

    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        const sectionTop = section.offsetTop;
        // is in focus now
        if (Math.abs(scrollY - sectionTop) <= scrollMin) {
            
            section.classList.add('active');
            currentSectionIndex = i;
            if(nextSectionIndex == i)
            {
                section[nextSectionIndex].classList.remove('active');
                section[nextSectionIndex].classList.remove('tranisitioning');
                nextSectionIndex = undefined;
            }
                
            console.log("Now At", currentSectionIndex)

        } else { // is not anymore
            if(currentSectionIndex == i)
            {
                console.log("left", currentSectionIndex)
                console.log("movingTo", nextSectionIndex)
                section.classList.remove('active');
                sections[nextSectionIndex].classList.add('tranisitioning');
             
            }else 
            {     
                sections[nextSectionIndex].classList.remove('tranisitioning');
            }
            
            nextSectionIndex = currentSectionIndex + scrollDir;
        }
    };

    lastScrollY = scrollY;
}

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Set favicon based on color scheme
const favicon = document.getElementById("favicon");
favicon.href = prefersDarkScheme ? "img/favicon_light.png" : "img/favicon.png"
