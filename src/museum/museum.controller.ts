import { Body, Controller, Get, Post } from '@nestjs/common';
import { MuseumService } from './museum.service';
import { character } from './Dto/characterDto';

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

    @Get('get-characters')
    async getCharacter() {
        return this.museumService.getCharacters();
    }

    @Post('characters')
    async postCharacter(@Body() charactersData: any) {
        return this.museumService.createCharacters(charactersData);
    }

    async seedCharacters() {
        const charactersData = [
            {
                name: 'Daniel Gutierrez',
                url: 'https://ibb.co/3yyd1kBx ',
                function: 'Director de la Facultad de Ingeniería y Tecnología',
                departament: 'Facultad de Ingeniería y Tecnología',
                initial_date: '03/03/2008',
            },
            {
                name: 'Sheny Pet',
                url: 'https://i.ibb.co/fzPQ1Kct/shenyPet.jpg ',
                function: 'Docente de la Facultad de Ingeniería y Tecnología',
                departament: 'Facultad de Ingeniería y Tecnología',
                initial_date: '18/09/2010',
            },
            {
                name: 'Abimael Lozano',
                url: 'https://ibb.co/XxrcQ97S ',
                function: 'Director del Departamento de Misiones',
                departament: 'Misiones',
                initial_date: '25/01/2007',
            },
            {
                name: 'Adriana Castillo',
                url: 'https://ibb.co/7d2fgnZC ',
                function: 'Docente de la Facultad de Educación y Escuela Normal',
                departament: 'Facultad de Educación',
                initial_date: '10/05/2011',
            },
            {
                name: 'Amalia Hernández',
                url: 'https://ibb.co/8nz3GSXx ',
                function: 'Coordinadora del Departamento de Residencias',
                departament: 'Residencias',
                initial_date: '08/11/2006',
            },
            {
                name: 'Carlos Mora',
                url: 'https://ibb.co/r2BS9rB3 ',
                function: 'Docente de la Facultad de Teología',
                departament: 'Facultad de Teología',
                initial_date: '20/07/2009',
            },
            {
                name: 'Germán Gallegos',
                url: 'https://ibb.co/0VZGR5Hs ',
                function: 'Ingeniero del Departamento de Sistemas',
                departament: 'Sistemas',
                initial_date: '15/04/2012',
            },
            {
                name: 'Carlos Hernández',
                url: 'https://ibb.co/gFRCdbDZ ',
                function: 'Docente de la Facultad de Teología',
                departament: 'Facultad de Teología',
                initial_date: '22/02/2010',
            },
            {
                name: 'José Mendoza',
                url: 'https://ibb.co/Y4HRvgwf ',
                function: 'Docente de la Facultad de Ingeniería y Tecnología',
                departament: 'Facultad de Ingeniería y Tecnología',
                initial_date: '03/06/2011',
            },
            {
                name: 'Julio Prieto',
                url: 'https://ibb.co/KjtxhXXq ',
                function: 'Desarrollador de Aplicaciones Web',
                departament: 'Departamento de Sistemas',
                initial_date: '01/12/2009',
            },
            {
                name: 'Cecilia Castillo',
                url: 'https://ibb.co/WLmTBbf ',
                function: 'Directora del Departamento de Sistemas',
                departament: 'Sistemas',
                initial_date: '17/09/2005',
            },
        ];

        const createdCharacters = await this.museumService.createCharacters(charactersData);
        console.log('Personajes creados:', createdCharacters);
    }

}

