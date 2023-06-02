import AuthForm from "./AuthForm";
import { json, redirect } from "react-router-dom";

function LoginPage() {
  return <AuthForm />;
}

export default LoginPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "register";
  if (mode !== "login" && mode !== "register") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }
  if (mode === "login") {
    const data = await request.formData();
    const authData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(authData);
    const response = await fetch("http://127.0.0.1:8000/auth/login", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
      body: JSON.stringify(authData),
    });
    if (response.status === 422 || response.status === 401) {
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Could not authenticate user." }, { status: 500 });
    }
    const resData = await response.json();
    console.log(resData)
    const token = resData.data.access;
    console.log(token)
    localStorage.setItem('access_token', token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());
    const user = await fetch("http://127.0.0.1:8000/auth/user/", {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
    });
    const username = await user.json();
    
    localStorage.setItem("owner", username.id);
    localStorage.setItem("is_employee", username.is_staff);
    localStorage.setItem("is_receptionist", username.is_receptionist);

    return redirect("/");
  }
  if (mode === "register") {
    const data = await request.formData();
    const authData = {
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      email: data.get("email"),
      password: data.get("password"),
      is_employee: false,
      is_receptionist: false,
    };
    console.log(authData)
    const response = await fetch("http://127.0.0.1:8000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
      body: JSON.stringify(authData),
    });

    if (!response.ok) {
      throw json({ message: "Could not authenticate user." }, { status: 500 });
    }
    const response2 = await fetch("http://127.0.0.1:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      }),
    });
    if (response2.status === 422 || response2.status === 401) {
      return response2;
    }

    if (!response2.ok) {
      throw json({ message: "Could not authenticate user." }, { status: 500 });
    }

  
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());
    const user = await fetch("http://127.0.0.1:8000/auth/user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        SameSite: "none",
      },
    });
    const username = await user.json();
    localStorage.setItem("owner", username.pk);
    return redirect("");
  }
}
