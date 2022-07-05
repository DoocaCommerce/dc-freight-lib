export type HttpPath = string

export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'PUT'
}

export type PayloadHttpMethod = HttpMethod.POST | HttpMethod.PUT
