import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from './InputField';


describe('InputField component', () => {
  const onChange = jest.fn()
  const handleInput = jest.fn()
  const handleEnter = jest.fn()
  const handleBlur = jest.fn()
  const value = 'some text'
  const placeholder = 'placeholder text'
  const typeText = 'some typed text'

  it('InputField renders', () => {
    render(<InputField />);
  })

  it('InputField value test', () => {
    render(<InputField value={value} />);

    const input = screen.getByDisplayValue(value)

    expect(input).toBeInTheDocument()
  })

  it('InputField placeholder test', () => {
    render(<InputField placeholder={placeholder} />);

    const label = screen.getByText(placeholder)

    expect(label).toBeInTheDocument()
  })

  it('InputField onChange func test', () => {
    render(
      <InputField 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
      />);

    const input = screen.getByDisplayValue(value)
    userEvent.type(input, typeText)

    expect(onChange).toHaveBeenCalledTimes(typeText.length)
  })

  it('InputField handleInput func test', () => {
    render(
      <InputField 
        value={value} 
        handleInput={handleInput}
        placeholder={placeholder}
      />);

    const input = screen.getByDisplayValue(value)
    userEvent.type(input, typeText)

    expect(handleInput).toHaveBeenCalledTimes(typeText.length)
  })

  it('InputField handleEnter func test', () => {
    render(
      <InputField 
        value={value} 
        handleInput={handleInput}
        handleEnter={handleEnter}
      />);

    const input = screen.getByDisplayValue(value)
    userEvent.type(input, '{enter}')

    expect(handleEnter).toHaveBeenCalled()
  })

  it('InputField handleBlur func test', () => {
    render(
      <InputField 
        value={value} 
        handleInput={handleInput}
        handleEnter={handleEnter}
        handleBlur={handleBlur}
      />);

    const input = screen.getByDisplayValue(value)

    userEvent.click(input)
    userEvent.tab()

    expect(handleBlur).toHaveBeenCalled()
  })

});

