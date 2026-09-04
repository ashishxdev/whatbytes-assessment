"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Star, Minus, Plus, ArrowLeft } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { products } from "../../data/products";
import { useCartStore } from "@/app/store/cartStore";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [search, setSearch] = useState("");
  const addToCart = useCartStore((state) => state.addToCart);

  const product = products.find((p) => String(p.id) === params.id);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-100">
        <Header search={search} onSearch={setSearch} />
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6">
          <p className="text-xl font-semibold text-gray-700">Product not found.</p>
          <button
            onClick={() => router.push("/")}
            className="rounded-md bg-blue-800 px-4 py-2 text-white hover:bg-blue-900"
          >
            Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const { title, price, image, rating, description, category } = product;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header search={search} onSearch={setSearch} />

      <main className="mx-auto w-full max-w-6xl flex-1 p-4 sm:p-6">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="flex flex-col gap-8 rounded-xl bg-white p-4 sm:p-8 shadow-sm lg:flex-row">
          <div className="relative h-72 sm:h-96 w-full lg:w-1/2">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="flex w-full flex-col gap-3 lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h1>
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

            <p className="text-base text-gray-600">{description}</p>
            <p className="text-sm text-gray-500">
              Category <span className="font-medium text-gray-700">{category}</span>
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Quantity</span>
              <div className="flex items-center rounded-md border border-gray-300">
                <button
                  onClick={decrement}
                  className="flex h-9 w-9 items-center justify-center text-gray-600 hover:bg-gray-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex h-9 w-10 items-center justify-center text-sm font-medium text-gray-900">
                  {quantity}
                </span>
                <button
                  onClick={increment}
                  className="flex h-9 w-9 items-center justify-center text-gray-600 hover:bg-gray-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <button
              onClick={() => addToCart(product, quantity)}
              className="mt-4 w-full rounded-md bg-blue-800 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-blue-900 sm:w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}