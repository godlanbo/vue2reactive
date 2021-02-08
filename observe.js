import Observer from './Observer.js'
import { isObject, isUndef } from './helper.js'

export default function observe(value) {
  if (!isObject(value)) return
  let ob
  if (isUndef(value.__ob__)) {
    ob = new Observer(value)
  } else {
    ob = value.__ob__
  }
  return ob
}
