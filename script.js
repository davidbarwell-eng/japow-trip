// UPDATED 5-HUB DATABASE
const hubData = {
  sapporo: {
    region: "Hokkaido",
    title: "Sapporo / Otaru Hub",
    accommodation: {
      dates: "Jan 6 – Jan 10 (4 Nights)",
      desc: "Coastal powder base positioned between Otaru Canal and powder resorts like Sapporo Kokusai, Rusutsu, and Asarigawa.",
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
      dates: "Jan 14 – Jan 16 (2 Nights)",
      desc: "Slope-side Ryokan in a 1,900-year-old hot spring village nestled in Mount Zao.",
      address: "Zao Onsen Village, Yamagata 990-2301",
      info: [
        "Check-in: Jan 14, 2027 (15:00)",
        "Check-out: Jan 16, 2027 (10:00)",
        "Meals: Breakfast & Kaiseki Dinner included",
        "Onsen: 24h Volcanic Sulfur Bath"
      ]
    },
    food: [
      {
        name: "Zao Jingisukan (Genghis Khan Lamb BBQ)",
        note: "Local grilled lamb on a convex iron griddle. Perfect after a cold day on the mountain.",
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
  },
  aizu: {
    region: "Fukushima / Tohoku",
    title: "Aizu / Urabandai Hub",
    accommodation: {
      dates: "Jan 16 – Jan 17 (1 Night)",
      desc: "Lake-side base situated right at the foot of Mount Bandai for fast early-morning tracks at Nekoma Mountain.",
      address: "Urabandai / Aizu-Wakamatsu, Fukushima 966-0401",
      info: [
        "Check-in: Jan 16, 2027 (15:00)",
        "Check-out: Jan 17, 2027 (10:00)",
        "Distance to Slopes: 15 mins to Nekoma Mountain",
        "Status: Booking Pending"
      ]
    },
    food: [
      {
        name: "Kitakata Ramen Village",
        note: "Famous soy sauce broth ramen with thick, flat curly noodles—one of Japan's top three ramen styles.",
        map: "https://maps.google.com/?q=Kitakata+Ramen+Aizu"
      },
      {
        name: "Aizu Sauce Katsudon",
        note: "Crispy fried pork cutlet dipped in sweet/savory Worcestershire-style sauce over rice.",
        map: "https://maps.google.com/?q=Aizu+Sauce+Katsudon"
      }
    ],
    highlights: [
      {
        name: "Nekoma Mountain (Hoshino Resorts)",
        note: "Premier micro-climate powder bowl on the north face of Mount Bandai.",
        map: "https://maps.google.com/?q=Nekoma+Mountain"
      },
      {
        name: "Tsuruga Castle (Aizu-Wakamatsu)",
        note: "Famous samurai castle with red-tiled roof surrounded by snow gardens.",
        map: "https://maps.google.com/?q=Tsuruga+Castle"
      }
    ]
  },
  tokyo: {
    region: "Kanto / Tokyo",
    title: "Tokyo City Finale Hub",
    accommodation: {
      dates: "Jan 17 – Jan 19 (2 Nights)",
      desc: "Central city transit base with quick direct access to Haneda Airport for the flight home.",
      address: "Shinjuku / Ginza / Ueno Area, Tokyo",
      info: [
        "Check-in: Jan 17, 2027 (15:00)",
        "Check-out: Jan 19, 2027 (10:00)",
        "Airport Transit: ~30 mins via Tokyo Monorail / Keikyu Line to HND",
        "Status: Booking Pending"
      ]
    },
    food: [
      {
        name: "Omoide Yokocho (Memory Lane Shinjuku)",
        note: "Atmospheric narrow alleyway packed with tiny yakitori stalls and local izakayas.",
        map: "https://maps.google.com/?q=Omoide+Yokocho+Tokyo"
      },
      {
        name: "Tsukiji Outer Market",
        note: "Morning street food stop for fresh sashimi, tamagoyaki (egg omelets), and wagyu skewers.",
        map: "https://maps.google.com/?q=Tsukiji+Outer+Market"
      }
    ],
    highlights: [
      {
        name: "teamLab Planets Tokyo",
        note: "Immersive digital art museum where you walk through water and light installations.",
        map: "https://maps.google.com/?q=teamLab+Planets+Tokyo"
      },
      {
        name: "Shibuya Crossing & Shibuya Sky",
        note: "Iconic scramble intersection and open-air rooftop observatory over the Tokyo skyline.",
        map: "https://maps.google.com/?q=Shibuya+Sky"
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.snow-widget').forEach(widget => {
    const lat = widget.getAttribute('data-lat');
    const lon = widget.getAttribute('data-lon');

    if (!lat || !lon) return;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,snowfall,freezing_level_height&timezone=Asia%2FTokyo`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.current) {
          widget.querySelector('.temp').textContent = Math.round(data.current.temperature_2m);
          widget.querySelector('.snow').textContent = data.current.snowfall || 0;
          widget.querySelector('.freezing').textContent = Math.round(data.current.freezing_level_height);
        }
      })
      .catch(err => console.error('Error fetching snow data:', err));
  });

  // Initialize Leaflet Map
const map = L.map('map').setView([39.5, 140.5], 6);

// Load CartoDB Dark Matter map tiles
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// Define Base & Mountain Locations
const locations = [
  { name: 'Otaru / Sapporo Base', coords: [43.1907, 140.9947], type: 'base', note: 'Leg 1: Jan 6 - Jan 10' },
  { name: 'Sapporo Kokusai', coords: [43.0722, 141.0805], type: 'resort', note: 'Day 2' },
  { name: 'Rusutsu Resort', coords: [42.7483, 140.9038], type: 'resort', note: 'Day 3' },
  { name: 'Asarigawaonsen', coords: [43.1558, 141.0372], type: 'resort', note: 'Day 4' },
  { name: 'Morioka Hub', coords: [39.7036, 141.1527], type: 'base', note: 'Leg 2: Jan 10 - Jan 14' },
  { name: 'Appi Kogen', coords: [39.9983, 140.9703], type: 'resort', note: 'Day 6' },
  { name: 'Geto Kogen', coords: [39.2106, 140.9103], type: 'resort', note: 'Day 7' },
  { name: 'Shimokura', coords: [39.9008, 140.9572], type: 'resort', note: 'Day 8' },
  { name: 'Zao Onsen', coords: [38.1642, 140.3975], type: 'resort', note: 'Leg 3: Days 10 & 11' },
  { name: 'Nekoma Mountain', coords: [37.6047, 140.0211], type: 'resort', note: 'Leg 3: Day 12' },
  { name: 'Tokyo Transit Hub', coords: [35.7138, 139.7772], type: 'base', note: 'Leg 4: Jan 18 - Jan 19' }
];

// Add Markers
locations.forEach(loc => {
  const marker = L.circleMarker(loc.coords, {
    radius: loc.type === 'base' ? 8 : 6,
    fillColor: loc.type === 'base' ? '#3b82f6' : '#38bdf8',
    color: '#ffffff',
    weight: 2,
    opacity: 1,
    fillOpacity: 0.9
  }).addTo(map);

  marker.bindPopup(`<strong>${loc.name}</strong><br><span style="font-size:0.85rem; color:#9ca3af;">${loc.note}</span>`);
});

  // Draw Route Lines (Car Drives & Shinkansen)
  const hokkaidoDrive = [[43.1907, 140.9947], [43.0722, 141.0805], [42.7483, 140.9038], [43.1558, 141.0372]];
  const shinkansenTrain = [[43.1907, 140.9947], [39.7036, 141.1527]];
  const tohokuDrive = [[39.7036, 141.1527], [39.9983, 140.9703], [39.9008, 140.9572], [39.2106, 140.9103], [38.1642, 140.3975], [37.6047, 140.0211], [35.7138, 139.7772]];
  
  // Blue solid line for driving legs
  L.polyline(hokkaidoDrive, { color: '#3b82f6', weight: 3, opacity: 0.7 }).addTo(map);
  L.polyline(tohokuDrive, { color: '#3b82f6', weight: 3, opacity: 0.7 }).addTo(map);
  
  // Dashed line for Shinkansen Train leg
  L.polyline(shinkansenTrain, { color: '#f59e0b', weight: 3, dashArray: '6, 8', opacity: 0.9 }).addTo(map);
});


// ==========================================
// DRAWER & TAB CONTROL FUNCTIONS
// ==========================================

function openHubDrawer(hubKey) {
  const data = hubData[hubKey];
  if (!data) return;

  // 1. Populate Drawer Header & Tag
  document.getElementById("drawer-region-tag").textContent = data.region;
  document.getElementById("drawer-title").textContent = data.title;

  // 2. Populate Accommodation Tab
  document.getElementById("drawer-dates").textContent = data.accommodation.dates;
  document.getElementById("drawer-acc-desc").textContent = data.accommodation.desc;
  document.getElementById("drawer-address").textContent = data.accommodation.address;

  const accList = document.getElementById("drawer-acc-list");
  accList.innerHTML = "";
  data.accommodation.info.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    accList.appendChild(li);
  });

  // 3. Populate Food & Drink Tab
  const foodContainer = document.getElementById("drawer-food-list");
  foodContainer.innerHTML = "";
  data.food.forEach(item => {
    foodContainer.innerHTML += `
      <div class="item-card">
        <h5>${item.name}</h5>
        <p>${item.note}</p>
        <a href="${item.map}" target="_blank" class="map-link">View on Google Maps ↗</a>
      </div>
    `;
  });

  // 4. Populate Culture & Highlights Tab
  const highlightsContainer = document.getElementById("drawer-highlights-list");
  highlightsContainer.innerHTML = "";
  data.highlights.forEach(item => {
    highlightsContainer.innerHTML += `
      <div class="item-card">
        <h5>${item.name}</h5>
        <p>${item.note}</p>
        <a href="${item.map}" target="_blank" class="map-link">View on Google Maps ↗</a>
      </div>
    `;
  });

  // 5. Reset to Accommodation Tab on Open
  switchTab("accommodation");

  // 6. Show Drawer and Overlay
  document.getElementById("hub-drawer").classList.add("active");
  document.getElementById("drawer-overlay").classList.add("active");
  document.getElementById("hub-drawer").setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  document.getElementById("hub-drawer").classList.remove("active");
  document.getElementById("drawer-overlay").classList.remove("active");
  document.getElementById("hub-drawer").setAttribute("aria-hidden", "true");
}

function switchTab(tabName) {
  // Hide all tab panels
  const panels = document.querySelectorAll(".tab-panel");
  panels.forEach(panel => panel.classList.remove("active"));

  // Deactivate all tab buttons
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(btn => btn.classList.remove("active"));

  // Activate selected panel
  const activePanel = document.getElementById(`tab-${tabName}`);
  if (activePanel) {
    activePanel.classList.add("active");
  }

  // Highlight active button
  const activeButton = Array.from(buttons).find(btn =>
    btn.getAttribute("onclick") && btn.getAttribute("onclick").includes(tabName)
  );
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

// Close drawer with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});
