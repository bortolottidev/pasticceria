import { PartialType } from '@nestjs/mapped-types';
import { CreateDolciDto } from './create-dolci.dto';

export class UpdateDolciDto extends PartialType(CreateDolciDto) {}
