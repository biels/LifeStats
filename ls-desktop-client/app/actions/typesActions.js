import LsApi from '../api/api'

export const LOAD_TYPES = 'LOAD_TYPES'
export const LOAD_TYPES_FULFILLED = 'LOAD_TYPES_FULFILLED'
export const LOAD_TYPES_REJECTED = 'LOAD_TYPES_REJECTED'

export function loadTypes() {
  return {
    type: LOAD_TYPES,
    payload: LsApi.getAllTypes()
  }
}
