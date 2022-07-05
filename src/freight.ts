import { Currency, Integer, Jsonable } from './common'

export interface FreightCarrier {
    id?: string
    name?: string
    image?: string
}

export interface FreightDTO {
    providerName: string
    price: Currency
    priceCost: Currency
    shippingTimeInDays: Integer
    deliveryTimeInDays: Integer
    carrier?: FreightCarrier
}

export class Freight implements Jsonable {
    constructor(protected params: FreightDTO) {}

    getProviderName(): string {
        return this.params.providerName
    }

    getCarrier(): FreightCarrier | null | undefined {
        return this.params.carrier
    }

    getProviderSlug(): string {
        return this.params.providerName.toLowerCase().replace(/\s/g, '-')
    }

    getPrice(): Currency {
        return this.params.price
    }

    getPriceCost(): Currency {
        return this.params.priceCost
    }

    getShippingTimeInDays(): Integer {
        return this.params.shippingTimeInDays
    }

    getDeliveryTimeInDays(): Integer {
        return this.params.deliveryTimeInDays
    }

    toJson() {
        return {
            providerName: this.getProviderName(),
            providerSlug: this.getProviderSlug(),
            price: this.getPrice(),
            priceCost: this.getPriceCost(),
            shippingTimeInDays: this.getShippingTimeInDays(),
            deliveryTimeInDays: this.getDeliveryTimeInDays(),
            carrier: this.getCarrier()
        }
    }
}
