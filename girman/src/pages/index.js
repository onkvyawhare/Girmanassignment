import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-100 min-h-screen flex flex-col">
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto flex justify-around items-center py-4 px-8">
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <div>
              <Image src="/logo.png" width={180} height={60} alt="Logo" />
            </div>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-8 text-sm">
            <Link href="#" className="text-blue-600 font-bold text-lg underline">SEARCH</Link>
            <Link href="http://girmantech.com" className="text-gray-700 font-bold text-lg hover:text-blue-600 hover:underline">WEBSITE</Link>
            <Link href="https://www.linkedin.com/company/girmantech/posts/?feedView=all" className="text-gray-700 text-lg font-bold hover:text-blue-600 hover:underline">LINKEDIN</Link>
            <Link href="mailto:contact@girmantech.com" className="text-gray-700 text-lg hover:text-blue-600 hover:underline font-bold">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-32">
        {/* Large Girman Logo */}
        <div className="flex items-center justify-center space-x-10">
          <Image src="/megalogo2.png" width={180} height={120} alt="Girman Logo" />
          <Image src="/megatext.png" width={550} height={120} alt="Girman Text" />
        </div>

        {/* Search Bar */}
        <div className="mt-12">
          <div className="relative w-full mx-auto">
            <input
              type="text"
              className="border rounded-full px-4 py-2 pl-12 w-96 shadow-md"
              value={query}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress} // Handle Enter key press
              placeholder="Search"
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400 cursor-pointer" onClick={handleSearch}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
