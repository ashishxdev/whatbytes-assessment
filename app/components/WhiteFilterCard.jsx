export default function WhiteFilterCard() {
    return (
        <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-gray-900">Cacyroy</h2>

            <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer text-gray-700">
                    <input
                        type="radio"
                        name="cacyroy"
                        value="All"
                        defaultChecked
                        className="h-4 w-4 accent-blue-800 cursor-pointer"
                    />
                    <span className="text-sm">All</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-gray-700">
                    <input
                        type="radio"
                        name="cacyroy"
                        value="Electronics"
                        className="h-4 w-4 accent-blue-800 cursor-pointer"
                    />
                    <span className="text-sm">Electronics</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-gray-700">
                    <input
                        type="radio"
                        name="cacyroy"
                        value="Clothing"
                        className="h-4 w-4 accent-blue-800 cursor-pointer"
                    />
                    <span className="text-sm">Clothing</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-gray-700">
                    <input
                        type="radio"
                        name="cacyroy"
                        value="Home"
                        className="h-4 w-4 accent-blue-800 cursor-pointer"
                    />
                    <span className="text-sm">Home</span>
                </label>
            </div>

            <div className="mt-6">
                <h3 className="mb-2 text-sm font-semibold text-gray-900">Price</h3>
                <input
                    type="text"
                    defaultValue="5000"
                    className="w-full rounded-md border px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-500"
                />
            </div>
        </div>
    )
}