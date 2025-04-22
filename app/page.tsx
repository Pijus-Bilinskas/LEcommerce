import { Carousel } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div className="bg-softgray space-y-10 py-10">
      <section className="rounded max-w-[80%] mx-auto bg-white shadow-md py-6">
        <div className="grid mx-auto items-center justify-items-center px-8 grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="max-w-md space-y-4">
            <h2 className="font-bold text-3xl">Welcome to My Ecommerce</h2>
            <p className="text-verydarkblue">Discover the latest products at the best prices.</p>
              <Button className="inline-flex items-center justify-center py-3 px-6 rounded-full">
                <Link className="inline-flex items-center justify-center py-3 px-6 rounded-full" href="/products">View all products</Link>
              </Button>
          </div>
          <Image
          src={products.data[0].images[0]}
          alt="product image"
          width={450}
          height={450}
          objectFit="rounded"
          />
        </div>
      </section>
      <section className="bg-softgray max-w-[80%] mx-auto">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
