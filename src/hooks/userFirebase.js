import { getFromDatabase } from 'src/helpers/firebase/getFromDatabase'
import { setToDatabase } from 'src/helpers/firebase/setToDatabase'
import { checkOnExists } from 'src/helpers/firebase/checkOnExists'

function useFirebase() {

  return {
    getFromDatabase,
    setToDatabase,
    checkOnExists,
  }
}

export { useFirebase }