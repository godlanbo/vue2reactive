import observe from './observe.js'
import Watcher from './Watcher.js'

let obj = {
  a: [1]
}

observe(obj)
new Watcher(obj, 'a', (val) => {
  console.log('a变成了', val);
})
// obj.a.b.c = 90
obj.a.push(2)
