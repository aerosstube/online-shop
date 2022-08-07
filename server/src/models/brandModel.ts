import {AllowNull, Column, DataType, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import Device from "./deviceModel";
import Type from "./typeModel";
import TypeHasBrand from "./typeHasBrandModel";

@Table({tableName: 'brand'})
export default class Brand extends Model {
    @AllowNull(false)
    @Column(DataType.STRING)
    name: string | any

    @HasOne(() => Device)
    device: Device | any

    @HasMany(() => TypeHasBrand)
    types: TypeHasBrand[] | any
}