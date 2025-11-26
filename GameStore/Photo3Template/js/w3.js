const images = {
  header: "w3Images/deathS.jpeg",
  portfolio: [
    "w3Images/lastOfUs.jpeg",
    "w3Images/rd2.jpeg",
    "w3Images/re7.jpeg",
    "w3Images/stray.jpeg",
    "w3Images/sekiro.jpeg",
  ],
};

// Set header image
const headerImg = document.getElementById("headerImage");
headerImg.src = images.header;

// Dynamically add portfolio images
const portfolioDiv = document.getElementById("portfolio");
images.portfolio.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = src.split("/").pop().split(".")[0]; // filename as alt
  img.className = "w3-image portfolio-img";
  portfolioDiv.appendChild(img);
});
