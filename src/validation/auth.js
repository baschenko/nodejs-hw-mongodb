import Joi from 'joi';
import { emailRegexp } from '../constants/users.js';

//Joi - Перевірка то що прийшло з Фронтенда

//signup
export const authRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

//signin
export const authLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
