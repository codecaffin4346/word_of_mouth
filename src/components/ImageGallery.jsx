import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { PRODUCT_DATA } from '../data';

export default function ImageGallery() {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="flex flex-col gap-4 sticky top-24">
            <div className="relative aspect-square w-full overflow-hidden bg-gray-50 rounded-2xl cursor-zoom-in group">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeImage}
                        src={PRODUCT_DATA.images[activeImage]}
                        alt={`Product view ${activeImage + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                </AnimatePresence>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm text-primary">
                    Best Seller
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {PRODUCT_DATA.images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={cn(
                            "relative aspect-square overflow-hidden rounded-xl bg-gray-50 transition-all",
                            activeImage === idx ? "ring-2 ring-primary ring-offset-2 opacity-100" : "opacity-70 hover:opacity-100"
                        )}
                    >
                        <img src={img} alt={`Thumbnail ${idx}`} className="h-full w-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
}
