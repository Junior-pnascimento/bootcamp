//Para criar: name,email,password

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  //  ?: , opicional(nao obrigatorio)
  name?: string;
  email: string;
  password?: string;
  // typagem de vetores(array)
  techs: Array<string | TechObject>;
  // techs: string[];    em caso do tipo ser unico
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };
  return user;
}
