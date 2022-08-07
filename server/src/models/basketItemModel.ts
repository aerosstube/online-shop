import { BelongsTo, ForeignKey, Model, Table } from "sequelize-typescript";
import Device from "./deviceModel";
import Basket from "./basketModel";

@Table({tableName: 'basket_item'})
export default class BasketItem extends Model {
    @BelongsTo(() => Device)
    device!: Device

    @ForeignKey(() => Device)
    deviceId!: number

    @BelongsTo(() => Basket)
    basket!: Basket

    @ForeignKey(() => Basket)
    basketId!: number
}