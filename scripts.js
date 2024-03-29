const titles = ["Fresh Prince of Bel Air", "Curb Your Enthusiasm", "East Los High"];
const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg"
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This function adds two more cards to the catalog!
function addCards() {
    // Get the card container
    const cardContainer = document.getElementById("card-container");
    // Get the first card to use as a "template"
    const templateCard = cardContainer.firstElementChild;

    // Make a copy and edit the title and image to Curb Your Enthusiasm
    let curbYourEnthusiasmCard = templateCard.cloneNode(true);
    editCardContent(curbYourEnthusiasmCard, titles[1], CURB_POSTER_URL);
    cardContainer.appendChild(curbYourEnthusiasmCard);

    // Make another copy for East Los High
    let eastLosHighCard = templateCard.cloneNode(true);
    editCardContent(eastLosHighCard, titles[2], EAST_LOS_HIGH_POSTER_URL);
    cardContainer.appendChild(eastLosHighCard)
}

function editCardContent(card, newTitle, newImageURL) {
    // Change the card's title to our new title
    let cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;
    
    // Change the card's image to our new image
    let cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", addCards);

// This function is called when you click the button at the bottom of the page
function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}