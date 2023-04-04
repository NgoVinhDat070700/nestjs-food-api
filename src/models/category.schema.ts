import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class Category {
  @Prop()
  namecategory: string;

  @Prop()
  image: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
