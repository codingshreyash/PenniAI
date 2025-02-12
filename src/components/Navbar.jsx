import logo from '../assets/logo.png'; // Adjust the path as necessary

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-2.5 left-0 w-full bg-white z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-3 border border-gray-300 rounded-lg shadow-md">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" /> {/* Adjust size as needed */}
            <span className="font-bold text-xl">Penni AI</span>
          </div>

          <div className="hidden md:flex items-left space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#learn" className="text-gray-600 hover:text-gray-900">Learn</a>
          </div>

          <div className="flex items-center space-x-4">
          <button className="bg-pink-600 text-white hover:text-gray-900">Log in</button>
            <button className="text-gray-600 hover:text-gray-900">Sign up</button>
            
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent navbar from covering content */}
      <div className="pt-20"></div>
    </>
  );
}
