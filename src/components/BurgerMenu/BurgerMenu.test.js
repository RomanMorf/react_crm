import '@testing-library/jest-dom/extend-expect';
import { 
  render, 
  screen 
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BurgerMenu from './BurgerMenu'


describe('BurgerMenu component', () => {
  const onCloseMenu = jest.fn()
  const children = <div className='bla'><p>text</p></div>

  it('BurgerMenu render', () => {
    render(<BurgerMenu />);
  })

  it('BurgerMenu close func test - click on button', () => { 
    const { container } = render(<BurgerMenu onCloseMenu={onCloseMenu} />)  

    const closeBtn = container.getElementsByClassName('burgermenu')[0]
    userEvent.click(closeBtn)

    expect(onCloseMenu).toHaveBeenCalled()
  })

  it('BurgerMenu - props - close menu', () => { 
    const { container } = render(
      <BurgerMenu 
        menuOpen={false} 
        onCloseMenu={onCloseMenu} 
      />
    )  

    const wrapper = container.getElementsByClassName('open')
    expect(wrapper.length).toBe(0)
  })

  it('BurgerMenu - props - open menu', () => { 
    const { container } = render(
      <BurgerMenu 
        menuOpen={true} 
        onCloseMenu={onCloseMenu} 
      />
    )  

    const wrapper = container.getElementsByClassName('open')
    expect(wrapper.length).toBe(2)
  })

  it('BurgerMenu - render children', () => { 
    render(
      <BurgerMenu 
        menuOpen={true} 
        onCloseMenu={onCloseMenu}
        children={children}
      /> 
    )  

    const content = screen.getByText('text')
    expect(content).toBeInTheDocument()
  })
});

