import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import WhiteFilterCard from "./WhiteFilterCard";

export default function Sidebar() {
    return (
        <aside className="flex w-full lg:max-w-xs flex-col gap-6">
            <div className="rounded-lg bg-blue-800 p-6">
                <h2 className="mb-6 text-xl font-bold text-white">Filters</h2>
                <div className="flex flex-col gap-8">
                    <CategoryFilter />
                    <PriceFilter />
                </div>
            </div>
            <WhiteFilterCard />
        </aside>
    );
}