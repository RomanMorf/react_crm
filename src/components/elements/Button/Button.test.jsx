import '@testing-library/jest-dom/extend-expect';
import { render, screen, get } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Button from ".";
import logo from 'src/assets/img/google_logo.svg'


describe('Button test', () => {
  const actionFnc = jest.fn()
  const btnText = 'text'
  const btnClassName = 'someName'

  it('Button render test', () => { 
    render(<Button />)  
  })

  it('Button name test', () => { 
    render(<Button name={btnText} />)  

    const name = screen.getByText(btnText)

    expect(name).toBeInTheDocument()
  })

  it('Button click test', () => {
    render(
      <Button 
        name={btnText} 
        onClick={actionFnc} 
      />)  

    const btn = screen.getByRole('button')
    userEvent.click(btn)

    expect(actionFnc).toHaveBeenCalled()
  })

  it('Button img test', () => { 
    render(
      <Button 
        name={btnText} 
        img={logo}
      />)  

    const btnImg = screen.getByRole('img')

    expect(btnImg).toBeInTheDocument()
  })

  it('Button className default test', () => { 
    const { container } = render(
      <Button img={logo} />)  

    expect(container.firstChild).toHaveClass('button')
  })

  it('Button className modern test', () => { 
    const { container } = render(
      <Button  className={btnClassName} />)  

    expect(container.firstChild).toHaveClass(`${btnClassName} button`)
  })

  it('Button multiply test', () => { 
    const { container } = render(
      <Button
        name={btnText} 
        onClick={actionFnc} 
        img={logo}
        className={btnClassName} 
      />)

    const btnImg = screen.getByRole('img')
    const btn = screen.getByRole('button')
    const name = screen.getByText(btnText)

    userEvent.click(btn)
    userEvent.click(btn)

    expect(name).toBeInTheDocument()
    expect(actionFnc).toHaveBeenCalledTimes(2)
    expect(btnImg).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(`${btnClassName} button`)
  })

});
