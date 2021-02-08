export function isObject(value) {
  return value !== null && typeof value === 'object'
}

export function isUndef(value) {
  return value === undefined
}

export function isDef(value) {
  return value !== undefined
}

export function def(obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    enumerable,
    writable: true,
    configurable: true
  })
}