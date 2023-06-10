import { app } from "../../../../app"
import request from "supertest"

describe("Count users controller", () => {
    it("should be able to count users for GET protocol", async () => {
      const data = {
        username: "username",
        name: "name",
        age: 23
      }
      
      const sut = await request(app).post("/create-user").send(data)

      expect(sut.status).toBe(201)
      expect(typeof sut.body.userId == "string").toBeTruthy()
      expect(sut.body.username).toEqual(data.username)
      expect(sut.body.name).toEqual(data.name)
      expect(sut.body.age).toEqual(data.age)
    })

    it("should be able to internal server error when create user for GET protocol", async () => {
        const sut = await request(app).get("/create-user").send()
        expect(sut.status).toBe(500)
    })

    it("should be able to internal server error when create user for PUT protocol", async () => {
        const sut = await request(app).put("/create-user").send()
        expect(sut.status).toBe(500)
    })

    it("should be able to internal server error when create user for DELETE protocol", async () => {
        const sut = await request(app).delete("/create-user").send()
        expect(sut.status).toBe(500)
    })
})