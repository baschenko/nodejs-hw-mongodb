import { Router } from 'express';

import * as contactsController from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const contactRouter = Router();

contactRouter.get('/', ctrlWrapper(contactsController.getContactsController));

contactRouter.get(
  '/:contactId',
  ctrlWrapper(contactsController.getContactByIdController),
);

contactRouter.post('/', ctrlWrapper(contactsController.addContactController));

contactRouter.patch(
  '/:contactId',
  ctrlWrapper(contactsController.patchContactController),
);

contactRouter.delete(
  '/:contactId',
  ctrlWrapper(contactsController.deleteContactController),
);

export default contactRouter;
