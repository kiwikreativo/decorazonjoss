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
    { id: "gender-reveal", name: "Revelacion de Sexo" },
    { id: "baby-shower", name: "Baby Showers" },
    { id: "birthday", name: "Cumpleaños" },
    { id: "wedding", name: "Bodas" },
    { id: "christmas", name: "Navidad" },
    { id: "special", name: "Eventos Especiales" },
]

export const portfolioItems: PortfolioItem[] = [
    {
        id: "baby-shower-4",
        title: "Bienvenido bebe",
        category: "baby-shower",
        image: "/src/assets/8.webp",
        alt: "Welcome baby orange, blue and white",
    },
    {
        id: "birthday-1",
        title: "50's Rojo, dorado y blanco",
        category: "birthday",
        image: "/src/assets/9.webp",
        alt: "Blue and gold gender reveal party setup",
    },
    {
        id: "birthday-2",
        title: "1er año de Lucia!",
        category: "birthday",
        image: "/src/assets/10.webp",
        alt: "First birthday of Lucia with bee theme decorations",
    },
    {
        id: "birthday-3",
        title: "Fiesta de 15 años",
        category: "birthday",
        image: "/src/assets/11.webp",
        alt: "Purpled theme 15th birthday party",
    },
    {
        id: "christmas-1",
        title: "Decoración Navideña",
        category: "christmas",
        image: "/src/assets/12.webp",
        alt: "Colorful Christmas party decorations",
    },
    {
        id: "wedding-1",
        title: "Matrimonio",
        category: "wedding",
        image: "/src/assets/13.webp",
        alt: "Elegant wedding party setup",
    },
    {
        id: "birthday-4",
        title: "Cumpleaños Criaturas marinas",
        category: "birthday",
        image: "/src/assets/14.webp",
        alt: "Birthday party with marine creatures theme",
    },
    {
        id: "birthday-5",
        title: "Cumpleaños de Emma",
        category: "birthday",
        image: "/src/assets/15.webp",
        alt: "Minnie Mouse themed birthday party with pink, red and white decorations",
    },
    {
        id: "birthday-6",
        title: "Cumpleaños 30",
        category: "birthday",
        image: "/src/assets/16.webp",
        alt: "Festive birthday party decoration with orange, rose, gold and white colors",
    },
    {
        id: "birthday-7",
        title: "Cumpleaños 77 de vaquero",
        category: "birthday",
        image: "/src/assets/17.webp",
        alt: "Golden anniversary celebration",
    },
    {
        id: "birthday-8",
        title: "50 años dorados",
        category: "birthday",
        image: "/src/assets/50gold.webp",
        alt: "Golden birthday party with 50th anniversary theme",
    },
    {
        id: "special-2",
        title: "Decoración de pastelería",
        category: "special",
        image: "/src/assets/bakery.webp",
        alt: "Bakery decoration",
    },
    {
        id: "birthday-9",
        title: "Cumpleaños Rustico",
        category: "birthday",
        image: "/src/assets/Birthday1.webp",
        alt: "Black, gold and white rustic birthday party",
    },
    {
        id: "birthday-10",
        title: "Cumpleaños 89",
        category: "birthday",
        image: "/src/assets/birthday89.webp",
        alt: "89th birthday party with blue, purple, yellow and rose decorations",
    },
    {
        id: "baby-shower-3",
        title: "Mesas de bienvenida a Liam",
        category: "baby-shower",
        image: "/src/assets/Liam.webp",
        alt: "Tables Liam's party",
    },
    {
        id: "baby-shower-1",
        title: "Bienvenido Liam",
        category: "baby-shower",
        image: "/src/assets/LiamT.webp",
        alt: "Welcome Liam party",
    },
    {
        id: "baby-shower-2",
        title: "Avion de Liam",
        category: "baby-shower",
        image: "/src/assets/LiamAir.webp",
        alt: "Airplane themed celebration",
    },
    {
        id: "special-4",
        title: "Inauguración de VetShop&Grooming",
        category: "special",
        image: "/src/assets/Krissia.webp",
        alt: "Opening event decoration for VetShop&Grooming",
    },
    {
        id: "gender-reveal-4",
        title: "Es un niño o una niña?",
        category: "gender-reveal",
        image: "/src/assets/GenderReavel.webp",
        alt: "Gender reveal party decoration",
    },

]
