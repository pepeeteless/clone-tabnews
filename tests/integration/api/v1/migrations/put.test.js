import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("PUT to /api/v1/migrations should to return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "PUT",
  });

  await fetch("http://localhost:3000/api/v1/status");
});

test("PUT to /api/v1/migrations should to return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "DELETE",
  });

  await fetch("http://localhost:3000/api/v1/status");
});
test("PUT to /api/v1/migrations should to return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "PATCH",
  });

  await fetch("http://localhost:3000/api/v1/status");
});
