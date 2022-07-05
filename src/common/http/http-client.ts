import { HttpResponse } from './http-response'
import { Request } from './request'

export interface HttpClient {
    send<T extends HttpResponse>(request: Request): Promise<T>
}
