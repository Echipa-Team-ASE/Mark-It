import { createUser } from "@/lib/user";
import { CreateCredentialsUserDto } from "./schema/user";

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
    managerId: "1",
  },
];

async function seedDatabase() {
  console.log("🧑🏻‍💻 Starting seed...");

  for (const user of demoUser) {
    await createUser(user);
  }

  console.log("👋 Bye!");

  process.exit(0);
}

seedDatabase().catch((err) => {
  console.error(err);
  process.exit(1);
});