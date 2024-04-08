import { Filter } from 'component/advanced-filter'

export interface IColumn {
  id: string
  numeric?: boolean
  disablePadding?: boolean
  label: string
  isSort?: boolean
  checkBox?: boolean
  isChecked?: boolean
}

const userColumns: IColumn[] = [
  {
    id: 'accountName',
    numeric: false,
    disablePadding: false,
    label: 'Account Name',
    isSort: true,
    checkBox: false,
    isChecked: true,
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'User Name',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email ID',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'role',
    numeric: false,
    disablePadding: true,
    label: 'Role',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },

  {
    id: 'isActive',
    numeric: false,
    disablePadding: false,
    label: 'Status',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Action',
    isSort: false,
    checkBox: false,
    isChecked: true,
  },
]

export const ACCEPTED_BILL_COLUMNS: IColumn[] = [
  {
    id: 'billNumber',
    numeric: false,
    disablePadding: false,
    label: 'Bill No.',
    isSort: true,
    checkBox: false,
    isChecked: true,
  },
  {
    id: 'claimNumber',
    numeric: false,
    disablePadding: false,
    label: 'Claim No.',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'totalBillAmount',
    numeric: false,
    disablePadding: false,
    label: 'Total Charges',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'allowedBillAmount',
    numeric: false,
    disablePadding: true,
    label: 'Allowed Charges',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },

  {
    id: 'processedDate',
    numeric: false,
    disablePadding: false,
    label: 'Processed/Approved Date',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'isDocumentGenerated',
    numeric: false,
    disablePadding: false,
    label: 'DOC',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'updatedDate',
    numeric: false,
    disablePadding: false,
    label: 'Last Generated Date',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'NFSBillNumber',
    numeric: false,
    disablePadding: false,
    label: 'NFS Bill No.',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'claimant',
    numeric: false,
    disablePadding: false,
    label: 'Claimant',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'examiner',
    numeric: false,
    disablePadding: false,
    label: 'Examiner',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'serviceProvider',
    numeric: false,
    disablePadding: false,
    label: 'Provider',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Actions',
    isSort: false,
    checkBox: false,
    isChecked: true,
  },
]

export const DENIED_BILL_COLUMNS: IColumn[] = [
  {
    id: 'billNumber',
    numeric: false,
    disablePadding: false,
    label: 'Bill No.',
    isSort: true,
    checkBox: false,
    isChecked: true,
  },
  {
    id: 'claimNumber',
    numeric: false,
    disablePadding: false,
    label: 'Claim No.',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'totalBillAmount',
    numeric: false,
    disablePadding: false,
    label: 'Total Charges',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'processedDate',
    numeric: false,
    disablePadding: false,
    label: 'Processed/Approved Date',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'updatedDate',
    numeric: false,
    disablePadding: false,
    label: 'Last Generated Date',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'isDocumentGenerated',
    numeric: false,
    disablePadding: false,
    label: 'DOC',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'claimant',
    numeric: false,
    disablePadding: false,
    label: 'Claimant',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'examiner',
    numeric: false,
    disablePadding: false,
    label: 'Examiner',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'serviceProvider',
    numeric: false,
    disablePadding: false,
    label: 'Provider',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Actions',
    isSort: false,
    checkBox: false,
    isChecked: true,
  },
]

export const MEDICAL_BILL_COLUMNS: IColumn[] = [
  {
    id: 'billNumber',
    numeric: false,
    disablePadding: false,
    label: 'Bill No.',
    isSort: true,
    checkBox: false,
    isChecked: true,
  },
  {
    id: 'claimNumber',
    numeric: false,
    disablePadding: false,
    label: 'Claim No.',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'claimant',
    numeric: false,
    disablePadding: false,
    label: 'Claimant',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'insured',
    numeric: false,
    disablePadding: true,
    label: 'Insured',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },

  {
    id: 'examiner',
    numeric: false,
    disablePadding: false,
    label: 'Examiner',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'receivedDate',
    numeric: false,
    disablePadding: false,
    label: 'Received Date',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'deaBillNumber',
    numeric: false,
    disablePadding: false,
    label: 'DEA Bill No.',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'physician',
    numeric: false,
    disablePadding: false,
    label: 'Physician',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'serviceProvider',
    numeric: false,
    disablePadding: false,
    label: 'Service Provider',
    isSort: true,
    isChecked: true,
    checkBox: true,
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Actions',
    isSort: false,
    checkBox: false,
    isChecked: true,
  },
]

export const MEDICAL_BILL_FILTERS: Filter[] = [
  {
    header: 'Claimant',
    field: 'claimant',
    type: 'text',
    value: '',
  },
  {
    header: 'Received Date',
    field: 'receivedDate',
    type: 'date',
    value: '',
  },
  {
    header: 'Examiner',
    field: 'examiner',
    type: 'text',
    value: '',
  },
  {
    header: 'Insured',
    field: 'insured',
    type: 'text',
    value: '',
  },
]

const getColumns = (list: string) => {
  switch (list) {
    case 'users':
      return userColumns
    // case 'accepted-bills':
    //   return acceptedBillsColumns
    // case 'medical-bills':
    //   return medicalBillsColmns
    default:
      return []
  }
}

export const tableService = {
  getColumns,
}
