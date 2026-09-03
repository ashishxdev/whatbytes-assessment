import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

export default function Sidebar() {
    return (
        <aside className="w-full max-w-xs rounded-lg bg-blue-800 p-6">
            <h2 className="mb-6 text-xl font-bold text-white">Filters</h2>
            <div className="flex flex-col gap-8">
                <CategoryFilter />
                <PriceFilter />
            </div>
        </aside>
    );
}