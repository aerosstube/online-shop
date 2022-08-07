import {AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import User from "./userModel";

@Table({ tableName: 'token' })
export default class Token extends Model { 
    @BelongsTo(() => User)
    user: User | any

    @ForeignKey(() => User)
    user_id: number | any

    @Column(DataType.STRING)
    refresh_token: string | any
}
