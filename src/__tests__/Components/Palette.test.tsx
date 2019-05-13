import React from 'react';
import { render } from 'react-testing-library';
import { Palette } from '~/Components/Palette';

describe('Palette', () => {
  it('renders correctly', () => {
    const setColor = jest.fn();
    const activeColor = '#4a4a4a';

    const { container } = render(<Palette setColor={setColor} activeColor={activeColor} />);

    expect(container).toMatchSnapshot();
  });
});
