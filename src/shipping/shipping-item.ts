import { Currency, Dimension, Float, Weight } from '../common'

export interface ShippingItemDTO {
    quantity: Float
    price: Currency
    weight: Weight
    dimension: Dimension
}

export class ShippingItem {
    constructor(protected params: ShippingItemDTO) {}

    getQuantity(): Float {
        return this.params.quantity
    }

    getPrice(): Currency {
        return this.params.price
    }

    getWeight(): Weight {
        return this.params.weight
    }

    getDimension(): Dimension {
        return this.params.dimension
    }

    getTotalPrice(): Currency {
        return this.getPrice() * this.getQuantity()
    }

    getTotalWeight(): Weight {
        return this.getWeight() * this.getQuantity()
    }
}
