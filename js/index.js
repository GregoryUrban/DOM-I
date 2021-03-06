const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

let mainContent = document.getElementById("middle-img");
mainContent.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Navs
let nav = document.querySelector("nav");

let navs = document.querySelectorAll("a");
navs.forEach((index, i) => navs[i].textContent = siteContent["nav"][`${
  Object.keys(siteContent["nav"])[i]
}`]);



///CTA 
let ctaH1 = document.querySelector('h1');
ctaH1.innerHTML = siteContent['cta']['h1'].split(' ').join(`<br>`);

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];



///main-content
let hFour = document.querySelectorAll('h4');

let mainHFour = Object.keys(siteContent['main-content']).filter((key) => key.includes('h4'));

hFour.forEach((index, i) => hFour[i].textContent = siteContent['main-content'][`${mainHFour[i]}`]);

let mainPar = document.querySelectorAll('p');

let mainParContent = Object.keys(siteContent['main-content']).filter((key) => key.includes('content'));

mainPar.forEach((index, i) => mainPar[i].textContent = siteContent['main-content'][`${mainParContent[i]}`]);


/// Contact
hFour[5].textContent = siteContent['contact']['contact-h4'];

mainPar[5].innerHTML = siteContent['contact']['address'].split('Street ').join(`Street <br>`);

mainPar[6].innerHTML = siteContent['contact']['phone'];

mainPar[7].innerHTML = siteContent['contact']['email'];

// footer

mainPar[8].innerHTML = siteContent['footer']['copyright'];

// green nav
navs.forEach(navs => navs.style.color = 'green');

// task 4 prepend and append navs
const firstNav = document.createElement('a');
firstNav.href = '#';
firstNav.textContent = 'Home';
firstNav.style.color = 'green';

nav.prepend(firstNav);

const lastNav = document.createElement('a');
lastNav.href = '#';
lastNav.textContent = 'Get Started';
lastNav.style.color = 'green';

nav.append(lastNav);