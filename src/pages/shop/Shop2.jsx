import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Shop2() {
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState('Default sorting');
  const navigate = useNavigate();
  
  const categories = [
    { name: 'All', icon: '🍎🥦' },
    { name: 'Fresh Vegetables', icon: '🥦' },
    { name: 'Fresh Fruits', icon: '🍎' },
    { name: 'Mangoes', icon: '🥭' },
    { name: 'Organic Food', icon: '🌱' },
    { name: 'Harvest', icon: '🌾' },
    { name: 'Millets', icon: '🌾' },
  ];
  
  const products = [
    { id: 1, name: 'Apples', price: 50.00, image: '/api/placeholder/240/240', category: 'Fresh Fruits' },
    { id: 2, name: 'Bananas', price: 20.00, image: '/api/placeholder/240/240', category: 'Fresh Fruits' },
    { id: 3, name: 'Carrot', price: 50.00, image: '/api/placeholder/240/240', category: 'Fresh Vegetables' },
    { id: 4, name: 'Garlic', price: 20.00, image: '/api/placeholder/240/240', category: 'Fresh Vegetables' },
    { id: 5, name: 'Grapes', price: 100.00, image: '/api/placeholder/240/240', category: 'Fresh Fruits' },
    { id: 6, name: 'Lettuce', price: 30.00, image: '/api/placeholder/240/240', category: 'Fresh Vegetables' },
    { id: 7, name: 'Onions', price: 20.00, image: '/api/placeholder/240/240', category: 'Fresh Vegetables' },
    { id: 8, name: 'Potatos', price: 30.00, image: '/api/placeholder/240/240', category: 'Fresh Vegetables' },
    { id: 9, name: 'Red Grapes', price: 100.00, image: '/api/placeholder/240/240', category: 'Fresh Fruits' },
    { id: 10, name: 'Potatos', price: 30.00, image: '/api/placeholder/240/240', category: 'Fresh Vegetables' },
    { id: 11, name: 'Red Grapes', price: 100.00, image: '/api/placeholder/240/240', category: 'Fresh Fruits' }
  ];

  // Function to handle product click
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm mb-6">
        <span className="text-gray-600">Home › Fruits & Vegetables › All</span>
      </nav>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <h2 className="font-bold text-xl mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className={`flex items-center p-2 rounded ${category.name === 'All' ? 'bg-purple-100' : 'hover:bg-gray-100'}`}
                >
                  <span className="mr-2 w-6">{category.icon}</span>
                  <span className={`${category.name === 'All' ? 'text-purple-700' : 'text-gray-800'}`}>
                    {category.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Sort Bar */}
          <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
            <div className="w-full md:w-1/2">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full p-3 rounded bg-yellow-300 text-gray-700 placeholder-gray-600"
              />
            </div>
            <div className="w-full md:w-1/4">
              <select 
                className="w-full p-3 rounded border border-gray-300"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Default sorting</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
                <option>Sort by name</option>
              </select>
            </div>
          </div>
          
          <div className="mb-4 text-gray-500">
            Showing 1-9 of 10 results
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="p-4 flex justify-center bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-48 w-auto object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                  <p className="text-green-500 mb-4">₹ {product.price.toFixed(2)}</p>
                  <button 
                    className="w-full py-2 px-4 bg-white text-pink-500 border border-pink-500 rounded hover:bg-pink-50 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the product click
                      // Add to cart logic here
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav className="inline-flex rounded-md shadow-sm">
              <button 
                className={`py-2 px-4 rounded-l-md ${page === 1 ? 'bg-green-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setPage(1)}
              >
                1
              </button>
              <button 
                className={`py-2 px-4 ${page === 2 ? 'bg-green-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setPage(2)}
              >
                2
              </button>
              <button className="py-2 px-4 rounded-r-md bg-white text-gray-700 hover:bg-gray-50">
                &rsaquo;
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop2;