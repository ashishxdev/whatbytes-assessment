export default function CategoryFilter({ category, onCategoryChange }) {
    const categories = ["All", "Electronics", "Clothing", "Fashion"];

    return (
        <div>
            <h3 className="mb-3 text-lg font-semibold text-white">Category</h3>
            <div className="flex flex-col gap-3">
                {categories.map((cat) => (
                    <label
                        key={cat}
                        className="flex items-center gap-3 cursor-pointer text-white"
                    >
                        <input
                            type="radio"
                            name="category"
                            value={cat}
                            checked={category === cat}
                            onChange={() => onCategoryChange(cat)}
                            className="h-4 w-4 accent-white cursor-pointer"
                        />
                        <span className="text-sm">{cat}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}