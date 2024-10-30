import { Router } from 'express';

import * as contactsController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const contactRouter = Router();

contactRouter.get('/', ctrlWrapper(contactsController.getContactsController));

contactRouter.get(
  '/:id',
  ctrlWrapper(contactsController.getContactByIdConroller),
);

export default contactRouter;
