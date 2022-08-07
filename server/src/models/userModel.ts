import {Table, Model, Column, Default, Unique, AllowNull, HasOne, HasMany} from "sequelize-typescript";
import {DataType} from "sequelize-typescript";
import Token from "./tokenModel";
import Review from "./reviewModel";
import Basket from "./basketModel";
import Rating from "./ratingModel";

@Table({ tableName: 'user' })
export default class User extends Model {
    @Unique(true)
    @Column(DataType.STRING)
    email!: string

    @AllowNull(false)
    @Column(DataType.STRING)
    login!: string

    @AllowNull(false)
    @Column(DataType.STRING)
    password!: string

    @Default('user')
    @Column(DataType.STRING)
    role!: string

    @Default(false)
    @Column(DataType.BOOLEAN)
    isActive!: boolean

    @AllowNull(false)
    @Column(DataType.STRING)
    img!: string

    @HasOne(() => Token)
    token!: Token

    @HasOne(() => Basket)
    basket!: Basket

    @HasMany(() => Review)
    reviews!: Review[]

    @HasMany(() => Rating)
    ratings!: Rating[]
}


