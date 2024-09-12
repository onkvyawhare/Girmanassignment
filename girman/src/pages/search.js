import fs from 'fs';
import path from 'path';
import UserCard from '@/components/UserCard';
import { Grid2 } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export async function getStaticProps() {
  // Construct the path to the JSON file inside the `src` folder
  const filePath = path.join(process.cwd(), 'src', 'data', 'users.json');
  
  // Read and parse the JSON data
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  return {
    props: {
      data
    }
  };
}

export default function Search({ data }) {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Retrieve query from URL
    const { query: queryParam } = router.query;
    if (queryParam) {
      setQuery(queryParam);
      filterData(queryParam);
    }
  }, [router.query]);

  const handleSearchChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (newQuery.trim()) {
      // Redirect to the search page with the query as a parameter
      router.push(`/search?query=${encodeURIComponent(newQuery)}`);
      filterData(newQuery);
    } else {
      // Optionally, you can redirect to a default state or handle empty query
      router.push('/');
      setFilteredData(data);
      setError('');
    }
  };

  const filterData = (query) => {
    const results = data.filter(person =>
      person.first_name.toLowerCase().includes(query.toLowerCase())
    );
    if (results.length > 0) {
      setFilteredData(results);
      setError('');
    } else {
      setFilteredData([]);
      setError('No results found');
    }
  };

  const handleFetchDetails = (name) => {
    alert(`Fetching details for ${name}`);
  };

  return (
    <div className='bg-gradient-to-b from-white to-blue-100'>
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto flex justify-evenly items-center py-4 px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo.png" width={180} height={60} alt="Logo" />
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              className="border rounded-full px-4 py-2 pl-12 w-full shadow-md"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </nav>
      <div className='mt-20'>
        {error && <div className='text-red-500 text-center mb-4'>
          {<Image src="/error.png" width={500} height={300} className='mx-auto'/>}
        </div>}
        <Grid2 container spacing={3} justifyContent="center">
          {filteredData.map((person, index) => (
            <Grid2 
              item 
              key={index} 
              xs={12} 
              sm={6} 
              md={4}  // Ensure that 3 cards fit per row on medium and larger screens
            >
              <UserCard
                firstname={person.first_name} 
                lastname={person.last_name} 
                location={person.city}
                phone={person.contact_number}
                onFetchDetails={() => handleFetchDetails(person.first_name)}
              />
            </Grid2>
          ))}
        </Grid2>
      </div>
    </div>
  );
}
