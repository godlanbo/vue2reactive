let uid = 0
export default class Dep {
  constructor() {
    this.id = uid++
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  depend() {
    if (window.target) {
      this.addSub(window.target)
    }
  }
  notify() {
    for (let i = 0, len = this.subs.length; i < len; i++) {
      this.subs[i].update()
    }
  }
}
