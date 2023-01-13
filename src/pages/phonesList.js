import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPhonesAction, filtrePhonesAction } from '../reducer/phones/phones';
import Header from '../components/Header';
import Phone from '../components/Phone';

const PhonesList = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhonesAction(id));
  }, [dispatch]);
  const handlesearch = (param) => {
    console.log(param);
    dispatch(filtrePhonesAction(param));
  };
  const phonesListData = useSelector((state) => state.phones);
  let cpt = 0;
  return (<div>

    <Header previewLink = "/" />
    <div className='banner'>
        <div className='resumeAll'>
          <h2 className='bannerTitle'>{phonesListData[0] !== undefined ? phonesListData[0].brandQuery : ''} devices</h2>
          <h2>{phonesListData.length}</h2>
        </div>
        <div className='researchbar'>
        <input type='text'
        className='searchinput'
        placeholder='search by phone name'
        onChange={(e) => handlesearch(e.target.value)}
        />
      </div>
    </div>
    <ul className="phones-container">
        {
          phonesListData.map((phoneData) => {
            cpt += 1;
            return (
          <Phone
          id={phoneData.id}
          key={cpt}
          name={phoneData.name}
          image={phoneData.image} />);
          })
        }

    </ul>
  </div>);
};

export default PhonesList;