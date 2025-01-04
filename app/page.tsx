import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
        <header className="flex justify-between items-center py-4">
            <div className="flex items-center">
                <img src="https://placehold.co/40x40" alt="Next.js logo" className="mr-2"/>
                <span className="font-bold text-xl">Tomatin</span>
            </div>
            <nav className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">Showcase</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Docs</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Templates</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Enterprise</a>
            </nav>
            <div className="flex items-center space-x-2">
                <input type="text" placeholder="Search documentation..." className="border rounded px-2 py-1 text-sm"/>
                <button className="bg-black text-white px-4 py-2 rounded">Deploy</button>
                <button className="bg-black text-white px-4 py-2 rounded">Learn</button>
            </div>
        </header>
        <main className="text-center py-20">
            <h1 className="text-5xl font-bold mb-4">The React Framework for the Web</h1>
            <p className="text-lg text-gray-600 mb-8">
                Used by some of the world's largest companies, Next.js enables you to create <span className="font-semibold">high-quality web applications</span> with the power of React components.
            </p>
            <div className="flex justify-center space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded">Get Started</button>
                <button className="bg-white text-black border border-black px-6 py-3 rounded">Learn Next.js</button>
            </div>
            <p className="text-gray-600 mt-4">~ npx create-next-app@latest</p>
        </main>
        <footer className="bg-white text-gray-700 py-10">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                <img src="https://placehold.co/100x50" alt="Vercel Logo" className="mb-4" />
                <p className="text-sm">&copy; 2025 Vercel, Inc.</p>
                <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-github"></i></a>
                    <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-butterfly"></i></a>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/6 mb-6">
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul>
                    <li className="mb-2"><a href="#" className="hover:underline">Docs</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Learn</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Showcase</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Analytics</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Next.js Conf</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Previews</a></li>
                </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/6 mb-6">
                <h3 className="font-semibold mb-4">More</h3>
                <ul>
                    <li className="mb-2"><a href="#" className="hover:underline">Next.js Commerce</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Contact Sales</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">GitHub</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Releases</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Telemetry</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Governance</a></li>
                </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/6 mb-6">
                <h3 className="font-semibold mb-4">About Vercel</h3>
                <ul>
                    <li className="mb-2"><a href="#" className="hover:underline">Next.js + Vercel</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Open Source Software</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">GitHub</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Bluesky</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">X</a></li>
                </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/6 mb-6">
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul>
                    <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                <h3 className="font-semibold mb-4">Subscribe to our newsletter</h3>
                <p className="text-sm mb-4">Stay updated on new releases and features, guides, and case studies.</p>
                <div className="flex">
                    <input type="email" placeholder="you@domain.com" className="border border-gray-300 p-2 rounded-l-md w-full" />
                    <button className="bg-gray-200 text-gray-700 p-2 rounded-r-md">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
</footer>
    </div>
    
    
  );
}
