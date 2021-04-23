const initialState = {
  users: [],
  isLoading: false,
  resetPassToken: ''
}

export const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        users: payload,
        isLoading: false
      }
    case 'ERROR':
      return {
        ...state,
        isLoading: false
      }
    case 'FETCHED_RESET_PASS_TOKEN':
        return {
          ...state,
          isLoading: false,
          resetPassToken: payload
        }

    default:
      return state
  }
}

export default userReducer
