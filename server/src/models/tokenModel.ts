import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import User from "./userModel";

@Table({ tableName: 'token' })
export default class Token extends Model {
    @AllowNull(false)
    @Column(DataType.STRING)
    refresh_token!: string

    @BelongsTo(() => User)
    user!: User

    @ForeignKey(() => User)
    userId!: number
}
