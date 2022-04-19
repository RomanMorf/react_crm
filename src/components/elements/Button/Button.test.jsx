import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import Button from ".";

describe('Button test', () => {
  it('Button render', () => { 
    render(<Button />)
  })

  it('Button name test', () => { 
    render(<Button name='text' />)

    const btn = screen.getByRole('button')

    expect(btn).toBeInTheDocument()
  })

});
