import {AllowNull, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import Device from "./deviceModel";
import User from "./userModel";

@Table({tableName: 'review'})
export default class Review extends Model {
    @AllowNull(false)
    @Column(DataType.INTEGER)
    review: string | any

    @BelongsTo(() => Device)
    device: Device | any

    @BelongsTo(() => User)
    user: User | any

    @ForeignKey(() => Device)
    device_id: number | any

    @ForeignKey(() => User)
    user_id: number | any

    @HasMany(() => Device)
    devices: Device[] | any

}