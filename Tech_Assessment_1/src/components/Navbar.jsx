function Navbar({ goBack }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-800 shadow-lg">
      <h1 className="text-2xl font-bold">🌍 Weatherly</h1>
      <button
        onClick={goBack}
        className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Back
      </button>
    </nav>
  );
}

export default Navbar;
