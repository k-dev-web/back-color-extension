import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Users extends Model<Users> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    login: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    hash: string;
}
