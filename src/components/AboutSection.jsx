import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16  my-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to landing ! We are passionate about Our team is dedicated to
          delivering high-quality solutions that help you achieve your goals and
          make a difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Customer-first</h3>
            <p className="text-gray-500">
              We prioritize your needs above all else.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-500">
              We bring fresh ideas to life with cutting-edge technology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Reliable Support</h3>
            <p className="text-gray-500">
              Our team is here to help you, anytime you need.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Quality Commitment</h3>
            <p className="text-gray-500">
              We never compromise on quality and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
