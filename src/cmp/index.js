// 组件的上下文对象
import Base from '../event'

export default class extends Base {
  constructor($mount){
    super()
    this.$mount = $mount
    this.state = {}
  }

  __show(){
    this.$mount.style.display = ''
  }
  
  show(ctx){
    this.emit('beforeShow', ctx)
    this.__show(ctx)
    this.emit('afterShow', ctx)
  }

  __hide(){
    this.$mount.style.display = 'none'
  }

  hide(){
    this.emit('beforeHide')
    this.__hide()
    this.emit('afterHide')
  }
}