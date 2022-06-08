import { Request, Response } from "express";
import createUser from "./services/CreateUser";

// sting, number, boolean, object, array
// interface, typagem de um conjunto de dados, principalmente objetos

export function helloRayza(request: Request, response: Response) {
  const user = createUser({
    email: "rayza.ocr@gmail.com",
    password: "1234",
    techs: [
      "node.js",
      "React.js",
      "React Native",
      { title: "Javascript", experience: 100 },
    ],
  });

  return response.json({ message: "Hello Rayza" });
}
