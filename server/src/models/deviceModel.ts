import {BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import Review from "./reviewModel";
import Type from "./typeModel";

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

    @BelongsTo(() => Type)
    type: Type | any;

    @BelongsTo(() => Review)

}