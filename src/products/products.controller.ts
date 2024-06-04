import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
  Query,
  Headers,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard, IsAdmin } from './products.guard';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @UseGuards(AuthGuard)
  @Get()
  getWithBothQuery(
    @Query('category') category: string,
    @Query('cost', ParseIntPipe) cost: number,
  ) {
    return this.productsService.getWithBothQuery(category, cost);
  }

  @Get('/:id')
  getExpenseById(@Param('id', ParseIntPipe) id) {
    return this.productsService.getExpenseById(id);
  }

  @UseGuards(IsAdmin)
  @Post()
  createProduct(@Body() product: CreateUserDto) {
    return this.productsService.createProduct(product);
  }

  @UseGuards(IsAdmin)
  @Delete('/:id')
  deleteProduct(@Param('id', ParseIntPipe) id) {
    return this.productsService.deleteProduct(id);
  }

  @UseGuards(IsAdmin)
  @Put('/:id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() product: UpdateUserDto,
  ) {
    return this.productsService.updateProduct(id, product);
  }
}
