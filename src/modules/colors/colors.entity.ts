import {Table, Column, Model, DataType} from 'sequelize-typescript';


@Table
export class Colors extends Model<Colors> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    site: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    domain: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    hex: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    rgb: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    hsl: string;
}
