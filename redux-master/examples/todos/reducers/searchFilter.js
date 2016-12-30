const searchFilter = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_FILTER':
      return action.search
    default:
      return state
  }
}

export default searchFilter
