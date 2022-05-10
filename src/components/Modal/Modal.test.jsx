import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal'


describe('Modal component', () => {
  const textHeader = 'header text'
  const text = 'some text'
  const onCloseModal = jest.fn()
  const onConfirm = jest.fn()
  const onCancel = jest.fn()
  const children = <div className='bla'><p>text</p></div>


  it('Modal render', () => {
    render(<Modal />);
  })

  it('Modal close func test - click on button', () => { 
    render(<Modal onCloseModal={onCloseModal} />)  

    const closeBtn = screen.getByRole('button')
    userEvent.click(closeBtn)

    expect(onCloseModal).toHaveBeenCalled()
  })

  it('Modal close func test - click outside', () => { 
    const { container } = render(<Modal onCloseModal={onCloseModal} />)  

    const wrapper = container.getElementsByClassName('modal_wrapper')
    userEvent.click(wrapper[0])

    expect(onCloseModal).toHaveBeenCalled()
  })

  it('Modal header text test', () => { 
    const { container } = render(
      <Modal 
        onCloseModal={onCloseModal} 
        textHeader={textHeader}
      />)  

    const header = container.getElementsByClassName('modal_header')[0]

    expect(header.innerHTML).toContain(textHeader)
  })

  it('Modal text test', () => { 
    const { container } = render(
      <Modal 
        onCloseModal={onCloseModal} 
        text={text}
      />)  

    const main = container.getElementsByClassName('modal_main')[0]

    expect(main.innerHTML).toContain(text)
  })

  it('Modal confirmbtn-mode test', () => { 
    const { container } = render(
      <Modal 
        onCloseModal={onCloseModal} 
        text={text}
        confirmBtn
      />)

    const buttons = container.getElementsByTagName('button')

    expect(buttons[0].id).toEqual('confirm')
    expect(buttons[1].id).toEqual('cancel')
    expect(buttons.length).toEqual(3)
  })

  it('Modal onConfirm func test', () => { 
    const { container } = render(
      <Modal 
        onCloseModal={onCloseModal} 
        onConfirm={onConfirm}
        text={text}
        confirmBtn
      />)

    const confirmBtn = container.getElementsByTagName('button')[0]
    userEvent.click(confirmBtn)

    expect(onConfirm).toHaveBeenCalled()
  })

  it('Modal onCancel func test', () => { 
    const { container } = render(
      <Modal 
        onCloseModal={onCloseModal} 
        onCancel={onCancel}
        text={text}
        confirmBtn
      />)

    const cancelBtn = container.getElementsByTagName('button')[1]
    userEvent.click(cancelBtn)

    expect(onCancel).toHaveBeenCalled()
  })

  it('Modal children render test', () => { 
    render(
      <Modal 
        onCloseModal={onCloseModal} 
        children={children}
        text={text}
      />)

    const content = screen.getByText('text')

    expect(content).toBeInTheDocument()
  })

});

