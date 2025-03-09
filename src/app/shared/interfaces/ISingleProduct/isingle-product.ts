
export interface ISingleProduct{
    status: string
    message: string
    product: ISingProduct
}

export interface ISingProduct {
    id: number
    title: string
    image: string
    price: number
    description: string
    brand: string
    model: string
    color: string
    category: string
    discount: number
    onSale: boolean
}
