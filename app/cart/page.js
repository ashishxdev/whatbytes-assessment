"use client"

import { useState } from "react"
import { useCartStore } from "../store/cartStore";
import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";

export default function CartPage() {
  const [search, setSearch] = useState("");
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  )
  const total = subtotal;

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-100">
        <Header search={search} onSearch={setSearch} />
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6">
          <p className="text-xl font-semibold text-gray-700">
            Your cart is empty.
          </p>
          <Link
            href="/"
            className="rounded-md bg-blue-800 px-5 py-2.5 text-white hover:bg-blue-900"
          >
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    )
  }
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header search={search} onSearch={setSearch} />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 p-4 sm:p-6 lg:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm sm:flex-row sm:items-center"
            >
              <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col gap-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-base font-bold text-gray-900">
                  ${item.price}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <div className="flex items-center rounded-md border border-gray-300">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="flex h-9 w-9 items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="flex h-9 w-10 items-center justify-center text-sm font-medium text-gray-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="flex h-9 w-9 items-center justify-center text-gray-600 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-800"
                >
                  <X className="h-4 w-4" />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full rounded-xl bg-white p-6 shadow-sm lg:w-80">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Order Summary
          </h2>

          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="my-4 border-t border-gray-200" />

          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="mt-6 w-full rounded-md bg-blue-800 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-blue-900">
            Checkout
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}