import supertest from "supertest";
import { app } from "../src/server.js";

describe("My api", () => {
  test("It should response the GET method", async () => {
    const response = await supertest(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.msg).toBeDefined();
  });
  test("should respond to POST request", async () => {
    const response = await supertest(app)
      .post("/api")
      .send({ message: "hello" });
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body).toMatchObject({ status: "ok" });
  });
  test("should respond to query", async () => {
    const name = "khalid";
    const age = 24;
    const response = await supertest(app)
      .get("/api")
      .query("name=" + name + "&age=" + age);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ message: "hello " + name });
  });
});
