import {
  HttpCode,
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
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
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Dolce> {
    return this.dolciService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDolciDto: UpdateDolciDto,
  ): Promise<Dolce> {
    return this.dolciService.update(id, updateDolciDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number): void {
    this.dolciService.remove(id);
  }
}
