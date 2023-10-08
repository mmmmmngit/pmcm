import { get } from './api'
import {
  createItem,
  type Item
} from './type/item'

const getItems = async (itemElements: NodeListOf<HTMLElement>): Promise<Item[]> => {
  const ret: Item[] = []
  const itemList = await fetchItemList()
  itemElements.forEach(itemElement => {
    const item: Item = parseElementToItem(itemElement)
    if (item.possession) {
      ret.push(item)
    } else {
      const t: Item = {
        ...parseItemListItemToItem(
          getItemByIdFromItemList(item.id, itemList)
        ),
        possession: item.possession,
        imageUrl: parseImageUrl(item.imageUrl)
      }
      ret.push(t)
    }
  })
  return ret
}

const parseElementToItem = (itemElement: HTMLElement): Item => {
  // rarityName: itemElement.dataset.itemRarityname?.toString(),
  // categoryName: itemElement.dataset.itemCategoryname?.toString(),
  return createItem({
    id: itemElement.dataset.itemId?.toString(),
    possession: itemElement.dataset.itemPossession?.toString(),
    level: itemElement.dataset.itemLevel?.toString(),
    imageUrl: parseImageUrl(itemElement.dataset.itemImageurl?.toString() ?? ''),
    itemName: itemElement.dataset.itemItemname?.toString(),
    genreId: itemElement.dataset.itemGenreid?.toString(),
    brandId: itemElement.dataset.itemBrandid?.toString(),
    colorId: itemElement.dataset.itemColorid?.toString(),
    rarityId: itemElement.dataset.itemRarityid?.toString(),
    point: itemElement.dataset.itemPoint?.toString(),
    categoryId: itemElement.dataset.itemCategoryid?.toString(),
    subcategoryId: itemElement.dataset.itemSubcategoryid?.toString(),
    sealId: itemElement.dataset.itemSealid?.toString(),
    collectionId: itemElement.dataset.itemCollectionid?.toString(),
    limitedIconId: itemElement.dataset.itemLimitediconid?.toString()
  })
}

const parseImageUrl = (url: string): string => {
  return url.replace('b.png', 'a.png')
}

// ItemList

const fetchItemList = async (): Promise<any> => {
  return await get(process.env.PATH_ITEM_LIST)
    .then(async response => await response.json())
    .then(data => {
      return data
    })
}

const getItemByIdFromItemList = (id: number, itemlist: any): any => {
  return itemlist.find(item => item.id === id)
}

const parseItemListItemToItem = (itemListItem: any): Item => {
  return createItem({
    id: itemListItem.id?.toString(),
    itemName: itemListItem.coordinationName?.toString(),
    genreId: itemListItem.genre?.toString(),
    brandId: itemListItem.brand?.toString(),
    colorId: itemListItem.color?.toString(),
    rarityId: itemListItem.rarity?.toString(),
    categoryId: itemListItem.category?.toString(),
    subcategoryId: itemListItem.subCategory?.toString(),
    sealId: itemListItem.sealId?.toString(),
    collectionId: itemListItem.collection?.toString()
  })
}

export { getItems }
