import Link from "next/link";
import Stripe from "stripe"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
    product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {

    const price = product.default_price as Stripe.Price


return(
    <Link href={`/products/${product.id}`}>
    <Card className="hover:shadow-2xl flex flex-col py-0 gap-0 h-full border-gray-300">
            {product.images && product.images[0] && (
                <div className="relative h-80 w-full">
                    <Image 
                    alt={product.name}
                    src={product.images[0]}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-500 ease-in-out rounded-t-lg"
                    />
                </div>
            )}
        <CardHeader className="p-4">
            <CardTitle className="font-bold text-xl">
            {product.name}
            </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col justify-between p-4">
            {product.description && (
                <p className="mb-2 text-sm text-gray-600">{product.description}</p>
            )}
            {price && price.unit_amount && <p className="text-lg font-semibold text-gray-800">${(price.unit_amount / 100).toFixed(2)}</p>}
            <Button className="mt-3 bg-black text-white">View Details</Button>
            </CardContent>

    </Card>
    </Link>
)
}