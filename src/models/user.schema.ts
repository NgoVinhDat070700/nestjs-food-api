import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class Auth {
  @Prop({
    unique: true,
    required: true,
  })
  username: string;

  @Prop()
  password: string;

  @Prop({
    unique: true,
    required: true,
  })
  email: string;

  @Prop({
    default: 'user',
    enum: ['user', 'admin'],
  })
  role: string;

  @Prop()
  phone: string;

  @Prop({ default: false })
  emailVerified: boolean;

  @Prop({ enum: ['active', 'inactive', 'deleted'], default: 'active' })
  status: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
