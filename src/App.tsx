import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: 'image' | 'video';
  tags: string[];
  featured: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

const sampleProducts: Product[] = [
  {
    id: '1',
    title: 'Cyberpunk Cityscape',
    description: 'Futuristic neon-lit city with flying cars and holographic billboards',
    price: 29.99,
    image: 'https://images.pexels.com/photos/2313013/pexels-photo-2313013.jpeg',
    category: 'image',
    tags: ['cyberpunk', 'city', 'neon', 'futuristic'],
    featured: true
  },
  {
    id: '2',
    title: 'Abstract Digital Art',
    description: 'Colorful geometric patterns with flowing energy waves',
    price: 19.99,
    image: 'https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg',
    category: 'image',
    tags: ['abstract', 'digital', 'colorful', 'geometric'],
    featured: true
  },
  {
    id: '3',
    title: 'AI Portrait Collection',
    description: 'Realistic human portraits generated with advanced AI technology',
    price: 39.99,
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    category: 'image',
    tags: ['portrait', 'realistic', 'human', 'ai'],
    featured: false
  },
  {
    id: '4',
    title: 'Motion Graphics Loop',
    description: 'Seamless animated background with particle effects',
    price: 49.99,
    image: 'public/Whisk_451244db1d.jpg',
    category: 'video',
    tags: ['motion', 'animation', 'particles', 'loop'],
    featured: true
  },
  {
    id: '5',
    title: 'Fantasy Landscape',
    description: 'Mystical mountain range with magical aurora effects',
    price: 34.99,
    image: '493845260_3242596865880746_1069289635162703473_n.jpg',
    category: 'image',
    tags: ['fantasy', 'landscape', 'mystical', 'aurora'],
    featured: false
  },
  // Trigger Netlify rebuild

  {
    id: '6',
    title: 'AI Video Transition',
    description: 'Smooth morphing transition between abstract shapes',
    price: 59.99,
    image: 'WhatsApp Image 2025-05-19 at 10.21.46_d0bbc703.jpg',
    category: 'video',
    tags: ['transition', 'morphing', 'abstract', 'smooth'],
    featured: false
  },
{
    id: '7',
    title: 'Digital Marketing',
    description: 'Professional digital marketing asset for online branding and advertising.',
    price: 24.99,
    image: '/506612226_24233927859547883_3602496110225257906_n.jpg', // Make sure this is the actual filename
    category: 'image',
    tags: ['marketing', 'branding', 'ads'],
    featured: true
  },

  
];

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'about' | 'contact' | 'cart'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'image' | 'video'>('all');

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header 
        currentView={currentView}
        onViewChange={setCurrentView}
        cartCount={cartCount}
      />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero onExplore={() => setCurrentView('products')} />
            <FeaturedProducts 
              products={sampleProducts.filter(p => p.featured)}
              onProductSelect={setSelectedProduct}
              onAddToCart={addToCart}
            />
          </>
        )}
        
        {currentView === 'products' && (
          <ProductGrid
            products={filteredProducts}
            onProductSelect={setSelectedProduct}
            onAddToCart={addToCart}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            categoryFilter={categoryFilter}
            onCategoryChange={setCategoryFilter}
          />
        )}
        
        {currentView === 'about' && <About />}
        {currentView === 'contact' && <Contact />}
        {currentView === 'cart' && (
          <Cart 
            items={cartItems}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        )}
        
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={addToCart}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
