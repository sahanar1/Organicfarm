const Contact2 = () => {
  return (
    <div className="flex sm:flex-row flex-col mx-auto max-w-7xl gap-10 mt-10 justify-center">
      {/* About Card */}
      <div className="bg-green-500 text-white p-6 rounded-xl sm:w-[300px] sm:h-[200px]">
        <h2 className="text-lg font-semibold mb-2 font-grace ">About</h2>
        <p className="text-sm">
          Lorem ipsum is simply free text used by copytyping refreshing. Neque
          porro est qui
        </p>
      </div>

      {/* Contact Card */}
      <div className="bg-yellow-400 text-white p-6 rounded-xl sm:w-[300px] sm:h-[200px] ">
        <h2 className="text-lg font-semibold mb-2 font-cursive">Contact</h2>
        <p className="text-sm">+91 00000 00000</p>
        <p className="text-sm">infoamruth@gmail.com</p>
        <p className="text-sm">Mon - Fri: 7:00 am - 6:00 pm</p>
      </div>

      {/* Address Card */}
      <div className="bg-yellow-600 text-white p-6 rounded-xl sm:w-[300px] sm:h-[200px] ">
        <h2 className="text-lg font-semibold mb-2 font-cursive">Address</h2>
        <p className="text-sm">Bangalore, Karnataka, India</p>
        <p className="text-sm">-560094</p>
      </div>
    </div>
  );
};

export default Contact2;
