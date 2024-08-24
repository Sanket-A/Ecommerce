import React, { useRef } from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollection';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
  const newCollectionsRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={newCollectionsRef} />
      <Popular />
      <Offers />
      <NewCollections ref={newCollectionsRef} />
      <NewsLetter />
    </>
  );
};

export default Shop;
