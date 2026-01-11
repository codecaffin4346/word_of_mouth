import { useState, useEffect } from 'react';
import { Star, Minus, Plus, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { PRODUCT_DATA } from '../data';
import { cn } from '../lib/utils';

export default function ProductInfo() {
    const [quantity, setQuantity] = useState(1);
    const [viewers, setViewers] = useState(12);

    // Simulate viewer count fluctuation
    useEffect(() => {
        const interval = setInterval(() => {
            setViewers(prev => Math.max(8, prev + Math.floor(Math.random() * 3) - 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-8 pt-4">
            {/* Header */}
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-yellow-500 text-sm font-medium">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={cn("w-4 h-4 fill-current", i < Math.floor(PRODUCT_DATA.rating) ? "text-yellow-400" : "text-gray-200")} />
                        ))}
                    </div>
                    <span className="text-gray-500 underline decoration-gray-200 underline-offset-4 cursor-pointer hover:text-gray-900 transition-colors">
                        {PRODUCT_DATA.rating} ({PRODUCT_DATA.reviewCount} Reviews)
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-[1.1]">
                    {PRODUCT_DATA.title}
                </h1>

                <div className="flex items-center gap-4 pt-2">
                    <span className="text-3xl font-bold text-gray-900">₹{PRODUCT_DATA.price}</span>
                    <span className="text-lg text-gray-400 line-through">₹{PRODUCT_DATA.originalPrice}</span>
                    <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded-md border border-red-100">
                        SAVE {Math.round((1 - PRODUCT_DATA.price / PRODUCT_DATA.originalPrice) * 100)}%
                    </span>
                </div>
            </div>

            <div className="h-px bg-gray-100" />

            {/* Social Proof / FOMO */}
            <div className="flex flex-col gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    {viewers} people are viewing this right now
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                    <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                    28 sold in the last 24 hours
                </div>
            </div>

            {/* Selector */}
            <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                    <label className="font-bold uppercase tracking-wider text-gray-900">Net Qty</label>
                    <span className="text-primary font-medium cursor-pointer">Size Guide</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {["250g", "500g (Best Value)"].map((size, i) => (
                        <button key={size} className={cn(
                            "border-2 rounded-xl py-4 px-4 text-sm font-bold transition-all flex items-center justify-center",
                            i === 1 ? "border-primary bg-primary/5 text-primary shadow-sm" : "border-gray-100 text-gray-500 hover:border-gray-300 hover:text-gray-900"
                        )}>
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-2">
                <div className="flex items-center border border-gray-200 rounded-full h-14 px-2 gap-2 w-32 justify-between">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                        <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-lg text-gray-900">{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
                <button className="flex-1 bg-gray-900 text-white rounded-full h-14 font-bold tracking-widest uppercase hover:bg-black hover:scale-[1.01] active:scale-[0.99] transition-all shadow-xl shadow-gray-200/50 flex items-center justify-center gap-2">
                    Add to Cart <span className="w-1 h-1 bg-white/30 rounded-full mx-1" /> ₹{(PRODUCT_DATA.price * quantity).toFixed(0)}
                </button>
            </div>

            {/* Description Accordion or Text */}
            <div className="prose prose-gray text-gray-500 leading-7">
                <p className="whitespace-pre-line">{PRODUCT_DATA.description}</p>
                <ul className="mt-6 space-y-3">
                    {PRODUCT_DATA.benefits.map(benefit => (
                        <li key={benefit} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">✓</div>
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
