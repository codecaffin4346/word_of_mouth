import Header from './Header';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-primary/20">
            <div className="bg-primary text-white text-center py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase sticky top-0 z-[60]">
                Free Shipping on Orders Over ₹499
            </div>
            <Header />
            <main className="pt-24 pb-20 container mx-auto px-4 md:px-6 max-w-7xl">
                {children}
            </main>

            <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-12 text-center text-xs text-gray-400">
                <p>© 2026 Maska Butters. All rights reserved.</p>
            </footer>
        </div>
    );
}
