import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  IMenuItems,
  IPopupItems,
} from 'atic-common-helpers/helpers/interface.helper'
import { IUserSlice } from 'interfaces/redux.interface'
import { IUser } from 'interfaces/common.interface'

const initialUserState: IUserSlice = {
  token: null,
  user: {} as IUser,
  menuItems: [] as IMenuItems[],
  visibleMenuItems: [] as IMenuItems[],
  hiddenMenuItems: [] as IMenuItems[],
  popupItems: [] as IPopupItems[],
  previousRoute: [],
  notiCount: 0,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setTokenRedux(state, action: PayloadAction<string>) {
      state.token = action.payload
    },
    setUserRedux(state, action: PayloadAction<IUser>) {
      state.user = action.payload
    },
    setMenuItemsRedux(state, action: PayloadAction<IMenuItems[]>) {
      state.menuItems = action.payload
    },
    setVisibleMenuItemsRedux(state, action: PayloadAction<IMenuItems[]>) {
      state.visibleMenuItems = action.payload
    },
    setHiddenMenuItemsRedux(state, action: PayloadAction<IMenuItems[]>) {
      state.hiddenMenuItems = action.payload
    },
    setPopupItemsRedux(state, action: PayloadAction<IPopupItems[]>) {
      state.popupItems = action.payload
    },
    setPreviousRouteRedux(state, action: PayloadAction<string>) {
      state.previousRoute.push(action.payload)
    },
    setNotiCount(state, action: PayloadAction<number>) {
      state.notiCount = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase('LOGOUT', (state) => {
      Object.assign(state, initialUserState)
    })
  },
})

export const {
  setTokenRedux,
  setUserRedux,
  setMenuItemsRedux,
  setVisibleMenuItemsRedux,
  setHiddenMenuItemsRedux,
  setPopupItemsRedux,
  setPreviousRouteRedux,
  setNotiCount,
} = userSlice.actions

export default userSlice.reducer
