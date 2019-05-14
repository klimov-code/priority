import React from 'react';
import { render } from 'react-testing-library';
import { ColorPicker } from 'Components/ColorPicker';

describe('ColorPicker', () => {
  it('renders correctly', () => {
    const onChange = jest.fn();
    const activeColor = '#4a4a4a';

    const { container } = render(<ColorPicker onChange={onChange} activeColor={activeColor} />);

    expect(container).toMatchSnapshot();
  });
});
