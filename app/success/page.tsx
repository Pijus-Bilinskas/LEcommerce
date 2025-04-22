"use client"

import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import { useEffect } from "react";


export default function SuccessPage() {
    const { clearCart } = useCartStore();

    useEffect(() => {
        clearCart();
    }, [clearCart]);
    return <div className="container mx-auto py-8 space-y-3 text-center">
        <h1 className="text-4xl font-bold">Payment Successfull!</h1>
        <p className="text-lg">Thank you for shopping with us. Your order is being processed.</p>

        <Link href={"/products"} className="text-base text-white bg-blue-700 px-2 py-2 rounded-2xl hover:bg-blue-500">
        Continue Shopping
        </Link>
    </div>
}