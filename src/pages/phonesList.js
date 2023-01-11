import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPhonesAction } from '../reducer/phones/phones';
import Header from '../components/Header';
import Phone from '../components/Phone';

const PhonesList = () => {
  const params = useParams();
  const { id } = params;
  console.log(`voici le brqnsd id ${id}`);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhonesAction(id));
  }, [dispatch]);
  const phonesListData = useSelector((state) => state.phones);
  return (<div>

    <Header previewLink = "/" />
    <ul className="countries-container">
        {
          phonesListData.map((phoneData) => (
          <Phone
          id={phoneData.id}
          key={phoneData.id}
          name={phoneData.name}
          image={phoneData.image} />))
        }

    </ul>
  </div>);
};

export default PhonesList;