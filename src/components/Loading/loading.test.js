import { render, screen } from '@testing-library/react';
import { ClimaProvider } from '../../providers/ClimaProvider';
import Loading from './Loading';

describe('componente Loading', () => {
  test('Esperamos de loading', () => {
    render(<ClimaProvider ><Loading /> </ClimaProvider>);
    const resultado = screen.getByTestId('loading-card');
    expect(resultado).toBeInTheDocument();
  });
});
