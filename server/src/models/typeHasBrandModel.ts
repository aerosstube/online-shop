import {BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import Type from "./typeModel";
import Brand from "./brandModel";

@Table({tableName: 'type_has_brand'})
export default class TypeHasBrand extends Model {
    @BelongsTo(() => Type)
    type!: Type

    @ForeignKey(() => Type)
    @PrimaryKey
    @Column(DataType.INTEGER)
    typeId!: number

    @BelongsTo(() => Brand)
    brand!: Brand

    @ForeignKey(() => Brand)
    @PrimaryKey
    @Column(DataType.INTEGER)
    brandId!: number
}