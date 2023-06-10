import express from "express"
import { router } from "./infra/http/routes";
import appMiddleware from "./domain/middlewares/app-middleware";

const app = express()
app.use(express.json())
app.use(router)
app.use(appMiddleware);

export { app }