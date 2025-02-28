const AgricultureBlog = () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Bringing Food Production Back To Cities",
      excerpt:
        "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
      date: "05 July 2022",
      author: "Kevin Martin",
      comments: 1,
      image: "/api/placeholder/470/300",
      slug: "bringing-food-production",
    },
    {
      id: 2,
      title: "The Future of Farming, Smart Irrigation Solutions",
      excerpt:
        "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
      date: "05 July 2022",
      author: "Kevin Martin",
      comments: 2,
      image: "/api/placeholder/470/300",
      slug: "smart-irrigation-solutions",
    },
    {
      id: 3,
      title: "Agronomy and relation to Other Sciences",
      excerpt:
        "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
      date: "05 July 2022",
      author: "Kevin Martin",
      comments: 0,
      image: "/api/placeholder/470/300",
      slug: "agronomy-relation-sciences",
    },
  ];

  // Latest posts for the sidebar
  const latestPosts = [
    {
      id: 1,
      title: "Bringing Food Production Back To Cities",
      author: "Kevin Martin",
      image: "/api/placeholder/80/80",
    },
    {
      id: 2,
      title: "The Future of Farming, Smart Irrigation Solutions",
      author: "Kevin Martin",
      image: "/api/placeholder/80/80",
    },
    {
      id: 3,
      title: "Agronomy and relation to Other Sciences",
      author: "Kevin Martin",
      image: "/api/placeholder/80/80",
    },
  ];

  // Categories for the sidebar
  const categories = [
    "Agriculture",
    "Farm",
    "Farming",
    "Fresh Vegetables",
    "Harvest",
    "Organic Food",
  ];

  // Tags for the sidebar
  const tags = ["Agriculture", "Farming", "Harvest", "Organic", "Vegetables"];

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 font-sans">
      <div className="flex flex-col md:flex-row">
        {/* Main content */}
        <div className="w-full md:w-2/3 p-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="mb-12 bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-green-500 text-white px-4 py-2 text-sm">
                  {post.date}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline mr-1 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    by {post.author}
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline mr-1 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    {post.comments}{" "}
                    {post.comments === 1 ? "Comment" : "Comments"}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3 text-gray-800">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <button className="text-gray-700 font-semibold hover:text-green-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3 p-4">
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full py-3 pl-4 pr-10 bg-yellow-400 text-white placeholder-white rounded-lg focus:outline-none"
              />
              <div className="absolute right-3 top-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Latest Posts */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Latest Posts
            </h3>
            {latestPosts.map((post) => (
              <div key={post.id} className="flex mb-4 items-center">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-md mr-3"
                />
                <div>
                  <p className="text-sm text-yellow-500 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    by {post.author}
                  </p>
                  <h4 className="font-semibold text-gray-800 hover:text-green-600 cursor-pointer">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-green-600">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Tags</h3>
            <div className="flex flex-wrap">
              {tags.map((tag, index) => (
                <a
                  key={index}
                  href="#"
                  className="mr-2 mb-2 px-3 py-1 bg-gray-200 text-sm text-gray-700 rounded-md hover:bg-green-500 hover:text-white"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgricultureBlog;
