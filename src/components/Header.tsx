import React from 'react';
import { ShoppingCart, Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: 'home' | 'products' | 'about' | 'contact' | 'cart') => void;
  cartCount: number;
}

export default function Header({ currentView, onViewChange, cartCount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'products', label: 'Gallery' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onViewChange('home')}
          >
            <Sparkles className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold text-white">Skills Online</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => onViewChange(item.key as any)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentView === item.key
                    ? 'text-purple-400'
                    : 'text-white hover:text-purple-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onViewChange('cart')}
              className="relative p-2 text-white hover:text-purple-300 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-purple-300 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => {
                    onViewChange(item.key as any);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentView === item.key
                      ? 'text-purple-400 bg-purple-400/10'
                      : 'text-white hover:text-purple-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}