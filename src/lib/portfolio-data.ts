export type PortfolioCategory = "gender-reveal" | "baby-shower" | "birthday" | "wedding" | "christmas" | "special"

export interface PortfolioItem {
    id: string
    title: string
    category: PortfolioCategory
    image: string
    alt: string
}

export interface Category {
    id: PortfolioCategory | "all"
    name: string
}

export const categories: Category[] = [
    { id: "all", name: "All Parties" },
    { id: "gender-reveal", name: "Gender Reveals" },
    { id: "baby-shower", name: "Baby Showers" },
    { id: "birthday", name: "Birthdays" },
    { id: "wedding", name: "Weddings" },
    { id: "christmas", name: "Christmas" },
    { id: "special", name: "Special Events" },
]

export const portfolioItems: PortfolioItem[] = [
    {
        id: "gender-reveal-1",
        title: "Surprise Gender Reveal",
        category: "gender-reveal",
        image: "/src/assets/pink-and-blue-gender-reveal-party-balloons.webp",
        alt: "Pink and blue gender reveal with balloon arch",
    },
    {
        id: "gender-reveal-2",
        title: "Blue & Gold Reveal",
        category: "gender-reveal",
        image: "/src/assets/blue-and-gold-gender-reveal-party.webp",
        alt: "Blue and gold gender reveal party setup",
    },
    {
        id: "baby-shower-1",
        title: "Sweet Baby Shower",
        category: "baby-shower",
        image: "/src/assets/pastel-baby-shower-decorations-with-teddy-bears.webp",
        alt: "Pastel baby shower with teddy bears",
    },
    {
        id: "baby-shower-2",
        title: "Pink Princess Shower",
        category: "baby-shower",
        image: "/src/assets/pink-princess-baby-shower-decorations.webp",
        alt: "Pink princess themed baby shower",
    },
    {
        id: "birthday-1",
        title: "Rainbow Birthday Bash",
        category: "birthday",
        image: "/src/assets/colorful-birthday-party-balloons-and-streamers.webp",
        alt: "Colorful birthday party decorations",
    },
    {
        id: "birthday-2",
        title: "Tropical Birthday",
        category: "birthday",
        image: "/src/assets/tropical-themed-birthday-party-with-palm-leaves.webp",
        alt: "Tropical themed birthday party",
    },
    {
        id: "wedding-1",
        title: "Romantic Wedding",
        category: "wedding",
        image: "/src/assets/elegant-white-wedding-ceremony-decorations.webp",
        alt: "Elegant white wedding setup",
    },
    {
        id: "wedding-2",
        title: "Beach Wedding",
        category: "wedding",
        image: "/src/assets/beach-themed-wedding-decorations.webp",
        alt: "Beach themed wedding decorations",
    },
    {
        id: "christmas-1",
        title: "Winter Wonderland",
        category: "christmas",
        image: "/src/assets/festive-christmas-party-decorations-with-lights.webp",
        alt: "Festive Christmas party with lights",
    },
    {
        id: "special-1",
        title: "Golden Anniversary",
        category: "special",
        image: "/golden-anniversary-party-decoration-setup.jpg",
        alt: "Golden anniversary celebration",
    },
    {
        id: "birthday-5",
        title: "Tropical Paradise Party",
        category: "birthday",
        image: "/tropical-themed-birthday-party-with-palm-leaves.jpg",
        alt: "Tropical birthday party",
    },
    {
        id: "baby-shower-4",
        title: "Princess Baby Shower",
        category: "baby-shower",
        image: "/pink-princess-baby-shower-decorations.jpg",
        alt: "Princess themed baby shower",
    },
    {
        id: "wedding-4",
        title: "Rustic Romance",
        category: "wedding",
        image: "/rustic-wedding-ceremony-with-flowers.jpg",
        alt: "Rustic wedding decorations",
    },
    {
        id: "gender-reveal-4",
        title: "It's a Boy Reveal",
        category: "gender-reveal",
        image: "/blue-and-gold-gender-reveal-party.jpg",
        alt: "Blue and gold gender reveal",
    },
    {
        id: "christmas-4",
        title: "Classic Christmas",
        category: "christmas",
        image: "/red-and-green-christmas-party-decorations.jpg",
        alt: "Traditional Christmas party",
    },
    {
        id: "birthday-3",
        title: "Superhero Adventure",
        category: "birthday",
        image: "/superhero-themed-birthday-party-for-kids.jpg",
        alt: "Superhero birthday party",
    },
    {
        id: "special-2",
        title: "Graduation Celebration",
        category: "special",
        image: "/elegant-graduation-party-decorations.jpg",
        alt: "Graduation celebration",
    },
    {
        id: "baby-shower-3",
        title: "Golden Baby Shower",
        category: "baby-shower",
        image: "/pink-and-gold-baby-shower-decorations.jpg",
        alt: "Pink and gold baby shower",
    },
    {
        id: "wedding-3",
        title: "Beach Wedding Bliss",
        category: "wedding",
        image: "/beach-themed-wedding-decorations.jpg",
        alt: "Beach wedding setup",
    },
    {
        id: "birthday-4",
        title: "Unicorn Dreams",
        category: "birthday",
        image: "/unicorn-rainbow-birthday-party-decorations.jpg",
        alt: "Unicorn birthday party",
    },
    {
        id: "christmas-3",
        title: "Silver Snowflake",
        category: "christmas",
        image: "/silver-and-white-christmas-party-modern.jpg",
        alt: "Modern Christmas party",
    },
    {
        id: "gender-reveal-3",
        title: "It's a Girl Reveal",
        category: "gender-reveal",
        image: "/pink-gender-reveal-party-with-confetti.jpg",
        alt: "Pink confetti gender reveal",
    },
]
