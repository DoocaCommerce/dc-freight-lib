import { HttpMethod, HttpPath } from './http-types'

export interface Request {
    getMethod(): HttpMethod
    getPath(): HttpPath
}
