import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from './entities/media.entity';
import { Repository } from 'typeorm';
import { CharacterEntity } from './entities/character.entity';
import { character } from './Dto/characterDto';

@Injectable()
export class MuseumService {
    constructor(
        @InjectRepository(Media)
        private mediaRepository: Repository<Media>,

        @InjectRepository(CharacterEntity)
        private characterRepository: Repository<CharacterEntity>
    ) { }


    async getImages(): Promise<{ url: string }[]> {
        const images = await this.mediaRepository.find();
        return images.map((image) => ({ url: image.url }));
    }

    async uploadImage(url: string): Promise<Media> {
        const media = this.mediaRepository.create({ url, media_type: 'image' })
        return this.mediaRepository.save(media);
    }


    //Characters
    async getCharacters() {
        const characters = await this.characterRepository.find();
        return characters.map((ch) => ({ name: ch.name, function: ch.function, department: ch.departament, url: ch.url }));
    }

    async createCharacters(characters: any[]): Promise<character[]> {
        const createdCharacters = await this.characterRepository.save(characters);
        return createdCharacters;
    }

}
