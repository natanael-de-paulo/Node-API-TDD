import { httpControllerAdapter } from "../../../../infra/adapters/controller-adapter"
import { CreateUserController } from "../../../controllers/users/create-user-controller"
import createUserUseCaseFactory from "../../use-cases/users/create-user-use-case-factory"

const createUserControllerFactory = () => {
  const createUserController = new CreateUserController(createUserUseCaseFactory) 
  return httpControllerAdapter(createUserController)
}

export default createUserControllerFactory