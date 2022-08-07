import {BelongsTo, ForeignKey, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import Device from "./deviceModel";
import Basket from "./basketModel";

@Table({tableName: 'basket_item'})
export default class BasketItem extends Model {
    @ForeignKey(() => Basket)
    basket_id: number | any

    @ForeignKey(() => Device)
    device_id: number | any


}