import defineReactive from './defineReactive.js'
import { def } from './helper.js'
import { arrayMethods } from './array.js'
import observe from './observe.js'
import Dep from './Dep.js'

export default class Observer {
  constructor(value) {
    this.dep = new Dep()
    def(value, '__ob__', this, false)
    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods)
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }
  walk(value) {
    for (const key in value) {
      defineReactive(value, key)
    }
  }
  observeArray(arr) {
    for(const val of arr) {
      observe(val)
    }
  }
}
