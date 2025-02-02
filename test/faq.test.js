const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../src/app");
const mongoose = require("mongoose");

describe("FAQ API Tests", () => {
  after(async () => {
    await mongoose.connection.close();
  });

  it("should fetch FAQs in English", async () => {
    const res = await request(app).get("/api/faqs");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("should create a new FAQ", async () => {
    const faqData = { question: "What is Node.js?", answer: "Node.js is a runtime environment." };
    const res = await request(app).post("/api/faqs").send(faqData);
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("_id");
  });

  it("should fetch FAQs in Hindi", async () => {
    const res = await request(app).get("/api/faqs?lang=hi");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });
});
