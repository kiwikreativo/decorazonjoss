import ariadna from "../assets/portfolio/babyshowerariadna.webp";
import emmasofi from "../assets/portfolio/bdayemmasofi.webp";
import img8 from "../assets/portfolio/8.webp";
import img9 from "../assets/portfolio/9.webp";
import img10 from "../assets/portfolio/10.webp";
import img11 from "../assets/portfolio/11.webp";
import img12 from "../assets/portfolio/12.webp";
import img13 from "../assets/portfolio/13.webp";
import img14 from "../assets/portfolio/14.webp";
import img15 from "../assets/portfolio/15.webp";
import img16 from "../assets/portfolio/16.webp";
import img17 from "../assets/portfolio/17.webp";
import img50 from "../assets/portfolio/50gold.webp";
import bakery from "../assets/portfolio/bakery.webp";
import birthday1 from "../assets/portfolio/Birthday1.webp";
import birthday89 from "../assets/portfolio/birthday89.webp";
import liam from "../assets/portfolio/Liam.webp";
import liamT from "../assets/portfolio/LiamT.webp";
import liamAir from "../assets/portfolio/LiamAir.webp";
import krissia from "../assets/portfolio/Krissia.webp";
import genderReveal from "../assets/portfolio/GenderReavel.webp";

export type PortfolioCategory =
    | "gender-reveal"
    | "baby-shower"
    | "birthday"
    | "christmas"
    | "special";

export interface PortfolioItem {
    id: string;
    title: string;
    category: PortfolioCategory;
    image: string;
    width: number;
    height: number;
    alt: string;
    description: string;
}

export interface Category {
    id: PortfolioCategory | "all";
    name: string;
}

export const categories: Category[] = [
    { id: "all", name: "Todas" },
    { id: "gender-reveal", name: "Revelaciones de género" },
    { id: "baby-shower", name: "Baby showers" },
    { id: "birthday", name: "Cumpleaños" },
    { id: "christmas", name: "Navidad" },
    { id: "special", name: "Eventos especiales" },
];

const imageDetails = (image: ImageMetadata) => ({
    image: image.src,
    width: image.width,
    height: image.height,
});

