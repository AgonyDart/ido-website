window.addEventListener('load', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    if (location.hash.startsWith('#network')) {
        networkPage();
    } else if (location.hash.startsWith('#program')) {
        programPage();
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
    hideProgramPage();
    // remove classes
    networkSection.classList.remove('hide');
}

function programPage() {
    hideHomePage();
    hideNetworkPage();
    hideGlosarioPage();
    // remove classes
    programSection.classList.remove('hide');
}

function glosarioPage() {
    hideHomePage();
    hideNetworkPage();
    hideProgramPage();
    // remove classes
    glosarioSection.classList.remove('hide');
}

function homePage() {
    hideNetworkPage();
    hideGlosarioPage();
    hideProgramPage();

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

function hideProgramPage() {
    programSection.classList.add('hide');
}