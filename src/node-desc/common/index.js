// 参数适配的通用元素
import Base from '../base'
import { isNil } from '../../func'

export default class extends Base {
  constructor(tag, attr, children){
    let parsedTag = parseTag(tag)

    if(parsedTag.id != undefined)
      attr.id = parsedTag.id // tag 里声明的 id 优先级高
    
    attr.classList = attr.classList || []
    if(parsedTag.classList.length)
      attr.classList = parsedTag.classList.concat(attr.classList)
    
    super(parsedTag.tagName || 'div', attr, children)
  }
}

function parseTag(str){
  if(isNil(str) || str.constructor != String)
    throw Error('需要一个字符串')
  
  let idFlag = str.indexOf('#')
  if(idFlag == -1){
    let [tagName, ...classList] = str.split('.')
    return { tagName, classList }
  }

  let [tagName, idAndClass] = str.split('#')
  let [id, ...classList] = idAndClass.split('.')
  return { tagName, id, classList }
}