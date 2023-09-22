import { User } from "@/models/User";

const USERS_KEY = "usersDatabase";

const usersDatabase: User[] = JSON.parse(
  localStorage.getItem(USERS_KEY) || "[]"
);

export default {
  async getUsers(): Promise<User[]> {
    return usersDatabase;
  },

  async saveUser(user: User) {
    usersDatabase.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(usersDatabase));
  },

  async addCity(value: string, text: string, userId: number | null) {
    if (userId === null) {
      throw new Error("Nieprawidłowy identyfikator użytkownika");
    }
    const userIndex = usersDatabase.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      throw new Error("Użytkownik o podanym identyfikatorze nie istnieje");
    }
    const userCities = usersDatabase[userIndex].cities;
    const cityExists = userCities.some((city) => city.id === value);

    if (cityExists) {
      console.log("Miasto już istnieje w liście miast użytkownika.");
      return;
    }
    usersDatabase[userIndex].cities.push({ id: value, name: text });
    localStorage.setItem(USERS_KEY, JSON.stringify(usersDatabase));
    const updatedUser = usersDatabase[userIndex];
    console.log("Użytkownik po dodaniu miasta:", updatedUser);
  },

  async getCitiesByUserId(
    userId: number | null
  ): Promise<{ id: string; name: string }[]> {
    if (userId === null) {
      return [];
    }
    const user = usersDatabase.find((user) => user.id === userId);
    if (!user) {
      return [];
    }
    return user.cities.map((city) => ({ id: city.id, name: city.name }));
  },
};
