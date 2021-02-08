import { def } from './helper.js'

const arrayPrototype = Array.prototype
export const arrayMethods = Object.create(arrayPrototype)
const methodsNeedChange = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
methodsNeedChange.forEach(methodName => {
  let original = arrayPrototype[methodName]
  def(arrayMethods, methodName, function () {
    console.log(methodName)
    const ob = this.__ob__
    let inserted = []
    switch (methodName) {
      case 'push':
      case 'unshift':
        inserted = Array.from(arguments)
        break
      case 'splice':
        inserted = Array.from(arguments).slice(2)
        break
    }
    if (inserted.length) {
      ob.observeArray(inserted)
    }
    const result = original.apply(this, arguments)
    ob.dep.notify()
    return result
  }, false)
})
