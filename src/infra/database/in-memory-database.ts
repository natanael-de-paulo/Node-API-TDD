import { UsersModal } from "./modal/users-modal"

interface InMemoryDatabaseInterface {
  users: UsersModal[]
}

export const inMemoryDatabase: InMemoryDatabaseInterface = {
  users: [],
}