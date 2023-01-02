import { StaticImageData } from 'next/image';
//image for protein
import img2311 from "../../assets/image/Protein/2311.png";
import img2312 from "../../assets/image/Protein/2312.png";
import img2313 from "../../assets/image/Protein/2313.png";
import img2314 from "../../assets/image/Protein/2314.png";
import img2321 from "../../assets/image/Protein/2321.png";
import img2322 from "../../assets/image/Protein/2322.png";
import img2323 from "../../assets/image/Protein/2323.png";
import img2324 from "../../assets/image/Protein/2324.png";
import img2331 from "../../assets/image/Protein/2331.png";
import img2341 from "../../assets/image/Protein/2341.png";
import img2351 from "../../assets/image/Protein/2351.png";
import img2352 from "../../assets/image/Protein/2352.png";
import img2353 from "../../assets/image/Protein/2353.png";
import img2354 from "../../assets/image/Protein/2354.png";
import img2361 from "../../assets/image/Protein/2361.png";
import img2362 from "../../assets/image/Protein/2362.png";
import img2371 from "../../assets/image/Protein/2371.png";
import img2372 from "../../assets/image/Protein/2372.png";
import img2381 from "../../assets/image/Protein/2381.png";
import img2391 from "../../assets/image/Protein/2391.png";
import img2392 from "../../assets/image/Protein/2392.png";
import img2393 from "../../assets/image/Protein/2393.png";
// import img2394 from "../../assets/image/Protein/2394.png";
import img23101 from "../../assets/image/Protein/23101.png";
import img23102 from "../../assets/image/Protein/23102.png";
import img23111 from "../../assets/image/Protein/23111.png";
import img23112 from "../../assets/image/Protein/23112.png";
import img23113 from "../../assets/image/Protein/23113.png";
import img23121 from "../../assets/image/Protein/23121.png";
import img23122 from "../../assets/image/Protein/23122.png";
import img23123 from "../../assets/image/Protein/23123.png";
import img23131 from "../../assets/image/Protein/23131.png";
import img23141 from "../../assets/image/Protein/23142.png";
import img23142 from "../../assets/image/Protein/23142.png";
import img23143 from "../../assets/image/Protein/23143.png";



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
    image: string|any,
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
     //تخم مرغ
    {
        idProduct:2311,
        idShop:2,
        idCategory:3,
        idBrand: 1, //برند زرده ی طلایی
        type:'تخم مرِغ',

        Points:{
            1:1,
            2:0,
            3:0,
            4:0,
            5:0,
            average:1.0,
        },
        image: img2312,
        price:267000,
        order:0,
        entity:true,
        title:'تخم مرغ ۶ عددی زرده طلایی',
        date:1401/9/20,
        purches:2,
    },
    {
        idProduct:2312,
        idShop:2,
        idCategory:3,
        idBrand: 1, //برند زرده ی طلایی
        type:'تخم مرِغ',

        Points:{
            1:4,
            2:2,
            3:0,
            4:2,
            5:3,
            average:2.2,
        },

        image: img2313,
        price:667500,
        order:5,
        entity:true,
        title:'تخم مرِغ ۱۵ عددی زرده طلایی',
        date:1401/9/26,
        purches:11,
    },
    {
        idProduct:2313,
        idShop:2,
        idCategory:3,
        idBrand: 1, //برند زرده ی طلایی
        type:'تخم مرِغ',

        Points:{
            1:4,
            2:0,
            3:0,
            4:4,
            5:4,
            average:2.4,
        },

        image: img2311,
        price:400500,
        order:3,
        entity:true,
        title:'تخم مرِغ ۹ عددی زرده طلایی',
        date:1401/9/24,
        purches:12,
    },
    {
        idProduct:2314,
        idShop:2,
        idCategory:3,
        idBrand: 1, //برند زرده ی طلایی
        type:'تخم مرِغ',

        Points:{
            1:4,
            2:1,
            3:0,
            4:1,
            5:4.5,
            average:2.1,
        },

        image: img2314,
        price:890000,
        order:10,
        entity:true,
        title:'تخم مرغ ۲۰ عددی زرده طلایی',
        date:1401/9/11,
        purches:10,
    },
    {
        idProduct:2321,
        idShop:2,
        idCategory:3,
        idBrand: 2, //تلاونگ
        type:'تخم مرِغ',

        Points:{
            1:4,
            2:1,
            3:0,
            4:3,
            5:3,
            average:2.2,
        },

        image: img2321,
        price:-1,
        order:0,
        entity:false,
        title:'تخم مرغ در پوش دار ۲۰ عددی تلاونگ',
        date:1401/9/14,
        purches:14,
    },
    {
        idProduct:2322,
        idShop:2,
        idCategory:3,
        idBrand: 2, //تلاونگ
        type:'تخم مرِغ',

        Points:{
            1:6,
            2:0,
            3:0,
            4:0,
            5:3,
            average:1.8,
        },

        image: img2322,
        price:-1,
        order:0,
        entity:false,
        title:'تخم مرغ ۹ عددی تلاونگ',
        date:1401/9/15,
        purches:11,
    },
    {
        idProduct:2323,
        idShop:2,
        idCategory:3,
        idBrand: 2, //تلاونگ
        type:'تخم مرِغ',

        Points:{
            1:4,
            2:1,
            3:0,
            4:1,
            5:3,
            average:1.8,
        },

        image: img2323,
        price:-1,
        order:0,
        entity:false, 
        title:'تخم مرغ ۱۵ عددی تلاونگ',
        date:1401/9/13,
        purches:11,
    },
    {
        idProduct:2324,
        idShop:2,
        idCategory:3,
        idBrand: 2, //تلاونگ
        type:'تخم مرِغ',

        Points:{
            1:3,
            2:2.5,
            3:0,
            4:0,
            5:0,
            average:1.5
        },

        image: img2324,
        price:-1,
        order:0,
        entity:false,
        title:'تخم مرغ ۶ عددی تلاونگ',
        date:1401/9/28,
        purches:7,
    },
    {
        idProduct:2331,
        idShop:2,
        idCategory:3,
        idBrand: 3, //وانیا
        type:'تخم مرِغ',

        Points:{
            1:1,
            2:0,
            3:0,
            4:1,
            5:4,
            average:1.5,
        },

        image: img2331,
        price:-1,
        order:0,
        entity:false,
        title:'تخم مرغ 30 عددی وانیا',
        date:1401/9/19,
        purches:6,
    },
    {
        idProduct:2341,
        idShop:2,
        idCategory:3,
        idBrand: 4, //تلارول
        type:'تخم مرِغ',

        Points:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            average:0.0,
        },

        image: img2341,
        price:-1,
        order:0,
        entity:false,
        title:'رول فلفلی سفیده پخته تخم مرغ ۲۰۰ گرمی تلارول',
        date:1401/9/12,
        purches:0,
    },
    // گوشت ماهی
    {
        idProduct:2351,
        idShop:2,
        idCategory:3,
        idBrand: 5, // شارین
        type:'ماهی',

        Points:{
            1:5,
            2:2,
            3:0,
            4:2,
            5:10,
            average:3.8,
        },

        image: img2351,
        price:1189000,
        order:5,
        entity:true,
        title:'استیک قزل سالمون 500 گرمی شارین',
        date:1401/9/11,
        purches:4,
    },
    {
        idProduct:2352,
        idShop:2,
        idCategory:3,
        idBrand: 5, // شارین
        type:'ماهی',

        Points:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            average:0.0,
        },

        image: img2352,
        price:-1,
        order:0,
        entity:false,
        title:'فیله ماهی تیلاپیا ۶۰۰ گرمی شارین',
        date:1401/9/10,
        purches:0,
    },
    {
        idProduct:2353,
        idShop:2,
        idCategory:3,
        idBrand: 5, // شارین
        type:'ماهی',

        Points:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            average:0.0,
        },

        image: img2353,
        price:-1,
        order:0,
        entity:false,
        title:'فیله ماهی گالیت ۵۰۰ گرمی شارین',
        date:1401/9/11,
        purches:0,
    },
    {
        idProduct:2354,
        idShop:2,
        idCategory:3,
        idBrand: 5, // شارین
        type:'ماهی',

        Points:{
            1:2.5,
            2:2,
            3:0,
            4:0,
            5:2,
            average:1.5,
        },

        image: img2354,
        price:-1,
        order:0,
        entity:false,
        title:'فیله ماهی بدون پوست حسون 700 گرمی شارین',
        date:1401/9/16,
        purches:11,
    },
    {
        idProduct:2361,
        idShop:2,
        idCategory:3,
        idBrand: 6, // کیمبال
        type:'ماهی',

        Points:{
            1:1,
            2:1,
            3:0,
            4:1,
            5:2,
            average:1.0,
        },

        image: img2361,
        price:-1,
        order:0,
        entity:false,
        title:'فیله ماهی حسون بدون پوست 400 گرمی کیمبال',
        date:1401/9/16,
        purches:143,
    },
    
    {
        idProduct:2362,
        idShop:2,
        idCategory:3,
        idBrand: 6, // کیمبال
        type:'ماهی',

        Points:{
            1:2.5,
            2:2.5,
            3:0,
            4:0,
            5:3,
            average:1.6,
        },

        image: img2362,
        price:-1,
        order:0,
        entity:false,
        title:'فیله قزل آلا 400 گرمی کیمبال',
        date:1401/9/17,
        purches:7,
    },
    {
        idProduct:2371,
        idShop:2,
        idCategory:3,
        idBrand: 7, // تحفه
        type:'ماهی',

        Points:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            average:0.0,
        },

        image: img2371,
        price:-1,
        order:0,
        entity:false,
        title:'فیله ماهی بلک مارلین 400 گرمی تحفه',
        date:1401/9/22,
        purches:0,
    },
    {
        idProduct:2372,
        idShop:2,
        idCategory:3,
        idBrand: 7, // تحفه
        type:'ماهی',

        Points:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:25,
            average:5.0,
        },

        image: img2372,
        price:-1,
        order:0,
        entity:false,
        title:'ماهی حسون 700 گرمی تحفه',
        date:1401/9/13,
        purches:1,
    },
    {
        idProduct:2381,
        idShop:2,
        idCategory:3,
        idBrand: 8, // مارین
        type:'ماهی',

        Points:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            average:1.0,
        },

        image: img2381,
        price:-1,
        order:0,
        entity: false,
        title:'فیله ماهی سوخاری 500 گ مارین',
        date:1401/9/12,
        purches:1,
    },
    //گوشت گاو و گوساله
    {
        idProduct:2391,
        idShop:2,
        idCategory:3,
        idBrand: 9, //پویا پروتیین
        type:'گوشت گاو وگوساله',

        Points:{
            1:5,
            2:0,
            3:0,
            4:3,
            5:5,
            average:2.6,
        },

        image: img2391,
        price:976500,
        order:5,
        entity:true,
        title:'چرخکرده مخلوط نیم کیلویی پویا پروتئین',
        date:1401/9/17,
        purches:10,
    },
    {
        idProduct:2392,
        idShop:2,
        idCategory:3,
        idBrand: 9, // پویا پروتیین
        type:'گوشت گاو وگوساله',

        Points:{
            1:4,
            2:1,
            3:0,
            4:1,
            5:3,
            average:1.8,
        },

        image: img2392,
        price:1935000,
        order:0,
        entity:true,
        title:'چرخکرده مخلوط 1 کیلویی پویا پروتئین',
        date:1401/9/18,
        purches:37,
    },
    {
        idProduct:2393,
        idShop:2,
        idCategory:3,
        idBrand: 9, // پویا پروتیین
        type:'گوشت گاو وگوساله',

        Points:{
            1:3,
            2:3,
            3:0,
            4:0,
            5:10.5,
            average:3.3,
        },

        image: img2393,
        price:-1,
        order:0,
        entity:false,
        title:'چرخکرده گوساله 1 کیلویی پویا پروتئین',
        date:1401/9/28,
        purches:7,
    }, 
    {
        idProduct:2394,
        idShop:2,
        idCategory:3,
        idBrand: 9, // پویا پروتیین
        type:'گوشت گاو وگوساله',

        Points:{
            1:3,
            2:0,
            3:0,
            4:3,
            5:15.5,
            average:4.3,
        },

        image: img2393,
        price:-1,
        order:0,
        entity:false,
        title:'ران 1 گوساله پویا پروتئین',
        date:1401/9/25,
        purches:12,
    },
    {
        idProduct:23101,
        idShop:2,
        idCategory:3,
        idBrand: 10, // هایزم
        type:'گوشت گاو وگوساله',

        Points:{
            1:1,
            2:0,
            3:0,
            4:11.25,
            5:11.25,
            average:4.5,
        },

        image: img23101,
        price:-1,
        order:0,
        entity:false,
        title:'ران گوساله یک کیلوگرمی هایزم',
        date:1401/9/23,
        purches:6,
    },
    {
        idProduct:23102,
        idShop:2,
        idCategory:3,
        idBrand: 10, // هایزم
        type:'گوشت گاو وگوساله',

        Points:{
            1:2,
            2:1.5,
            3:1,
            4:0,
            5:4,
            average:1.7,
        },

        image: img23102,
        price:-1,
        order:0,
        entity:false,
        title:'چرخکرده مخلوط 800 گرمی هایزم',
        date:1401/9/25,
        purches:22,
    },
    {
        idProduct:23111,
        idShop:2,
        idCategory:3,
        idBrand: 11, // رزا
        type:'گوشت گاو وگوساله',

        Points:{
            1:2.5,
            2:1,
            3:0,
            4:0,
            5:7,
            average:2.1,
        },

        image: img23111,
        price:-1,
        order:0,
        entity:false,
        title:'گوشت چرخکرده مخلوط 1 کیلویی آریان',
        date:1401/9/3,
        purches:14,
    },
    {
        idProduct:23112,
        idShop:2,
        idCategory:3,
        idBrand: 11, // رزا
        type:'گوشت گاو وگوساله',

        Points:{
            1:25,
            2:0,
            3:0,
            4:0,
            5:0,
            average:5.0,
        },

        image: img23112,
        price:-1,
        order:0,
        entity:false,
        title:'سیراب و شیردان گوساله یک دست کامل رزا',
        date:1402/9/26,
        purches:1,
    },
    {
        idProduct:23113,
        idShop:2,
        idCategory:3,
        idBrand: 11, // رزا
        type:'گوشت گاو وگوساله',

        Points:{
            1:3.5,
            2:1,
            3:2,
            4:1,
            5:8,
            average:3.1,
        },

        image: img23113,
        price:-1,
        order:0,
        entity:false,
        title:'ران گوساله 1 کیلویی رزا',
        date:1401/9/22,
        purches:54,
    },
    {
        idProduct:23121,
        idShop:2,
        idCategory:3,
        idBrand: 12, //آوا
        type:'گوشت گاو وگوساله',

        Points:{
            1:1.5,
            2:1,
            3:1,
            4:2,
            5:10,
            average:3.1,
        },

        image: img23121,
        price:1644750,
        order:3,
        entity:true,
        title:'چرخکرده مخلوط یک کیلویی آیدا پروتئین',
        date:1401/9/20,
        purches:105,
    },
    {
        idProduct:23122,
        idShop:2,
        idCategory:3,
        idBrand: 12, //آوا
        type:'گوشت گاو وگوساله',

        Points:{
            1:1,
            2:2.5,
            3:1,
            4:2.5,
            5:11.5,
            average:3.7,
        },

        image: img23122,
        price:-1,
        order:0,
        entity:false,
        title:'چرخکرده مخلوط 1 کیلویی آوا',
        date:1401/9/13,
        purches:225,
    },
    {
        idProduct:23123,
        idShop:2,
        idCategory:3,
        idBrand: 12, //آوا
        type:'گوشت گاو وگوساله',

        Points:{
            1:3,
            2:2,
            3:1,
            4:4,
            5:9.5,
            average:3.9,
        },

        image: img23123,
        price:-1,
        order:0,
        entity:false,
        title:'گوشت مخلوط گوساله 1 کیلویی آوا',
        date:1401/9/12,
        purches:113,
    },
    {
        idProduct:23131,
        idShop:2,
        idCategory:3,
        idBrand: 13, //پمپنا
        type:'گوشت مرِغ',

        Points:{
            1:3,
            2:2,
            3:0,
            4:2,
            5:9.5,
            average:3.3,
        },

        image: img23131,
        price:1135000,
        order:10,
        entity:true,
        title:'جوجه کباب زعفرانی800 گرمی پمینا',
        date:1402/9/12,
        purches:32,
    },
    {
        idProduct:23141,
        idShop:2,
        idCategory:3,
        idBrand: 14, // یخچال
        type:'گوشت مرِغ',

        Points:{
            1:4,
            2:2,
            3:0,
            4:2,
            5:7.5,
            average:3.1,
        },

        image: img23142,
        price:729000,
        order:5,
        entity:true,
        title:'ران مرغ 900 گرمی یخچال',
        date:1402/9/15,
        purches:27,
    },
    {
        idProduct:23142,
        idShop:2,
        idCategory:3,
        idBrand: 14, // یخچال
        type:'گوشت مرِغ',

        Points:{
            1:4,
            2:2,
            3:0,
            4:2,
            5:7.5,
            average:3.1,
        },

        image: img23142,
        price:729000,
        order:5,
        entity:true,
        title:'ران مرغ 900 گرمی یخچال',
        date:1401/9/27,
        purches:27,
    },
    {
        idProduct:23143,
        idShop:2,
        idCategory:3,
        idBrand: 14, // یخچال
        type:'گوشت مرِغ',

        Points:{
            1:3,
            2:1,
            3:1,
            4:0,
            5:13,
            average:3.6,
        },

        image: img23143,
        price:-1,
        order:0,
        entity:false,
        title:'مغز ران مرغ ۹۰۰ گرمی یخچال',
        date:1401/9/21,
        purches:13,
    },
];



