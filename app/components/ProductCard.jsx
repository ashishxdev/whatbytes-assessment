import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../store/cartStore";

export default function ProductCard({ product, priority = false }) {
    const addToCart = useCartStore((state) => state.addToCart)
    if (!product) return null;
    const { id, title, price, image, rating } = product;

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md">
            <Link href={`/product/${id}`}>
                <div className="relative h-[380px] w-full">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        priority={priority}
                        loading="eager"
                    />
                </div>
            </Link>
            <div className="flex flex-col gap-1.5 px-4 pb-4 pt-3">
                <Link href={`/product/${id}`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h3>
                </Link>
                <p className="text-xl font-bold text-gray-900">${price}</p>
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
                <button 
                onClick={() => addToCart(product)}
                className="mt-1 rounded-md bg-blue-800 px-4 py-1.5 text-base sm:text-2xl font-medium text-white transition-colors hover:bg-blue-900">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}