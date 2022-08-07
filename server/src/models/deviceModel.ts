import {AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import BasketItem from "./basketItemModel";
import Type from "./typeModel";
import Brand from "./brandModel";
import Review from "./reviewModel";
import Rating from "./ratingModel";

@Table({tableName: 'device'})
export default class Device extends Model {
    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string

    @AllowNull(false)
    @Column(DataType.INTEGER)
    price!: number

    @Default(0)
    @Column(DataType.DOUBLE)
    rating!: number

    @Column(DataType.STRING)
    img!: string

    @BelongsTo(() => Type)
    type!: Type

    @ForeignKey(() => Type)
    typeId!: number

    @BelongsTo(() => Brand)
    brand!: Brand

    @ForeignKey(() => Brand)
    brandId!: number

    @HasMany(() => BasketItem)
    basketItems!: BasketItem[]

    @HasMany(() => Review)
    reviews!: Review[]

    @HasMany(() => Rating)
    ratings!: Rating[]
}