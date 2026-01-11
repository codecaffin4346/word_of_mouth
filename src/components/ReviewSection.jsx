import { Star, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { REVIEWS } from '../data';

export default function ReviewSection() {
    return (
        <section className="mt-32 space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">Don't just take our word for it</h2>
                <p className="text-gray-500 max-w-xl mx-auto text-lg">Join thousands of happy customers who are enjoying the spicy kick of Maska.</p>
            </div>

            <div className="flex overflow-x-auto pb-12 pt-4 gap-6 snap-x snap-mandatory px-4 -mx-4 scrollbar-none">
                {REVIEWS.map((review) => (
                    <div key={review.id} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 snap-center transition-transform hover:-translate-y-1 duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex text-yellow-400 gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={cn("w-4 h-4 fill-current", i < review.rating ? "text-yellow-400" : "text-gray-200")} />
                                ))}
                            </div>
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{review.date}</span>
                        </div>
                        <p className="text-gray-700 font-medium leading-relaxed mb-8 text-lg">"{review.text}"</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm uppercase">
                                {review.author[0]}
                            </div>
                            <div>
                                <div className="font-bold text-sm text-gray-900">{review.author}</div>
                                <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full w-fit mt-0.5">
                                    <CheckCircle2 className="w-3 h-3" />
                                    Verified Buyer
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
