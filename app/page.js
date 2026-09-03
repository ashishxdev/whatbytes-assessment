import React from 'react'
import Header from './components/Header'
import Sidebar from './components/SideBar'
import ProductGrid from './components/ProductGrid';

export default function page() {
  return (
    <>
      <Header />
      <div className="flex gap-6 p-6">
        <Sidebar />
        <main className="flex-1">
          <ProductGrid />
        </main>
      </div>
    </>
  )
}