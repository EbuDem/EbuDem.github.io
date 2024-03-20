
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
    const scrollMin = sections[0].clientHeight / 100;
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
                }
                else 
                {
                    document.querySelector('.logo').classList.remove('logo-inverted');
                }
            }
        }
    };
    lastScrollY = scrollY;
}


connectPoints();

function connectPoints() {
    const cvWrapper = document.querySelector('.cv-wrapper');
    const cvPoints = Array.from(cvWrapper.querySelectorAll('.cv-point'));
    const lineTransitionDifference = 1.5;
    const pointTransitionDifference = 1.5;

    // Create SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');

    // Loop through each pair of points
    for (let i = 0; i < cvPoints.length; i++) {
        const point1 = cvPoints[i];
        const point2 = cvPoints[i + 1];
        point1.style.transitionDelay  = pointTransitionDifference * i + "s";

        if(i+1 < cvPoints.length)
        {
            // Get coordinates of each point
            console.log(getComputedStyle(point1)["top"])
            const x1 = parseFloat(getComputedStyle(point1).left) + parseFloat(getComputedStyle(point1).width) / 2;
            const y1 = parseFloat(getComputedStyle(point1).top) + parseFloat(getComputedStyle(point1).height) / 2;
            const x2 = parseFloat(getComputedStyle(point2).left) + parseFloat(getComputedStyle(point2).width) / 2;
            const y2 = parseFloat(getComputedStyle(point2).top) + parseFloat(getComputedStyle(point2).height) / 2;
            
            // Create line element
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute('class', 'cv-line'); // Add class to line
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.style.transitionDelay = (pointTransitionDifference ) + lineTransitionDifference * i +"s";
            
            // Append line to SVG
            svg.appendChild(line);
        }
    }
    // Append SVG to cv-wrapper
    cvWrapper.appendChild(svg);
}


const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)").matches;

// Set favicon based on color scheme
const favicon = document.getElementById("favicon");
favicon.href = prefersDarkScheme ? "img/favicon_light.png" : "img/favicon.png"

console.log(prefersDarkScheme,prefersLightScheme)