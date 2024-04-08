export interface IMedicalBill {
  id: number
  claimNumber: string
  examiner: string
  allowedBillAmount: string
  totalBillAmount: string
  updatedAt: string
  bill: IBillDetails
  insured: IPerson
  claimant: IPerson
  physician: IPerson
  serviceProvider: IServiceProvider
}

export interface ITableBillData {
  id: number | string
  billNumber: string
  billId?: string
  totalBillAmount?: string
  allowedBillAmount?: string
  processDate: string
  claimNumber: string
  examiner: string
  status: string
  isDocumentGenerated: boolean
  mailRoomReceivedDate: string
  NFSBillNumber?: string
  claimant: string
  insured: string
  receivedDate: string
  deaBillNumber: string
  physician: string
  serviceProvider: string
  cptId: number | string
}

export interface IBillDetails {
  id: number
  billNumber: string
  deaBillNumber: string
  NFSBillNumber: string
  mailRoomReceivedDate: string
  receivedDate: string
  processedDate: string
  isDocumentGenerated: boolean
  status: string
}

export interface IPerson {
  firstName: string
  lastName: string
  middleName?: string
}

export interface IServiceProvider {
  billingName: string
}

/******************************** Unused interfaces ************************************************/

export interface IGeneralInfo {
  duplicateBill: boolean
  hasInvoice: boolean
  claimCase: string
  billReferenceNo: string
  batch: string
  batchDate: string
  federalTaxId: string
  invoiceNo: string
  invoiceDate: string
  mailRoomReceivedDate: string
  modifier: string
  lineItem: string
  providerAmt: string
  totalAmt: string
  speciality: string
  renderingPhysicianId: string
  revenueCode: string
  providerIdentifier: string
}

export interface ICaseDetails {
  policyNumber: string
  billExaminer: string
  dateOfLoss: string
  claimantInformation: ClaimantInformation
  insuredInformation: InjuredInformation
}

export interface IPhysicianDetails {
  firstName: string
  lastName: string
  degrees: string
  federalTaxId: string
  ssn: string
  addressAndTelephone: AddressAndTelephone
}

export interface IServiceProvider {}

export interface IAddressInformation {}

export interface IICDInformation {}

export interface ICPTInformation {}

export interface ClaimantInformation {
  firstName: string
  lastName: string
  middleName: string
  gender: string
  dateOfBirth: string
  claimantType: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  zip: string
  telephoneNo: string
  ssn: string
}

export interface InjuredInformation {
  billDuplicate: boolean
  firstName: string
  lastName: string
  middleName: string
  gender: string
  dateOfBirth: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  zip: string
  telephoneNo: string
  ssn: string
}

export interface AddressAndTelephone {
  addressList: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  zip: string
  telephoneList: string
  telephoneNumber: string
}
