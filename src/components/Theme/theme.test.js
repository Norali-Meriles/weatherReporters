import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../providers/ThemeProvider';
import Theme from './Theme';

describe('card Theme', () => {
  test('Esperamos el cambio de estilo', () => {
    render(<ThemeProvider><Theme/> </ThemeProvider>);
    const switchElement = screen.queryByRole('switch');
    fireEvent.click(switchElement);
    expect(switchElement).toHaveClass('dark');
  });
});
