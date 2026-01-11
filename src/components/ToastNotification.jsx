import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const CITIES = ["Mumbai", "Delhi", "Bangalore", "Pune", "Chennai", "Hyderabad"];
const NAMES = ["Rahul", "Sneha", "Amit", "Priya", "Vikram", "Anjali"];

export default function ToastNotification() {
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        const showNotification = () => {
            const city = CITIES[Math.floor(Math.random() * CITIES.length)];
            const name = NAMES[Math.floor(Math.random() * NAMES.length)];
            setNotification({ name, city });

            setTimeout(() => {
                setNotification(null);
            }, 5000);
        };

        // Show first after 5s, then every 20s
        const initialTimeout = setTimeout(showNotification, 5000);
        const interval = setInterval(showNotification, 20000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <AnimatePresence>
            {notification && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-6 right-6 z-50 bg-white border border-gray-100 p-4 rounded-xl shadow-2xl shadow-gray-200/50 flex items-center gap-4 max-w-xs md:max-w-sm pointer-events-none"
                >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                        <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-900">
                            {notification.name} from {notification.city}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                            just purchased <span className="text-primary font-semibold">Chatpata Peanut Butter</span>
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
