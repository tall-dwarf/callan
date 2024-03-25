import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthResponse, IToken, IUser } from './types'
import { userLogin, userRegister } from './api'

export interface UserState {
    user: IUser,
    token: IToken,
    isAuth: boolean
}

const initialState: UserState = {
    user: {
        id: -1,
        name: '',
        email: '',
        created_at: ''
    },
    token: {
        access_token: '',
        token_type: '',
        expires_in: -1
    },
    isAuth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        auth(state, action: PayloadAction<AuthResponse>) {
            state.token = action.payload.token
            state.isAuth = true
            state.user = action.payload.user
        }
    }, 
})

export const { auth }  = userSlice.actions

export default userSlice.reducer