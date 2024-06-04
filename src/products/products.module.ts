import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UserAgentMiddleware } from './user.middleware';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserAgentMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
