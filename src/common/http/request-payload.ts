import { HttpMethod, HttpPath, PayloadHttpMethod } from './http-types'
import { Request } from './request'

export abstract class RequestPayload<T = any> implements Request {
    constructor(
        protected method: PayloadHttpMethod,
        protected path: HttpPath,
        protected payload: T
    ) {}

    getMethod(): HttpMethod {
        return this.method
    }

    getPath(): string {
        return this.path
    }

    getPayload(): T {
        return this.payload
    }
}