const drinks = [
    {},
    {},
    {}
];

export const productList = [
    {
        idProduct:2311,
        idShop:2,
        idCategory:3,
        idBrand: 1, //برند زرده ی طلایی
        type:'تخم مرِغ',

        Points:{
            1:1,
            2:0,
            3:0,
            4:0,
            5:0,
            average:1.0,
        },
        image: img2312,
        price:267000,
        order:0,
        entity:true,
        title:'تخم مرغ ۶ عددی زرده طلایی',
        date:1401/9/20,
        purches:2,
    },
    {
        idProduct:2312,
        idShop:2,
        idCategory:3,
        idBrand: 1, //برند زرده ی طلایی
        type:'تخم مرِغ',

        Points:{
            1:4,
            2:2,
            3:0,
            4:2,
            5:3,
            average:2.2,
        },

        image: img2313,
        price:667500,
        order:5,
        entity:true,
        title:'تخم مرِغ ۱۵ عددی زرده طلایی',
        date:1401/9/26,
        purches:11,
    },
    {
        idProduct:2313,
        idShop:2,
        idCategory:3,
        idBrand: 1, //برند زرده ی طلایی
        type:'تخم مرِغ',

        Points:{
            1:4,
            2:0,
            3:0,
            4:4,
            5:4,
            average:2.4,
        },

        image: img2311,
        price:400500,
        order:3,
        entity:true,
        title:'تخم مرِغ ۹ عددی زرده طلایی',
        date:1401/9/24,
        purches:12,
    },
    {
        idProduct:2314,
        idShop:2,
        idCategory:3,
        idBrand: 1, //برند زرده ی طلایی
        type:'تخم مرِغ',

        Points:{
            1:4,
            2:1,
            3:0,
            4:1,
            5:4.5,
            average:2.1,
        },

        image: img2314,
        price:890000,
        order:10,
        entity:true,
        title:'تخم مرغ ۲۰ عددی زرده طلایی',
        date:1401/9/11,
        purches:10,
    },
    {
        idProduct:2321,
        idShop:2,
        idCategory:3,
        idBrand: 2, //تلاونگ
        type:'تخم مرِغ',

        Points:{
            1:4,
            2:1,
            3:0,
            4:3,
            5:3,
            average:2.2,
        },

        image: img2321,
        price:-1,
        order:0,
        entity:false,
        title:'تخم مرغ در پوش دار ۲۰ عددی تلاونگ',
        date:1401/9/14,
        purches:14,
    },
    {
        idProduct:2322,
        idShop:2,
        idCategory:3,
        idBrand: 2, //تلاونگ
        type:'تخم مرِغ',

        Points:{
            1:6,
            2:0,
            3:0,
            4:0,
            5:3,
            average:1.8,
        },

        image: img2322,
        price:-1,
        order:0,
        entity:false,
        title:'تخم مرغ ۹ عددی تلاونگ',
        date:1401/9/15,
        purches:11,
    },
    {
        idProduct:2323,
        idShop:2,
        idCategory:3,
        idBrand: 2, //تلاونگ
        type:'تخم مرِغ',

        Points:{
            1:4,
            2:1,
            3:0,
            4:1,
            5:3,
            average:1.8,
        },

        image: img2323,
        price:-1,
        order:0,
        entity:false, 
        title:'تخم مرغ ۱۵ عددی تلاونگ',
        date:1401/9/13,
        purches:11,
    },
    {
        idProduct:2324,
        idShop:2,
        idCategory:3,
        idBrand: 2, //تلاونگ
        type:'تخم مرِغ',

        Points:{
            1:3,
            2:2.5,
            3:0,
            4:0,
            5:0,
            average:1.5
        },

        image: img2324,
        price:-1,
        order:0,
        entity:false,
        title:'تخم مرغ ۶ عددی تلاونگ',
        date:1401/9/28,
        purches:7,
    },
    {
        idProduct:2331,
        idShop:2,
        idCategory:3,
        idBrand: 3, //وانیا
        type:'تخم مرِغ',

        Points:{
            1:1,
            2:0,
            3:0,
            4:1,
            5:4,
            average:1.5,
        },

        image: img2331,
        price:-1,
        order:0,
        entity:false,
        title:'تخم مرغ 30 عددی وانیا',
        date:1401/9/19,
        purches:6,
    },
    {
        idProduct:2341,
        idShop:2,
        idCategory:3,
        idBrand: 4, //تلارول
        type:'تخم مرِغ',

        Points:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            average:0.0,
        },

        image: img2341,
        price:-1,
        order:0,
        entity:false,
        title:'رول فلفلی سفیده پخته تخم مرغ ۲۰۰ گرمی تلارول',
        date:1401/9/12,
        purches:0,
    },
    // گوشت ماهی
    {
        idProduct:2351,
        idShop:2,
        idCategory:3,
        idBrand: 5, // شارین
        type:'ماهی',

        Points:{
            1:5,
            2:2,
            3:0,
            4:2,
            5:10,
            average:3.8,
        },

        image: img2351,
        price:1189000,
        order:5,
        entity:true,
        title:'استیک قزل سالمون 500 گرمی شارین',
        date:1401/9/11,
        purches:4,
    },
    {
        idProduct:2352,
        idShop:2,
        idCategory:3,
        idBrand: 5, // شارین
        type:'ماهی',

        Points:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            average:0.0,
        },

        image: img2352,
        price:-1,
        order:0,
        entity:false,
        title:'فیله ماهی تیلاپیا ۶۰۰ گرمی شارین',
        date:1401/9/10,
        purches:0,
    },
    {
        idProduct:2353,
        idShop:2,
        idCategory:3,
        idBrand: 5, // شارین
        type:'ماهی',

        Points:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            average:0.0,
        },

        image: img2353,
        price:-1,
        order:0,
        entity:false,
        title:'فیله ماهی گالیت ۵۰۰ گرمی شارین',
        date:1401/9/11,
        purches:0,
    },
    {
        idProduct:2354,
        idShop:2,
        idCategory:3,
        idBrand: 5, // شارین
        type:'ماهی',

        Points:{
            1:2.5,
            2:2,
            3:0,
            4:0,
            5:2,
            average:1.5,
        },

        image: img2354,
        price:-1,
        order:0,
        entity:false,
        title:'فیله ماهی بدون پوست حسون 700 گرمی شارین',
        date:1401/9/16,
        purches:11,
    },
    {
        idProduct:2361,
        idShop:2,
        idCategory:3,
        idBrand: 6, // کیمبال
        type:'ماهی',

        Points:{
            1:1,
            2:1,
            3:0,
            4:1,
            5:2,
            average:1.0,
        },

        image: img2361,
        price:-1,
        order:0,
        entity:false,
        title:'فیله ماهی حسون بدون پوست 400 گرمی کیمبال',
        date:1401/9/16,
        purches:143,
    },
    
    {
        idProduct:2362,
        idShop:2,
        idCategory:3,
        idBrand: 6, // کیمبال
        type:'ماهی',

        Points:{
            1:2.5,
            2:2.5,
            3:0,
            4:0,
            5:3,
            average:1.6,
        },

        image: img2362,
        price:-1,
        order:0,
        entity:false,
        title:'فیله قزل آلا 400 گرمی کیمبال',
        date:1401/9/17,
        purches:7,
    },
    {
        idProduct:2371,
        idShop:2,
        idCategory:3,
        idBrand: 7, // تحفه
        type:'ماهی',

        Points:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            average:0.0,
        },

        image: img2371,
        price:-1,
        order:0,
        entity:false,
        title:'فیله ماهی بلک مارلین 400 گرمی تحفه',
        date:1401/9/22,
        purches:0,
    },
    {
        idProduct:2372,
        idShop:2,
        idCategory:3,
        idBrand: 7, // تحفه
        type:'ماهی',

        Points:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:25,
            average:5.0,
        },

        image: img2372,
        price:-1,
        order:0,
        entity:false,
        title:'ماهی حسون 700 گرمی تحفه',
        date:1401/9/13,
        purches:1,
    },
    {
        idProduct:2381,
        idShop:2,
        idCategory:3,
        idBrand: 8, // مارین
        type:'ماهی',

        Points:{
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            average:1.0,
        },

        image: img2381,
        price:-1,
        order:0,
        entity: false,
        title:'فیله ماهی سوخاری 500 گ مارین',
        date:1401/9/12,
        purches:1,
    },
    //گوشت گاو و گوساله
    {
        idProduct:2391,
        idShop:2,
        idCategory:3,
        idBrand: 9, //پویا پروتیین
        type:'گوشت گاو وگوساله',

        Points:{
            1:5,
            2:0,
            3:0,
            4:3,
            5:5,
            average:2.6,
        },

        image: img2391,
        price:976500,
        order:5,
        entity:true,
        title:'چرخکرده مخلوط نیم کیلویی پویا پروتئین',
        date:1401/9/17,
        purches:10,
    },
    {
        idProduct:2392,
        idShop:2,
        idCategory:3,
        idBrand: 9, // پویا پروتیین
        type:'گوشت گاو وگوساله',

        Points:{
            1:4,
            2:1,
            3:0,
            4:1,
            5:3,
            average:1.8,
        },

        image: img2392,
        price:1935000,
        order:0,
        entity:true,
        title:'چرخکرده مخلوط 1 کیلویی پویا پروتئین',
        date:1401/9/18,
        purches:37,
    },
    {
        idProduct:2393,
        idShop:2,
        idCategory:3,
        idBrand: 9, // پویا پروتیین
        type:'گوشت گاو وگوساله',

        Points:{
            1:3,
            2:3,
            3:0,
            4:0,
            5:10.5,
            average:3.3,
        },

        image: img2393,
        price:-1,
        order:0,
        entity:false,
        title:'چرخکرده گوساله 1 کیلویی پویا پروتئین',
        date:1401/9/28,
        purches:7,
    }, 
    {
        idProduct:2394,
        idShop:2,
        idCategory:3,
        idBrand: 9, // پویا پروتیین
        type:'گوشت گاو وگوساله',

        Points:{
            1:3,
            2:0,
            3:0,
            4:3,
            5:15.5,
            average:4.3,
        },

        image: img2393,
        price:-1,
        order:0,
        entity:false,
        title:'ران 1 گوساله پویا پروتئین',
        date:1401/9/25,
        purches:12,
    },
    {
        idProduct:23101,
        idShop:2,
        idCategory:3,
        idBrand: 10, // هایزم
        type:'گوشت گاو وگوساله',

        Points:{
            1:1,
            2:0,
            3:0,
            4:11.25,
            5:11.25,
            average:4.5,
        },

        image: img23101,
        price:-1,
        order:0,
        entity:false,
        title:'ران گوساله یک کیلوگرمی هایزم',
        date:1401/9/23,
        purches:6,
    },
    {
        idProduct:23102,
        idShop:2,
        idCategory:3,
        idBrand: 10, // هایزم
        type:'گوشت گاو وگوساله',

        Points:{
            1:2,
            2:1.5,
            3:1,
            4:0,
            5:4,
            average:1.7,
        },

        image: img23102,
        price:-1,
        order:0,
        entity:false,
        title:'چرخکرده مخلوط 800 گرمی هایزم',
        date:1401/9/25,
        purches:22,
    },
    {
        idProduct:23111,
        idShop:2,
        idCategory:3,
        idBrand: 11, // رزا
        type:'گوشت گاو وگوساله',

        Points:{
            1:2.5,
            2:1,
            3:0,
            4:0,
            5:7,
            average:2.1,
        },

        image: img23111,
        price:-1,
        order:0,
        entity:false,
        title:'گوشت چرخکرده مخلوط 1 کیلویی آریان',
        date:1401/9/3,
        purches:14,
    },
    {
        idProduct:23112,
        idShop:2,
        idCategory:3,
        idBrand: 11, // رزا
        type:'گوشت گاو وگوساله',

        Points:{
            1:25,
            2:0,
            3:0,
            4:0,
            5:0,
            average:5.0,
        },

        image: img23112,
        price:-1,
        order:0,
        entity:false,
        title:'سیراب و شیردان گوساله یک دست کامل رزا',
        date:1402/9/26,
        purches:1,
    },
    {
        idProduct:23113,
        idShop:2,
        idCategory:3,
        idBrand: 11, // رزا
        type:'گوشت گاو وگوساله',

        Points:{
            1:3.5,
            2:1,
            3:2,
            4:1,
            5:8,
            average:3.1,
        },

        image: img23113,
        price:-1,
        order:0,
        entity:false,
        title:'ران گوساله 1 کیلویی رزا',
        date:1401/9/22,
        purches:54,
    },
    {
        idProduct:23121,
        idShop:2,
        idCategory:3,
        idBrand: 12, //آوا
        type:'گوشت گاو وگوساله',

        Points:{
            1:1.5,
            2:1,
            3:1,
            4:2,
            5:10,
            average:3.1,
        },

        image: img23121,
        price:1644750,
        order:3,
        entity:true,
        title:'چرخکرده مخلوط یک کیلویی آیدا پروتئین',
        date:1401/9/20,
        purches:105,
    },
    {
        idProduct:23122,
        idShop:2,
        idCategory:3,
        idBrand: 12, //آوا
        type:'گوشت گاو وگوساله',

        Points:{
            1:1,
            2:2.5,
            3:1,
            4:2.5,
            5:11.5,
            average:3.7,
        },

        image: img23122,
        price:-1,
        order:0,
        entity:false,
        title:'چرخکرده مخلوط 1 کیلویی آوا',
        date:1401/9/13,
        purches:225,
    },
    {
        idProduct:23123,
        idShop:2,
        idCategory:3,
        idBrand: 12, //آوا
        type:'گوشت گاو وگوساله',

        Points:{
            1:3,
            2:2,
            3:1,
            4:4,
            5:9.5,
            average:3.9,
        },

        image: img23123,
        price:-1,
        order:0,
        entity:false,
        title:'گوشت مخلوط گوساله 1 کیلویی آوا',
        date:1401/9/12,
        purches:113,
    },
    {
        idProduct:23131,
        idShop:2,
        idCategory:3,
        idBrand: 13, //پمپنا
        type:'گوشت مرِغ',

        Points:{
            1:3,
            2:2,
            3:0,
            4:2,
            5:9.5,
            average:3.3,
        },

        image: img23131,
        price:1135000,
        order:10,
        entity:true,
        title:'جوجه کباب زعفرانی800 گرمی پمینا',
        date:1402/9/12,
        purches:32,
    },
    {
        idProduct:23141,
        idShop:2,
        idCategory:3,
        idBrand: 14, // یخچال
        type:'گوشت مرِغ',

        Points:{
            1:4,
            2:2,
            3:0,
            4:2,
            5:7.5,
            average:3.1,
        },

        image: img23142,
        price:729000,
        order:5,
        entity:true,
        title:'ران مرغ 900 گرمی یخچال',
        date:1402/9/15,
        purches:27,
    },
    {
        idProduct:23142,
        idShop:2,
        idCategory:3,
        idBrand: 14, // یخچال
        type:'گوشت مرِغ',

        Points:{
            1:4,
            2:2,
            3:0,
            4:2,
            5:7.5,
            average:3.1,
        },

        image: img23142,
        price:729000,
        order:5,
        entity:true,
        title:'ران مرغ 900 گرمی یخچال',
        date:1401/9/27,
        purches:27,
    },
    {
        idProduct:23143,
        idShop:2,
        idCategory:3,
        idBrand: 14, // یخچال
        type:'گوشت مرِغ',

        Points:{
            1:3,
            2:1,
            3:1,
            4:0,
            5:13,
            average:3.6,
        },

        image: img23143,
        price:-1,
        order:0,
        entity:false,
        title:'مغز ران مرغ ۹۰۰ گرمی یخچال',
        date:1401/9/21,
        purches:13,
    },
    // ...Laban,
    // ...Kharbar,
    // ...drinks,
]

export default productList