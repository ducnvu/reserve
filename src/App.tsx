import { useState } from 'react';
import { Home, Menu, MapPin, Award, ArrowLeft, ShoppingCart } from 'lucide-react';
import summerRollsImage from './assets/summer-rolls.jpg';
import bannerFoodImage from './assets/banner-food.jpg';
import mapImage from './assets/map.png';
import panaengChickenImage from './assets/panaeng-chicken.jpg';
import shrimpPadThaiImage from './assets/shrimp-pad-thai.jpg';
import kapraoMincedPorkImage from './assets/kaprao-minced-pork.jpg';
import muPingImage from './assets/mu-ping.jpg';
import banhMiImage from './assets/banh_mi.jpg';
import miXaoImage from './assets/mi_xao.jpg';

// Define interface for items in the basket
interface BasketItem extends Meal {
  quantity: number;
}

interface Meal {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: string;
  calories: number;
  protein: number;
  carb: number;
  fat: number;
  time: string;
  location: string;
  co2Saved: string;
  imageUrl: string;
  ingredients: { name: string; originalExpiry: string; }[];
}

// Helper function to parse price string (e.g., "£8.80") to number
const parsePrice = (priceString: string): number => {
  return parseFloat(priceString.replace(/[^\d.]/g, ''));
};

const SustainableMealsApp = () => {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const [previousPage, setPreviousPage] = useState<string>('home');

  const handleAddToBasket = (mealToAdd: Meal) => {
    setBasketItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === mealToAdd.id);
      if (existingItemIndex > -1) {
        // Item exists, increment quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        // Item doesn't exist, add with quantity 1
        return [...prevItems, { ...mealToAdd, quantity: 1 }];
      }
    });
    console.log(`${mealToAdd.name} added to basket!`);
  };

  // Calculate total basket count for the badge
  const totalBasketCount = basketItems.reduce((count, item) => count + item.quantity, 0);

  const todayMeals: Meal[] = [
    {
      id: 1,
      name: 'Summer Rolls',
      shortDescription: 'Fresh Vietnamese rice paper rolls.',
      description: 'Fresh Vietnamese rice paper rolls filled with shrimp, herbs, vermicelli noodles, and vegetables, served with a peanut or hoisin dipping sauce.',
      price: '£7.00',
      calories: 300,
      protein: 10,
      carb: 40,
      fat: 10,
      time: "18:00 - 19:00",
      location: "Student Union",
      co2Saved: '0.9kg',
      imageUrl: summerRollsImage,
      ingredients: [
        { name: 'Shrimp', originalExpiry: 'Apr 5, 2025' },
        { name: 'Rice Paper', originalExpiry: 'Apr 11, 2025' },
        { name: 'Vermicelli Noodles', originalExpiry: 'May 4, 2025' },
        { name: 'Fresh Mint', originalExpiry: 'Apr 5, 2025' },
        { name: 'Lettuce', originalExpiry: 'Apr 6, 2025' },
      ],
    },
    {
      id: 2,
      name: 'Panaeng Chicken',
      shortDescription: 'Rich and creamy Thai curry.',
      description: 'A rich and creamy Thai curry made with coconut milk, red curry paste, and kaffir lime leaves, offering a mildly spicy and slightly sweet flavor.',
      price: '£6.80',
      calories: 650,
      protein: 30,
      carb: 50,
      fat: 35,
      time: "19:00 - 20:00",
      location: "Central Library",
      co2Saved: '1.4kg',
      imageUrl: panaengChickenImage,
      ingredients: [
        { name: 'Chicken Thigh', originalExpiry: 'Apr 5, 2025' },
        { name: 'Coconut Milk', originalExpiry: 'Apr 11, 2025' },
        { name: 'Red Curry Paste', originalExpiry: 'May 4, 2025' },
        { name: 'Kaffir Lime Leaves', originalExpiry: 'Apr 7, 2025' },
        { name: 'Bell Peppers', originalExpiry: 'Apr 7, 2025' },
      ],
    },
    {
      id: 3,
      name: 'Shrimp Pad Thai',
      shortDescription: 'Classic Thai stir-fried noodles.',
      description: 'A classic Thai stir-fried noodle dish with shrimp, eggs, tofu, bean sprouts, and peanuts, tossed in a tangy-sweet tamarind sauce.',
      price: '£8.80',
      calories: 620,
      protein: 25,
      carb: 70,
      fat: 20,
      time: "12:00 - 13:00",
      location: "Community Center",
      co2Saved: '1.3kg',
      imageUrl: shrimpPadThaiImage,
      ingredients: [
        { name: 'Shrimp', originalExpiry: 'Apr 5, 2025' },
        { name: 'Rice Noodles', originalExpiry: 'May 4, 2025' },
        { name: 'Tofu', originalExpiry: 'Apr 5, 2025' },
        { name: 'Bean Sprouts', originalExpiry: 'Apr 6, 2025' },
        { name: 'Eggs', originalExpiry: 'Apr 12, 2025' },
      ],
    },
    {
      id: 4,
      name: 'Kaprao Minced Pork',
      shortDescription: 'Spicy Thai basil stir-fry.',
      description: 'A spicy and aromatic Thai stir-fry featuring minced pork, basil, garlic, and chili, served over rice with a fried egg on top.',
      price: '£6.80',
      calories: 580,
      protein: 28,
      carb: 60,
      fat: 30,
      time: "13:00 - 14:00",
      location: "Student Union",
      co2Saved: '1.3kg',
      imageUrl: kapraoMincedPorkImage,
      ingredients: [
        { name: 'Minced Pork', originalExpiry: 'Apr 6, 2025' },
        { name: 'Holy Basil', originalExpiry: 'Apr 9, 2025' },
        { name: 'Garlic', originalExpiry: 'Apr 11, 2025' },
        { name: 'Chili Peppers', originalExpiry: 'Apr 7, 2025' },
        { name: 'Rice', originalExpiry: 'May 3, 2026' },
      ],
    },
  ];

  const tomorrowMeals: Meal[] = [
    {
      id: 5,
      name: 'Mu Ping',
      shortDescription: 'Thai grilled pork skewers.',
      description: 'Thai-style grilled pork skewers marinated in a sweet and savory sauce, often enjoyed as a street food snack.',
      price: '£6.80',
      calories: 400,
      protein: 25,
      carb: 10,
      fat: 28,
      time: "17:00 - 18:00",
      location: "Central Library",
      co2Saved: '1.0kg',
      imageUrl: muPingImage,
      ingredients: [
        { name: 'Pork Shoulder', originalExpiry: 'Apr 6, 2025' },
        { name: 'Soy Sauce', originalExpiry: 'Apr 3, 2026' },
        { name: 'Palm Sugar', originalExpiry: 'Apr 3, 2026' },
        { name: 'Garlic', originalExpiry: 'Apr 11, 2025' },
      ],
    },
    {
      id: 6,
      name: 'Banh Mi',
      shortDescription: 'Vietnamese baguette sandwich.',
      description: 'A Vietnamese sandwich with a crispy baguette filled with pâté, cold cuts or grilled meats, pickled vegetables, cilantro, and spicy mayo.',
      price: '£6.80',
      calories: 550,
      protein: 20,
      carb: 65,
      fat: 25,
      time: "14:00 - 15:00",
      location: "Community Center",
      co2Saved: '1.1kg',
      imageUrl: banhMiImage,
      ingredients: [
        { name: 'Baguette', originalExpiry: 'Apr 6, 2025' },
        { name: 'Pork Pâté', originalExpiry: 'Apr 8, 2025' },
        { name: 'Vietnamese Ham', originalExpiry: 'Apr 7, 2025' },
        { name: 'Pickled Daikon/Carrot', originalExpiry: 'Apr 11, 2025' },
        { name: 'Cilantro', originalExpiry: 'Apr 15, 2025' },
      ],
    },
    {
      id: 7,
      name: 'Vietnamese Stir Fried Noodles',
      shortDescription: 'Quick and flavorful stir-fried noodles.',
      description: 'A quick and flavorful dish featuring stir-fried noodles with vegetables and your choice of meat, all tossed in a savory, slightly spicy sauce.',
      price: '£6.80',
      calories: 675,
      protein: 28,
      carb: 102,
      fat: 22,
      time: "18:30 - 19:30",
      location: "Student Union",
      co2Saved: '1.2kg',
      imageUrl: miXaoImage,
      ingredients: [
        { name: 'Egg Noodles', originalExpiry: 'May 4, 2025' },
        { name: 'Mixed Vegetables', originalExpiry: 'Apr 12, 2025' },
        { name: 'Oyster Sauce', originalExpiry: 'Apr 3, 2026' },
        { name: 'Garlic', originalExpiry: 'Apr 11, 2025' },
        { name: 'Chicken Breast', originalExpiry: 'Apr 6, 2025' },
      ],
    },
  ];

  const pickupLocations = [
    {
      id: 1,
      name: 'Bloomsbury',
      address: '10 University Street, WC1E',
      times: ['11:00 AM - 2:00 PM', '5:00 PM - 8:00 PM'],
    },
    {
      id: 2,
      name: 'Soho',
      address: '25 Dean Street, W1D',
      times: ['11:00 AM - 2:00 PM', '5:00 PM - 8:00 PM'],
    },
    {
      id: 3,
      name: 'Moorgate',
      address: '50 London Wall, EC2M',
      times: ['11:00 AM - 2:00 PM', '5:00 PM - 8:00 PM'],
    },
  ];

  const renderDetailedMealView = () => {
    if (!selectedMeal) {
      return <div>No meal selected</div>;
    }

    return (
      <div className="px-4 py-6 space-y-6">
        <button 
          onClick={() => {
            setSelectedMeal(null);
            setActivePage(previousPage);
          }}
          className="flex items-center text-emerald-600"
        >
          <ArrowLeft size={20} />
          <span className="ml-2">{`Back to ${previousPage.charAt(0).toUpperCase() + previousPage.slice(1)}`}</span>
        </button>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={selectedMeal.imageUrl} 
            alt={selectedMeal.name} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{selectedMeal.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{selectedMeal.description}</p>

            {/* Collection Time and Location */}
            <div className="mt-4">
              <h3 className="text-md font-semibold text-gray-800">Collection Details</h3>
              <p className="text-sm text-gray-600">
                <strong>Time:</strong> {selectedMeal.time || 'N/A'}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Location:</strong> {selectedMeal.location || 'N/A'}
              </p>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-yellow-600">{selectedMeal.price}</span>
              <span className="text-sm text-emerald-600">{selectedMeal.co2Saved} CO₂ saved</span>
            </div>
            <div className="mt-4">
              <h3 className="text-md font-semibold text-gray-800">Nutritional Information</h3>
              <p className="text-sm text-gray-600">Calories: {selectedMeal.calories} kcal</p>
              <p className="text-sm text-gray-600">Protein: {selectedMeal.protein} kcal</p>
              <p className="text-sm text-gray-600">Carbs: {selectedMeal.carb} kcal</p>
              <p className="text-sm text-gray-600">Fat: {selectedMeal.fat} kcal</p>
              {/* Add more nutritional info here */}
            </div>

            {/* Surplus Ingredients Section */}
            <div className="mt-4">
              <h3 className="text-md font-semibold text-gray-800">Surplus Ingredients Used</h3>
              <table className="w-full text-sm text-left text-gray-600 mt-2">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-2">Ingredient</th>
                    <th scope="col" className="px-4 py-2">Original Expiry Date</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedMeal.ingredients?.map((ingredient, index) => (
                    <tr key={index} className="bg-white border-b last:border-b-0">
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                        {ingredient.name}
                      </td>
                      <td className="px-4 py-2">
                        {ingredient.originalExpiry}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button 
              className="mt-6 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700"
              onClick={() => handleAddToBasket(selectedMeal)}
            >
              Add to Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  const renderImpactPage = () => (
    <div className="px-4 py-6 space-y-6">
      {/* Environmental Stats */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-bold text-gray-800 text-center">Your Environmental Stats</h2>
        <div className="flex justify-around items-center">
          <div className="text-center">
            <h3 className="text-xl font-bold text-emerald-800">4.2kg</h3>
            <p className="text-sm text-gray-600">CO₂ saved</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-emerald-800">6</h3>
            <p className="text-sm text-gray-600">Orders this week</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-emerald-800">12</h3>
            <p className="text-sm text-gray-600">Total orders</p>
          </div>
        </div>

        {/* Equivalent Impact */}
        <h2 className="text-lg font-bold text-gray-800 text-center">Equivalent To</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <span className="text-3xl">🚗</span>
            <p className="text-sm text-gray-600">15km not driven</p>
          </div>
          <div className="text-center">
            <span className="text-3xl">💡</span>
            <p className="text-sm text-gray-600">48h of LED bulb use</p>
          </div>
          <div className="text-center">
            <span className="text-3xl">🌳</span>
            <p className="text-sm text-gray-600">2 trees planted</p>
          </div>
        </div>
      </div>

      {/* Weekly Reward Progress */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-md font-bold text-gray-800">Weekly Reward Progress</h2>
        <div className="flex items-center space-x-4">
          <progress value={6} max={10} className="w-full h-[8px] rounded-lg bg-gray-200 [&::-webkit-progress-value]:bg-emerald-800 [&::-moz-progress-bar]:bg-emerald-800"></progress>
          <span className="text-sm font-semibold text-gray-800">6/10 orders</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">4 more orders this week to earn a free meal!</p>
      </div>

      {/* Community Impact */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-md font-bold text-gray-800">Community Impact</h2>
        <div className="grid grid-cols-2 gap-x-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-emerald-800">1,256kg</h3>
            <p className="text-sm text-gray-600">CO₂ saved by ReServe community this month</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-emerald-800">324kg</h3>
            <p className="text-sm text-gray-600">Food rescued from waste</p>
          </div>
        </div>
      </div>

      {/* Monthly Progress */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-md font-bold text-gray-800">Monthly Progress</h2>

        {/* Bar Chart */}
        <div
          style={{ height: '100px' }}
          className="flex justify-between items-end space-x-[5px]"
        >
          {[40, 60, 80, 70].map((value, index) => (
            <div
              key={index}
              style={{ height: `${value}%` }}
              className={`w-[20px] bg-yellow-500 t-lg`}
            ></div>
          ))}
        </div>

        {/* Label */}
        <p className="mt-[10px] text-xs text-gray-500 text-center">
          Your CO₂ saving progress over the last month
        </p>
      </div>
    </div>
  );

  const renderHomePage = () => {
    // Filter for top picks
    const topPicks = todayMeals.filter(meal => meal.id === 3 || meal.id === 4);

    return (
      <div className="flex flex-col space-y-4">
        {/* Banner Section */}
        <div
          className="relative h-40 bg-cover bg-center flex items-center justify-center text-white"
          style={{
            backgroundImage: `url(${bannerFoodImage})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text Section */}
          <div className="relative text-center">
            <h2 className="text-2xl font-bold mb-2">Sustainable Meal</h2>
            <p className="text-sm">Rescue - Repurpose - Reduce</p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="flex justify-between bg-white p-4 rounded-lg mx-4">
          <div className="text-center">
            <div className="text-emerald-600 font-bold">7/10</div>
            <div className="text-xs text-gray-600">Meals this week</div>
          </div>
          <div className="text-center">
            <div className="text-emerald-600 font-bold">12.5kg</div>
            <div className="text-xs text-gray-600">Food rescued</div>
          </div>
          <div className="text-center">
            <div className="text-emerald-600 font-bold">8.2kg</div>
            <div className="text-xs text-gray-600">CO₂ saved</div>
          </div>
        </div>

        {/* Top Picks Near You */}
        <div className="px-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-gray-800">Top Picks Near You</h3>
            {/* Optional: Add See All link if needed later */}
          </div>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {topPicks.map((meal) => (
              <div
                key={meal.id}
                className="flex-shrink-0 w-48 bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => {
                  setSelectedMeal(meal);
                  setPreviousPage('home');
                  setActivePage('mealDetail');
                }}
              >
                {/* Meal Image */}
                <div className="h-32 bg-gray-200 relative">
                  <img
                    src={meal.imageUrl}
                    alt={meal.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Price Tag */}
                  <div className="absolute top-2 right-2 bg-yellow-500 text-xs font-bold text-gray-800 px-2 py-1 rounded-full">
                    {meal.price}
                  </div>
                </div>

                {/* Meal Info */}
                <div className="p-3">
                  {/* Meal Name */}
                  <h3 className="font-bold text-sm mb-1">{meal.name}</h3>

                  {/* Meal Description */}
                  <p className="text-xs text-gray-600 mb-[6px]">{meal.shortDescription}</p>

                  {/* Calories and CO₂ Savings */}
                  <p className="text-xs text-emerald-600 flex justify-between">
                    <span>{meal.calories} kcal</span>
                    <span>{meal.co2Saved} CO₂ saved</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    
        {/* Today's Menu */}
        <div className="px-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-gray-800">Today's Menu</h3>
            <span 
              className="text-sm text-emerald-600 cursor-pointer"
              onClick={() => {
                setPreviousPage('home');
                setActivePage('menu');
              }}
            >
              See All
            </span>
          </div>

          {/* Updated Card Layout */}
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {todayMeals.map((meal, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => {
                  setSelectedMeal(meal);
                  setPreviousPage('home');
                  setActivePage('mealDetail');
                }}
              >
                {/* Meal Image */}
                <div className="h-32 bg-gray-200 relative">
                  <img
                    src={meal.imageUrl}
                    alt={meal.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Price Tag */}
                  <div className="absolute top-2 right-2 bg-yellow-500 text-xs font-bold text-gray-800 px-2 py-1 rounded-full">
                    {meal.price}
                  </div>
                </div>

                {/* Meal Info */}
                <div className="p-3">
                  {/* Meal Name */}
                  <h3 className="font-bold text-sm mb-1">{meal.name}</h3>

                  {/* Meal Description */}
                  <p className="text-xs text-gray-600 mb-[6px]">{meal.shortDescription}</p>

                  {/* Calories and CO₂ Savings */}
                  <p className="text-xs text-emerald-600 flex justify-between">
                    <span>{meal.calories} kcal</span>
                    <span>{meal.co2Saved} CO₂ saved</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    
        {/* Pickup Locations */}
        <div className="px-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-gray-800">Pickup Locations</h3>
            <span 
              className="text-sm text-emerald-600 cursor-pointer"
              onClick={() => {
                setPreviousPage('home');
                setActivePage('pickup');
              }}
            >
              See All
            </span>
          </div>
          <div
            className="h-48 bg-gray-200 rounded-lg relative overflow-hidden"
            style={{
              marginBottom: '20px',
            }}
          >
            <img src={mapImage} className="w-full h-full object-cover" />
            {pickupLocations.map((_, index) => (
              <div key={index} className="absolute w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-gray-800" style={{ top: `${40 + index * 10}%`, left: `${30 + index * 20}%` }}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderMenuPage = () => {
    return (
      <div className="px-4 py-6 space-y-6">
        {/* Today's Meals Section */}
        <div>
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <h2 className="text-sm font-bold text-gray-800">Today - April 2</h2>
            <span className="text-xs font-medium text-emerald-600">Available Now</span>
          </div>
          <div className="space-y-4 mt-4">
            {todayMeals.map((meal) => (
              <div 
                key={meal.id} 
                className="flex bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition-shadow duration-150 ease-in-out"
                onClick={() => {
                  setSelectedMeal(meal);
                  setPreviousPage('menu');
                  setActivePage('mealDetail');
                }}
              >
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0">
                  {/* Meal image */}
                  <img
                    src={meal.imageUrl}
                    alt={meal.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 ml-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-800">{meal.name}</h3>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{meal.description}</p>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-md">
                        {meal.price}
                      </span>
                      <button 
                        className="text-xs bg-emerald-600 text-white px-4 py-1 rounded-md hover:bg-emerald-700 z-10 relative"
                        onClick={(e) => { 
                          e.stopPropagation();
                          handleAddToBasket(meal);
                        }}
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{meal.calories} kcal</span>
                      <span>{meal.co2Saved} CO₂ saved</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Tomorrow's Meals Section */}
        <div>
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <h2 className="text-sm font-bold text-gray-800">Tomorrow - April 3</h2>
            <span className="text-xs font-medium text-gray-500">Preview</span>
          </div>
          <div className="space-y-4 mt-4">
            {tomorrowMeals.map((meal) => (
              <div key={meal.id} className="flex bg-white rounded-lg shadow p-4 opacity-60">
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0">
                  {/* Meal image */}
                  <img
                    src={meal.imageUrl}
                    alt={meal.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 ml-4">
                  <h3 className="text-sm font-bold text-gray-800">{meal.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">{meal.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-md">
                      {meal.price}
                    </span>
                    <button
                      disabled
                      className="text-xs bg-gray-300 text-gray-500 px-4 py-1 rounded-md cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{meal.calories} kcal</span>
                    <span>{meal.co2Saved} CO₂ saved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderPickupPage = () => (
    <div className="px-4 py-6 space-y-4">
      <h2 className="text-lg font-bold text-gray-800">Pickup Locations</h2>
      <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
        {/* Placeholder for map */}
        <img
          src={mapImage}
          className="w-full h-full object-cover"
        />
        {pickupLocations.map((location, index) => (
          <div
            key={location.id}
            style={{ top: `${40 + index * 10}%`, left: `${30 + index * 20}%` }}
            className="absolute w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-gray-800"
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="space-y-4">
        {pickupLocations.map((location) => (
          <div
            key={location.id}
            className="bg-white rounded-lg shadow p-4 space-y-2"
          >
            <h3 className="text-sm font-bold text-gray-800">{location.name}</h3>
            <p className="text-xs text-gray-600">{location.address}</p>
            <div className="flex flex-col space-y-1 text-xs text-emerald-600">
              {location.times.map((time, idx) => (
                <span key={idx}>{time}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBasketPage = () => {
    const totalCost = basketItems.reduce((sum, item) => {
      return sum + parsePrice(item.price) * item.quantity;
    }, 0);

    return (
      <div className="px-4 py-6 space-y-6">
        <button
          onClick={() => setActivePage('home')}
          className="flex items-center text-emerald-600 mb-4"
        >
          <ArrowLeft size={20} />
          <span className="ml-2">Back to Home</span>
        </button>

        <h2 className="text-xl font-bold text-gray-800">Your Basket</h2>

        {basketItems.length === 0 ? (
          <p className="text-gray-600">Your basket is empty.</p>
        ) : (
          <div className="space-y-4">
            {basketItems.map(item => (
              <div key={item.id} className="flex bg-white rounded-lg shadow p-4 items-center">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                <div className="flex-1 ml-4">
                  <h3 className="text-sm font-bold text-gray-800">{item.name}</h3>
                  <p className="text-xs text-gray-600 mt-1">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-yellow-600">{item.price}</p>
                  <p className="text-xs text-gray-500">Subtotal: £{(parsePrice(item.price) * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}

            {/* Total Cost Section */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total Cost:</span>
                <span className="text-lg font-bold text-emerald-600">£{totalCost.toFixed(2)}</span>
              </div>
              <button className="mt-6 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return renderHomePage();
      case 'menu':
        return renderMenuPage();
      case 'mealDetail':
        return renderDetailedMealView();
      case 'pickup':
        return renderPickupPage();
      case 'impact':
        return renderImpactPage();
      case 'basket':
        return renderBasketPage();
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
      { id: 'home', icon: <Home />, label: 'Home' },
      { id: 'menu', icon: <Menu />, label: 'Menu' },
      { id: 'pickup', icon: <MapPin />, label: 'Pickup' },
      { id: 'impact', icon: <Award />, label: 'Impact' },
    ];

    return (
      <nav
        className="bg-white border-t border-gray-200"
        style={{
          height: '60px',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      >
        <div className="flex justify-around">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`flex flex-col items-center py-2 flex-1 ${
                activePage === item.id ? 'text-emerald-600' : 'text-gray-600'
              }`}
              onClick={() => setActivePage(item.id)}
            >
              <div className={`p-1 ${activePage === item.id ? 'bg-emerald-100 rounded-full' : ''}`}>
                {item.icon}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    );
  };

  return (
    <div
      className="bg-gray-100 pb-16"
      style={{
        width: '375px',
        height: '667px',
        margin: '50px auto',
        borderRadius: '20px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Header */}
      <header className="bg-emerald-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Re<span className="text-yellow-500">Serve</span></div>
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer" onClick={() => setActivePage('basket')}>
            <ShoppingCart className="text-white" size={24} />
            {totalBasketCount > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-yellow-500 text-gray-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
              >
                {totalBasketCount}
              </span>
            )}
          </div>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 cursor-pointer">👤</div>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="h-full overflow-y-auto"
        style={{
          paddingBottom: '60px',
        }}
      >
        {renderPage()}
      </main>

      {/* Navigation */}
      {activePage !== 'mealDetail' && <Navigation />}
    </div>
  );
};

export default SustainableMealsApp;