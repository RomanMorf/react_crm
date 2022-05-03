import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './Checkbox';


describe('Checkbox component', () => {
  const onChange = jest.fn()
  const className = 'class'
  const id = 'checkbox-id'

  it('Checkbox renders', () => {
    render(<Checkbox />);
  })

  it('Checkbox className default test', () => { 
    const { container } = render(
      <Checkbox />)  

    expect(container.firstChild).toHaveClass('checkbox')
  })

  it('Checkbox className modern test', () => { 
    const { container } = render(
      <Checkbox className={className} />)  

    expect(container.firstChild).toHaveClass(`checkbox ${className}`)
  })

  it('Checkbox id test', () => { 
    const { container } = render(
      <Checkbox id={id} />)
      
    expect(container.firstChild).toHaveAttribute('id')
  })


  it('Checkbox onChange func test', () => {
    render(<Checkbox onChange={onChange} />);

    const checkBox = screen.getByRole('checkbox')
    userEvent.click(checkBox)

    expect(onChange).toHaveBeenCalled()
  })

  it('Checkbox checked test', () => {
    render(<Checkbox onChange={onChange} checked={true} />);

    const checkBox = screen.getByRole('checkbox')
    expect(checkBox).toBeChecked()

    checkBox.checked = false
    expect(checkBox).not.toBeChecked()
  })

  it('Checkbox label test', () => {
    const { container } = render(
      <Checkbox 
        onChange={onChange} 
        checked={true} 
      />);
    
    const label = screen.getByRole('checkbox_label')
    userEvent.click(label)

    expect(onChange).toHaveBeenCalled()
  })

});

