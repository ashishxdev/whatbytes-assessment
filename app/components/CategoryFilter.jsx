export default function CategoryFilter() {
    const categories = ["All", "Electronics", "Clothing", "Home"];

    return (
        <div>
            <h3 className="mb-3 text-lg font-semibold text-white">Category</h3>
            <div className="flex flex-col gap-3">
                {categories.map((category) => (
                    <label
                        key={category}
                        className="flex items-center gap-3 cursor-pointer text-white"
                    >
                        <input
                            type="radio"
                            name="category"
                            value={category}
                            defaultChecked={category === "All"}
                            className="h-4 w-4 accent-white cursor-pointer"
                        />
                        <span className="text-sm">{category}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}