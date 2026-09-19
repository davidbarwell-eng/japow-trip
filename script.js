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
