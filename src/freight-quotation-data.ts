import { Shipping } from './shipping'

export type ExtraOrEmpty<T = any> = T | null | undefined

export interface FreightQuotationDataDTO<T = any> {
    shipping: Shipping
    extra?: ExtraOrEmpty<T>
    isTest?: boolean
}

export class FreightQuotationData<EXTRA = any> {
    constructor(protected data: FreightQuotationDataDTO<EXTRA>) {}

    getShipping(): Shipping {
        return this.data.shipping
    }

    getExtra(): ExtraOrEmpty<EXTRA> {
        return this.data.extra
    }

    isTest(): boolean {
        return this.data.isTest || false
    }
}
