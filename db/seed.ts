import { createUser, getUserByEmail, updateUser } from "@/lib/user";
import { CreateCredentialsUserDto } from "./schema/user";
import { createTask } from "@/lib/task";

const demoUser: CreateCredentialsUserDto[] = [
  {
    email: "vlad_beraru@yahoo.com",
    password: "Testtest123",
    name: "Vlad Beraru",
    role: "admin",
  },
  {
    email: "matei_visoiu@gmail.com",
    password: "Testtest123",
    name: "Matei Visoiu",
    role: "manager",
  },
  {
    email: "tudor_bratu@gmail.com",
    password: "Testtest123",
    name: "Tudor Bratu",
  },
];

async function seedDatabase() {
  console.log("🌱 Starting seed...");

  for (const user of demoUser) {
    await createUser(user);
  }

  const employee = await getUserByEmail("tudor_bratu@gmail.com").then((user) => user).catch((err) => {
    console.error(err);
    process.exit(1);
  });

  const manager = await getUserByEmail("matei_visoiu@gmail.com").then((user) => user).catch((err) => {
    console.error(err);
    process.exit(1);
  });

  if (!employee || !manager) {
    console.error("Couldn't find employee or manager");
    process.exit(1);
  }
  await updateUser(employee.id, {
    managerId: manager.id,
  });

  await createTask({
    title: "Task 1",
    description: "Description 1",
    userId: employee.id,
    managerId: manager.id,
  });
  
  console.log("👋 Bye!");

  process.exit(0);
}

seedDatabase().catch((err) => {
  console.error(err);
  process.exit(1);
});