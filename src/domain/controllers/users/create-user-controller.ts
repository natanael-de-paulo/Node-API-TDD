import { Request, Response} from '../../../infra/http/http-config'
import { CreateUserUseCase } from "../../use-cases/users/create-user-use-case";
import { OutputCreateDTO } from "../../repositories/users-repository";

export class CreateUserController{
  constructor(private createUserUseCase: CreateUserUseCase){}

  async handle(request: Request, response: Response): Promise<Response<OutputCreateDTO>>{
    try {
      const input = request.body
      const output = await this.createUserUseCase.execute(input)
      return response.status(201).json(output)
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }
}