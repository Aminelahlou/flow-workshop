// @flow
type User = {
  name: string,
  age: number
}
async function getUsers(): Promise<User[]> {
  const user1 = {
    name: "Jean",
    age: 30
  }
  const user2 = {
    name: "Jeanne",
    age: 42
  }
  const users = [
    user1,
    user2
  ]
  return users;
}
async () => {
  getUsers().then(res => {
    const users: User[] = res;
  });
}
async () => {
  const users: User[] = await getUsers()
}
