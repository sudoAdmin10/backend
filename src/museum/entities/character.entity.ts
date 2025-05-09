import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'characters' })
export class CharacterEntity {
    @PrimaryGeneratedColumn()
    character_id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    function: string;

    @Column()
    departament: string;

    @Column()
    initial_date: string;

}