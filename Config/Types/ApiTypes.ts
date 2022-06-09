

export type ApiProductId = {Id:string}

export type ApiProductType = {
    Title:string
    Price:number
    Curr:string
    Description:string
    Stock:number
    Colors:string[]
    Type:string
    Brand:string
    Category:string
    Images:string[]
    Brief:{[key:string]:string}
    Promotion:number|null
    TimeStamp:{
        seconds:number
        nanoseconds:number
    }
}

export type ProductType = ApiProductType & ApiProductId


export type CategoriesType = {
    Category:string
    Image:string
    Id:string
}



export type Data = {
    name: string
}