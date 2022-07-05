export function not(value: boolean): boolean {
    return !value
}

export function isNull(value: any): boolean {
    return value === null
}

export function isUndefined(value: any): boolean {
    return value === undefined
}

export function isEmpty(value: any): boolean {
    if (Array.isArray(value)) return value.length === 0
    if (typeof value === 'string') return value === ''
    if (typeof value === 'object') return isEmpty(Object.keys(value))
    return isNull(value) || isUndefined(value)
}

export function isNotEmpty(value: any): boolean {
    return not(isEmpty(value))
}
