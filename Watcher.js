import { isObject } from './helper.js'

let uid = 0
const bailRE = /[^\w.$]/
function parsePath(path) {
  if (bailRE.test(path)) {
    return
  }
  let keys = path.split('.')
  return function (obj) {
    for (const key of keys) {
      if (!obj) return
      obj = obj[key]
    }
    return obj
  }
}
export default class Watcher {
  constructor(target, expOrFn, cb) {
    this.target = target
    this.id = uid++
    this.getter = parsePath(expOrFn)
    this.cb = cb
    this.val = this.get()
  }
  update() {
    this.run()
  }
  get() {
    window.target = this
    const value = this.getter(this.target)
    window.target = null
    return value
  }
  run() {
    this.getAndInvoke(this.cb)
  }
  getAndInvoke(cb) {
    const value = this.get()
    if (value !== this.value || isObject(value)) {
      const oldValue = this.value
      this.value = value
      cb.call(this.target, value, oldValue)
    }
  }
}
