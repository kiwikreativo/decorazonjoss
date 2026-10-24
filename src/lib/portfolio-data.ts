import img8 from "../assets/8.webp"; import img9 from "../assets/9.webp"; import img10 from "../assets/10.webp"; import img11 from "../assets/11.webp"; import img12 from "../assets/12.webp"; import img13 from "../assets/13.webp"; import img14 from "../assets/14.webp"; import img15 from "../assets/15.webp"; import img16 from "../assets/16.webp"; import img17 from "../assets/17.webp"; import img50 from "../assets/50gold.webp"; import bakery from "../assets/bakery.webp"; import birthday1 from "../assets/Birthday1.webp"; import birthday89 from "../assets/birthday89.webp"; import liam from "../assets/Liam.webp"; import liamT from "../assets/LiamT.webp"; import liamAir from "../assets/LiamAir.webp"; import krissia from "../assets/Krissia.webp"; import genderReveal from "../assets/GenderReavel.webp";

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
    { id: "all", name: "Todas" },
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
        image: img8.src,
        alt: "Welcome baby orange, blue and white",
    },
    {
        id: "birthday-1",
        title: "50's Rojo, dorado y blanco",
        category: "birthday",
        image: img9.src,
        alt: "Blue and gold gender reveal party setup",
    },
    {
        id: "birthday-2",
        title: "1er año de Lucia!",
        category: "birthday",
        image: img10.src,
        alt: "First birthday of Lucia with bee theme decorations",
    },
    {
        id: "birthday-3",
        title: "Fiesta de 15 años",
        category: "birthday",
        image: img11.src,
        alt: "Purpled theme 15th birthday party",
    },
    {
        id: "christmas-1",
        title: "Decoración Navideña",
        category: "christmas",
        image: img12.src,
        alt: "Colorful Christmas party decorations",
    },
    // Cambiar esta imagen que es de 15 años
    {
        id: "wedding-1",
        title: "Matrimonio",
        category: "wedding",
        image: img13.src,
        alt: "Elegant wedding party setup",
    },
    {
        id: "birthday-4",
        title: "Cumpleaños Criaturas marinas",
        category: "birthday",
        image: img14.src,
        alt: "Birthday party with marine creatures theme",
    },
    {
        id: "birthday-5",
        title: "Cumpleaños de Emma",
        category: "birthday",
        image: img15.src,
        alt: "Minnie Mouse themed birthday party with pink, red and white decorations",
    },
    {
        id: "birthday-6",
        title: "Cumpleaños 30",
        category: "birthday",
        image: img16.src,
        alt: "Festive birthday party decoration with orange, rose, gold and white colors",
    },
    {
        id: "birthday-7",
        title: "Cumpleaños 77 de vaquero",
        category: "birthday",
        image: img17.src,
        alt: "Golden anniversary celebration",
    },
    {
        id: "birthday-8",
        title: "50 años dorados",
        category: "birthday",
        image: img50.src,
        alt: "Golden birthday party with 50th anniversary theme",
    },
    {
        id: "special-2",
        title: "Decoración de pastelería",
        category: "special",
        image: bakery.src,
        alt: "Bakery decoration",
    },
    {
        id: "birthday-9",
        title: "Cumpleaños Rustico",
        category: "birthday",
        image: birthday1.src,
        alt: "Black, gold and white rustic birthday party",
    },
    {
        id: "birthday-10",
        title: "Cumpleaños 89",
        category: "birthday",
        image: birthday89.src,
        alt: "89th birthday party with blue, purple, yellow and rose decorations",
    },
    {
        id: "baby-shower-3",
        title: "Mesas de bienvenida a Liam",
        category: "baby-shower",
        image: liam.src,
        alt: "Tables Liam's party",
    },
    {
        id: "baby-shower-1",
        title: "Bienvenido Liam",
        category: "baby-shower",
        image: liamT.src,
        alt: "Welcome Liam party",
    },
    {
        id: "baby-shower-2",
        title: "Avion de Liam",
        category: "baby-shower",
        image: liamAir.src,
        alt: "Airplane themed celebration",
    },
    {
        id: "special-4",
        title: "Inauguración de VetShop&Grooming",
        category: "special",
        image: krissia.src,
        alt: "Opening event decoration for VetShop&Grooming",
    },
    {
        id: "gender-reveal-4",
        title: "Es un niño o una niña?",
        category: "gender-reveal",
        image: genderReveal.src,
        alt: "Gender reveal party decoration",
    },

]
