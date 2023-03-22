import React from "react";

type Props = {
  onSearch: (query: string) => void;
};

const Navbar: React.FC<Props> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="bg-black text-white py-4 px-8 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Movie App</h1>
      <form onSubmit={handleSearch}>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for movies"
            className="py-2 px-4 mr-4 rounded-lg bg-gray-800 text-white outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-black py-2 px-4 rounded-lg font-semibold"
          >
            Search
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
