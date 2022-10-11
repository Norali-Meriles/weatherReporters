import { render, screen } from '@testing-library/react';
import { ClimaProvider } from '../providers/ClimaProvider';
import HomePage from './HomePage';

describe('card InfoCard', () => {
  test('Esperamos el render de InfoCard', () => {
    render(<ClimaProvider ><HomePage /> </ClimaProvider>).toReturn();
  });
});
