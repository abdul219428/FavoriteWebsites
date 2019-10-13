// TODO
//? Add tags field in data model
//? organize the cards by tags
//* Search by tags
//* Search by name
//? implement the data model on local storage
//! ability to drag the cards to Today's plan list box
//? create a  todo list and drag the cards into it
//! timeline like interface for cards in the order of basic to advanced
//? a section for most clicked/visited cards
//! a remind me to visit this card tomorrow



const websites = [{
        url: 'http://codingheroes.io/resources/',
        websiteName: 'Web Dev Resources'
    },
    {
        url: 'https://app.getpocket.com/',
        websiteName: 'Pocket'
    },

    {
        url: 'https://github.com/avatsaev/angular-learning-resources/blob/master/README.md',
        websiteName: 'angular-learning-resources'
    },
    {
        url: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
        websiteName: 'Traversy Media'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX',
        websiteName: 'Traversy Media JavaScript'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PLillGF-RfqbZ7s3t6ZInY3NjEOOX7hsBv',
        websiteName: 'Traversy Media ES6'
    },
    {
        url: 'https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ',
        websiteName: 'FreeCodeCamp'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88',
        websiteName: 'FreeCodeCamp html+Css'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V',
        websiteName: 'FreeCodeCamp JavaScript'
    },
    {
        url: 'https://www.youtube.com/channel/UCvzlnZbePin9kH-1JCKBt8Q',
        websiteName: 'codeAffection'
    },
    {
        url: 'https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw/videos',
        websiteName: 'CodeEvolution'
    },
    {
        url: 'https://www.youtube.com/channel/UCD3KVjbb7aq2OiOffuungzw',
        websiteName: 'DarkCode'
    },
    {
        url: 'https://www.youtube.com/user/khanacademy/playlists?view=50&sort=dd&shelf_id=13',
        websiteName: 'khanacademy Computing'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PL6n9fhu94yhXwcl3a6rIfAI7QmGYIkfK5',
        websiteName: 'KudVenkat Angular 5'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PL6n9fhu94yhWNJaDgh0mfae_9xoQ4E_Zj',
        websiteName: 'KudVenkat Angular 6'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PLAC325451207E3105',
        websiteName: 'KudVenkat C#'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PL08903FB7ACA1C2FB',
        websiteName: 'KudVenkat SqlServer'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PL6n9fhu94yhVm6S8I2xd6nYz2ZORd7X2v',
        websiteName: 'KudVenkat Asp.net MVC'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PL6n9fhu94yhUbctIoxoVTrklN3LMwTCmd',
        websiteName: 'KudVenkat Design Patterns'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V',
        websiteName: 'KudVenkat Bootstrap'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PL6n9fhu94yhXjG1w2blMXUzyDrZ_eyOme',
        websiteName: 'KudVenkat SOLID Design principles'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PL6n9fhu94yhWi8K02Eqxp3Xyh_OmQ0Rp6',
        websiteName: 'KudVenkat LINQ'
    },
    {
        url: 'https://www.youtube.com/playlist?list=PL6n9fhu94yhUPBSX-E2aJCnCR3-_6zBZx',
        websiteName: 'KudVenkat Entity Framework'
    },
    {
        url: 'https://www.youtube.com/channel/UCwRXb5dUK4cvsHbx-rGzSgw',
        websiteName: 'Derek Banas'
    },
    {
        url: 'https://www.0to255.com/',
        websiteName: 'Color Picker'
    },
    {
        url: ' https://css-tricks.com/',
        websiteName: 'CssTricks'
    },
    {
        url: 'https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285',
        websiteName: 'Regex'
    },
    {
        url: 'http://overapi.com/javascript ',
        websiteName: 'JavaScript CheatSheet'
    },
    {
        url: 'http://overapi.com/ ',
        websiteName: 'CheatSheet All'
    },
    {
        url: 'https://github.com/public-apis/public-apis ',
        websiteName: 'UseFull Apis'
    },
    {
        url: 'https://any-api.com/ ',
        websiteName: 'Any Api'
    },
    {
        url: 'https://caniuse.com/ ',
        websiteName: 'can i use'
    }


]

let siteCard = document.querySelector(".site-card");
// let siteCardHref = document.querySelector("site-card-href")


function createWebsiteCards() {
    websites.forEach(site => {
        let siteCard = document.createElement("div");
        let mainSection = document.querySelector(".main-section");
        siteCard.setAttribute('class', 'site-card col-md-3.6 col-xs-3.6 col-sm-3.6 ');

        backgroundColor = '#ffffff00';
        mainSection.appendChild(siteCard);
        let siteCardHref = document.createElement("a");
        siteCardHref.setAttribute('class', 'site-card-href');
        siteCardHref.setAttribute('target', '_blank');

        // siteCardHref.className = 'shadow40 site-card-href';

        siteCard.appendChild(siteCardHref);
        siteCardHref.setAttribute('href', site.url);
        siteCardHref.innerText = site.websiteName;
        siteCardHref.style.textDecoration = 'none';


    })

}
// creates a new div element
function createSingleWebsiteCard() {
    // to get the latest added website url and name
    let newWebsiteCard = websites.slice(-1)[0];
    // create new div element for holding the website url and name
    let siteCard = document.createElement("div");
    let mainSection = document.querySelector(".main-section");
    siteCard.setAttribute('class', 'site-card');
    // add the newly created site card to main section
    mainSection.appendChild(siteCard);
    let siteCardHref = document.createElement("a");
    siteCardHref.setAttribute('class', 'site-card-href');
    siteCardHref.setAttribute('target', '_blank');
    // siteCardHref.className = 'shadow40';

    siteCard.appendChild(siteCardHref);
    siteCardHref.setAttribute('href', newWebsiteCard.url);
    siteCardHref.innerText = newWebsiteCard.websiteName;
    siteCardHref.style.textDecoration = 'none';


}



let urlInput = document.querySelector('#txtUrlName');
let websiteName = document.querySelector('#txtWebsiteName')

let addUrl = document.querySelector('#btnAddUrl');
addUrl.addEventListener('click', addWebsite);
createWebsiteCards();

function addWebsite() {
    let urlNameInput = urlInput.value;
    let websiteNameInput = websiteName.value;

    websites.push({
        url: urlNameInput,
        websiteName: websiteNameInput
    });
    createSingleWebsiteCard();

    urlInput.value = '';
    websiteName.value = '';



}