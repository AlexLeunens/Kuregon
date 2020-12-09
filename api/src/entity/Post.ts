import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({type: "mediumtext"})
    content : string;

    @Column()
    date: Date;

}
