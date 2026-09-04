import { Suspense } from "react";
import HomeContent from "./components/HomeComponent";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-100" />}>
      <HomeContent />
    </Suspense>
  );
}