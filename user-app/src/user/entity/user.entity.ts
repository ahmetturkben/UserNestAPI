import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({name: "last_name", nullable: false})
    surname: string;

    @Column({name: "email", nullable: false})
    email:string;

    @Column({name: "tcno", nullable: false})
    tcno: string;
}
