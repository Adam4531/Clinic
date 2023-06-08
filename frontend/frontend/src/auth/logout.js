import { redirect } from "react-router-dom";
export function action() {
  console.log("work");
  localStorage.removeItem("access_token");
  localStorage.removeItem("owner");
  localStorage.removeItem("access_token");
  localStorage.removeItem("email");
  localStorage.removeItem("is_employee");
  localStorage.removeItem("is_receptionist");
  return redirect("/");
}
