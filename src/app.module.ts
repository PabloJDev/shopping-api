import { Module } from '@nestjs/common';
import { ShoppingModule } from './shopping/shopping.module';

@Module({
  imports: [ShoppingModule],
})
export class AppModule {}
