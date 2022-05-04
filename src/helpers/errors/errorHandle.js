import en from "./errors-en";
import ru from "./errors-ru";

import { useToast } from "src/hooks/useToast";

const { toastError } = useToast()

export const errorHandle = (e, lang = 'en') => {
  let errors

  switch (lang) {
    case 'en':
      errors = en
      break;
  
    case 'ru':
      errors = ru
      break;
    
      default:
      break;
  }

  if (errors[e.code]) {
    toastError(errors[e.code])
  } else {
    toastError('Unhandle error')
  }
}