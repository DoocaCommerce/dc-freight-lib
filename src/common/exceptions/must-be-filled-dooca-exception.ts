import { DoocaException } from './dooca-exception'

export class MustBeFilledDoocaException extends DoocaException {
    constructor(keyMustBeFilled: string, message?: string) {
        super({
            id: 'must-be-filled',
            messages: { [keyMustBeFilled]: [message || keyMustBeFilled] }
        })
    }
}
