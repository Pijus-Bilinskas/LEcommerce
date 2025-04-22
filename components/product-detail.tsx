"use client"

import Image from "next/image";
import Stripe from "stripe"
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";

interface Props {
    product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
    const { items, addItem, removeItem } = useCartStore();
    const price = product.default_price as Stripe.Price;
    const cartItem = items.find((item) => item.id === product.id)
    const quantity = cartItem ? cartItem.quantity : 0;

    const onAddItem = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: price.unit_amount as number,
            imageUrl: product.images ? product.images[0] : null,
            quantity: 1
        })
    }

    return (
        <div className="container flex flex-col mx-auto items-center md:flex-row px-4 py-8 gap-8">
            {product.images && product.images[0] && (
                            <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden">
                                <Image 
                                alt={product.name}
                                src={product.images[0]}
                                layout="fill"
                                objectFit="cover"
                                className="transition-opacity duration-300 hover:opacity-90"
                                />
                            </div>
                        )}

                        <div className="md:w-1/2">
                            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                            {product.description && <p className="my-2 text-gray-600 font-semibold">{product.description}</p>}

                            {price && price.unit_amount && <p className="text-lg font-semibold text-gray-800">${(price.unit_amount / 100).toFixed(2)}</p>}

                            <div className="space-x-3 flex items-center">
                                <Button variant={"outline"} onClick={() => removeItem(product.id)}>-</Button>
                                <span className="font-bold">{quantity}</span>
                                <Button onClick={onAddItem}>+</Button>
                            </div>
                        </div>
        </div>
    )
}