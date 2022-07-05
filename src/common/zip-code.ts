export class ZipCode {
    private constructor(protected number: string) {}

    getNumber(): string {
        return this.number
    }

    static from(number: string) {
        number = number.replace(/\D+/g, '')
        return new ZipCode(number)
    }
}
