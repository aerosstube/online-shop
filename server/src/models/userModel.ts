import {
    Table,
    Model,
    Column,
    Default,
    Unique,
    AllowNull,
    HasOne, HasMany
} from "sequelize-typescript";
import {DataType} from "sequelize-typescript";
import Token from "./tokenModel";
import Basket from "./basketModel";
import Rating from "./ratingModel";
import Review from "./reviewModel";

@Table({ tableName: 'user' })
export default class User extends Model {
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

    @HasOne(() => Basket)
    basket: Basket | any

    @HasMany(() => Review)
    reviews: Review[] | any

    @HasMany(() => Rating)
    ratings: Rating[] | any
}


