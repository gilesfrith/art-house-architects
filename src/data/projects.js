// All portfolio projects
// To add a new project: add an entry to this array.
// Drop image files in /public/images/ and reference them as '/images/filename.jpg'

export const projects = [
  {
    id: 1,
    name: "Contemporary Classic",
    location: "Seattle",
    caption: "View from Back Yard",
    description:
      "Extensive remodel & addition to existing 1920s home. New Media Room, Family Room and two bedrooms at Lower Level. New interior stair and exterior upgrades tie addition into existing home.",
    img: "/images/contemporary-classic.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Mercer Kitchen",
    location: "Mercer Island",
    caption: "Kitchen Remodel",
    description:
      "Reinvisioned kitchen creating an elegant and light-filled cooking and gathering space that effortlessly blends interior and exterior.",
    img: "/images/mercer-kitchen.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Mid-Century Addition",
    location: "Seattle",
    caption: "Full Remodel & Addition",
    description:
      "Full remodel and addition to an existing Mid-Century Modern home — new expansive kitchen, living, dining area and owner's suite.",
    img: "/images/midcentury-addition-seattle.jpg",
    featured: true,
  },
  {
    id: 4,
    name: "Craftsman Remodel",
    location: "Seattle",
    caption: "Kitchen View",
    description:
      "Thoughtful renovation of a classic Craftsman home, bringing natural light and modern function to beloved period details.",
    img: "/images/craftsman-remodel.jpg",
    featured: false,
  },
  {
    id: 5,
    name: "Mid-Century Addition",
    location: "Vashon",
    caption: "Exterior View",
    description:
      "Sympathetic addition that honors the original mid-century language while expanding living space toward the landscape.",
    img: "/images/midcentury-addition-vashon.jpg",
    featured: false,
  },
  {
    id: 6,
    name: "A Study in Black & White",
    location: "Pacific NW",
    caption: "View from Back Yard",
    description:
      "Bold, high-contrast exterior palette creates a striking dialogue between structure and the surrounding evergreen landscape.",
    img: "/images/black-and-white.jpg",
    featured: false,
  },
  {
    id: 7,
    name: "Minimalist A-Frame",
    location: "Pacific NW",
    caption: "Living Space",
    description:
      "Pared-back A-frame retreat that celebrates the geometry of the form and frames the forest through full-height glass.",
    img: "/images/a-frame.jpg",
    featured: false,
  },
  {
    id: 8,
    name: "Unbuilt Work / Art",
    location: "Conceptual",
    caption: "Boathouse on the Schuylkill",
    description:
      "Speculative design study exploring the intersection of architecture and painting — structure as drawing, drawing as structure.",
    img: "/images/unbuilt-work.jpg",
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
