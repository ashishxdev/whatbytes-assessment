import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-blue-950 px-6 py-6 text-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:justify-between">
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold">Filters</h3>
                    <ul className="flex gap-2 text-gray-300">
                        <li className="cursor-pointer hover:text-white">All</li>
                        <li className="cursor-pointer hover:text-white">Electronics</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold">About Us</h3>
                    <ul className="flex flex-col gap-2 text-gray-300">
                        <li className="cursor-pointer hover:text-white">About Us</li>
                        <li className="cursor-pointer hover:text-white">Contact</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold">Follow Us</h3>

                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-800 transition-colors hover:bg-blue-700"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
                            </svg>
                        </a>

                        <a
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-800 transition-colors hover:bg-blue-700"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.7 11.7 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1c.5 1.7 2.1 2.9 4 2.9A8.2 8.2 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
                            </svg>
                        </a>

                        <a
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-800 transition-colors hover:bg-blue-700"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                <path d="M12 2c2.7 0 3.1 0 4.1.1 1 .1 1.7.2 2.3.5.6.2 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.2.6.4 1.3.5 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c-.1 1-.2 1.7-.5 2.3a4.6 4.6 0 0 1-2.7 2.7c-.6.2-1.3.4-2.3.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1-.1-1.7-.2-2.3-.5a4.6 4.6 0 0 1-2.7-2.7c-.2-.6-.4-1.3-.5-2.3C2 15.1 2 14.7 2 12s0-3.1.1-4.1c.1-1 .2-1.7.5-2.3a4.6 4.6 0 0 1 2.7-2.7c.6-.2 1.3-.4 2.3-.5C8.9 2 9.3 2 12 2zm0 1.8c-2.6 0-3 0-4 .1-.9.1-1.4.2-1.7.4-.4.1-.7.4-1 .6-.3.3-.5.6-.6 1-.2.3-.3.8-.4 1.7-.1 1-.1 1.4-.1 4s0 3 .1 4c.1.9.2 1.4.4 1.7.1.4.4.7.6 1 .3.3.6.5 1 .6.3.2.8.3 1.7.4 1 .1 1.4.1 4 .1s3 0 4-.1c.9-.1 1.4-.2 1.7-.4.4-.1.7-.4 1-.6.3-.3.5-.6.6-1 .2-.3.3-.8.4-1.7.1-1 .1-1.4.1-4s0-3-.1-4c-.1-.9-.2-1.4-.4-1.7a2.8 2.8 0 0 0-.6-1 2.8 2.8 0 0 0-1-.6c-.3-.2-.8-.3-1.7-.4-1-.1-1.4-.1-4-.1zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm5.3-2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div >
            < div className="mx-auto max-w-7xl border-blue-900 pt-4 text-sm text-gray-400" >
                © 2024 American
            </div >
        </footer >
    );
}