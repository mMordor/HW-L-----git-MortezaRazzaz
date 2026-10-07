export interface Product {
    _id : number
    title : string
    isNew : boolean
    oldPrice : string
    price : number
    des : string
    category : string
    image : string
    brand : string
}

export interface Comment{
    postId: number
    id: number
    name: string
    email: string
    body: string
}