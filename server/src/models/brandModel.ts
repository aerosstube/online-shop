import {AllowNull, BelongsToMany, Column, DataType, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import TypeHasBrand from "./typeHasBrandModel";
import Type from "./typeModel";
import Device from "./deviceModel";

@Table({tableName: 'brand'})
export default class Brand extends Model {
    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string

    @HasMany(() => TypeHasBrand)
    typesHasBrand!: TypeHasBrand[]

    @BelongsToMany(() => Type, () => TypeHasBrand)
    types!: Type[]

    @HasOne(() => Device)
    device!: Device
}