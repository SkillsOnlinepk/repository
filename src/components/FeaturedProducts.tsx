import React from 'react';
import { ShoppingCart, Eye, Star } from 'lucide-react';
import { Product } from '../App';

interface FeaturedProductsProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function FeaturedProducts({ products, onProductSelect, onAddToCart }: FeaturedProductsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Creations
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our most popular AI-generated digital assets, carefully curated for excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>Featured</span>
              </div>

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => onProductSelect(product)}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                  <span className="text-purple-400 font-bold">${product.price}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.category === 'image' 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {product.category.toUpperCase()}
                  </span>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}