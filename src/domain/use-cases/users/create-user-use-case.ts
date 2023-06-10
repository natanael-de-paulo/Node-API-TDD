import { OutputCreateDTO } from "../../repositories/users-repository";
import { InputCreateDTO } from "../../repositories/users-repository";
import { UsersRepository } from "../../repositories/users-repository";

// export interface ICreateUser{
//   execute(input: InputCreateDTO): Promise<OutputCreateDTO>
// }

export class CreateUserUseCase {
  constructor(private userRepository: UsersRepository){}

  async execute(input: InputCreateDTO): Promise<OutputCreateDTO>{
    try {
      if(!input.username) throw new Error('username is required');
      if(!input.name) throw new Error('name is required');
      if(!input.age) throw new Error('age is required');
    
      const output = await this.userRepository.create(input)
      return output
    } catch(error: any){
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}