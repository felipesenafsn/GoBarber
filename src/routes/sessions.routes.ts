import { Router } from 'express';
import { sign } from 'jsonwebtoken';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {

  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    //Objeto colocado devido ao erro do delete user.password
    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    // delete user.password;

    return response.json({ user: userWithoutPassword, token });
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
});

export default sessionsRouter;

