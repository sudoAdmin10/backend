import { Module } from '@nestjs/common';
import { MuseumService } from './museum.service';
import { MuseumController } from './museum.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './entities/media.entity';
import { CharacterEntity } from './entities/character.entity';
import { BuildingEntity } from './entities/building.entity';
import { EventEntity } from './entities/event.entity';
import { ItemEntity } from './entities/item.entity';

@Module({
  providers: [MuseumService],
  controllers: [MuseumController],
  exports: [MuseumService],
  imports: [TypeOrmModule.forFeature([Media, CharacterEntity, BuildingEntity, ItemEntity, EventEntity])],

})
export class MuseumModule { }
