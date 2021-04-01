import { Alert } from 'react-native'
import { getUser, postApi, getApi } from '../../api/fakeApiUser'
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
      dispatch({ type: "FETCHING" })
      let { data } = await postApi(`${base_url}/users/login_user`, user)


      if (data.code == 200) {
        dispatch({ type: "FETCH_USER_SUCCESS", payload: data })
        console.log("user userLogin response", data)
        return Promise.resolve({ status: true })
        // NavigationSer.navigate("SignIn")
      } else {
        Alert.alert("error", data.message)
        dispatch({ type: "ERROR" })
        return Promise.resolve({ status: false })
      }


    } catch ({ message }) {
      console.log("registration Error", message)
      dispatch({ type: "CLEAR_PROCESSING" })
      return Promise.reject({ status: false, message })
    }
  }
}

export const forgetPass = (obj) => {
  return async (dispatch) => {
    try {
      dispatch({type: 'FETCHING'})
      let { data } = await postApi(`${base_url}/users/forgot_password`, obj)
      const {payload} = data
      if (data.code == 200) {
        payload.email = obj.email
        dispatch({ type: "FETCHED_RESET_PASS_TOKEN", payload: payload })
        return Promise.resolve({ status: true })
      } else {
        Alert.alert("error", data.message)
        dispatch({ type: "ERROR" })
        return Promise.resolve({ status: false })
      }
    } catch ({message}) {
      dispatch({ type: "ERROR" })
      Alert.alert("error", message)
      return Promise.reject({ status: false, message })
    }
  }
}

export const changePass = (obj, authToken) => {
  return async (dispatch) => {
    let {data} = await getApi(`${base_url}/users/validate_reset_pw_token/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwiZXhwX3RpbWUiOjE2MTg5NTA4NDQuMTYwMjA5fQ.hMg13z0RilBViJiGjv8jl3y3lwG9DXFdtCSISv0qEbY`, authToken)
    console.log("isValid validate_reset_pw_token", data,)
    
    if(data.code == 200) {
      try {
        dispatch({type: 'FETCHING'})
        let { data } = await postApi(`${base_url}/users/change_password`, obj)
        console.log("data changePass", data)
        if (data.code == 200) {
          Alert.alert("Alert", data.message)
          return Promise.resolve({ status: true })
        } else {
          Alert.alert("Error", data.message)
          dispatch({ type: "ERROR" })
          return Promise.resolve({ status: false })
        }
      } catch ({message}) {
        dispatch({ type: "ERROR" })
        Alert.alert("error", message)
        return Promise.reject({ status: false, message })
      }
    }else {
      Alert.alert("Error", data.message)
      return Promise.reject({ status: false })
    }
    
  }
}