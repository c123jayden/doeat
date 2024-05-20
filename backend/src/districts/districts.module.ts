import { Module } from '@nestjs/common';
import { DistrictsService } from './districts.service';
import { DistrictsController } from './districts.controller';
import { PrismaService } from 'nestjs-prisma';

@Module({
  controllers: [DistrictsController],
  providers: [DistrictsService, PrismaService],
})
export class DistrictsModule {}
