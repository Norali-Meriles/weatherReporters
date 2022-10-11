import { render, screen ,fireEvent } from '@testing-library/react';
import { ClimaProvider } from '../../providers/ClimaProvider';
import Search from './Search';
import Select from './Select';
import { location } from '../../utils/test/mock-data';

describe('comonente Search', () => {
  test('Esperamos el render de Search', () => {
    render(<ClimaProvider ><Search location={location}/> </ClimaProvider>);
    const resultado = screen.findByPlaceholderText("Search your city...");
    expect(resultado).toBeInTheDocument();
  });
  test('Esperamos el render de InfoCard', () => {
      const datalist = jest.fn();
      render(<ClimaProvider ><Search location={location}/> </ClimaProvider>);
      const resultado = screen.getAllByTestId("input-search");
      fireEvent.click(resultado);
      expect(datalist ).toHaveLength(10);
    });
   
});