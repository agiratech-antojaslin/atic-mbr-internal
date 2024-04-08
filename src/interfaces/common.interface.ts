export interface IUser {
  displayName: string
  mail: string
  sAMAccountName: string
  role: string
  user?: {
    id: string
  }
}

export interface IClient {
  createdAt: string
  id: number
  isActive: boolean
  name: string
  updatedAt: string
  updatedBy?: string
}

export interface ISelectOption {
  value: string | number
  name: string
}

export interface ISpecialityCode {
  feeCode: string
}

export interface IEOBExplanation {
  code: string
  id: number
  shortDescription: string
  longDescription: string
}

export interface ICptLineItem {
  charges: string
  comments?: string
  createdAt: string
  deniedReason?: string
  duplicateBillId?: string
  eobExplanation: any[]
  examinerCharges: string
  fromDate: string
  id: number
  isDenied: boolean
  isReprised: boolean
  modifier: string
  ourServiceCode: string
  repricedCharges: string
  repricedChargesDescribtion: string
  serviceCode: string
  specialtyCode: string
  toDate: string
  type: string
  units: string
}
