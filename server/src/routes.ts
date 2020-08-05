import express from 'express';
import db from './database/connection';

const routes = express.Router();

routes.post('/classes', async (req, res) => {
  
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = req.body;

  const insertUsersIds = await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio,
  });

  const user_id = insertUsersIds[0];

  const insertedClassesIds = await db('classes').insert({
    subject,
    cost,
    user_id
  });

  const class_id = insertedClassesIds[0];

  


  return res.send();

});

export default routes;