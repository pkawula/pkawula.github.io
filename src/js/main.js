"use strict";

console.log(`Hi! So nice you're looking here!
Hope there wouldn't be issues or bugs...`);

const projects = document.querySelector('.projects-container--js');

const project = (title, description, demoURL, repoURL) => {

    if (!description || description === null) {
        description = "no description";
    }

    if (!demoURL || demoURL === null) {
        demoURL = "#";
    }

    const f = `<article class="section__project">
            <img src="assets/icons/github-bigger.png" alt="Github logo" class="section__project--image">
            <h4 class="section__project--title">${title}</h4>
            <p class="section__project--description">${description}</p>
            <span class="links-container">
                <a href="${demoURL}" class="section__project--link section__project--demo">Demo</a>
                <a href="${repoURL}" class="section__project--link section__project--repo">Github</a>
            </span>
        </article>`;

    projects.innerHTML += f;

    const links = document.querySelectorAll('.section__project--link');
    links.forEach(link => {
        if (link.getAttribute("href") === "#") {
            link.setAttribute("disabled", "disabled");
            link.classList.add("section__project--linkDisabled");
        }
    })
}

fetch('https://api.github.com/users/pkawula/repos?direction=desc')
    .then(res => res.json())
    .then(res => {
        const repos = res;

        for (const repo of repos) {
            const {
                name,
                description,
                homepage,
                html_url
            } = repo;

            project(name, description, homepage, html_url);
        }

    });



function smoothScroll(target, duration) {
    target = document.querySelector(target);
    let targetPosition = target.getBoundingClientRect().top + window.scrollY,
        startPosition = window.pageYOffset,
        distance = targetPosition - startPosition,
        startTime = null;

    const scroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(scroll);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scroll);
}

let mySkill = document.querySelectorAll('.page-header__link--myskills-js');
mySkill.forEach(a => {
    a.addEventListener('click', () => {
        smoothScroll('#myskills', 1000);
    });
});

let myProject = document.querySelectorAll('.page-header__link--myprojects-js');
myProject.forEach(a => {
    a.addEventListener('click', () => {
        smoothScroll('#myprojects', 1000);
    });
});

let contact = document.querySelectorAll('.page-header__link--contact-js');
contact.forEach(a => {
    a.addEventListener('click', () => {
        smoothScroll('#contact', 1000);
    });
});