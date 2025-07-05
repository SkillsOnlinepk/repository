import React from 'react';
import { X, ShoppingCart, Star, Download, Share2 } from 'lucide-react';
import { Product } from '../App';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductDetail({ product, onClose, onAddToCart }: ProductDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <h2 className="text-2xl font-bold text-white">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 flex items-center justify-center space-x-2 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
                  <Download className="h-5 w-5" />
                  <span>Preview</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold text-white">{product.title}</h1>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.category === 'image' 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {product.category.toUpperCase()}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="text-lg font-semibold">4.8</span>
                  </div>
                  <span className="text-gray-300">(127 reviews)</span>
                  {product.featured && (
                    <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">{product.description}</p>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Specifications</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Resolution:</span>
                    <span>{product.category === 'image' ? '4K (3840×2160)' : '1080p (1920×1080)'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>{product.category === 'image' ? 'PNG, JPEG' : 'MP4, MOV'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>License:</span>
                    <span>Commercial Use</span>
                  </div>
                  <div className="flex justify-between">
                    <span>File Size:</span>
                    <span>{product.category === 'image' ? '~8MB' : '~45MB'}</span>
                  </div>
                </div>
              </div>

              {/* Price and Purchase */}
              <div className="border-t border-white/20 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-white">${product.price}</span>
                    <span className="text-gray-400 ml-2">One-time purchase</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                  <button className="px-6 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}