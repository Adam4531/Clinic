import { redirect } from "react-router-dom";
export function action() {
  console.log("redirected to Edit Profile");
  return redirect("/edit");
}
