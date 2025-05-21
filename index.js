// Start with 0 heads and tails
let heads = 0;
let tails = 0;

// Get the coin image and the buttons from the page
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

// When flip button is clicked, do this:
flipBtn.addEventListener("click", () => {
    // Random number: 0 for tails, 1 for heads
    let i = Math.floor(Math.random() * 2);

    // Stop any previous animation
    coin.style.animation = "none";

    if (i) {
        // If it's heads, play heads animation after a short delay
        setTimeout(function () {
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++; // add 1 to heads count
    } else {
        // If it's tails, play tails animation after a short delay
        setTimeout(function () {
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++; // add 1 to tails count
    }

    // Update the numbers after the animation ends
    setTimeout(updateStats, 3000);

    // Disable flip button while the coin is spinning
    disableButton();
});

// Function to show updated heads and tails count
function updateStats() {
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}

// Function to disable the flip button for 3 seconds
function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    }, 3000);
}

// When reset button is clicked, reset everything
resetBtn.addEventListener("click", () => {
    coin.style.animation = "none"; // stop any animation
    heads = 0;
    tails = 0;
    updateStats(); // show reset values
});


























