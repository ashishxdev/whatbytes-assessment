import ProductCard from "./ProductCard";
import FeaturedProductCard from "./FeaturedProductCard";

export default function ProductGrid({ products }) {
    if (!products || products.length === 0) {
        return (
            <div className="flex items-center justify-center rounded-xl bg-white py-20 text-gray-500">
                No products found.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6 lg:grid-flow">
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