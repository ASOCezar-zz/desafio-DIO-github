function soma(a: number, b: number) {
  return a + b;
}

// Interfaces

interface IAnimal {
  name: string;
  type: "terrestre" | "aquatico";
  executeRoar(volume: number): void;
}

interface IFelino extends IAnimal {
  noturneVision: boolean;
}

interface ICanino extends IAnimal {
  domestic: boolean;
  size: "small" | "medium" | "big";
}

const animal: IAnimal = {
  name: "Elefante",
  type: "terrestre",
  executeRoar: (volume) => (`${volume}`)
}

animal.executeRoar(200);

const animal2: IFelino = {
  name: "Gato",
  type: "terrestre",
  noturneVision: true,
  executeRoar: (volume) => (`${volume}`)
}

// Types

type IDomestic = IFelino | ICanino;

const animal3: IDomestic = {
  domestic: true,
  name: "cachorro",
  size: "medium",
  type: "terrestre",
  executeRoar: (volume) => (`${volume}`)
}

const input = document.getElementById("input") as HTMLInputElement; // Utilizando a tipagem para indicar qual o elemento
input.addEventListener("input", (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
})

// Generic Types

function addApendixOnList<T>(array: T[], value: T) {
  return array.map(() => value);
}

addApendixOnList(['a', 'b', 'c'], "d");

interface IUser {
  id: string;
  email: string;
  tel?: string; // Opcional
}

interface IAdmin extends IUser{
  role: "gerente" | "coodernador" | "supervisor";
}

function redirect(user: IUser | IAdmin) {
  if("role" in user) { // Verifica a existência de um atributo dentro para saber qual a classe está sendo usada
    console.log("Vá para a área de administrador");
  }

  if (user.tel) {
    console.log(user.tel);
  }

  console.log("Vá para a área de usuário");
}

interface IDog {
  name: string;
  age: number;
  favoritePark?: string;
}

type DogType = {
  +readonly [K in keyof IDog]-?: IDog[K];
}

class myDog implements DogType {
  name: string;
  favoritePark: string;
  age: number;


  constructor(age: number, name: string, favoritePark?: string) {
    this.age = age;
    this.name = name;
    this.favoritePark = favoritePark;
  }
}