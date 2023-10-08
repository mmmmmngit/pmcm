export interface Item {
  id: number
  possession: boolean
  level: number
  imageUrl: string
  itemName: string
  genreId: number
  brandId: number
  colorId: number
  rarityId: number
  point: number
  categoryId: number
  subcategoryId: number
  sealId: string
  collectionId: number
  limitedIconId: number
}

export const ItemNameMapping: Record<keyof Item, string> = {
  id: 'ID',
  possession: '持っている？',
  level: 'レベル',
  imageUrl: '画像',
  itemName: 'コーデ名',
  genreId: 'ジャンル',
  brandId: 'ブランド',
  colorId: '色',
  rarityId: 'レアリティ',
  point: 'ワッチャ',
  categoryId: 'カテゴリ',
  subcategoryId: 'サブカテゴリ',
  sealId: 'シーズン？',
  collectionId: '？',
  limitedIconId: '？'
}

export const createItem = (params: Partial<Record<keyof Item, string | undefined>>): Item => {
  return {
    id: Number.parseInt(params.id ?? '0'),
    possession: (params.possession ?? '0') === '1',
    level: Number.parseInt(params.level ?? '0'),
    imageUrl: params.imageUrl ?? '',
    itemName: params.itemName ?? '???',
    genreId: Number.parseInt(params.genreId ?? '0'),
    brandId: Number.parseInt(params.brandId ?? '0'),
    colorId: Number.parseInt(params.colorId ?? '0'),
    rarityId: Number.parseInt(params.rarityId ?? '0'),
    point: Number.parseInt(params.point ?? '0'),
    categoryId: Number.parseInt(params.categoryId ?? '0'),
    subcategoryId: Number.parseInt(params.subcategoryId ?? '0'),
    sealId: params.sealId ?? '???',
    collectionId: Number.parseInt(params.collectionId ?? '0'),
    limitedIconId: Number.parseInt(params.limitedIconId ?? '0')
  }
}

export const ItemColumns = Object.entries(ItemNameMapping).map(t => { return { id: t[0], name: t[1] } })
