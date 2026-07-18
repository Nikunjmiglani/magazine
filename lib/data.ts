export const latestIssue = {
  title: "Lotus Eater Vol. II",
  season: "Summer 2026",
  description:
    "Inspired by classical mythology, this issue explores beauty, longing, memory, and the quiet spaces between movement and stillness.",

  coverImage: "/issue-cover.jpg",

  heroImage: "/hero-image.jpg",
};

export const featuredArticles = [
  {
    id: 1,
    category: "Essay",
    title: "The Architecture of Memory",
    image: "/articles/article-1.jpg",
  },

  {
    id: 2,
    category: "Photography",
    title: "Quiet Mornings",
    image: "/articles/article-2.jpg",
  },

  {
    id: 3,
    category: "Poetry",
    title: "Fragments",
    image: "/articles/article-3.jpg",
  },

  {
    id: 4,
    category: "Interview",
    title: "Conversations with Artists",
    image: "/articles/article-4.jpg",
  },
];

// Append these exports into your existing lib/data.ts
// (I don't have your current data.ts content, so swap the image paths
// for real assets - these currently point at your existing /public files
// as placeholders.)

// Append this export into your existing lib/data.ts
// (swap image paths for real assets - these are placeholders)

export const readItems = [
  { id: "p1", title: "Midnight Orchard", category: "Poetry", image: "/issue1.webp" },
  { id: "p2", title: "The Cartographer's Grief", category: "Poetry", image: "/issue2.png" },
  { id: "p3", title: "Salt & Marrow", category: "Poetry", image: "/issue1.webp" },
  { id: "a1", title: "On Reading Slowly", category: "Articles", image: "/issue2.png" },
  { id: "a2", title: "The Archive of Small Things", category: "Articles", image: "/issue1.webp" },
  { id: "a3", title: "Notes from the Editor's Desk", category: "Articles", image: "/issue2.png" },
];