"use strict";console.log("Hi! So nice you're looking here!\nHope there wouldn't be issues or bugs...");var projects=document.querySelector(".projects-container--js"),project=function(e,t,o,n){t&&null!==t||(t="no description"),o&&null!==o||(o="#");var c='<article class="section__project">\n            <img src="assets/icons/github-bigger.png" alt="Github logo" class="section__project--image">\n            <h4 class="section__project--title">'.concat(e,'</h4>\n            <p class="section__project--description">').concat(t,'</p>\n            <span class="links-container">\n                <a href="').concat(o,'" class="section__project--link section__project--demo">Demo</a>\n                <a href="').concat(n,'" class="section__project--link section__project--repo">Github</a>\n            </span>\n        </article>');projects.innerHTML+=c,document.querySelectorAll(".section__project--link").forEach(function(e){"#"===e.getAttribute("href")&&(e.setAttribute("disabled","disabled"),e.classList.add("section__project--linkDisabled"))})};function smoothScroll(e,c){var t=(e=document.querySelector(e)).getBoundingClientRect().top+window.scrollY,r=window.pageYOffset,i=t-r,l=null;requestAnimationFrame(function e(t){null===l&&(l=t);var o=t-l,n=function(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t}(o,r,i,c);window.scrollTo(0,n),o<c&&requestAnimationFrame(e)})}fetch("https://api.github.com/users/pkawula/repos?direction=desc").then(function(e){return e.json()}).then(function(e){var t=e,o=!0,n=!1,c=void 0;try{for(var r,i=t[Symbol.iterator]();!(o=(r=i.next()).done);o=!0){var l=r.value,s=l.name,a=l.description,u=l.homepage,p=l.html_url;project(s,a,u,p)}}catch(e){n=!0,c=e}finally{try{o||null==i.return||i.return()}finally{if(n)throw c}}});var mySkill=document.querySelectorAll(".page-header__link--myskills-js");mySkill.forEach(function(e){e.addEventListener("click",function(){smoothScroll("#myskills",1e3)})});var myProject=document.querySelectorAll(".page-header__link--myprojects-js");myProject.forEach(function(e){e.addEventListener("click",function(){smoothScroll("#myprojects",1e3)})});var contact=document.querySelectorAll(".page-header__link--contact-js");contact.forEach(function(e){e.addEventListener("click",function(){smoothScroll("#contact",1e3)})});