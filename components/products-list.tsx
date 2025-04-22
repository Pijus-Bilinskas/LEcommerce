"use client"

import Stripe from "stripe"
import { ProductCard } from "./product-card";
import { useState } from "react";

interface Props {
    products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    
    const filteredProducts = products.filter((product) => {
        const term = searchTerm.toLowerCase()
        const nameMatch = product.name.toLowerCase().includes(term)
        const descriptionMatch = product.description ? product.description.toLowerCase().includes(term)
        : false;

        return nameMatch || descriptionMatch;
    })


return(
    <div className="max-w-[85%] mx-auto space-y-4">
        <div className="flex justify-center">
            <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            placeholder="Search products..."
            className="text-black border-2 rounded-lg py-1 px-2 mt-4 text-2xl focus:outline-none"
            />
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, key) => {
                return(
                 <li key={key}>
                    <ProductCard product={product} />
                 </li>   
                )
            })}
        </ul>
    </div>
)
}