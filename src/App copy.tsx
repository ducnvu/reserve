import React, { useState } from 'react';
import { Search, Home, FileText, Calendar, MapPin, User } from 'lucide-react';
import vegetableCurryImage from './assets/mo-khoet-1.jpeg';
import chickenStirFryImage from './assets/mo-khoet-2.jpeg';


const SustainableMealsApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState('home');

  const meals = [
    {
      id: 1,
      name: 'Rescued Vegetable Curry',
      description: 'A delicious curry made from rescued vegetables from local farms and Tesco',
      price: '£5.99',
      imgAlt: 'Colorful vegetable curry',
      imageUrl: vegetableCurryImage,
      savedResources: {
        co2: '2.5kg',
        water: '3L'
      }
    },
    {
      id: 2,
      name: 'Surplus Chicken Stir Fry',
      description: 'Stir-fried chicken with rescued vegetables and a ginger sauce',
      price: '£6.49',
      imgAlt: 'Chicken stir fry',
      imageUrl: chickenStirFryImage,
      savedResources: {
        co2: '3.1kg',
        water: '5L'
      }
    }
  ];

  const renderHomePage = () => (
    <div className="flex flex-col space-y-6 pb-20">
      {/* Banner Section */}
      <div className="relative h-64 bg-gradient-to-r from-emerald-500 to-teal-600 overflow-hidden ">
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative h-full flex flex-col justify-center items-center text-white p-6 z-10">
          <h1 className="text-3xl font-light mb-2 tracking-wide">Sustainable Meals</h1>
          <p className="text-lg font-light opacity-90 mb-4">Delicious food from rescued ingredients</p>
          <div className="flex items-center space-x-2 mt-4 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Live kitchen updates</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search meals"
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-teal-500 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
        </div>
      </div>

      {/* Today's Meals Section */}
      <div className="px-6">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Today's Meals</h2>
        <div className="flex flex-col space-y-5">
          {meals.map((meal) => (
            <div key={meal.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row">
                {/* Meal Image */}
                <div className="h-48 sm:w-40 sm:h-auto bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={meal.imageUrl}
                    alt={meal.imgAlt}
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Meal Details */}s
                <div className="flex-1 p-5 relative">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-gray-800">{meal.name}</h3>
                    <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-medium text-sm">
                      {meal.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{meal.description}</p>
                  <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-teal-700 mr-4">
                      <span className="mr-1">🌿</span>
                      <span>Saved {meal.savedResources.co2} CO₂</span>
                    </div>
                    <div className="flex items-center text-xs text-blue-600">
                      <span className="mr-1">💧</span>
                      <span>Saved {meal.savedResources.water} water</span>
                    </div>
                  </div>
                  <button className="absolute bottom-5 right-5 text-teal-600 text-sm font-medium hover:text-teal-700">
                    Order →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return renderHomePage();
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6">
              <h2 className="text-xl font-medium text-gray-800 mb-2">{activePage.charAt(0).toUpperCase() + activePage.slice(1)}</h2>
              <p className="text-gray-500">This section is coming soon.</p>
            </div>
          </div>
        );
    }
  };

  // Navigation Component
  const Navigation = () => {
    const navItems = [
      { id: 'home', icon: <Home className="h-5 w-5" />, label: 'Home' },
      { id: 'orders', icon: <FileText className="h-5 w-5" />, label: 'Orders' },
      { id: 'schedule', icon: <Calendar className="h-5 w-5" />, label: 'Schedule' },
      { id: 'locations', icon: <MapPin className="h-5 w-5" />, label: 'Locations' },
      { id: 'profile', icon: <User className="h-5 w-5" />, label: 'Profile' }
    ];

    return (
      <nav className="fixed bottom-0 w-full max-w-lg bg-white border-t border-gray-100 shadow-sm z-10">
        <div className="flex justify-around">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`flex flex-col items-center py-3 px-2 flex-1 transition-colors ${
                activePage === item.id ? 'text-teal-600' : 'text-gray-500 hover:text-gray-800'
              }`}
              onClick={() => setActivePage(item.id)}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    );
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-50 min-h-screen">
      {/* Main Content */}
      <main className="h-full">{renderPage()}</main>

      {/* Navigation */}
      <Navigation />
    </div>
  );
};

export default SustainableMealsApp;