window.addEventListener('load', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    if (location.hash.startsWith('#network')) {
        networkPage();
    } else if (location.hash.startsWith('#programm')) {
        programmPage();
    } else if (location.hash.startsWith('#contact')) {
        contactPage();
    } else if (location.hash.startsWith('#home')){
        homePage();
    }

    // reboot scrolling every page change
    window.scrollTo(0, 0);
}

// nav fn
function networkPage() {
    hideHomePage();
    // remove classes
    networkSection.classList.remove('hide');
}

function programmPage() {
    hideHomePage();
    hideNetworkPage();
}

function contactPage() {
    hideHomePage();
    hideNetworkPage();

}

function homePage() {
    hideNetworkPage();
    // remove classes
    homeHero.classList.remove('hide');
    homeSections.classList.remove('hide')
}

// Hide functions
function hideHomePage() {
    homeHero.classList.add('hide');
    homeSections.classList.add('hide');
}

function hideNetworkPage() {
    networkSection.classList.add('hide');
}

function hideHomePage() {
    homeHero.classList.add('hide');
    homeSections.classList.add('hide');
}

function hideHomePage() {
    homeHero.classList.add('hide');
    homeSections.classList.add('hide');
}