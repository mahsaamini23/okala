import { StaticImageData } from 'next/image';

export type products = {
    idProduct: number,
    idShop: number,
    idCategory: number,
    idSubCategory: number,
    idBrand: number,
    type: string,
    
    points: {
        1: number,
        2: number,
        3: number,
        4: number,
        5: number,
        total: number
    },
    image: StaticImageData,
    price: number,
    order: number,
    entity: boolean,
}

