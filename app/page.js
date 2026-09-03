import React from 'react'
import Header from './components/Header'
import Sidebar from './components/SideBar'
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

export default function page() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-100">
        <Header />
        <div className="flex gap-6 p-6">
          <Sidebar />
          <main className="flex-1">
            <h1 className="text-4xl font-extrabold text-black mb-6">Product Listing</h1>
            <ProductGrid />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}