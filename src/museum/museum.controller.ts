import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MuseumService } from './museum.service';
import { character } from './Dto/characterDto';
import { Item } from './Dto/itemDto';

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

    @Get('ListImages')
    async getImagesList() {
        return this.museumService;
    }

    //===================================

    @Get('get-characters')
    async getCharacter() {
        return this.museumService.getCharacters();
    }

    @Post('characters')
    async postCharacter(@Body() charactersData: any) {
        return this.museumService.createCharacters(charactersData);
    }

    //===================================

    @Get('get-items')
    async getItem() {
        return this.museumService.getItems();
    }

    @Post('item')
    async postItems(@Body() resp: any) {
        return this.museumService.createItem(resp);
    }
    @Patch('item/:id')
    async update(
        @Param('id') id: number,
        @Body() updateItemDto: any
    ) {
        return this.museumService.updateItem(updateItemDto);
    }

    @Delete('delete-item/:id')
    async deleteItem(@Param('id') id: number,) {
        return this.museumService.deleteItem(id);
    }

    //===================================

    @Get('get-building')
    async getBuilding() {
        return this.museumService.getBuilding();
    }

    @Post('building')
    async postBuilding(@Body() resp: any) {
        return this.museumService.createBuilding(resp);
    }

    //===================================

    @Get('get-events')
    async getEvent() {
        return this.museumService.getEvents();
    }

    @Post('events')
    async postEvent(@Body() resp: any) {
        return this.museumService.createEvent(resp);
    }

}

