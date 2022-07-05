import { Freight } from './freight'
import { FreightQuotationData } from './freight-quotation-data'

export interface FreightProvider {
    calculateFreights(data: FreightQuotationData): Promise<Freight[]>
}
