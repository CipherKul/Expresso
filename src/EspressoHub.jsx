import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./App.css";
import hero1 from "./assets/hero1.png";
import hero2 from "./assets/hero2.png";


export default function EspressoHub() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-center items-center py-6 px-4">
        <ul className="flex space-x-8 md:space-x-16 uppercase text-sm tracking-widest">
          <li>
            <Link to="/" className="hover:text-gray-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-gray-500 transition-colors">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-500 transition-colors">
              About Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[110vh] overflow-hidden">
        <img
          src={hero1}
          alt="Coffee shop interior"
          className="w-[100%] h-[100%] pr-4 pl-4 object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center ml-20 z-20">
          <h1 className="font-allison text-3xl md:text-7xl text-[#FEE8CA] mb-12 mt-8">Espresso Hub</h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/menu"
              className="bg-[#f5e9d1] text-black px-8 py-3 rounded-full uppercase
               tracking-wider font-medium hover:bg-white transition-colors"
            >
              Open Menu
            </Link>
            <Link
              to="/contact"
              className="border border-[#f5e9d1] px-8 py-3 rounded-full uppercase font-BebasNeue
               tracking-wider font-medium hover:bg-[#f5e9d1] hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <div className="bg-[#120303]">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="font-serif text-5xl md:text-7xl uppercase text-[#f5e9d1]">Our Menu</h2>
              <p className="text-[#f5e9d1]/80 max-w-md">
                A sophisticated selection of coffee made from premium beans. Our menu features a sleek, contemporary
                variety with a variety of brewing options. The coffee is perfect for adding a touch of elegance to any
                morning or afternoon break.
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center bg-[#f5e9d1] text-black px-8 py-3 rounded-full uppercase tracking-wider font-medium hover:bg-white transition-colors"
              >
                Open Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <img
                  src={hero2}
                  alt="Coffee with latte art"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
} 