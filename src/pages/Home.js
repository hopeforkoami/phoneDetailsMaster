import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhoneBrand from '../components/PhoneBrand';
import { getBrandsAction } from '../reducer/phones/phones';
import Header from '../components/Header';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrandsAction());
  }, [dispatch]);
  const brandsData = useSelector((state) => state.phones);
  return (<div>

    <Header previewLink = "/" />
    <ul className="brands-container">
        {
          brandsData.map((brandData) => (
          <PhoneBrand
          id={brandData.id}
          key={brandData.id}
          brand={brandData.name}
          total={brandData.nbrePhone}
          brandQuery={brandData.brandQuery}/>))
        }

    </ul>
  </div>);
};

export default Home;