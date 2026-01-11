import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        )}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Menu className="w-6 h-6 md:hidden cursor-pointer" />
                    <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
                        <a href="#" className="hover:text-primary transition-colors">Shop All</a>
                        <a href="#" className="hover:text-primary transition-colors">Best Sellers</a>
                        <a href="#" className="hover:text-primary transition-colors">About Us</a>
                    </nav>
                </div>

                <div className="text-2xl font-black tracking-tighter text-gray-900 cursor-pointer">
                    MASKA<span className="text-primary">.</span>
                </div>

                <div className="flex items-center gap-5">
                    <Search className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                    <User className="w-5 h-5 cursor-pointer hover:text-primary transition-colors hidden md:block" />
                    <div className="relative cursor-pointer hover:scale-110 transition-transform">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full ring-2 ring-white">2</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
