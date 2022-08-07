import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import User from "./userModel";
import Device from "./deviceModel";

@Table({tableName: 'review'})
export default class Review extends Model {
    @Column(DataType.INTEGER)
    review!: string

    @BelongsTo(() => User)
    user!: User

    @ForeignKey(() => User)
    userId!: number

    @BelongsTo(() => Device)
    device!: Device

    @ForeignKey(() => Device)
    deviceId!: number
}