import moment from "moment"

export type shopListType = {
    idClientAdmin: number,
    idShop: number,
    title: string,
    score: {
        total: number,
        point: number
    },
    minOrder: number,
    deliveryDuration: moment.Moment,
    sendCost: number,
    inRaneg: boolean
}

const ofoghKorosh = {
    
}


const shopList ={
    ofoghKorosh,
    
}
