import { InMemoryUsersRepository } from "../../../../infra/database/repositories/in-memory/in-memory-users-repository";
import { CreateUserUseCase } from "../../../use-cases/users/create-user-use-case";

const createUserUseCaseFactory = new CreateUserUseCase(new InMemoryUsersRepository())

export default createUserUseCaseFactory