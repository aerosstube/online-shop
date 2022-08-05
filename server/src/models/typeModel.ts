
//create type model with columns: id, name and hasMany: Device using sequelize-typescript

import {Column, DataType, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import Device from "./deviceModel";

@Table({ tableName: 'type' })
export default class Type extends Model {
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number | any;

    @Column(DataType.STRING)
    name: string | any;

    @HasMany(() => Device)
    device: Device[] | any;
}