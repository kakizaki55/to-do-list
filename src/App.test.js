import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  const container = render(<App />);
  await screen.findByText('Todo Manager');
  expect(container).toMatchSnapshot();
});
