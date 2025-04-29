import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from './entities/media.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MuseumService {
    constructor(
        @InjectRepository(Media)
        private mediaRepository: Repository<Media>
    ) { }

    async uploadImage(url: string): Promise<Media> {
        const media = this.mediaRepository.create({ url, media_type: 'image' })
        return this.mediaRepository.save(media);
    }
}
