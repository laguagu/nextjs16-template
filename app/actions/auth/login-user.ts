"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
};

export async function loginUser(
  prevState: State | undefined,
  formData: FormData,
): Promise<State> {
  try {
    const validatedFields = LoginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // TODO: Implement your auth logic here
    // Example: const result = await signIn(validatedFields.data);

    // if (result.error) {
    //   return { message: result.error };
    // }
  } catch (error) {
    console.error("Login error:", error);
    return {
      message: "Server error. Please try again later.",
    };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}
