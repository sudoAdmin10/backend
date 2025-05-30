import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'museum_items' })
export class ItemEntity {
    @PrimaryGeneratedColumn()
    item_id: number;

    @Column()
    title: string;

    @Column()
    url: string;

    @Column()
    description: string;

    @Column()
    departament: string;

    @Column()
    creation_date: string;

}