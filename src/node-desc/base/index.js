// 基础元素

export default class {
  constructor(tagName, attr, children){ // 参数适配放到 common 元素里
    this.tagName = tagName
    this.attr = attr
    this.children = children
  }

  /**
   * 返回 HTMLElement 元素
   * @returns {HTMLElement}
   */
  get(){
    
  }
}