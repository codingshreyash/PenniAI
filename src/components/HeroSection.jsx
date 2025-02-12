import React from "react";
import { FaArrowRight, FaChartPie, FaBell, FaLock } from "react-icons/fa";
import straightphone from "../assets/straightphone.png";
import jawn from "../assets/jawn.jpg";

export default function HeroSection() {
  return (
    <div>
      {/* 
        HERO SECTION
        ------------
      */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">
              Smarter <span className="text-customPink">Spending,</span>
              <br />
              Smart Saving.
            </h1>
            <p className="text-gray-600 text-xl mb-8">
              Your AI Agent for Smart Spending. Find hidden savings,
              track expenses, and optimize your finances, automatically.
            </p>
            <div className="space-x-4">
              <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600">
                Start saving
              </button>
              <button className="border border-gray-300 px-8 py-3 rounded-full font-bold hover:bg-transparent hover:border-gray-400 hover:text-gray-400">
                Learn more
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={straightphone}
              className="w-full max-w-sm mx-auto"
              alt="Phone mockup"
            />
          </div>
        </div>
      </div>

      {/* 
        FEATURE ICONS ROW 
        -----------------
      */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center mt-20 mb-16">
        <div className="flex flex-col items-center">
          <FaChartPie className="text-pink-600 text-5xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Categorize expenses</h3>
          <p className="text-gray-600">
            See exactly where your money goes and track each category.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaBell className="text-pink-600 text-5xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Personalized alerts</h3>
          <p className="text-gray-600">
            Get tips on ways to cut costs and save more every month.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaLock className="text-pink-600 text-5xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Privacy first</h3>
          <p className="text-gray-600">
            Your data is never shared—your privacy remains our top priority.
          </p>
        </div>
      </section>

      {/*
        SAVING EFFORTLESS + CARDS SLIDER
        --------------------------------
      */}
      <section className="bg-pink-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your AI Agent Makes <span className="text-pink-600">Saving</span> Effortless.
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Track expenses, optimize spending, and unlock hidden savings in real time.
            </p>
          </div>

          {/* Mock slider area */}
          <div className="bg-pink-600 p-6 rounded-xl shadow-lg relative">
            <div className="text-white text-lg font-bold mb-6">Filter your spend</div>
            <div className="flex space-x-6 overflow-x-auto hide-scroll-bar">
              {/* Card 1 */}
              <div className="min-w-[250px] bg-white text-gray-800 p-4 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Starbucks</h4>
                <p>
                  You've Spent: <span className="font-bold">$17.99</span>
                </p>
                <p className="text-sm text-gray-600">This month</p>
                <button className="bg-pink-600 text-white px-4 py-1 rounded-full mt-4 hover:bg-pink-600">
                  Save
                </button>
              </div>
              {/* Card 2 */}
              <div className="min-w-[250px] bg-white text-gray-800 p-4 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Netflix</h4>
                <p>
                  You've Spent: <span className="font-bold">$64.99</span>
                </p>
                <p className="text-sm text-gray-600">This month</p>
                <button className="bg-pink-600 text-white px-4 py-1 rounded-full mt-4 hover:bg-pink-600">
                  Save
                </button>
              </div>
              {/* Card 3 */}
              <div className="min-w-[250px] bg-white text-gray-800 p-4 rounded-xl">
                <h4 className="font-bold text-lg mb-2">Amazon</h4>
                <p>
                  You've Spent: <span className="font-bold">$154.50</span>
                </p>
                <p className="text-sm text-gray-600">This month</p>
                <button className="bg-pink-600 text-white px-4 py-1 rounded-full mt-4 hover:bg-pink-600">
                  Save
                </button>
              </div>
            </div>
            {/* Example total at bottom */}
            <div className="absolute bottom-4 right-4 text-white">
              <p className="text-sm">
                Total Spent this month: <span className="font-bold">$236.48</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        HOW IT WORKS 
        ------------
      */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            How Penni AI Works in <span className="text-pink-600">3 Simple Steps</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Steps */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-pink-600 text-white rounded-full p-3">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Securely link your bank</h4>
                <p className="text-gray-600">
                  Authorize Penni AI to sync your expenses so you never miss a dollar.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-pink-600 text-white rounded-full p-3">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Automated analysis</h4>
                <p className="text-gray-600">
                  Penni AI automatically finds unnecessary charges or overspending.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-pink-600 text-white rounded-full p-3">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Get custom recommendations</h4>
                <p className="text-gray-600">
                  Penni suggests how to optimize your budget and reduce monthly costs.
                </p>
              </div>
            </div>

            <div className="space-x-4 mt-4">
              <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600">
                Start saving
              </button>
              <button className="border border-gray-300 px-8 py-3 rounded-full font-bold hover:border-gray-400 hover:bg-transparent hover:text-gray-400">
                Learn more
              </button>
            </div>
          </div>

          {/* Center: Illustration */}
          <div className="relative">
            <img
              src={jawn}
              alt="User analyzing finances"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
