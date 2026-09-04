"use client";

import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "../store/cartStore";

export default function Header({ search, onSearch }) {
    const cart = useCartStore((state) => state.cart);
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <header className="w-full bg-blue-700 px-6 py-6">
            <div className="mx-auto flex flex-wrap max-w-7xl items-center justify-between gap-6">
                <div className="shrink-0">
                    <span className="text-2xl sm:text-4xl font-bold text-white">Logo</span>
                </div>

                <div className="order-3 w-full sm:order-none sm:flex-1 sm:max-w-xl">
                    <div className="flex items-center gap-2 rounded-md border border-blue-400 bg-blue-800 px-4 py-2">
                        <Search className="h-5 w-5 text-blue-200 shrink-0" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => onSearch(e.target.value)}
                            placeholder="Search for products..."
                            className="w-full bg-transparent text-sm text-white outline-none"
                        />
                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-4">
                    <Link href="/cart" className="relative flex items-center gap-2 rounded-md bg-blue-900 px-3 sm:px-4 py-2 text-white hover:bg-blue-950 transition-colors">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="hidden sm:inline text-sm font-medium">Cart</span>
                        {totalQuantity > 0 && (
                            <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white hover:bg-blue-950 transition-colors">
                        <User className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </header >
    );
}