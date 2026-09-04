export default function WhiteFilterCard({ category, onCategoryChange, price, onPriceChange }) {
    const categories = ["All", "Electronics", "Clothing", "Fashion"];

    return (
        <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-gray-900">Cacyroy</h2>

            <div className="flex flex-col gap-3">
                {categories.map((cat) => (
                    <label
                        key={cat}
                        className="flex items-center gap-3 cursor-pointer text-gray-700"
                    >
                        <input
                            type="radio"
                            name="cacyroy"
                            value={cat}
                            checked={category === cat}
                            onChange={() => onCategoryChange(cat)}
                            className="h-4 w-4 accent-blue-800 cursor-pointer"
                        />
                        <span className="text-sm">{cat}</span>
                    </label>
                ))}
            </div>

            <div className="mt-6">
                <h3 className="mb-2 text-sm font-semibold text-gray-900">Price</h3>
                <input
                    type="text"
                    value={price}
                    onChange={(e) => onPriceChange(e.target.value)}
                    placeholder="5000"
                    className="w-full rounded-md border px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-500"
                />
            </div>
        </div>
    );
}