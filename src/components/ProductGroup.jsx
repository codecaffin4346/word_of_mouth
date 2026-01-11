import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';

export default function ProductGroup() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ImageGallery />
            <ProductInfo />
        </div>
    );
}
