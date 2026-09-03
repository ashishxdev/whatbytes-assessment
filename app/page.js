"use client"
import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/SideBar'
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { products } from './data/products';

export default function page() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-100">
        <Header search={search} onSearch={setSearch} />
        <div className="flex flex-1 items-start gap-6 p-6">
          <Sidebar />
          <main className="flex-1">
            <h1 className="text-4xl font-extrabold text-black mb-6">Product Listing</h1>
            <ProductGrid products={filteredProducts} />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}