import { IFormValues } from "../next.d.interfaces";

export const fetchFunc = async (data: IFormValues) => {
  let result = fetch("http://localhost:3004/feedback", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if ((await result).status === 201) {
    return true;
  } else return false;
};
