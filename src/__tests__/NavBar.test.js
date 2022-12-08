import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

it('renders NavBar correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><NavBar /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
