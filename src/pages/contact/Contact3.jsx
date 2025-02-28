const Contact3 = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-auto max-w-5xl p-4 mt-16">
      {/* Google Map Section */}
      <div className="w-full lg:w-1/2 h-96 lg:h-full">
        <iframe
          title="Google Map"
          className="w-full h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9930.536889062984!2d-0.12325!3d51.503186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cb7dcad2d5%3A0x38cda2f8b2b8a541!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1700000000000"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 bg-gray-100 p-10 flex flex-col justify-center">
        <h4 className="text-yellow-500 text-lg font-semibold">Contact us</h4>
        <h2 className="text-3xl font-bold mb-6">Write a Message</h2>

        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-1/2 p-3 border border-gray-300 rounded-md"
            />
          </div>
          <textarea
            placeholder="Write a Message"
            className="w-full p-3 border border-gray-300 rounded-md h-32"
          ></textarea>
          <button className="bg-green-500 text-white py-3 px-6 rounded-md w-full lg:w-auto">
            Send a Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact3;
