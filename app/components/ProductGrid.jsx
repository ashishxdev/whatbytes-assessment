import ProductCard from "./ProductCard";
import FeaturedProductCard from "./FeaturedProductCard";
import { products } from "../data/products";

export default function ProductGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6 lg:[grid-auto-flow:dense]">
            {products.map((product) => (
                <div
                    key={product.id}
                    className={product.featured ? "sm:col-span-2 lg:col-span-2" : ""}
                >
                    {product.featured ? (
                        <FeaturedProductCard product={product} />
                    ) : (
                        <ProductCard product={product} />
                    )}
                </div>
            ))}
        </div>
    );
}