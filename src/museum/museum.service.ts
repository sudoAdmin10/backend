import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from './entities/media.entity';
import { Repository } from 'typeorm';
import { CharacterEntity } from './entities/character.entity';
import { character } from './Dto/characterDto';
import { BuildingEntity } from './entities/building.entity';
import { Item } from './Dto/itemDto';
import { EventEntity } from './entities/event.entity';
import { EvenDto } from './Dto/eventDto';
import { ItemEntity } from './entities/item.entity';

@Injectable()
export class MuseumService {
    constructor(
        @InjectRepository(Media)
        private mediaRepository: Repository<Media>,

        @InjectRepository(CharacterEntity)
        private characterRepository: Repository<CharacterEntity>,

        @InjectRepository(ItemEntity)
        private itemRepository: Repository<ItemEntity>,

        @InjectRepository(BuildingEntity)
        private buildingRepository: Repository<BuildingEntity>,


        @InjectRepository(EventEntity)
        private eventRepository: Repository<EventEntity>,


    ) { }


    async getImages(): Promise<{ url: string }[]> {
        const images = await this.mediaRepository.find();
        return images.map((image) => ({ url: image.url }));
    }

    async uploadImage(url: string): Promise<Media> {
        const media = this.mediaRepository.create({ url, media_type: 'image' })
        return this.mediaRepository.save(media);
    }

    async getCharacters() {
        const characters = await this.characterRepository.find();
        return characters.map((ch) => ({ name: ch.name, function: ch.function, department: ch.departament, url: ch.url }));
    }

    async createCharacters(characters: any[]): Promise<character[]> {
        const createdCharacters = await this.characterRepository.save(characters);
        return createdCharacters;
    }

    async getBuilding() {
        const characters = await this.buildingRepository.find();
        return characters;
    }

    async createBuilding(building: any[]): Promise<any[]> {
        const createdBuilding = await this.buildingRepository.save(building);
        return createdBuilding;
    }


    // ----
    async getItems() {
        const characters = await this.itemRepository.find();
        return characters;
    }

    async createItem(item: any[]): Promise<Item[]> {
        const createdBuilding = await this.itemRepository.save(item);
        return createdBuilding;
    }

    async updateItem(item: any): Promise<any> {
        const { item_id, ...updateData } = item;

        return await this.itemRepository.update(
            { item_id },
            updateData
        );
    }

    async deleteItem(id: number): Promise<any> {
        const itemDeleted = await this.itemRepository.delete(id);
        return itemDeleted;
    }

    //----

    async getEvents() {
        const events = await this.eventRepository.find();
        return events;
    }

    async createEvent(event: any[]): Promise<any[]> {
        const eventCreated = await this.eventRepository.save(event);
        return eventCreated;
    }



}
