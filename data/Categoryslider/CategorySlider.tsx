import picture1 from "../../assets/image/3.png";
import picture2 from "../../assets/image/2m.png";
import picture3 from "../../assets/image/3m.png";
import picture4 from "../../assets/image/4m.png";
import picture5 from "../../assets/image/5m.png";
import picture6 from "../../assets/image/6m.png";
import picture7 from "../../assets/image/7m.png";
import picture8 from "../../assets/image/8m.png";

const ItemCategories = [
    {
        id: 1, name: "خواربار", sub: [
            {
                id: 1, title: "نان",
                sub: [{ id: 1, title: "نان" }]
            },
            {
                id: 2, title: "برنج",
                sub: [{ id: 1, title: "برنج" }]
            },
            {
                id: 3, title: "مکارونی و رشته",
                sub: [{ id: 1, title: "لازانیا" }, { id: 2, title: "رشته" }, { id: 3, title: "مکارونی" }]
            },
            {
                id: 1, title: "روغن",
                sub: [{ id: 1, title: "روغن سرخ کردنی" }, { id: 2, title: "روغن آفتاب گردان" }, { id: 3, title: "روغن ذرت " }, { id: 3, title: "روغن کنجد " }, { id: 3, title: "روغن زیتون " }]
            },
            {
                id: 3, title: "شکر و قند و نبات",
                sub: [{ id: 1, title: "شکر" }, { id: 2, title: "نبات" }, { id: 3, title: "قند" },{ id: 4, title: "نقل" }]
            },
            {
                id: 3, title: "حبوبات و سویا",
                sub: [{ id: 1, title: "لوبیا" }, { id: 2, title: "نخود" }, { id: 3, title: "ماش" },{ id: 4, title: "عدس" },{ id: 5, title: "سویا" },{ id: 6, title: "لپه" }]
            },
        ],
        background: '#c3f3c1',
        image: picture1
    },
    {
        id: 2, name: "لبنیات", background: '#98c6f6', image: picture2
    },
    { id: 3, name: "محصولات پروتیینی", background: '#f8d3ca', image: picture3 },
    { id: 4, name: "کنسرو وغذای آماده", background: '#f89349', image: picture4 },
    { id: 5, name: "نوشیدنی ها", background: '#51e0e7', image: picture5 },
    { id: 6, name: "صبحانه", background: '#eeb7e4', image: picture6 },
    { id: 7, name: "تنقلات", background: '#b8e6d8', image: picture7 },
    { id: 8, name: "آجیل و خشکبار", background: '#c1d0ff', image: picture8 },
]

export default ItemCategories
