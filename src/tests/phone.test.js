import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Phone from '../components/Phone';
import store from '../reducer/configureStore';

const phoneData = {
  id: 1,
  key: 1,
  name: '3L (2021)',
  image: 'https://fdn2.gsmarena.com/vv/bigpic/alcatel-a3l-2021.jpg',
};

test('renders phone component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
      <Phone
          id={phoneData.id}
          key={phoneData.id}
          name={phoneData.name}
          image={phoneData.image} />
      </Router>
    </Provider>,
  );
  expect(getByText('3L (2021)')).toBeInTheDocument();
});