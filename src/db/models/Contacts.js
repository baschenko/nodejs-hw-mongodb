import { model, Schema } from 'mongoose';
import { typeList } from '../../constants/contacts.js';
import { handleSaveError, setUpdateSettings } from './hooka.js';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      // minLength: 3,
      // maxLength: 20,
    },
    phoneNumber: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
    },

    email: {
      type: String,
      required: false,
      minLength: 3,
      maxLength: 20,
    },
    isFavourite: {
      type: Boolean,
      default: false,
      required: false,
    },
    contactType: {
      type: String,
      enum: typeList,
      required: true,
      default: 'personal',
      minLength: 3,
      maxLength: 20,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

contactSchema.post('save', handleSaveError);
contactSchema.pre('findOneAndUpdate', setUpdateSettings);
contactSchema.post('findOneAndUpdate', handleSaveError);

export const sortByList = [
  'name',
  'phoneNumber',
  'email',
  'isFavourite',
  'contactType',
];

const ContactsCollection = model('contacts', contactSchema);

export default ContactsCollection;
