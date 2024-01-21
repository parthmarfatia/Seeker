"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SignIn = () => {
  // State for managing input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the login logic
    console.log("Username:", username, "Password:", password);
    // You might want to send this data to a server or use it in some other way
    router.push("/swipe");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex mt-40 justify-center"
    >
      <div className="flex flex-col gap-3 w-1/4">
        <h1 className="text-3xl">Sign In</h1>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button type="submit" className="self-start">
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default SignIn;
