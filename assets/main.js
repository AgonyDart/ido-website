window.addEventListener('load', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    if (location.hash.startsWith('#network')) {
        networkPage();
    } else if (location.hash.startsWith('#programm')) {
        programmPage();
    } else if (location.hash.startsWith('#glosario')) {
        glosarioPage();
    } else if (location.hash.startsWith('#home')){
        homePage();
    } else {
        location.hash = '#home';
    }

    // reboot scrolling every page change
    window.scrollTo(0, 0);
}

// nav fn
function networkPage() {
    hideHomePage();
    hideGlosarioPage();
    // remove classes
    networkSection.classList.remove('hide');
}

function programmPage() {
    hideHomePage();
    hideNetworkPage();
    hideGlosarioPage();

}

function glosarioPage() {
    hideHomePage();
    hideNetworkPage();
    // remove classes
    glosarioSection.classList.remove('hide');
}

function homePage() {
    hideNetworkPage();
    hideGlosarioPage();

    // remove classes
    homeWelcome.classList.remove('hide');
    homeHero.classList.remove('hide');
    homeSections.classList.remove('hide');
    homeMembers.classList.remove('hide');
}

// Hide functions
function hideHomePage() {
    homeWelcome.classList.add('hide');
    homeHero.classList.add('hide');
    homeSections.classList.add('hide');
    homeMembers.classList.add('hide');
}

function hideNetworkPage() {
    networkSection.classList.add('hide');
}

function hideGlosarioPage() {
    glosarioSection.classList.add('hide');
}