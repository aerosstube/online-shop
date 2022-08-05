import {
    Table,
    Model,
    Column,
    BelongsTo,
    ForeignKey,
    Default,
    Unique,
    AllowNull,
    PrimaryKey, HasOne
} from "sequelize-typescript";
import {DataType} from "sequelize-typescript";
import Token from "./tokenModel";

@Table({ tableName: 'user' })
export default class User extends Model {

    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number | any

    @Unique(true)
    @Column(DataType.STRING)
    email: string | any

    @AllowNull(false)
    @Column(DataType.STRING)
    login: string | any

    @AllowNull(false)
    @Column(DataType.STRING)
    password: string | any

    @Default('user')
    @Column(DataType.STRING)
    role: string | any

    @AllowNull(false)
    @Column(DataType.STRING)
    img: string | any

    @HasOne(() => Token)
    token: Token | any
}


