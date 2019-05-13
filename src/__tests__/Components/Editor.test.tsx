import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import { Editor } from '~/Components';

describe('Editor', () => {
  it('renders correctly', () => {
    const { container } = render(<Editor />);

    expect(container).toMatchSnapshot();
  });

  it('sets "Name"', () => {
    const { getByPlaceholderText } = render(<Editor name={'first'} />);
    const input = getByPlaceholderText('Name');
    const newName = 'second';

    fireEvent.change(input, { target: { value: newName } });

    expect(input).toHaveProperty('value', newName);
  });

  it('sets "Type"', async () => {
    const { container, getByText } = render(<Editor />);
    const targetType = 'Date range';

    let input: HTMLElement;
    await waitForElement(() => (input = container.querySelector('.type__input input')));
    fireEvent.change(input, { target: { value: 'd' } });

    await waitForElement(() => container.querySelector('.type__menu'));
    const option = getByText(targetType);
    fireEvent.click(option);

    let singleValue: HTMLElement;
    await waitForElement(() => (singleValue = container.querySelector('.type__single-value')));
    expect(singleValue.textContent).toBe(targetType);
  });
});
