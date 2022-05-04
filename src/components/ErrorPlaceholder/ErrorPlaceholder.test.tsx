import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorPlaceholder } from './index';

test('renders image', () => {
  render(<ErrorPlaceholder />);
  const element = screen.getByAltText(/logo/i);
  expect(element).toBeInTheDocument();
});
