import dayjs, { Dayjs } from 'dayjs'
import { IPaginationArray } from './interface.helper'
import { IMedicalBill } from 'interfaces/medical-bill.interface'

export const errorMessage = (error: any, defaultMessage: string): any => {
  if (error?.response?.data?.error) {
    if (Array.isArray(error?.response?.data?.error)) {
      return error?.response?.data?.error[0]
    }
    return error?.response?.data?.error
  } else if (error?.data?.error) {
    return error?.data?.error
  }
  return defaultMessage
}

export const capitalizeFirstLetter = (string: string) => {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1)
}

export const sortData = (
  array: any[],
  key: string,
  sortBy: string,
  type?: string
) => {
  // return array.sort((a, b) => compare(a, b, key, sortBy));
  if (sortBy === 'asc') {
    if (type === 'number') {
      return array.sort((a, b) => a[key] - b[key])
    }
    return array.sort((a, b) => a[key]?.localeCompare(b[key]))
  } else {
    if (type === 'number') {
      return array.sort((a, b) => b[key] - a[key])
    }
    return array.sort((a, b) => b[key]?.localeCompare(a[key]))
  }
}

function compare(a: any, b: any, key: string, sortBy: string) {
  if (key === 'dob') {
    if (new Date(a[key]) < new Date(b[key]) && sortBy === 'desc') {
      return -1
    }
    if (new Date(a[key]) > new Date(b[key]) && sortBy === 'asc') {
      return 1
    }
    return 0
  }
  if (a[key] < b[key] && sortBy === 'desc') {
    return -1
  }
  if (a[key] > b[key] && sortBy === 'asc') {
    return 1
  }
  return 0
}

export const pagination = ({
  array,
  page = 1,
  limit = 20,
}: IPaginationArray) => {
  const page_number = page && page > 0 ? page + 1 : page === 0 ? 1 : page
  return array.slice((page_number - 1) * limit, page_number * limit)
}

export const cutFileName = (
  filename: string,
  maxLength: number,
  start: number,
  end: number
): string => {
  if (filename.length <= maxLength) {
    return filename
  }
  const truncatedName = filename.slice(0, start)
  return `${truncatedName}...${filename.slice(-end)}`
}

const stringToColor = (string?: string) => {
  let hash = 0
  let i
  if (string) {
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }

  return color
}

export const stringAvatar = (name?: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name!) ? stringToColor(name!) : '#fff',
    },
    children: name
      ? name!.split(' ')!.length > 1
        ? `${name!.split(' ')[0][0].toUpperCase()}${name!
            .split(' ')[1][0]
            .toUpperCase()}`
        : name!.split('')[0].toUpperCase()
      : ' ',
  }
}

export function tableDateFormat(dateString: string) {
  const [year, month, day] = dateString.split('-')
  const formattedDate = `${month}/${day.slice(0, 2)}/${year.slice(2)}`
  return formattedDate
}

export const dashIfEmpty = (data: string) => {
  return data ? data : '-'
}

export const getParsedDate = (strDate: any) => {
  console.log('Date: ', new Date(strDate).getDate())
  let date: any = new Date(strDate)
  let dd: any = date.getDate()
  let mm: any = date.getMonth() + 1 //January is 0!

  const yyyy = date.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  date = yyyy + '-' + mm + '-' + dd
  return date.toString()
}

export const getRegion = (region: 'R1' | 'R2' | 'R3' | 'R4') => {
  switch (region) {
    case 'R1':
      return 'I'
    case 'R2':
      return 'II'
    case 'R3':
      return 'III'
    case 'R4':
      return 'IV'
  }
}

export const hasDateRange = (
  itemDates: string[],
  addDates?: Dayjs[]
): boolean => {
  if (!addDates || addDates.length < 2) {
    console.log('Invalid addDates')
    return false
  }

  const from = dayjs(itemDates[0])
  const to = dayjs(itemDates[1])
  const addFrom = addDates[0]
  const addTo = addDates[1]

  if (from.isSame(addFrom) || from.isAfter(addFrom)) {
    if (to.isSame(addTo) || to.isBefore(addTo)) {
      return true
    }
  }

  return false
}

const DEFAULT_VALUE = '-'

// Extracted transformation logic
export const transformBillData = (item: IMedicalBill) => ({
  id: item?.id || DEFAULT_VALUE,
  billNumber: item?.bill?.billNumber || DEFAULT_VALUE,
  billId: item?.bill?.id || DEFAULT_VALUE,
  claimNumber: item?.claimNumber || DEFAULT_VALUE,
  totalBillAmount: item?.totalBillAmount || DEFAULT_VALUE,
  allowedBillAmount: item?.allowedBillAmount || DEFAULT_VALUE,
  processedDate: item?.bill?.processedDate || DEFAULT_VALUE,
  examiner: item?.examiner || DEFAULT_VALUE,
  status: item?.bill?.status || DEFAULT_VALUE,
  isDocumentGenerated: item?.bill?.isDocumentGenerated,
  mailRoomReceivedDate: item?.bill?.mailRoomReceivedDate || DEFAULT_VALUE,
  NFSBillNumber: item?.bill?.NFSBillNumber || DEFAULT_VALUE,
  claimant:
    `${item?.claimant?.firstName || ''} ${
      item?.claimant?.lastName || ''
    }`.trim() || DEFAULT_VALUE,
  insured:
    `${item?.insured?.firstName || ''} ${
      item?.insured?.lastName || ''
    }`.trim() || DEFAULT_VALUE,
  receivedDate: item?.bill?.receivedDate || DEFAULT_VALUE,
  deaBillNumber: item?.bill?.deaBillNumber || DEFAULT_VALUE,
  physician:
    `${item?.physician?.firstName || ''} ${
      item?.physician?.lastName || ''
    }`.trim() || DEFAULT_VALUE,
  serviceProvider: item?.serviceProvider?.billingName || DEFAULT_VALUE,
  cptId: item?.bill?.id || DEFAULT_VALUE,
  updatedDate: item?.updatedAt || DEFAULT_VALUE,
})
