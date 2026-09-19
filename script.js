const stayData = {
  otaru: {
    title: "Otaru / Sapporo Winter Base",
    dates: "Jan 6 – Jan 10 (4 Nights)",
    description: "Coastal powder base targeting Sapporo Kokusai, Rusutsu, and Asarigawa. Great seafood and access to Otaru Canal.",
    address: "Otaru Station Area, Hokkaido, Japan",
    info: [
      "Check-in: Jan 6, 2027 (15:00)",
      "Check-out: Jan 10, 2027 (10:00)",
      "Parking: 4WD Vehicle space required",
      "Status: Booking Pending"
    ]
  },
  morioka: {
    title: "Morioka Station Hub",
    dates: "Jan 10 – Jan 14 (4 Nights)",
    description: "Central Tohoku transit base with fast access to Appi Kogen, Geto Kogen, and Shimokura via Shinkansen and rental 4WD.",
    address: "Morioka Station District, Iwate Prefecture, Japan",
    info: [
      "Check-in: Jan 10, 2027 (15:00)",
      "Check-out: Jan 14, 2027 (10:00)",
      "Feature: Near Reimen & Wagyu dining spot",
      "Status: Booking Pending"
    ]
  },
  zao: {
    title: "Zao Onsen Traditional Ryokan",
    dates: "Jan 14 – Jan 17 (3 Nights)",
    description: "Authentic hot spring ryokan nestled in the mountains. Direct access to the Zao Snow Monsters and public baths.",
    address: "Zao Onsen Village, Yamagata Prefecture, Japan",
    info: [
      "Check-in: Jan 14, 2027 (15:00)",
      "Check-out: Jan 17, 2027 (10:00)",
      "Meals: Kaiseki dinner & breakfast included",
      "Onsen: 24-hour natural volcanic sulfur bath"
    ]
  },
  tokyo: {
    title: "Tokyo Transit Hub",
    dates: "Jan 18 – Jan 19 (1 Night)",
    description: "Final city stop before flying home. Easy access to airport trains, izakayas, and shopping in Ueno/Shinjuku.",
    address: "Ueno / Tokyo Station Area, Tokyo, Japan",
    info: [
      "Check-in: Jan 18, 2027 (15:00)",
      "Check-out: Jan 19, 2027 (11:00)",
      "Car Drop-off: Tokyo airport depot",
      "Status: Booking Pending"
    ]
  }
};

function openDrawer(stayId) {
  const stay = stayData[stayId];
  if (!stay) return;

  document.getElementById("drawer-title").innerText = stay.title;
  document.getElementById("drawer-dates").innerText = stay.dates;
  document.getElementById("drawer-description").innerText = stay.description;
  document.getElementById("drawer-address").innerText = stay.address;

  const listContainer = document.getElementById("drawer-info-list");
  listContainer.innerHTML = "";
  stay.info.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    listContainer.appendChild(li);
  });

  document.getElementById("stay-drawer").classList.add("active");
  document.getElementById("drawer-overlay").classList.add("active");
  document.getElementById("stay-drawer").setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  document.getElementById("stay-drawer").classList.remove("active");
  document.getElementById("drawer-overlay").classList.remove("active");
  document.getElementById("stay-drawer").setAttribute("aria-hidden", "true");
}

// Close drawer when pressing Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});
