import {AllowNull, BelongsToMany, Column, DataType, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import Brand from "./brandModel";
import TypeHasBrand from "./typeHasBrandModel";
import Device from "./deviceModel";

@Table({tableName: 'type'})
export default class Type extends Model {
    @AllowNull(false)
    @Column(DataType.STRING)
    name!: string

    @HasMany(() => TypeHasBrand)
    typesHasBrand!: TypeHasBrand[]

    @BelongsToMany(() => Brand, () => TypeHasBrand)
    brands!: Brand[]

    @HasOne(() => Device)
    device!: Device
}