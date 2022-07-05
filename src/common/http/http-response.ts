import { Integer } from '../types'

export interface HttpResponse<T = any> {
    getStatusCode(): Integer
    getData(): T
}
