import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import User from "./userModel";
import Device from "./deviceModel";

@Table({tableName: 'rating'})
export default class Rating extends Model {
    @Column(DataType.DOUBLE)
    rating!: number

    @BelongsTo(() => User)
    user!: User

    @ForeignKey(() => User)
    userId!: number

    @BelongsTo(() => Device)
    device!: Device

    @ForeignKey(() => Device)
    deviceId!: number
}