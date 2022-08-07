import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import Brand from "./brandModel";
import Type from "./typeModel";

@Table({tableName: 'type_has_brand'})
export default class TypeHasBrand extends Model {
    @BelongsTo(() => Type)
    type: Type | any

    @ForeignKey(() => Type)
    @PrimaryKey
    @Column(DataType.INTEGER)
    type_id: number | any

    @BelongsTo(() => Brand)
    brand: Brand | any

    @ForeignKey(() => Brand)
    @PrimaryKey
    @Column(DataType.INTEGER)
    brand_id: number | any

}