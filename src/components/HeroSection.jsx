import { FaArrowRight } from "react-icons/fa";
import straightphone from '../assets/straightphone.png';

export default function HeroSection() {
  return (
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
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600">
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
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}