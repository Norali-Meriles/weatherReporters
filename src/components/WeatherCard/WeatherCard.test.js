import { render, screen } from '@testing-library/react';
import { ClimaProvider } from '../../providers/ClimaProvider';
import WeatherCard from './WeatherCard';
import weatherCard from '../../utils/test/mock-data';

describe('card WeatherCard', () => {
  test('Esperamos el render de WeatherCard', () => {
    render(<ClimaProvider ><WeatherCard weather={weatherCard}/> </ClimaProvider>);
    const resultado = screen.getByText('18');
    expect(resultado).toBeInTheDocument();
  });
});
