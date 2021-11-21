export interface ProductModelServer{
    _id: string;
    title: string;
    dsc: string;
    categories: string[];
    size: string;
    price: number;
}

export interface serverResponse{
    count: number;
    products: ProductModelServer[];
}

