import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('Check if render is same as snapshot', async () => {
    const tree = render(<Router><Navbar /></Router>);
    expect(tree).toMatchSnapshot();
  });

  it('Check Rocket is present', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const linkElement = screen.getByText(/Rockets/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('Check Mission is present', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const linkElement = screen.getByText(/Missions/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('Check Profile is present', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const linkElement = screen.getByText(/Profile/i);
    expect(linkElement).toBeInTheDocument();
  });
});
