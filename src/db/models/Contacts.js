import { model, Schema } from 'mongoose';

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: false,
  },
  isFavourite: {
    type: Boolean,
    default: false,
    required: false,
  },
  contactType: {
    type: String,
    enum: ['work', 'home', 'personal'],
    required: true,
    default: 'personal',
  },
});

const ContactsCollection = model('contacts', contactSchema);

export default ContactsCollection;
