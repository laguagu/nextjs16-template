"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const SignupSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .transform((e) => e.toLowerCase()),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number"),
  name: z.string().min(2, "Name must be at least 2 characters"),
});

type State = {
  errors?: {
    email?: string[];
    password?: string[];
    name?: string[];
  };
  message?: string;
};

export async function registerUser(
  prevState: State | undefined,
  formData: FormData,
): Promise<State> {
  try {
    const validatedFields = SignupSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // TODO: Implement your auth logic here
    // const { email, password, name } = validatedFields.data;
    // const user = await createUser({ email, password, name });
  } catch (error) {
    console.error("Signup error:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
    };
  }

  redirect("/sign-in");
}
