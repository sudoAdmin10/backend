import { Module } from '@nestjs/common';
import { MuseumService } from './museum.service';
import { MuseumController } from './museum.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './entities/media.entity';

@Module({
  providers: [MuseumService],
  controllers: [MuseumController],
  exports: [MuseumService],
  imports: [TypeOrmModule.forFeature([Media])],

})
export class MuseumModule { }
