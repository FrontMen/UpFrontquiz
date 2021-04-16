import { User, Quiz } from "../types";

// const Quiz: Quiz = { id: "123" };

const users: User[] = [];

export async function userJoin(id: string, name: string) {
  if (users.length < 2) {
    const user = {
      id,
      name,
    };
    users.push(user);
    return user;
  }
  throw Error("There are already 2 users in the game");
}

export async function getUsers() {
  return users;
}
