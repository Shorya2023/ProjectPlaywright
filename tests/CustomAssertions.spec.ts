import { test,expect } from "playwright/test"

let firstName='playwright'

let num=55;
test("Verify",async({page})=>{


    expect(typeof firstName).toBe("string")
    expect(typeof num).toBe("string")


})