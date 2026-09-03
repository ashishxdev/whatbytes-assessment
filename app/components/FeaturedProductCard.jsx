import Image from "next/image";
import { Star } from "lucide-react";

export default function FeaturedProductCard({ product }) {
    if (!product) return null;
    const { title, price, image, rating, description, category } = product;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md sm:flex-row">
            <div className="relative h-128 w-full sm:h-128 sm:w-1/2">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                    loading="eager"
                />
            </div>
            <div className="flex w-full flex-col gap-2 p-6 sm:w-3/5">
                <h3 className="text-4xl font-bold text-gray-900">{title}</h3>
                <p className="text-2xl font-bold text-gray-900">${price}</p>
                <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => {
                        const isFull = i < fullStars;
                        const isHalf = i === fullStars && hasHalfStar;
                        return (
                            <span key={i} className="relative inline-block h-5 w-5">
                                <Star className="absolute inset-0 h-5 w-5" stroke="#d1d5db" fill="none" />
                                {(isFull || isHalf) && (
                                    <span
                                        className="absolute inset-0 overflow-hidden"
                                        style={{ width: isHalf ? "50%" : "100%" }}
                                    >
                                        <Star className="h-5 w-5" stroke="#facc15" fill="#facc15" />
                                    </span>
                                )}
                            </span>
                        );
                    })}
                </div>
                <p className="text-xl text-gray-600">{description}</p>
                <p className="text-xl text-black font-medium mt-2">
                    Category
                </p>
                <span className="text-xl font-medium text-black">{category}</span>
                <button className="mt-4 w-full rounded-md bg-blue-800 px-4 py-3 text-3xl font-medium text-white transition-colors hover:bg-blue-900 sm:w-auto">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}