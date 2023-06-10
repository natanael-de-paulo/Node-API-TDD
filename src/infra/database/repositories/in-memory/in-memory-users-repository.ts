import crypto from "crypto"
import { InputCreateDTO, OutputCreateDTO, UsersRepository } from "../../../../domain/repositories/users-repository";
import { inMemoryDatabase } from "../../in-memory-database";

export class InMemoryUsersRepository implements UsersRepository{
  async create(inputDTO: InputCreateDTO): Promise<OutputCreateDTO> {
    const data =  {
      user_id: crypto.randomUUID(),
      username: inputDTO.username,
      name: inputDTO.name,
      age: inputDTO.age
    } 
    
    inMemoryDatabase.users.push(data)

    const output: OutputCreateDTO = {
      userId: data.user_id,
      username: data.username,
      name: data.name,
      age: data.age
    }  

    return output
  }
}