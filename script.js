// HUB DATA SOURCE
const hubData = {
  sapporo: {
    region: "Hokkaido",
    title: "Sapporo / Otaru Hub",
    accommodation: {
      dates: "Jan 6 – Jan 10 (4 Nights)",
      desc: "Coastal powder base positioned between Otaru Canal and the powder resorts of Sapporo Kokusai, Rusutsu, and Asarigawa.",
      address: "Otaru Station Area, Otaru, Hokkaido 047-0032",
      info: [
        "Check-in: Jan 6, 2027 (15:00)",
        "Check-out: Jan 10, 2027 (10:00)",
        "Parking: 4WD Vehicle slot reserved",
        "Status: Booking Pending"
      ]
    },
    food: [
      {
        name: "Otaru Sankaku Market (Ramen & Kaisendon)",
        note: "Famous fresh seafood bowls with uni, crab, and salmon roe right next to Otaru Station.",
        map: "https://maps.google.com/?q=Otaru+Sankaku+Market"
      },
      {
        name: "Akiya Izakaya Otaru",
        note: "Cozy local izakaya with fresh Hokkaido yakitori and draft Sapporo Classic.",
        map: "https://maps.google.com/?q=Otaru+Izakaya"
      }
    ],
    highlights: [
      {
        name: "Otaru Canal Walk & Snow Lanterns",
        note: "Historic gas-lit canal walk. Best visited at dusk when lit up against the snow.",
        map: "https://maps.google.com/?q=Otaru+Canal"
      },
      {
        name: "Yunokawa / Otaru Onsen",
        note: "Traditional hot spring bath ideal for soaking after riding powder at Rusutsu/Kokusai.",
        map: "https://maps.google.com/?q=Otaru+Onsen"
      }
    ]
  },
  morioka: {
    region: "Iwate / Tohoku",
    title: "Morioka Central Hub",
    accommodation: {
      dates: "Jan 10 – Jan 14 (4 Nights)",
      desc: "High-speed rail hub with fast access to Appi Kogen, Geto Kogen, and Shimokura.",
      address: "Morioka Station Front Area, Morioka, Iwate 020-0034",
      info: [
        "Check-in: Jan 10, 2027 (15:00)",
        "Check-out: Jan 14, 2027 (10:00)",
        "Transit: Short walk from Shinkansen exit",
        "Status: Booking Pending"
      ]
    },
    food: [
      {
        name: "Seiroukan (Morioka Reimen)",
        note: "Famous chewy cold noodles in rich beef broth—Morioka's signature dish.",
        map: "https://maps.google.com/?q=Seiroukan+Morioka"
      },
      {
        name: "Pyonpyonsha Station Branch",
        note: "Great Yakiniku & Reimen combo right at Morioka Station.",
        map: "https://maps.google.com/?q=Pyonpyonsha+Morioka"
      }
    ],
    highlights: [
      {
        name: "Morioka Castle Site Park (Iwayama)",
        note: "Historic park ruins offering panoramic winter views over the city and Mount Iwate.",
        map: "https://maps.google.com/?q=Morioka+Castle+Site+Park"
      },
      {
        name: "Tsunagi Onsen",
        note: "Hot spring village located 25 mins outside Morioka overlooking Lake Gosho.",
        map: "https://maps.google.com/?q=Tsunagi+Onsen"
      }
    ]
  },
  zao: {
    region: "Yamagata / Tohoku",
    title: "Zao Onsen Village Hub",
    accommodation: {
      dates: "Jan 14 – Jan 17 (3 Nights)",
      desc: "Slope-side Ryokan in a 1,900-year-old hot spring village nestled in Mount Zao.",
      address: "Zao Onsen Village, Yamagata 990-2301",
      info: [
        "Check-in: Jan 14, 2027 (15:00)",
        "Check-out: Jan 17, 2027 (10:00)",
        "Meals: Breakfast & Kaiseki Dinner included",
        "Onsen: 24h Volcanic Sulfur Bath"
      ]
    },
    food: [
      {
        name: "Zao Jingisukan (Genghis Khan Lamb BBQ)",
        note: "Local grilled lamb on a convex iron griddle. Perfect after a cold day in the mountains.",
        map: "https://maps.google.com/?q=Zao+Onsen+Jingisukan"
      }
    ],
    highlights: [
      {
        name: "Zao Snow Monsters (Juhyo) & Ropeway",
        note: "Take the ropeway up to the summit to see the famous ice tree formations.",
        map: "https://maps.google.com/?q=Zao+Ropeway"
      },
      {
        name: "Dairotenburo Public Onsen",
        note: "Huge open-air outdoor bath surrounded by snow and pines.",
        map: "https://maps.google.com/?q=Zao+Dairotenburo"
      }
    ]
  }
};

// DRAWER & TAB CONTROLLER
let activeHub = null;

function openHubDrawer(hubId) {
  const hub = hubData[hubId];
  if (!hub) return;

  activeHub = hub;

  // Header Data
  document.getElementById("drawer-region-tag").innerText = hub.region;
  document.getElementById("drawer-title").innerText = hub.title;

  // Tab 1: Accommodation Data
  document.getElementById("drawer-dates").innerText = hub.accommodation.dates;
  document.getElementById("drawer-acc-desc").innerText = hub.accommodation.desc;
  document.getElementById("drawer-address").innerText = hub.accommodation.address;

  const accList = document.getElementById("drawer-acc-list");
  accList.innerHTML = "";
  hub.accommodation.info.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    accList.appendChild(li);
  });

  // Tab 2: Food & Drink Data
  const foodList = document.getElementById("drawer-food-list");
  foodList.innerHTML = "";
  hub.food.forEach(item => {
    foodList.appendChild(createItemCard(item));
  });

  // Tab 3: Culture & Highlights Data
  const hlList = document.getElementById("drawer-highlights-list");
  hlList.innerHTML = "";
  hub.highlights.forEach(item => {
    hlList.appendChild(createItemCard(item));
  });

  // Reset to first tab on open
  switchTab("accommodation");

  // Show Drawer
  document.getElementById("hub-drawer").classList.add("active");
  document.getElementById("drawer-overlay").classList.add("active");
  document.getElementById("hub-drawer").setAttribute("aria-hidden", "false");
}

function createItemCard(item) {
  const div = document.createElement("div");
  div.className = "item-card";
  div.innerHTML = `
    <h5>${item.name}</h5>
    <p>${item.note}</p>
    <a href="${item.map}" target="_blank" class="map-link">📍 View on Google Maps ↗</a>
  `;
  return div;
}

function switchTab(tabName) {
  // Update Tab Buttons
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  // Find button based on onclick string
  const activeBtn = Array.from(document.querySelectorAll(".tab-btn")).find(btn => btn.getAttribute("onclick").includes(tabName));
  if (activeBtn) activeBtn.classList.add("active");

  // Update Panels
  document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));
  const activePanel = document.getElementById(`tab-${tabName}`);
  if (activePanel) activePanel.classList.add("active");
}

function closeDrawer() {
  document.getElementById("hub-drawer").classList.remove("active");
  document.getElementById("drawer-overlay").classList.remove("active");
  document.getElementById("hub-drawer").setAttribute("aria-hidden", "true");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});
