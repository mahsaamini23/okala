import moment from "moment"

export type shopList = {
    idClientAdmin: number,
    idShop: number,
    title: string,
    point: number,
    minOrder: number,
    deliveryDuration: moment.Moment,
    sendCost: number,
    inRaneg: boolean
}

