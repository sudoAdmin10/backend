import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'events' })
export class EventEntity {
    @PrimaryGeneratedColumn()
    event_id: number;

    @Column()
    title: string;

    @Column()
    url: string;

    @Column()
    description: string;

}