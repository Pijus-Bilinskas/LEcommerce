"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store"
import { checkoutAction } from "./checkout-action";

export default function CheckoutPage () {
    const { items, addItem, removeItem } = useCartStore();
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if(total === 0 || items.length === 0){
        return (<div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
            </div>)
    }


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl mb-6 text-center font-bold">Checkout</h1>
            <Card className="max-w-md mx-auto mb-8">
                <CardHeader className="font-bold text-2xl">Order Summary</CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {items.map((item, key) => (
                            <li className="flex flex-col gap-2 border-b pb-2" key={key}>
                                <div className="flex justify-between">
                                    <span className="font-medium">{item.name}</span>
                                    <span className="font-semibold">{((item.price * item.quantity) / 100).toFixed(2)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                <Button size="sm" variant={"outline"} onClick={() => removeItem(item.id)}>-</Button>
                                <span className="font-semibold text-lg">{item.quantity}</span>
                                <Button size="sm" variant={"outline"} onClick={() => addItem({...item, quantity: 1})}>+</Button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="border-t mt-4 font-semibold">
                        Total: ${(total / 100).toFixed(2)}
                    </div>
                </CardContent>
            </Card>
            <form action={checkoutAction} className="max-w-md mx-auto">
                <input type="hidden" name="items" value={JSON.stringify(items)} />
                <Button className="w-full" type="submit" variant={"default"}>Proceed to Payment</Button>
            </form>
        </div>
    )
}