import {BelongsTo, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import User from "./userModel";
import BasketItem from "./basketItem";

@Table({tableName: 'basket'})
export default class Basket extends Model {
    @BelongsTo(() => User)
    user: User | any

    @ForeignKey(() => User)
    user_id: number | any

    @HasMany(() => BasketItem)
    basket_items: BasketItem[] | any
}