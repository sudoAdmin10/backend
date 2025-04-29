import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'media' })
export class Media {
    @PrimaryGeneratedColumn()
    media_id: number;

    @Column()
    media_type: string;

    @Column()
    url: string;

}