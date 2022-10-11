import { render } from '@testing-library/react';
import WeatherCard from './WeatherCard';

describe('Weather Card test', () => {
  test('Esperamos que renderice el componente WeatherCard', () => {
    render(<WeatherCard />);
  });
});
