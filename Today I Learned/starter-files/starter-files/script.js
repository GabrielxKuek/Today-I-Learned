/* personal project */

const shareFact = document.querySelector("#shareFact");
const form = document.querySelector(".fact-form");

shareFact.addEventListener("click", function() {
    if (form.classList.contains('hidden')) {
        form.classList.remove("hidden");
        shareFact.textContent = "Close";
    } else {
        form.classList.add("hidden");
        shareFact.textContent = "Share a Fact";
    }
});

