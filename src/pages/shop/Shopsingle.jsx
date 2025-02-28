import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Shopsingle = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const navigate = useNavigate();

  // Sample product data - in a real app this would come from API/context
  const products = [
    { id: 1, name: 'Apples', price: 50.00, image: '/api/placeholder/400/400', category: 'Fresh Fruits', description: 'Fresh and juicy apples straight from the orchard.' },
    { id: 2, name: 'Bananas', price: 20.00, image: '/api/placeholder/400/400', category: 'Fresh Fruits', description: 'Ripe yellow bananas, perfect for snacking or smoothies.' },
    { id: 3, name: 'Carrot', price: 50.00, image: '/api/placeholder/400/400', category: 'Fresh Vegetables', description: 'Crisp orange carrots, excellent for salads or cooking.' },
    { id: 4, name: 'Garlic', price: 20.00, image: '/api/placeholder/400/400', category: 'Fresh Vegetables', description: 'Fragrant garlic bulbs to enhance your favorite dishes.' },
    { id: 5, name: 'Grapes', price: 100.00, image: '/api/placeholder/400/400', category: 'Fresh Fruits', description: 'Sweet and juicy grapes, perfect for snacking or desserts.' },
    { id: 6, name: 'Lettuce', price: 30.00, image: '/api/placeholder/400/400', category: 'Fresh Vegetables', description: 'Crisp green lettuce for fresh salads and sandwiches.' },
    { id: 7, name: 'Onions', price: 20.00, image: '/api/placeholder/400/400', category: 'Fresh Vegetables', description: 'Essential onions for adding flavor to any dish.' },
    { id: 8, name: 'Potatos', price: 30.00, image: '/api/placeholder/400/400', category: 'Fresh Vegetables', description: 'Versatile potatoes, perfect for roasting, mashing, or frying.' },
    { id: 9, name: 'Red Grapes', price: 100.00, image: '/api/placeholder/400/400', category: 'Fresh Fruits', description: 'Sweet red grapes bursting with flavor.' },
    { id: 10, name: 'Potatos', price: 30.00, image: '/api/placeholder/400/400', category: 'Fresh Vegetables', description: 'Premium quality potatoes from local farms.' },
    { id: 11, name: 'Red Grapes', price: 100.00, image: '/api/placeholder/400/400', category: 'Fresh Fruits', description: 'Organic red grapes, rich in antioxidants and flavor.' }
  ];

  useEffect(() => {
    // Find the product with the matching ID
    const foundProduct = products.find(p => p.id === parseInt(productId));
    
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Product not found, could redirect to 404 or back to shop
      console.error("Product not found");
    }
    
    setLoading(false);
  }, [productId]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Handle back to shop
  const handleBackToShop = () => {
    navigate('/shop');
  };

  if (loading) {
    return <div className="max-w-6xl mx-auto p-6 text-center">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center">
        <p className="text-xl mb-4">Product not found</p>
        <button 
          onClick={handleBackToShop} 
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <nav className="text-sm mb-6">
        <button 
          onClick={handleBackToShop}
          className="text-gray-600 hover:text-green-500"
        >
          &larr; Back to Shop
        </button>
        <span className="text-gray-600 ml-2">› {product.category} › {product.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Product Image */}
        <div className="w-full md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full h-auto"
          />
        </div>

        {/* Product Information */}
        <div className="w-full md:w-1/2">
          <div className="flex justify-between items-center mb-1">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <span className="text-xl text-green-500 font-semibold">₹{product.price.toFixed(2)}</span>
          </div>

          <div className="mb-6 text-sm text-gray-500">(1 Customer Review)</div>

          <p className="text-gray-600 mb-8">
            {product.description || "Aliquam hendrerit a augue iuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque."}
          </p>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block font-medium mb-2">Choose Quantity</label>
            <div className="flex items-center">
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border border-gray-300 p-2 mx-2"
              />
              <div className="flex flex-col ml-2">
                <button
                  onClick={increaseQuantity}
                  className="border border-gray-300 px-2 mb-1"
                >
                  +
                </button>
                <button
                  onClick={decreaseQuantity}
                  className="border border-gray-300 px-2"
                >
                  -
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600 transition">
              Add to cart
            </button>
            <button className="bg-yellow-400 text-white py-3 px-6 rounded hover:bg-yellow-500 transition">
              Add to wishlist
            </button>
          </div>

          {/* Social Share */}
          <div className="flex items-center">
            <span className="mr-4 font-medium">Share with Friends</span>
            <div className="flex gap-4">
              <button className="text-gray-600 hover:text-blue-600">f</button>
              <button className="text-gray-600 hover:text-blue-400">t</button>
              <button className="text-gray-600 hover:text-blue-800">in</button>
              <button className="text-gray-600 hover:text-red-600">p</button>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Description</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet sectetur adipiscin elit cras feuat antesed
          ces condimentum viverra duis autue nim convallis id diam vitae duis
          egety dictum erosin dictum sem. Vivamus sed molestie sapien aliquam et
          facilisis arcu dut molestie augue suspendisse sodales tortor nunced
          quis cto ligula posuere cursus keus aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecated cupidatat non proident sunt in culpa qui
          officia deserunt mollit anim id est laborum ivamus sed molestie
          sapien.
        </p>
        <p className="text-gray-600">
          Aliquam et facilisis arcuut olestie augue. Suspendisse sodales tortor
          nunc quis auctor ligula posuere cursus duis aute irure dolor in
          reprehenderit in voluptate velit esse cill doloreeu fugiat nulla
          pariatur excepteur sint occaecat cupidatat non proident sunt in culpa
          qui officia deserunt mollit anim id est laborum. Vivius sed deliy
          molestie sapien. Aliquam et facilisis arcuut molestie augue
        </p>
      </div>

      {/* Review Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">1 review for {product.name}</h2>

        {/* Individual Review */}
        <div className="flex gap-6 mb-10 pb-6 border-b border-gray-200">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="/api/placeholder/64/64"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Kevin Martin</h3>
            <p className="text-green-500 text-sm mb-2">July 10, 2022</p>
            <p className="text-gray-600">
              It has survived not only five centuries, but also the leap into
              electronic typesetting unchanged. It was popularised in the sheets
              containing lorem ipsum is simply free text. sint occaecat
              cupidatat non proident sunt in culpa qui officia deserunt mollit
              anim id est laborum. Vivius sed deliy molestie sapien.
            </p>
          </div>
        </div>
      </div>

      {/* Add Review Form */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Add a review</h2>
        <form>
          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-600">
                Save my name, email, and website in this browser for the next
                time I comment.
              </span>
            </label>
          </div>

          <div className="mb-6">
            <label className="block mb-2">Your rating</label>
            {/* Rating stars would go here */}
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-2xl cursor-pointer">
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Your Review..."
              className="w-full p-4 border border-gray-200 bg-gray-50 rounded"
              rows={5}
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 border border-gray-200 bg-gray-50 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-4 border border-gray-200 bg-gray-50 rounded"
            />
          </div>

          <button className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600 transition">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shopsingle;