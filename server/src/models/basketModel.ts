import { BelongsTo, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import BasketItem from "./basketItemModel";
import User from "./userModel";

@Table({tableName: 'basket'})
export default class Basket extends Model {
    @HasMany(() => BasketItem)
    basketItems!: BasketItem[]

    @BelongsTo(() => User)
    user!: User

    @ForeignKey(() => User)
    userId!: number
}