import axios from 'axios';

const changeSpaseInString = (text) => {
  const lettersArr = text.split('')
  const refactoredLetters = lettersArr.map(el => {
    return el === ' ' ? el = '%20' : el
  })
  return refactoredLetters.join('')
}

const sendTelegramMessage = async ({text, cb, chatId}) => {
  const token = process.env.REACT_APP_TELEGRAM_TOKEN
  const id = chatId || '367145058'

  if (text.trim()) {
    changeSpaseInString(text)
  
    const str = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${text}`
  
    axios.get(str)
      .then( () => {
        cb ? cb() : null
      })
      .catch( e => {
        throw e
      })
  }

}

export { sendTelegramMessage }
