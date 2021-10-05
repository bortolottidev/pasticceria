import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DolciService } from './dolci.service';
import { CreateDolciDto } from './dto/create-dolci.dto';
import { UpdateDolciDto } from './dto/update-dolci.dto';
import { Dolce } from './entities/dolci.entity';

@Controller('dolci')
export class DolciController {
  constructor(private readonly dolciService: DolciService) {}

  @Post()
  create(@Body() createDolciDto: CreateDolciDto) {
    return this.dolciService.create(createDolciDto);
  }

  @Get()
  findAll(): Promise<Dolce[]> {
    return this.dolciService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dolciService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDolciDto: UpdateDolciDto) {
    return this.dolciService.update(+id, updateDolciDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dolciService.remove(+id);
  }
}
