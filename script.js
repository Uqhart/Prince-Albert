const exitBtns = document.querySelectorAll("#exit");
const boxes = document.querySelectorAll("#info-box");
const buttonsList = document.getElementById("buttonslist");

const landscapebtn = document.querySelector(".landscapebtn");
const historybtn = document.querySelector(".historybtn");
const disasterbtn1 = document.querySelector(".disasterbtn1");
const disasterbtn2 = document.querySelector(".disasterbtn2");
const attractionsbtn = document.querySelector(".attractionsbtn");
const glossarybtn = document.querySelector(".glossarybtn");

const landscapepanel = document.querySelector(".landscape");
const historypanel = document.querySelector(".history");
const weatherpanel = document.querySelector(".disaster1");
const disasterpanel = document.querySelector(".disaster2");
const attractionspanel = document.querySelector(".attractions");
const glossarypanel = document.querySelector(".glossary");

function openPanel(panel) {
    panel.removeAttribute("hidden");
    panel.style.display = "";
    panel.classList.remove("fade-out");
    document.getElementById("map").classList.add("blurred");
    updateButtonsVisibility();
}

function updateButtonsVisibility() {
    const anyVisible = [...boxes].some(box => getComputedStyle(box).display !== "none");
    buttonsList.style.display = anyVisible ? "none" : "flex";
}

exitBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const parentBox = btn.closest("#info-box");
        parentBox.classList.add("fade-out");
        setTimeout(() => {
            parentBox.style.display = "none";

            const anyVisible = [...boxes].some(box => getComputedStyle(box).display !== "none");
            if (!anyVisible) {
                document.getElementById("map").classList.remove("blurred");
            }

            updateButtonsVisibility();
        }, 500);
    });
});

landscapebtn.addEventListener("click", () => openPanel(landscapepanel));
historybtn.addEventListener("click", () => openPanel(historypanel));
disasterbtn1.addEventListener("click", () => openPanel(weatherpanel));
disasterbtn2.addEventListener("click", () => openPanel(disasterpanel));
attractionsbtn.addEventListener("click", () => openPanel(attractionspanel));
glossarybtn.addEventListener("click", () => openPanel(glossarypanel));

updateButtonsVisibility();