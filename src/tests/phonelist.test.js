import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import PhonesList from '../pages/PhonesList';
import store from '../reducer/configureStore';

describe('phones list', () => {
  it('renders phonesList page', () => {
    render(
      <Provider store={store}>
        <Router>
          <PhonesList />
        </Router>
      </Provider>,
    );
    const phonesList = document.querySelector('.phones-container');
    expect(phonesList).toBeInTheDocument();
  });
});