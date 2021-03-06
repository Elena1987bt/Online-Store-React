import React from 'react';
import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';
import Promotion from '../components/Promotion/Promotion';
import Carousel from '../components/Carousel/Carousel';
import { images } from '../utils/images';
import SingleBrand from '../components/SingleBrand/SingleBrand';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Promotion />
      <Carousel
        Slide={SingleBrand}
        products={images}
        title="Shop By Brand"
        subtitle="Select from the premium product brands and save plenty money"
        slidesToShow={5}
        slideToShowMobile={3}
      />
    </div>
  );
};

export default Home;
