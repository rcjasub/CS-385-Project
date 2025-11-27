/*
  Author: Jocsan Rodriguez
  Date: November 26 2025
  Class: Web Programming
  Description: Scripts for handling interactive features on the website
*/

const images = {
  header: "myStoreImg/Home.jpeg",
  portfolio: [
    {
      name: "Tekken 8",
      src: "myStoreImg/t8.jpeg",
      genre: "Fighting",
      page: "../product4.html",
      description:
        "Head-to-head combat games featuring combos, special moves, and competitive play.",
      features: ["Combo System", "Tournament Mode", "Character Roster"],
    },
    {
      name: "Final Fantasy 7",
      src: "myStoreImg/FF7.jpeg",
      genre: "RPG",
      page: "../product3.html",
      description:
        "Classic RPG with turn-based combat and a rich narrative full of memorable characters.",
      features: ["Turn-Based Combat", "Cinematic Cutscenes", "Engaging Plot"],
    },
    {
      name: "BattleField 1",
      src: "myStoreImg/bf1.jpeg",
      page: "../product1.html",
      genre: "Action",
      description:
        "Action shooter with fast-paced combat, missions, and multiplayer battles.",
      features: ["Multiplayer", "Vehicles & Weapons", "Realistic Battles"],
    },
    {
      name: "Resident Evil 2",
      src: "myStoreImg/re2.jpeg",
      genre: "Survival Horror",
      page: "../product3.html",
      description:
        "Face terrifying enemies and solve puzzles while managing limited resources.",
      features: [
        "Intense Atmosphere",
        "Resource Management",
        "Horror Elements",
      ],
    },
  ],
};

// Set header image
const headerImg = document.getElementById("headerImage");
headerImg.src = images.header;

// Dynamically add portfolio images with full descriptions
const portfolioDiv = document.getElementById("portfolio");
images.portfolio.forEach((item) => {
  const container = document.createElement("div");
  container.className = "w3-card w3-margin w3-padding w3-center";

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.src.split("/").pop().split(".")[0];
  img.className = "w3-image portfolio-img";
  container.appendChild(img);

  // Game Name
  const nameText = document.createElement("h4");
  nameText.textContent = `${item.name}`;
  nameText.className = "w3-text-dark-grey";
  container.appendChild(nameText);

  // Genre as a clickable link
  const genreLink = document.createElement("a");
  genreLink.textContent = `Genre: ${item.genre}`;
  genreLink.href = item.page; // link to the page outside folder
  genreLink.className = "w3-text-blue";
  genreLink.target = "_blank"; // optional: opens in new tab
  container.appendChild(genreLink);

  // Description
  const descText = document.createElement("p");
  descText.textContent = item.description;
  descText.className = "w3-text-grey w3-small";
  container.appendChild(descText);

  // Features
  const featureList = document.createElement("ul");
  featureList.className = "w3-ul w3-small";
  item.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featureList.appendChild(li);
  });
  container.appendChild(featureList);

  portfolioDiv.appendChild(container);
});
