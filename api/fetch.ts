import { IFormValues } from "../next.d.interfaces";

export const fetchFunc = async (data: IFormValues) => {
  try {
    let result = fetch("http://localhost:3004/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    if ((await result).status === 200 || (await result).status === 201)
      return true;
  } catch (error) {
    return false;
  }
};
