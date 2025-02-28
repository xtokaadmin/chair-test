import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

// Create placeholder components since the actual components aren't properly exported yet
const HeroSection = () => {
  return (
    <section className="h-[800px] w-full bg-blue-50 flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
          Experience Aviation Excellence
        </h1>
        <p className="text-xl text-blue-700 max-w-2xl mx-auto mb-8">
          Discover the future of flight with Cha Aircraft's innovative and
          luxurious fleet
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors">
          Explore Our Fleet
        </button>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559628233-100c798642d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Aircraft in flight"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
    </section>
  );
};

const AircraftCategoriesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16">
          Our Aircraft Categories
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Commercial Aircraft Column */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Commercial Aircraft
            </h3>
            <img
              src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Commercial Aircraft"
              className="w-full h-64 object-cover rounded-md mb-6"
            />
            <p className="text-gray-700 mb-6">
              Our commercial fleet offers unparalleled comfort and efficiency
              for airlines worldwide. From regional jets to wide-body airliners,
              we provide cutting-edge technology and sustainable solutions.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Fuel-efficient designs
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Advanced passenger comfort
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Industry-leading safety features
              </li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
              View Commercial Fleet
            </button>
          </div>

          {/* Private Aircraft Column */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Private Aircraft
            </h3>
            <img
              src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Private Aircraft"
              className="w-full h-64 object-cover rounded-md mb-6"
            />
            <p className="text-gray-700 mb-6">
              Experience luxury and performance with our private aircraft
              collection. From light jets to ultra-long-range business aircraft,
              we deliver personalized flying experiences for discerning clients.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Customizable interiors
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Extended range capabilities
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Concierge maintenance services
              </li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
              Explore Private Jets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <AircraftCategoriesSection />
      </motion.div>
    </div>
  );
};

export default Home;
