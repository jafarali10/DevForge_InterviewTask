// src/App.tsx
import { useStoreAPI } from './hooks/useStoreAPI';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';

function App() {
  const {
    products,
    loading,
    error,
    categories,
    selectedCategory,
    setSelectedCategory,
  } = useStoreAPI();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <ProductGrid products={products} loading={loading} error={error} />
      </main>
    </div>
  );
}

export default App;