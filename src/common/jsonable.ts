import { Json } from './types'

export interface Jsonable {
    toJson(): Json
}
