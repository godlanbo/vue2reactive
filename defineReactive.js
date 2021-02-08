import Dep from './Dep.js'
import observe from './observe.js'

export default function defineReactive(data, key, value) {
  if (arguments.length === 2) {
    value = data[key]
  }
  // debugger
  let dep = new Dep()
  let childOb = observe(value)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    set(newValue) {
      // debugger
      if (newValue !== value) {
        value = newValue
        childOb = observe(value)
        dep.notify()
      }
    },
    get() {
      // debugger
      dep.depend()
      if (childOb) {
        childOb.dep.depend()
      }
      return value
    }
  })
}
