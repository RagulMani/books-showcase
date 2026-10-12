export type BookCategory =
  | "Literary fiction"
  | "Essays"
  | "Poetry"
  | "Historical fiction"
  | "Short stories"
  | "Nature writing";

export type ReadingStatus = "want" | "reading" | "finished";

export type Book = {
  id: string;
  title: string;
  author: string;
  category: BookCategory;
  year: number;
  pages: number;
  featured: boolean;
  highlight: string;
  blurb: string;
  note: string;
  image: string;
  imageAlt: string;
};

export const readingStatuses: { id: ReadingStatus; label: string }[] = [
  { id: "want", label: "Want to read" },
  { id: "reading", label: "Currently reading" },
  { id: "finished", label: "Finished" },
];

export const categoryList: { name: BookCategory; slug: string; description: string }[] = [
  {
    name: "Literary fiction",
    slug: "literary-fiction",
    description: "Novels that stay with a place, a family, or a single turning season.",
  },
  {
    name: "Essays",
    slug: "essays",
    description: "Short nonfiction for readers who like a clear argument and a human voice.",
  },
  {
    name: "Poetry",
    slug: "poetry",
    description: "Collections meant to be read slowly, a few pages at a time.",
  },
  {
    name: "Historical fiction",
    slug: "historical-fiction",
    description: "Stories set in a past the writer has bothered to get right.",
  },
  {
    name: "Short stories",
    slug: "short-stories",
    description: "Nine or ten rooms, each with its own weather.",
  },
  {
    name: "Nature writing",
    slug: "nature-writing",
    description: "Walks, seasons, and the notes people make when they pay attention.",
  },
];

export const categories: Array<BookCategory | "All"> = [
  "All",
  ...categoryList.map((category) => category.name),
];

export const books: Book[] = [
  {
    id: "harbor-light",
    title: "The harbor light",
    author: "Mira Ellison",
    category: "Literary fiction",
    year: 2024,
    pages: 312,
    featured: true,
    highlight: "Staff pick",
    blurb:
      "A coastal town keeps a lighthouse log that doubles as a family history. Ellison writes weather, work, and inheritance with a steady hand.",
    note: "Start with the storm chapter if you only have an evening. The rest of the book explains why that night still organizes the town.",
    image: "/images/library/5239564.jpg",
    imageAlt: "Hardcover books stacked on a wooden table",
  },
  {
    id: "lantern-season",
    title: "Lantern season",
    author: "Jonah Adeyemi",
    category: "Essays",
    year: 2025,
    pages: 224,
    featured: true,
    highlight: "New release",
    blurb:
      "Twelve essays on night markets, borrowed libraries, and the rooms where people learn to stay. A clear, warm voice for readers who annotate margins.",
    note: "The essay on library cards is the one readers mark. It is also the shortest piece in the book.",
    image: "/images/library/13288524.jpg",
    imageAlt: "Open book with pages turning in warm light",
  },
  {
    id: "margin-of-quiet",
    title: "A margin of quiet",
    author: "Helen Cho",
    category: "Poetry",
    year: 2023,
    pages: 96,
    featured: false,
    highlight: "Staff pick",
    blurb:
      "Short poems set in kitchens, train platforms, and the last hour before a city wakes. Best read slowly, one page at a time.",
    note: "Most poems fit on a single page. The sequence about Sunday trains is the spine of the collection.",
    image: "/images/library/3784567.jpg",
    imageAlt: "Open book resting on white linen",
  },
  {
    id: "cartographers-daughter",
    title: "The cartographer's daughter",
    author: "Leila Nassif",
    category: "Historical fiction",
    year: 2022,
    pages: 408,
    featured: true,
    highlight: "Featured",
    blurb:
      "A mapmaker's apprentice redraws a port city after a flood and finds the streets her mother never named. Spacious, precise, and hard to put down.",
    note: "The maps at the front of each part are part of the story. The streets change between them.",
    image: "/images/library/8045884.jpg",
    imageAlt: "Colorful books arranged on library shelves",
  },
  {
    id: "red-thread",
    title: "Red thread, blue hour",
    author: "Tomas Keller",
    category: "Short stories",
    year: 2021,
    pages: 256,
    featured: false,
    highlight: "Reader favorite",
    blurb:
      "Nine stories about people who leave a city and the objects they cannot. Keller's sentences are spare, then suddenly generous.",
    note: "Read \"The coat check\" first. The later stories assume you remember what was left behind.",
    image: "/images/library/1383379.jpg",
    imageAlt: "Stacked vintage books with soft focus pages",
  },
  {
    id: "field-notes",
    title: "Field notes from winter",
    author: "Anika Berg",
    category: "Nature writing",
    year: 2024,
    pages: 188,
    featured: false,
    highlight: "Staff pick",
    blurb:
      "A season of walks along a frozen river, written as letters to a former teacher. Quiet science, careful observation, no spectacle.",
    note: "Berg names birds only when she is sure. The uncertainty is the point of the January letters.",
    image: "/images/library/2410050.jpg",
    imageAlt: "Close-up of printed pages in an open book",
  },
  {
    id: "borrowed-sunday",
    title: "A borrowed Sunday",
    author: "Mira Ellison",
    category: "Literary fiction",
    year: 2019,
    pages: 276,
    featured: false,
    highlight: "Earlier work",
    blurb:
      "Two sisters share a city apartment for one winter and discover which habits they can live with. Ellison's first novel, smaller and sharper than The harbor light.",
    note: "The kitchen scenes do the work the plot refuses to rush. Nothing is resolved at the table, and that is deliberate.",
    image: "/images/library/9572664.jpg",
    imageAlt: "Warm wooden bookshelves filled with books",
  },
  {
    id: "evening-index",
    title: "The evening index",
    author: "Jonah Adeyemi",
    category: "Essays",
    year: 2020,
    pages: 198,
    featured: false,
    highlight: "Backlist",
    blurb:
      "Essays on indexes, marginalia, and the private systems people build so they can find a sentence again.",
    note: "A good companion to Lantern season. This one is more about the tools of reading than the rooms around it.",
    image: "/images/library/936133.jpg",
    imageAlt: "A reader sitting with a book in a quiet park",
  },
  {
    id: "salt-grammar",
    title: "Salt grammar",
    author: "Helen Cho",
    category: "Poetry",
    year: 2018,
    pages: 84,
    featured: false,
    highlight: "Backlist",
    blurb:
      "Poems from a childhood on a fishing coast, written years later in a landlocked city. Precise about weather, loose about time.",
    note: "The middle section is a single long poem broken into tides. It rewards a second pass.",
    image: "/images/library/3784567.jpg",
    imageAlt: "Open book resting on white linen",
  },
  {
    id: "north-ferry",
    title: "North of the ferry",
    author: "Leila Nassif",
    category: "Historical fiction",
    year: 2017,
    pages: 352,
    featured: false,
    highlight: "Backlist",
    blurb:
      "A clerk on a river ferry keeps the passenger list through one occupation and learns which names are safe to write down.",
    note: "Shorter than The cartographer's daughter, and sterner. The ferry timetable is a plot device you can trust.",
    image: "/images/library/8045884.jpg",
    imageAlt: "Colorful books arranged on library shelves",
  },
  {
    id: "glass-orchards",
    title: "Glass orchards",
    author: "Tomas Keller",
    category: "Short stories",
    year: 2024,
    pages: 230,
    featured: true,
    highlight: "New release",
    blurb:
      "Stories set in greenhouses, hotel corridors, and one orchard that only fruits after dark. Keller's warmest book.",
    note: "The title story is last on purpose. The earlier pieces hand you the objects it needs.",
    image: "/images/library/5239564.jpg",
    imageAlt: "Hardcover books stacked on a wooden table",
  },
  {
    id: "low-water",
    title: "Low water",
    author: "Anika Berg",
    category: "Nature writing",
    year: 2021,
    pages: 210,
    featured: false,
    highlight: "Backlist",
    blurb:
      "A summer when the reservoir dropped and the town walked the new shore. Berg writes the exposed ground without turning it into a metaphor too early.",
    note: "Pair it with Field notes from winter if you want both ends of her year.",
    image: "/images/library/2410050.jpg",
    imageAlt: "Close-up of printed pages in an open book",
  },
];

