import {Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import User from "./userModel";
import Device from "./deviceModel";

@Table({ tableName: 'review' })
export default class ReviewModel extends Model {
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number | any

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    user_id: number | any

    @ForeignKey(() => Device)
    @Column(DataType.INTEGER)
    device_id: number | any

    @Column(DataType.STRING)
    comment: string | any

    @HasMany(() => Device)
    device: Device[] | any
}
