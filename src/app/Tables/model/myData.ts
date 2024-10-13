export interface ISection {
    effectMonth: string
    sectionId: number
    sectionName: string
    sectionOrder: number
    itemSummeries: ItemSummery[]
  }
  
  export interface ItemSummery {
    pieceRateItemName: string
    pieceRateItemId: number
    qty: number
    productionPlanQty: number
    rateTypeDatas: IRateTypeData[]
  }
  
  export interface IRateTypeData {
    pieceRateItemName: string
    pieceRateItemId: number
    qty: number
    rateTypeName: string
    rateTypeId: number
  }
  