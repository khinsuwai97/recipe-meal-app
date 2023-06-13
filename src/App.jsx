import React, { Fragment, useState } from 'react';
import SearchBar from './components/SearchBar';
import Pages from './pages/Pages';

const App = () => {
  const [showPage, setShowPage] = useState(null);

  const handleShowPage = () => {
    setShowPage(false);
  };

  const handleBacktoFirstPage = () => {
    setShowPage(true);
  };

  return (
    <Fragment>
      <main className="w-full ">
        {!showPage && <SearchBar />}
        <div className="md:px-16 px-6">
          <div className="xl:max-w-[1280px] w-full">
            <Pages
              showPage={showPage}
              handleShowPage={handleShowPage}
              handleBacktoFirstPage={handleBacktoFirstPage}
            />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
