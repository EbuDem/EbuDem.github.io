
const sections = document.querySelectorAll('.section');
const container = document.querySelector(".container");

let lastScrollY = 0;
let currentSectionIndex = 0;
let nextSectionIndex = 0;
container.addEventListener("scroll", () => {
    calculateScroll();
});

function calculateScroll()
{
    const sectionTop = sections[0].offsetTop;
    const scrollMin = sections[0].clientHeight / 10;
    const scrollY = container.scrollTop;
    const scrollDir = Math.sign(scrollY - lastScrollY);
    if (Math.abs(scrollY - sectionTop) < scrollMin) {
        document.querySelector('.logo').classList.add('active');
        document.querySelector('.logo-small').classList.remove('active');
    }
    else {
        document.querySelector('.logo').classList.remove('active');
        document.querySelector('.logo-small').classList.add('active');
    }


    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        const sectionTop = section.offsetTop;
        if (Math.abs(scrollY - sectionTop) < scrollMin) {
            section.classList.add('active');
            sections[nextSectionIndex].classList.remove("transitioning");
            currentSectionIndex = i;
        
        } else {
            section.classList.remove('active');
            if (i == currentSectionIndex) {
                nextSectionIndex = currentSectionIndex + scrollDir;
                sections[nextSectionIndex].classList.add("transitioning");

                if(sections[nextSectionIndex].classList.contains("section-black"))
                {
                    document.querySelector('.logo').classList.add('logo-inverted');
                    document.querySelector('.logo-small').classList.add('logo-inverted');
                }
                else 
                {
                    document.querySelector('.logo').classList.remove('logo-inverted');
                    document.querySelector('.logo-small').classList.remove('logo-inverted');
                }
            }
        }
    };

    lastScrollY = scrollY;
}