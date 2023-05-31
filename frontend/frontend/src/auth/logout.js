import { redirect } from "react-router-dom";
export function action() {
  console.log("work");
  localStorage.removeItem("access_token");
  localStorage.removeItem("owner");
  return redirect("/");
}
