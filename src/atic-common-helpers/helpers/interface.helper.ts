export interface IMenuItems {
  id: string
  title: string
  type: string
  url: string
  icon: any
  breadcrumbs?: boolean
  parentId?: string
  children?: any
}

export interface IPopupItems {
  path?: string
  icon: string
  title: string
  isLogout?: boolean
}

export interface IPopupList {
  driver: IPopupItems[]
  employee: IPopupItems[]
  admin: IPopupItems[]
}

export interface IPaginationArray {
  array: any[]
  page: number
  limit: number
}
