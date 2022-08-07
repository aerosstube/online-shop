import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import Rating from "./ratingModel";
import Review from "./reviewModel";
import Type from "./typeModel";
import BasketItem from "./basketItem";
import Brand from "./brandModel";

@Table({tableName: 'device'})
export default class Device extends Model {
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number | any;

    @Column(DataType.STRING)
    name: string | any;

    @Column(DataType.INTEGER)
    price: number | any;

    @Column(DataType.STRING)
    img: string | any;

    @ForeignKey(() => Review)
    review_id: number | any

    @ForeignKey(() => Rating)
    rating_id: number | any

    @ForeignKey(() => Type)
    type_id: number | any

    @ForeignKey(() => Brand)
    brand_id: number | any

    @BelongsTo(() => Review)
    review: Review | any

    @BelongsTo(() => Rating)
    rating: Rating | any

    @BelongsTo(() => Type)
    type: Type | any

    @BelongsTo(() => Brand)
    brand: Brand | any
}