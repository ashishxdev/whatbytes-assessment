"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Header from "./Header";
import Sidebar from "./SideBar";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";
import { products } from "../data/products";

export default function HomeContent() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "All";
    const priceParam = searchParams.get("price") || "0-1000";
    const [minPrice, maxPrice] = priceParam.split("-").map(Number);

    const updateParams = (updates) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(updates).forEach(([key, value]) => {
            if (!value || value === "All" || value === "") {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const handleSearch = (value) => updateParams({ search: value });
    const handleCategory = (value) => updateParams({ category: value });
    const handlePrice = (value) => {
        const newPrice = Number(value) >= 1000 ? "" : `0-${value}`;
        updateParams({ price: newPrice });
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchesCategory = category === "All" || product.category === category;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    return (
        <div className="flex min-h-screen flex-col bg-gray-100">
            <Header search={search} onSearch={handleSearch} />

            <div className="flex flex-col lg:flex-row flex-1 items-start gap-6 p-4 sm:p-6">
                <Sidebar
                    category={category}
                    onCategoryChange={handleCategory}
                    price={maxPrice}
                    onPriceChange={handlePrice}
                />
                <main className="flex-1 w-full">
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-black mb-4 sm:mb-6">
                        Product Listing
                    </h1>
                    <ProductGrid products={filteredProducts} />
                </main>
            </div>

            <Footer />
        </div>
    );
}