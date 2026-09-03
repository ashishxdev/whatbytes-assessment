"use client";

import { Search, ShoppingCart, User } from "lucide-react";

export default function Header({ search, onSearch }) {
    return (
        <header className="w-full bg-blue-700 px-6 py-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
                <div className="shrink-0">
                    <span className="text-4xl font-bold text-white">Logo</span>
                </div>

                <div className="flex-1 max-w-xl">
                    <div className="flex items-center gap-2 rounded-md border border-blue-400 bg-blue-800 px-4 py-2">
                        <Search className="h-5 w-5 text-blue-200" />
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
                    <button className="relative flex items-center gap-2 rounded-md bg-blue-900 px-4 py-2 text-white hover:bg-blue-950 transition-colors">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="text-sm font-medium">Cart</span>
                        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                            0
                        </span>
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white hover:bg-blue-950 transition-colors">
                        <User className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </header>
    );
}