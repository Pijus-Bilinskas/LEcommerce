import { ProductList } from "@/components/products-list";
import { stripe } from "@/lib/stripe";

export default async function ProductsPage () {

    const products = await stripe.products.list({
        expand: ["data.default_price"],
      });

    return (
        <div>
            <h1 className="font-bold text-7xl text-center">All products</h1>
            <ProductList products={products.data} />
        </div>
    )
}