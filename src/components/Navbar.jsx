export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
      <div className="flex items-center">
        <span className="font-bold text-xl">Penni AI</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
        <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
        <a href="#learn" className="text-gray-600 hover:text-gray-900">Learn</a>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">Log in</button>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Sign up</button>
      </div>
    </nav>
  );
}
