import { categories, portfolioItems, type PortfolioCategory } from "../lib/portfolio-data";
import React, { useState } from "react";
import "./../styles/portfolio.css"

export default function PortfolioGrid() {
    const [filter, setFilter] = useState<PortfolioCategory | "all">("all");

    const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === filter)

    return (
        <>
            <section className="py-12 bg-background sticky top-16 z-10 border-b border-border/40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`btn-filter ${filter === cat.id ? 'active' : ''}`}
                            >{cat.name}</button>
                        ))}
                    </div>
                </div>

            </section>
            <div className="cards">
                {filteredItems.map((item) => (
                    <div className="gallery" key={item.id}>
                        <div className="gallery-item">
                            <img src={item.image} alt={item.alt} className="gallery-image" />
                            <div className="gallery-overlay">
                                <h3 className="gallery-title">{item.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {filteredItems.length === 0 && (
                <div className="text-center">
                    <p className="text-xl">No se encontraron decoraciones en esta categoria</p>
                </div>
            )}
        </>
    );
}


