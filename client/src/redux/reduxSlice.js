import {createSlice} from "@reduxjs/toolkit";

export const reduxSlice = createSlice({
    name: 'redux',
    initialState: {
        currentUser: localStorage.getItem('currentUser'),
        token: localStorage.getItem('token'),
    },
    reducers: {
        login: (state, action) => {
            localStorage.setItem('currentUser', action.payload.username)
            localStorage.setItem('token', action.payload.jwt)
            state.currentUser = action.payload.username
            state.token = action.payload.jwt
        },
        logout: state => {
            localStorage.removeItem('currentUser')
            localStorage.removeItem('token')
            state.currentUser = undefined
            state.token = undefined
        },
    }
})
export const {login, logout} = reduxSlice.actions
export default reduxSlice.reducer