export const portfolioItems: PortfolioItem[] = [
    { id: "baby-shower-4", title: "Bienvenida de bebé en naranja y azul", category: "baby-shower", ...imageDetails(img8), alt: "Decoración de bienvenida para bebé en tonos naranja, azul y blanco", description: "Una composición alegre y colorida para celebrar la llegada de un nuevo integrante de la familia." },
    { id: "baby-shower-5", title: "Baby shower de Ariadna", category: "baby-shower", ...imageDetails(ariadna), alt: "Decoración de baby shower en rosa y dorado con temática de conejita", description: "Una celebración delicada en tonos rosa y dorado, preparada con detalles tiernos para recibir a Ariadna." },
    { id: "birthday-1", title: "50 años en rojo, dorado y blanco", category: "birthday", ...imageDetails(img9), alt: "Decoración de cumpleaños de 50 años en rojo, dorado y blanco", description: "Una ambientación elegante y festiva para celebrar cinco décadas rodeado de familia y amistades." },
    { id: "birthday-2", title: "Primer cumpleaños de Lucía", category: "birthday", ...imageDetails(img10), alt: "Decoración del primer cumpleaños de Lucía con temática de abejitas", description: "Un primer cumpleaños lleno de color, flores y pequeños detalles inspirados en abejitas." },
    { id: "birthday-3", title: "Celebración de quince años", category: "birthday", ...imageDetails(img11), alt: "Decoración en tonos morados para una celebración de quince años", description: "Una propuesta en tonos morados para acompañar un momento único y lleno de ilusión." },
    { id: "birthday-4", title: "Cumpleaños de Emma y Sofi", category: "birthday", ...imageDetails(emmasofi), alt: "Decoración de cumpleaños de Emma y Sofi con temática de Lilo y Stitch", description: "Una fiesta compartida con una temática divertida, tropical y llena de color." },
    { id: "christmas-1", title: "Celebración navideña", category: "christmas", ...imageDetails(img12), alt: "Decoración navideña colorida con globos y elementos festivos", description: "Una ambientación cálida para compartir la alegría y la magia de la temporada navideña." },
    { id: "birthday-12", title: "Rincón elegante para fotografías", category: "birthday", ...imageDetails(img13), alt: "Rincón elegante para fotografías en una celebración de cumpleaños", description: "Un espacio preparado para recibir a los invitados y guardar recuerdos especiales de la celebración." },
    { id: "birthday-11", title: "Cumpleaños de criaturas marinas", category: "birthday", ...imageDetails(img14), alt: "Decoración de cumpleaños con temática de criaturas marinas", description: "Una celebración inspirada en el océano, con colores y personajes para despertar la imaginación." },
    { id: "birthday-5", title: "Cumpleaños de Emma", category: "birthday", ...imageDetails(img15), alt: "Decoración de cumpleaños de Minnie Mouse en rosa, rojo y blanco", description: "Una fiesta infantil inspirada en Minnie Mouse con una combinación alegre de rosa, rojo y blanco." },
    { id: "birthday-6", title: "Celebración de 30 años", category: "birthday", ...imageDetails(img16), alt: "Decoración de cumpleaños de 30 años en naranja, rosa, dorado y blanco", description: "Una propuesta moderna y cálida para celebrar una nueva década con personalidad." },
    { id: "birthday-7", title: "Cumpleaños vaquero de 77 años", category: "birthday", ...imageDetails(img17), alt: "Decoración de cumpleaños de 77 años con temática vaquera y estilo rústico", description: "Una ambientación vaquera, cercana y familiar para celebrar 77 años de historias compartidas." },
    { id: "birthday-8", title: "50 años dorados", category: "birthday", ...imageDetails(img50), alt: "Decoración dorada para una celebración de 50 años", description: "Una decoración luminosa y elegante para conmemorar cincuenta años de vida." },
    { id: "special-2", title: "Decoración de pastelería", category: "special", ...imageDetails(bakery), alt: "Decoración especial para un espacio de pastelería", description: "Un montaje pensado para dar identidad, color y calidez a un espacio dedicado a los sabores dulces." },
    { id: "birthday-9", title: "Cumpleaños de estilo rústico", category: "birthday", ...imageDetails(birthday1), alt: "Decoración rústica de cumpleaños en negro, dorado y blanco", description: "Una combinación sobria de negro, dorado y blanco con detalles de inspiración rústica." },
    { id: "birthday-10", title: "Celebración de 89 años", category: "birthday", ...imageDetails(birthday89), alt: "Decoración de cumpleaños de 89 años en azul, morado, amarillo y rosa", description: "Una celebración llena de colores alegres para honrar 89 años de recuerdos y cariño familiar." },
    { id: "baby-shower-3", title: "Mesas de bienvenida para Liam", category: "baby-shower", ...imageDetails(liam), alt: "Mesas decoradas para la celebración de bienvenida de Liam", description: "Mesas preparadas con detalles personalizados para recibir a Liam con mucho cariño." },
    { id: "baby-shower-1", title: "Bienvenido, Liam", category: "baby-shower", ...imageDetails(liamT), alt: "Decoración de bienvenida para Liam con elementos personalizados", description: "Una ambientación diseñada especialmente para celebrar la esperada llegada de Liam." },
    { id: "baby-shower-2", title: "El avión de Liam", category: "baby-shower", ...imageDetails(liamAir), alt: "Decoración de bienvenida para Liam con temática de avión", description: "Una celebración de altos vuelos con una temática de avión creada para Liam." },
    { id: "special-4", title: "Inauguración de VetShop & Grooming", category: "special", ...imageDetails(krissia), alt: "Decoración para la inauguración de VetShop y Grooming", description: "Un montaje de inauguración pensado para recibir a clientes y celebrar el inicio de una nueva etapa." },
    { id: "gender-reveal-4", title: "¿Niño o niña?", category: "gender-reveal", ...imageDetails(genderReveal), alt: "Decoración en rosa y azul para una revelación de género", description: "Una ambientación llena de emoción para compartir en familia la esperada revelación." },
];