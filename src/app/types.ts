export interface Checkbox {
  option: string
  isCheck: boolean
}
export type RangeValue = { min: number, max: number }
export interface Range {
  name: string,
  value: RangeValue
}
export interface Multiply {
  name: string,
  value: Checkbox[]
}
export type SortByType = "price" | "discountPercentage" | 'rating' | ''

export type FiltersState = {
  multiply: Multiply[],
  ranges: Range[]
  "isSortDESC": boolean
  'sortBy': SortByType
  "search": string
}

export type Product = {
  "id": string,
  "sex": "woman" | "man" | "kids",
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
export interface ProductInDb extends Product {
  "size": {
    "size": "XS" | "S" | "M" | "L" | "Xl" | "XXl" | "3XL",
    "stock": number
  }[],
}
export interface ProductInCart extends Product {
  amount: number,
  amountAll: number,
  "size": "XS" | "S" | "M" | "L" | "Xl" | "XXl" | "3XL"
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