export const shelfStats = [
  { value: String(books.length), label: "Titles in the catalog" },
  { value: String(categoryList.length), label: "Categories to browse" },
  { value: String(books.filter((book) => book.featured).length), label: "Featured titles" },
  { value: "3", label: "Reading statuses" },
];

export const notes = [
  {
    quote: "I came for one novel and left with a list. The shelf feels edited, not endless.",
    name: "Priya Shah",
    role: "Weekend reader",
  },
  {
    quote: "The notes under each title are short enough to trust. I knew which book to start.",
    name: "Owen Blake",
    role: "Book club host",
  },
  {
    quote: "Saving a title here is the closest thing I have to a bedside stack that stays put.",
    name: "Amelia Ortiz",
    role: "Teacher",
  },
];

export const questions = [
  {
    q: "Do I need an account to browse?",
    a: "No. The catalog, categories, and title pages are open. Sign in on this device when you want to save a title or set a reading status.",
  },
  {
    q: "Where is my shelf stored?",
    a: "Your name, email, saved titles, and reading status stay in this browser, tied to the account you create here.",
  },
  {
    q: "What do the reading statuses mean?",
    a: "Want to read, currently reading, and finished. You can change a title's status from its page or from My shelf.",
  },
  {
    q: "What happens if I forget my password?",
    a: "Use Forgot password. This preview does not send email. Any password of eight or more characters will sign you back in on this device.",
  },
  {
    q: "Can I remove a title later?",
    a: "Yes. Open My shelf and remove it, or clear it from the title page. The catalog itself stays available.",
  },
];

export function categoryBySlug(slug: string) {
  return categoryList.find((category) => category.slug === slug) ?? null;
}

export function getBook(id: string) {
  return books.find((book) => book.id === id) ?? null;
}

export function booksInCategory(name: BookCategory) {
  return books.filter((book) => book.category === name);
}

export function relatedBooks(book: Book, limit = 3) {
  return books.filter((item) => item.id !== book.id && item.category === book.category).slice(0, limit);
}

export type CatalogSort = "newest" | "title" | "author";

export function searchBooks(options: {
  query?: string;
  category?: BookCategory | "All";
  sort?: CatalogSort;
}) {
  const query = (options.query ?? "").trim().toLowerCase();
  const category = options.category ?? "All";
  const sort = options.sort ?? "newest";
  const matched = books.filter((book) => {
    const inCategory = category === "All" || book.category === category;
    if (!inCategory) return false;
    if (!query) return true;
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.blurb.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query)
    );
  });
  return matched.sort((a, b) => {
    if (sort === "title") return a.title.localeCompare(b.title);
    if (sort === "author") return a.author.localeCompare(b.author) || b.year - a.year;
    return b.year - a.year || a.title.localeCompare(b.title);
  });
}

export function statusLabel(status: ReadingStatus) {
  return readingStatuses.find((item) => item.id === status)?.label ?? status;
}
