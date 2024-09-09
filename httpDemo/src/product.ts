export interface Product{
  productId:number,
  productName:string,
  productPrice:number,
  productDescription:string,
  category:string
}


export type ProductWithoutId = Omit<Product,"productId">