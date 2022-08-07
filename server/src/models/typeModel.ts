import {BelongsToMany, Column, DataType, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import Device from "./deviceModel";
import Brand from "./brandModel";
import TypeHasBrand from "./typeHasBrandModel";

@Table({tableName: 'type'})
export default class Type extends Model {
    @Column(DataType.STRING)
    name: string | any

    @HasOne(() => Device)
    device: Device | any

    @HasMany(() => TypeHasBrand)
    typeHasBrands: TypeHasBrand[] | any

}