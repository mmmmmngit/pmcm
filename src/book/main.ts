import { getItems } from './getItems'
import { ItemColumns } from './type/item'
declare const gridjs: any

const main = (): void => {
  document.body.append(script)
  const items: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('.items .item a')
  getItems(items).then(items => {
    console.log(items)

    document.querySelectorAll<HTMLElement>('.items .item').forEach(element => {
      element.remove()
    })

    new gridjs.Grid({
      columns: ItemColumns,
      data: items,
      sort: true
    }).render(document.querySelector('.items'))
  }).catch(error => { console.log(error) })
}

const style = document.createElement('link')
const script = document.createElement('script')
script.src = '//unpkg.com/gridjs/dist/gridjs.umd.js'
style.href = '//unpkg.com/gridjs/dist/theme/mermaid.min.css'
style.rel = 'stylesheet'
script.addEventListener('load', main)
document.head.append(style)
document.head.append(script)
