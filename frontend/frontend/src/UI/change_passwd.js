import { redirect } from "react-router-dom";
export function action() {
  console.log("redirected to Change Password");
  return redirect("/changepassword");
}
