import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPhonesAction } from '../reducer/phones/phones';
import Header from '../components/Header';
import Phone from '../components/Phone';

const PhonesList = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhonesAction(id));
  }, [dispatch]);
  const phonesListData = useSelector((state) => state.phones);
  return (<div>

    <Header previewLink = "/" />
    <ul className="phones-container">
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