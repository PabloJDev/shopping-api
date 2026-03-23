import { Injectable } from '@nestjs/common';
import { Shopping } from './shopping.interface';

@Injectable()
export class ShoppingService {
  private items: Shopping[] = [];
  private id = 1;

  addItem(item: Omit<Shopping, 'id'>): Shopping {
    const newItem: Shopping = {
      id: this.id++,
      ...item,
    };

    this.items.push(newItem);
    return newItem;
  }

  getItems(): Shopping[] {
    return this.items;
  }
}
