import createUserUseCaseFactory from "../../../factories/use-cases/users/create-user-use-case-factory"
import { InputCreateDTO, OutputCreateDTO } from "../../../repositories/users-repository"

describe("Create user use case", () => {
  it("should be able to create user", async () => {
    const input: InputCreateDTO = {
      username: "username",
      name: "name",
      age: 23
    }

    const sut = await createUserUseCaseFactory.execute(input) as OutputCreateDTO

    expect(typeof sut.userId == "string").toBeTruthy()
    expect(sut.username).toEqual(input.username)
    expect(sut.name).toEqual(input.name)
    expect(sut.age).toEqual(input.age)
  })

  it("should be able to create user error name", async () => {
   try {
    const input: any = {
      username: "username",
      age: 23
    }
    await createUserUseCaseFactory.execute(input) as OutputCreateDTO

   } catch (error: any) {
    const sut = error

    expect(sut.message).toEqual("name is required")
   }
  })

  it("should be able to create user error username", async () => {
    try {
     const input: any = {
       name: "name",
       age: 23
     }
     await createUserUseCaseFactory.execute(input) as OutputCreateDTO
 
    } catch (error: any) {
     const sut = error
 
     expect(sut.message).toEqual("username is required")
    }
   })

   it("should be able to create user error age", async () => {
    try {
     const input: any = {
       username: "username",
       name: "name",
      
     }
     await createUserUseCaseFactory.execute(input) as OutputCreateDTO
 
    } catch (error: any) {
     const sut = error
 
     expect(sut.message).toEqual("age is required")
    }
   })
})