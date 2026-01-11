import Layout from './components/Layout';
import ProductGroup from './components/ProductGroup';
import ReviewSection from './components/ReviewSection';
import ToastNotification from './components/ToastNotification';

function App() {
  return (
    <Layout>
      <ProductGroup />
      <hr className="my-20 border-gray-100" />
      <ReviewSection />
      <ToastNotification />
    </Layout>
  );
}

export default App;
