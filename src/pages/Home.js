import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhoneBrand from '../components/PhoneBrand';
import { getBrandsAction, filtreBrandsAction } from '../reducer/brands/brands';
import Header from '../components/Header';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrandsAction());
  }, [dispatch]);
  const brandsData = useSelector((state) => state.brands);
  const handlesearch = (param) => {
    console.log(param);
    dispatch(filtreBrandsAction(param));
  };

  return (<div>

    <Header previewLink = "/" />
    <div className='banner'>
        <div className='resumeAll'>
          <h2 className='bannerTitle'>All Phone Brands</h2>
          <h2>{brandsData.length}</h2>
        </div>
        <div className='researchbar'>
        <input type='text'
        className='searchinput'
        placeholder='search by brand name'
        onChange={(e) => handlesearch(e.target.value)}
        />
        <button className='searchsubmit' type='button' onClick={handlesearch}>
          Search
        </button>
      </div>
    </div>
    <div></div>
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