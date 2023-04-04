import { Document } from 'mongoose';
export interface Category extends Document {
  namecategory: string;
  image: string;
}
