import { Controller, Get, Patch, Param, Query } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // @Post()
  // create(@Body() createCatDto: CreateCatDto) {
  //   return this.catsService.create(createCatDto);
  // }

  @Get()
  findAll(@Query() queryParams: any) {
    const { limit, orderByScore } = queryParams;
    return this.catsService.findAll(limit, orderByScore);
  }

  @Get('/random')
  findAllRandom(@Query() queryParams: any) {
    const { limit } = queryParams;
    return this.catsService.findAllRandom(limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch(':id/incrementScore')
  incrementScore(@Param('id') id: string) {
    return this.catsService.incrementScore(+id);
  }
}
