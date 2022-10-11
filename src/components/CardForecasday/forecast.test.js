import { render, screen } from '@testing-library/react';
import { ClimaProvider } from '../../providers/ClimaProvider';
import Forecast from './Forecast';
import { weather } from '../../utils/test/mock-data';

describe('card forecast', () => {
  test('Esperamos el render de forecast', () => {
    render(<ClimaProvider ><Forecast weather={weather}/> </ClimaProvider>);
    const resultado = screen.getByText('Mon 10 Oct');
    expect(resultado).toBeInTheDocument();
  });
});
