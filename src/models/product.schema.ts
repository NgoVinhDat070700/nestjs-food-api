/* eslint-disable @typescript-eslint/ban-types */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Category } from 'src/models/category.schema';

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class Product {
  @Prop({
    unique: true,
  })
  nameproduct: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    index: true,
  })
  category: Category;

  @Prop({ required: true })
  image: string;

  @Prop()
  price: number;

  @Prop()
  desc: string;

  @Prop({ enum: ['còn', 'hết'], default: 'còn' })
  status: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.pre(/^find/, async function (next: Function) {
  this.populate({
    path: 'category',
    select: 'namecategory',
  });
  next();
});
