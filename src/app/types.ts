export type FiltersState = {
  "sex": string,
  "size": string,
  "stock": string,
  "brand": string,
  "color": string,
  "price": number,
  "rating": string,
  "category": string,
  "search": string,
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
export interface ProductInCart extends Product{
  amount: number,
  "size": "XS" | "S" | "M" | "L" | "Xl" | "XXl" | "3XL"
}

export type ProductsState = ProductInDb[]

export type CartState = ProductInCart[]