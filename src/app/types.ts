export interface Checkbox {
  option: string
  isCheck: boolean
}
export type RangeValue = { min: number | null, max: number | null }
export interface Range {
  name: string,
  value: RangeValue
}
export interface Multiply {
  name: string,
  value: Checkbox[]
}
export type SortByType = "price" | "discountPercentage" | 'rating' | ''
export type ViewType = 'small' | 'big' | null

export type FiltersState = {
  multiply: Multiply[],
  ranges: Range[]
  "isSortDESC": boolean | null
  'sortBy': SortByType
  "search": string
  "view": ViewType
}

export type Product = {
  "id": string,
  "human": "woman" | "man" | "kids",
  "brand": string,
  "color": string,
  "price": number,
  "title": string,
  "images": string[],
  "rating": string,
  "category": string,
  "createdAt": string,
  "thumbnail": string,
  "description": string,
  "discountPercentage": number
}
export type SizeType = "XS" | "S" | "M" | "L" | "Xl" | "XXl" | "3XL" | ''
export interface ProductInDb extends Product {
  "size": {
    "size": SizeType ,
    "stock": number
  }[],
}
export interface ProductInCart extends Product {
  amount: number,
  amountAll: number,
  "size": SizeType
}


export type ProductsState = ProductInDb[]

export type CartState = ProductInCart[]

export type ItemCartProps = {
  id: string
  title: string
  brand: string
  category: string
  color: string
  size: string
  amount: number
  amountAll: number
  price: number
  photo: string
}

export type PromoCodeState = {
  promoCodes: {
    code: string;
    discount: number;
  }[],
  promoCodeUse: {
    code: string;
    discount: number;
  }[],
}

export type FilterItemState = { filters: string[], title: string }


