import React from 'react';
import { Search, Filter, ShoppingCart, Eye, Star } from 'lucide-react';
import { Product } from '../App';

interface ProductGridProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  categoryFilter: 'all' | 'image' | 'video';
  onCategoryChange: (category: 'all' | 'image' | 'video') => void;
}

export default function ProductGrid({
  products,
  onProductSelect,
  onAddToCart,
  searchTerm,
  onSearchChange,
  categoryFilter,
  onCategoryChange
}: ProductGridProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Digital Art Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Browse our complete collection of AI-generated digital assets
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, description, or tags..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={categoryFilter}
              onChange={(e) => onCategoryChange(e.target.value as 'all' | 'image' | 'video')}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all"
            >
              <option value="all">All Categories</option>
              <option value="image">Images</option>
              <option value="video">Videos</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-300">
            Showing {products.length} results
            {searchTerm && ` for "${searchTerm}"`}
            {categoryFilter !== 'all' && ` in ${categoryFilter}s`}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => onProductSelect(product)}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.category === 'image' 
                      ? 'bg-blue-500/80 text-white' 
                      : 'bg-red-500/80 text-white'
                  }`}>
                    {product.category.toUpperCase()}
                  </span>
                </div>

                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-2 right-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white truncate">{product.title}</h3>
                  <span className="text-purple-400 font-bold">${product.price}</span>
                </div>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">4.{Math.floor(Math.random() * 9) + 1}</span>
                  </div>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg mb-4">No products found</div>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
}