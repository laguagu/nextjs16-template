// "use server";

// import { cookies } from "next/headers";

// import { DEFAULT_MODEL, isValidModel, type AIModel } from "./registry";

// const MODEL_COOKIE_NAME = "ai-model-preference";
// const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

// export async function getSelectedModel(): Promise<AIModel> {
//   const cookieStore = await cookies();
//   const modelCookie = cookieStore.get(MODEL_COOKIE_NAME);

//   if (modelCookie?.value && isValidModel(modelCookie.value)) {
//     return modelCookie.value;
//   }

//   return DEFAULT_MODEL;
// }

// export async function setSelectedModel(model: string): Promise<void> {
//   if (!isValidModel(model)) {
//     throw new Error(`Invalid model: ${model}`);
//   }

//   const cookieStore = await cookies();
//   cookieStore.set(MODEL_COOKIE_NAME, model, {
//     maxAge: COOKIE_MAX_AGE,
//     path: "/",
//     sameSite: "lax",
//     secure: process.env.NODE_ENV === "production",
//   });
// }

// export async function clearModelPreference(): Promise<void> {
//   const cookieStore = await cookies();
//   cookieStore.delete(MODEL_COOKIE_NAME);
// }
