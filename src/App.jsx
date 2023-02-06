import React from 'react';

import SearchBar from './components/SearchBar';
import Pages from './pages/Pages';


const App = () => {
  return (
    <main className="w-full  ">
      <SearchBar />
      <div className="md:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <Pages />
        </div>
      </div>
    </main>
  );
};

export default App;
