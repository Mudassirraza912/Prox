import { Alert } from 'react-native'
import { getUser, postApi } from '../../api/fakeApiUser'
import base_url from '../../constants/base_url'

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  }
}

export const fetchUserSuccess = users => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: users
  }
}

export const fetchUserFail = () => {
  return {
    type: 'FETCH_USER_FAILED'
  }
}

export const fetchDataUser = () => async dispatch => {
  try {
    dispatch(fetchUserRequest())
    const { data } = await getUser()
    dispatch(fetchUserSuccess(data))
  } catch (error) {
    dispatch(fetchUserFail())
  }
}


export const userRegister = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "USER_REGISTER_PROCESSING" })
      let { data } = await postApi(`${base_url}/users/create_user`, user)

      console.log("user Registration response", data)

      if (data.code == 200) {
        Alert.alert("Success", "User Registerd Successfully")
        return Promise.resolve({ status: true })
        // NavigationSer.navigate("SignIn")
      } else {
        Alert.alert("error", data.message)
        return Promise.resolve({ status: false })
      }


    } catch ({ message }) {
      console.log("registration Error", message)
      return Promise.reject({ status: false, message })
    }
  }
}

export const userLogin = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "USER_LOGIN_PROCESSING" })
      let { data } = await postApi(`${base_url}/users/login_user`, user)

      console.log("user Registration response", data)

      if (data.code == 200) {
        Alert.alert("Success", "User Login Successfully")
        dispatch({ type: "USER_LOGIN_PROCESSED" })
        return Promise.resolve({ status: true })
        // NavigationSer.navigate("SignIn")
      } else {
        Alert.alert("error", data.message)
        dispatch({ type: "USER_LOGIN_PROCESSED" })
        return Promise.resolve({ status: false })
      }


    } catch ({ message }) {
      console.log("registration Error", message)
      dispatch({ type: "CLEAR_PROCESSING" })
      return Promise.reject({ status: false, message })
    }
  }
}