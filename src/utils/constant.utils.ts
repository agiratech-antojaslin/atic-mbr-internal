import { IPopupItems } from 'atic-common-helpers/helpers/interface.helper'

export const user: IPopupItems[] = [
  {
    title: 'Logout',
    icon: 'logout',
    isLogout: true,
  },
]

export const driverVerify: IPopupItems[] = [
  {
    title: 'Logout',
    icon: 'logout',
    isLogout: true,
  },
]

export const admin: IPopupItems[] = [
  {
    path: 'admin/profile',
    title: 'Profile',
    icon: 'profile',
  },
  {
    path: 'admin/resetpassword',
    title: 'Reset Password',
    icon: 'settings',
  },
  {
    title: 'Logout',
    icon: 'logout',
    isLogout: true,
  },
]

export const MasterTypeEnum = {
  STATUS: 'status',
  SERVICES: 'services',
}

export const IRoles = {
  EXAMINER: 'EXAMINER',
  ADMIN: 'ADMIN',
}

export const Roles: any = {
  Examiner: 'examiner',
  Admin: 'admin',
}

export const popupItem: IPopupItems[] = [
  {
    path: `/profile`,
    title: 'Profile',
    icon: 'profile',
  },
  {
    path: `/resetpassword`,
    title: 'Reset Password',
    icon: 'settings',
  },
  {
    title: 'Logout',
    icon: 'logout',
    isLogout: true,
  },
]
