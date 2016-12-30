const visibilityFilter = (state = {visibility:'SHOW_ALL', search:''}, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return Object.assign({}, state,{visibility:action.filter});
   case 'SET_SEARCH_FILTER':
      return Object.assign({}, state,{search:action.search}); 
    default:
      return state
  }
}

export default visibilityFilter
