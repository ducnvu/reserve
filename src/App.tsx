import { useState } from 'react';
import { Home, Menu, MapPin, Award, ArrowLeft } from 'lucide-react';
import summerRollsImage from './assets/summer-rolls.jpg';
import lentilImage from './assets/lentil.jpg';
import padThaiImage from './assets/pad-thai.jpg';
import bannerFoodImage from './assets/banner-food.jpg';
import pastaImage from './assets/pasta.jpg';
import mapImage from './assets/map.png';


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
}

const SustainableMealsApp = () => {
  // const [activePage, setActivePage] = useState('home');
  const [activePage, setActivePage] = useState<string>('home');
  // const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const todayMeals: Meal[] = [
    {
      id: 1,
      name: 'Summer Rolls',
      shortDescription: 'Fresh, vibrant rice paper rolls.',
      description: 'Delicate rice paper wraps filled with crisp vegetables, fresh herbs, and vermicelli noodles, served with a tangy peanut dipping sauce',
      price: '£4.50',
      calories: 550,
      protein: 12,
      carb: 85,
      fat: 18,
      time: "18:30 - 19:30",
      location: "123 University Ave",
      co2Saved: '1.2kg',
      imageUrl: summerRollsImage,
    },
    {
      id: 2,
      name: 'Pasta Primavera',
      shortDescription: 'Seasonal veg pasta',
      description: 'Al dente pasta tossed with vibrant seasonal vegetables in a light cream sauce',
      price: '£5.00',
      calories: 620,
      protein: 27,
      carb: 68,
      fat: 16,
      time: "20:30 - 22:30",
      location: "456 Library Lane",
      co2Saved: '1.5kg',
      imageUrl: pastaImage,
    },
    {
      id: 3,
      name: 'Lentil Soup',
      shortDescription: 'Hearty lentil soup',
      description: 'A comforting bowl of hearty lentil soup made with rescued vegetables, aromatic spices, and fresh herbs',
      price: '£3.50',
      calories: 320,
      protein: 13,
      carb: 58,
      fat: 33,
      time: "12:30 - 15:30",
      location: "789 Community Blvd",
      co2Saved: '0.8kg',
      imageUrl: lentilImage,
    },
  ];

  const tomorrowMeals: Meal[] = [
    {
      id: 4,
      name: 'Pad Thai',
      shortDescription: 'Classic Thai stir-fry',
      description: 'A flavorful mix of stir-fried rice noodles, fresh vegetables, tofu or chicken, and a tangy tamarind sauce, topped with crushed peanuts and lime',
      price: '£4.75',
      calories: 510,
      protein: 13,
      carb: 58,
      fat: 33,
      time: "12:30 - 15:30",
      location: "789 Community Blvd",
      co2Saved: '1.1kg',
      imageUrl: padThaiImage,
    },
  ];

  const pickupLocations = [
    {
      id: 1,
      name: 'Student Union',
      address: '123 University Ave',
      times: ['11:30 AM - 2:00 PM', '5:00 PM - 7:00 PM'],
    },
    {
      id: 2,
      name: 'Central Library',
      address: '456 Library Lane',
      times: ['10:00 AM - 1:00 PM', '3:00 PM - 6:00 PM'],
    },
    {
      id: 3,
      name: 'Community Center',
      address: '789 Community Blvd',
      times: ['12:00 PM - 3:00 PM', '6:30 PM - 8:30 PM'],
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
            setActivePage('home');
          }}
          className="flex items-center text-emerald-600"
        >
          <ArrowLeft size={20} />
          <span className="ml-2">Back to Home</span>
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
            <button className="mt-6 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700">
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

  const renderHomePage = () => (
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
  
      {/* Today's Menu */}
      <div className="px-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-gray-800">Today's Menu</h3>
          <span className="text-sm text-emerald-600">See All</span>
        </div>

        {/* Updated Card Layout */}
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {todayMeals.map((meal, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 bg-white rounded-lg overflow-hidden shadow-lg"
              onClick={() => {
                setSelectedMeal(meal);
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
          <span className="text-sm text-emerald-600">See All</span>
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

  const renderMenuPage = () => {
    return (
      <div className="px-4 py-6 space-y-6">
        {/* Today's Meals Section */}
        <div>
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <h2 className="text-sm font-bold text-gray-800">Today - March 4</h2>
            <span className="text-xs font-medium text-emerald-600">Available Now</span>
          </div>
          <div className="space-y-4 mt-4">
            {todayMeals.map((meal) => (
              <div key={meal.id} className="flex bg-white rounded-lg shadow p-4">
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
                    <button className="text-xs bg-emerald-600 text-white px-4 py-1 rounded-md hover:bg-emerald-700">
                      Add
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
  
        {/* Tomorrow's Meals Section */}
        <div>
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <h2 className="text-sm font-bold text-gray-800">Tomorrow - March 5</h2>
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
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">👤</div>
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