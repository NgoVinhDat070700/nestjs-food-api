import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import 'dotenv/config';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.LINK_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    CategoryModule,
  ],
})
export class AppModule {}
