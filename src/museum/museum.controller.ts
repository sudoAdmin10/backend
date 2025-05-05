import { Body, Controller, Get, Post } from '@nestjs/common';
import { MuseumService } from './museum.service';

@Controller('museum')
export class MuseumController {
    constructor(private readonly museumService: MuseumService) { }


    @Post('upload-image')
    async uploadImg(@Body('url') url: string) {
        return this.museumService.uploadImage(url);
    }

    @Get('images')
    async getImages() {
        return this.museumService.getImages();
    }
}

