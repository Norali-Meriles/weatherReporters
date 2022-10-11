import { render, screen } from '@testing-library/react';
import { ClimaProvider } from '../../providers/ClimaProvider';
import InfoCards from './InfoCards';
import { weatherInfoCard } from '../../utils/test/mock-data';

describe('card InfoCard', () => {
  test('Esperamos el render de InfoCard', () => {
    render(<ClimaProvider ><InfoCards weather={weatherInfoCard}/> </ClimaProvider>);
    const resultado = screen.getByText('10 km');
    expect(resultado).toBeInTheDocument();
  });
});
