
export interface InputCreateDTO{
   username: string;
   name: string;
   age: number;
}

export interface OutputCreateDTO{
  userId: string;
  username: string;
  name: string;
  age: number;
}

export interface UsersRepository {
  create(inputDTO: InputCreateDTO): Promise<OutputCreateDTO>
}