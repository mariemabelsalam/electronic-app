
export interface IAddToCart {
    message: string
    cart: addCart[]
}

export interface addCart {
    product: string
    quantity: number
    _id: string
}
