export default class {
  constructor(){
    this.allEvt = {}
  }

  on(eName, handler){
    if(this.allEvt[eName])
      this.allEvt[eName].push(handler)
    else
      this.allEvt[eName] = [handler]
  }

  emit(eName, ctx){
    var hList = this.allEvt[eName]
    if(hList)
      hList.forEach(function(h){
        h(ctx)
      })
  }
  
  emitFunc(eName, ctx){
    return () => this.emit(eName, ctx)
  }
  
  emitFunc2(eName){
    return ctx => this.emit(eName, ctx)
  }

  // 捕获别的对象的事件，当作自己的事件并触发
  catchAndEmit(obj, eName){
    obj.on(eName, ctx =>
      this.emit(eName, ctx)
    )
  }

  async emitAsync(eName, ctx){
    var hList = this.allEvt[eName]
    if(!hList) return
    
    return Promise.all(
      hList.map( h => h(ctx) )
    )
  }
}