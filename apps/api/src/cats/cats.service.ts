import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  create(createCatDto: CreateCatDto) {
    return this.prisma.cats.create({
      data: createCatDto,
    });
  }

  findAll() {
    return this.prisma.cats.findMany();
  }

  findOne(id: number) {
    return this.prisma.cats.findUnique({ where: { id: id } });
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
