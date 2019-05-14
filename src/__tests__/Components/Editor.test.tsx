import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import { Editor } from 'Components';

describe('Editor', () => {
  it('renders correctly', () => {
    const { container } = render(<Editor />);

    expect(container).toMatchSnapshot();
  });

  it('can add or update name', () => {
    const newName = 'second';
    const { getByPlaceholderText } = render(<Editor name={'first'} />);
    const input = getByPlaceholderText('Name');

    fireEvent.change(input, { target: { value: newName } });

    expect(input).toHaveProperty('value', newName);
  });

  it('can add or update type', async () => {
    const targetType = 'Date range';
    const { container, getByText } = render(<Editor />);

    const input = await waitForElement(() => container.querySelector('.type__input input'));
    fireEvent.change(input, { target: { value: 'd' } });

    await waitForElement(() => container.querySelector('.type__menu'));
    const option = getByText(targetType);
    fireEvent.click(option);

    const singleValue = await waitForElement(() => container.querySelector('.type__single-value'));
    expect(singleValue.textContent).toBe(targetType);
  });

  it('can be made sub', async () => {
    const priorityList = [
      { value: 1, label: 'parent1' },
      { value: 2, label: 'parent2' },
      { value: 3, label: 'parent3' },
    ];
    const targetParent = 'parent2';
    const { container, getByText } = render(
      <Editor editorType={'create'} priorityList={priorityList} />
    );

    const input = await waitForElement(() => container.querySelector('.sub__input input'));
    fireEvent.change(input, { target: { value: '2' } });

    await waitForElement(() => container.querySelector('.sub__menu'));
    const option = getByText(targetParent);
    fireEvent.click(option);

    const singleValue = await waitForElement(() => container.querySelector('.sub__single-value'));
    expect(singleValue.textContent).toBe(targetParent);
  });
});
