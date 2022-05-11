function sortByFunc(arr, sortBy, options = {}) {

  if (options.reverse) {
    return arr.sort((a, b) => {
      if ( a[sortBy] > b[sortBy] ) {
        return -1;
      }
      if ( a[sortBy] < b[sortBy] ) {
        return 1;
      }
      return 0;
    })
  }

  return arr.sort((a, b) => {
    if ( a[sortBy] < b[sortBy] ) {
      return -1;
    }
    if ( a[sortBy] > b[sortBy] ) {
      return 1;
    }
    return 0;
  })

}

export { sortByFunc }