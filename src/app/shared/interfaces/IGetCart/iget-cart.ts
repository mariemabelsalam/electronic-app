export interface IGetCart {
    cart: Cart[]
}

export interface Cart {
    product: Product
    quantity: number
    _id: string
}

export interface Product {
    _id: string
    title: string
    image: string
    price: number
    description: string
    brand: string
    model: string
    color: string
    category: string
    popular?: boolean
    discount: number
    createdAt: string
    updatedAt: string
    __v: number
}
