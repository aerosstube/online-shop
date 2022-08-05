import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./userModel";

@Table({ tableName: 'token' })
export default class Token extends Model {
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number | any

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    user_id: number | any

    @Column(DataType.STRING)
    refresh_token: string | any
}
