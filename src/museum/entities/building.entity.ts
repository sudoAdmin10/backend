import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'building' })
export class BuildingEntity {
    @PrimaryGeneratedColumn()
    building_id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    function: string;

    @Column()
    departament: string;

    @Column()
    construction_date: string;

}