import { StaticImageData } from 'next/image';


export type productListType = {
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
        avg: number
    },
    image: StaticImageData,
    price: number,
    order: number,
    entity: number,
    title: string,
    date: Date,
    purches:number
}

const Laban = [
    {},
    {},
    {}
];

const Kharbar = [
    {},
    {},
    {}
];

const protein = [
    {},
    {},
    {}
];

const drinks = [
    {},
    {},
    {}
];

export const productList = [
    ...Laban,
    ...protein,
    ...Kharbar,
    ...drinks,
]

