export interface Product{
  productId:number|null,
  brand:string|null,
  description:{
    age:number|null,
    seasons:string|null
  },
  qty:number|null,
  price:number|null,
  suppliers:Array<string|null>
}


