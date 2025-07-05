import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react';
import { CartItem } from '../App';

interface CartProps {
  items: CartItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export default function Cart({ items, onRemoveItem, onUpdateQuantity }: CartProps) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shopping Cart
          </h2>
          <p className="text-xl text-gray-300">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Your cart is empty</h3>
            <p className="text-gray-400 mb-8">Add some amazing AI-generated content to get started!</p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
              Browse Gallery
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
              >
                {/* Product Image */}
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.category === 'image' 
                        ? 'bg-blue-500/20 text-blue-300' 
                        : 'bg-red-500/20 text-red-300'
                    }`}>
                      {item.category.toUpperCase()}
                    </span>
                    <span className="text-purple-400 font-bold">${item.price}</span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="p-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="p-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-right">
                  <div className="text-xl font-bold text-white">${(item.price * item.quantity).toFixed(2)}</div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-400 hover:text-red-300 transition-colors mt-2"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Order Summary</h3>
                <div className="text-right">
                  <div className="text-gray-300">Subtotal: ${total.toFixed(2)}</div>
                  <div className="text-gray-300">Tax: $0.00</div>
                  <div className="text-2xl font-bold text-white mt-2">Total: ${total.toFixed(2)}</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="flex-1 flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                  <CreditCard className="h-5 w-5" />
                  <span>Proceed to Checkout</span>
                </button>
                <button className="px-6 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}