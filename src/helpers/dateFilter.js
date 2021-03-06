export const dateFilter = (value, format = 'date') => {
  const options = {};

  if (format.includes('date')) {
    options.day = '2-digit'
    options.month = '2-digit' // long
    options.year = 'numeric'
  }  
  
  if (format.includes('time')) {
    options.hour = '2-digit'
    options.minute = '2-digit'
    options.second = '2-digit'
  }

  const locale = 'en-EN' 
  // const locale = 'ru-RU'

  return new Intl.DateTimeFormat(locale, options)
    .format(new Date(value.toString().length === 13 ? value : value*1e3))
}
