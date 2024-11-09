import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  // create(createCatDto: CreateCatDto) {
  //   return this.prisma.cats.create({
  //     data: createCatDto,
  //   });
  // }

  findAll() {
    return this.prisma.cats.findMany();
  }

  findOne(id: number) {
    return this.prisma.cats.findUnique({ where: { id: id } });
  }

  incrementScore(id: number) {
    return this.prisma.cats.update({
      where: { id: id },
      data: { score: { increment: 1 } },
    });
  }
}
