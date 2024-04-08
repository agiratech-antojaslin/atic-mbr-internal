import {
  IMenuItems,
  IPopupItems,
} from 'atic-common-helpers/helpers/interface.helper'
import { IUser } from './common.interface'

export interface IUserSlice {
  token: string | null
  user: IUser
  menuItems: IMenuItems[]
  visibleMenuItems: IMenuItems[]
  hiddenMenuItems: IMenuItems[]
  popupItems: IPopupItems[]
  previousRoute: string[]
  notiCount: number
}
