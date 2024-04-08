export interface Filter {
    header: string
    field: string
    type: string
    value: string
    options?: any
    validations?: Validation
  }
  
export interface Validation {
    maxLength?: number
    isAlphanumeric?: boolean
    isNumeric?: boolean
  }
  
  export interface IFilter {
    filters: Filter[]
  }