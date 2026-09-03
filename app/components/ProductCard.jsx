import Image from "next/image";
import { Star } from "lucide-react";

export default function ProductCard({ product, priority = false }) {
    if (!product) return null;
    const { title, price, image, rating } = product;

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="relative h-40 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                    priority={priority}
                />
            </div>
            <div className="flex flex-col gap-1.5 px-4 pb-4">
                <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                <p className="text-lg font-bold text-gray-900">${price}</p>
                <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => {
                        const isFull = i < fullStars;
                        const isHalf = i === fullStars && hasHalfStar;

                        return (
                            <span key={i} className="relative inline-block h-4 w-4">
                                <Star className="absolute inset-0 h-4 w-4" stroke="#d1d5db" fill="none" />
                                {(isFull || isHalf) && (
                                    <span
                                        className="absolute inset-0 overflow-hidden"
                                        style={{ width: isHalf ? "50%" : "100%" }}
                                    >
                                        <Star className="h-4 w-4" stroke="#facc15" fill="#facc15" />
                                    </span>
                                )}
                            </span>
                        );
                    })}
                </div>
                <button className="mt-2 rounded-md bg-blue-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-900">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}