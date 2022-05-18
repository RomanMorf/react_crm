import '@testing-library/jest-dom/extend-expect';
import { render, screen, get } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ToggleSwitch from '.'


describe('ToggleSwitch test', () => {
  const changeFn = jest.fn()
  const className = 'someName'

  it('ToggleSwitch render test', () => { 
    render(<ToggleSwitch />)  
  })

  it('ToggleSwitch - props test', () => { 
    const { container } = render(
    <ToggleSwitch onChange={changeFn} checked={false} />)  

    const checkbox = container.getElementsByTagName('input')[0]

    expect(checkbox.checked).toBe(false)
  })

  it('ToggleSwitch - click test', () => { 
    const { container } = render(
    <ToggleSwitch onChange={changeFn} checked={false} />)  

    const checkbox = container.getElementsByTagName('label')[0]
    userEvent.click(checkbox)
    expect(changeFn).toHaveBeenCalled()
  })

  it('ToggleSwitch - className test', () => { 
    const { container } = render(
    <ToggleSwitch 
      onChange={changeFn} 
      className={className} 
      checked={false} 
    />)  

    const checkbox = container.getElementsByClassName(className)[0]
    expect(checkbox).toBeInTheDocument()
  })

  it('ToggleSwitch - round test', () => { 
    const { container } = render(
    <ToggleSwitch 
      onChange={changeFn} 
      className={className} 
      checked={false}
      round
    />)  

    const checkbox = container.getElementsByClassName('round')[0]
    expect(checkbox).toBeInTheDocument()
  })

  it('ToggleSwitch - square test', () => { 
    const { container } = render(
    <ToggleSwitch 
      onChange={changeFn} 
      className={className} 
      checked={false}
    />)  

    const checkbox = container.getElementsByClassName('round')[0]
    expect(checkbox).toBe(undefined)
  })

});
