import SendForgotPasswordEmailServices from '@modules/users/services/SendForgotPasswordEmailServices';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmail = container.resolve(
      SendForgotPasswordEmailServices,
    );

    await sendForgotPasswordEmail.execute({ email });

    return response.status(204).json();
  }
}
