export default function PriceFilter() {
    return (
        <div>
            <h3 className="mb-3 text-lg font-semibold text-white">Price</h3>
            <input
                type="range"
                min={0}
                max={1000}
                defaultValue={500}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-blue-600 accent-white"
            />
            <div className="mt-2 flex justify-between text-sm text-blue-100">
                <span>0</span>
                <span>1000</span>
            </div>
        </div>
    );
}