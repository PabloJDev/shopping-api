import { Controller, Get, Post, Body } from '@nestjs/common';
import { ShoppingService } from './shopping.service';

@Controller('shopping')
export class ShoppingController {
  constructor(private readonly shoppingService: ShoppingService) {}

  @Post()
  create(@Body() body: { nome: string; quantidade: number }) {
    return this.shoppingService.addItem(body);
  }

  @Get()
  findAll() {
    return this.shoppingService.getItems();
  }
}
