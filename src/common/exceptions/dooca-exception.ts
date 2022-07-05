import { Jsonable } from '../jsonable'

export type Messages = { [key: string]: string[] }

export interface DoocaExceptionDTO {
    id: string
    messages: Messages
}

export class DoocaException extends Error implements Jsonable {
    constructor(protected params: DoocaExceptionDTO) {
        super(params.id)
    }

    getId(): string {
        return this.params.id
    }

    getError(): string {
        return this.message
    }

    getMessages(): Messages {
        return this.params.messages
    }

    toJson() {
        return {
            id: this.getId(),
            error: this.getError(),
            messages: this.getMessages()
        }
    }
}
