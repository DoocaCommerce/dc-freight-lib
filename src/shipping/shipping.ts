import { Currency, ZipCode } from '../common'
import { ShippingItem } from './shipping-item'

export interface ShippingDTO {
    zipCodeSrc: string
    zipCodeDest: string
    items: ShippingItem[]
}

type transformData = (item: ShippingItem) => number

export class Shipping {
    constructor(protected params: ShippingDTO) {}

    getZipCodeSrc(): ZipCode {
        return ZipCode.from(this.params.zipCodeSrc)
    }

    getZipCodeDest(): ZipCode {
        return ZipCode.from(this.params.zipCodeDest)
    }

    getItems(): ShippingItem[] {
        return this.params.items
    }

    getTotalPrice(): Currency {
        const value = (item: ShippingItem) => item.getTotalPrice()
        return this.getTotal(value)
    }

    getTotalWeight(): Currency {
        const weight = (item: ShippingItem) => item.getTotalWeight()
        return this.getTotal(weight)
    }

    private getTotal(transform: transformData): number {
        const sum = (acc: number, value: number) => (acc += value)
        return this.getItems().map(transform).reduce(sum, 0)
    }
}
