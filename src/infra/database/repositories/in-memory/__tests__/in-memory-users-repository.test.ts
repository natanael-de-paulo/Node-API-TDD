import { UserEntity } from "../../../../../domain/entity/user-entity"
import { InputCreateDTO, OutputCreateDTO, UsersRepository } from "../../../../../domain/repositories/users-repository"
import { InMemoryUsersRepository } from "../in-memory-users-repository"

describe("In memory users repository", () => {
  let usersRepository: UsersRepository

  beforeAll(() => {
    usersRepository = new InMemoryUsersRepository()
  })

  it("should be able to create user", async () => {
    const input: InputCreateDTO = {
      username: "username",
      name: "name",
      age: 23
    }

    const sut = await usersRepository.create(input) as OutputCreateDTO


    expect(typeof sut.userId == "string").toBeTruthy()
    expect(sut.username).toEqual(input.username)
    expect(sut.name).toEqual(input.name)
    expect(sut.age).toEqual(input.age)
  })
})