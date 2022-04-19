import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import InputField from './InputField';

const onChange = jest.fn()

describe('InputField component', () => {
  it('InputField renders', () => {
    render(<InputField />);
  })

  it('InputField renders', () => {
    render(<InputField placeholder="placeholder"  />);

    // const input = screen.getByPlaceholderText('placeholder')
    // expect(input).toBeInTheDocument()
  })


});

