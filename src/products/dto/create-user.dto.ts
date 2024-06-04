import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  category: string;

  @IsNumber()
  cost: number;
}
