import { Router } from './http-config'
import createUserControllerFactory from '../../domain/factories/controllers/users/create-user-controller-factory'

export const router = Router()

router.post("/create-user", createUserControllerFactory())