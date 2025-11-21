# AI Integration Module

This folder contains example code for integrating AI functionality into your Next.js application. All code is currently **commented out** and serves as a reference template.

## 📁 Folder Structure

```text
ai/
├── models/           # AI model configuration and user preferences
│   ├── registry.ts   # Model definitions and validation
│   └── preference.ts # Server actions for managing user model preferences
├── clients/          # AI provider client configurations
│   ├── azure.ts      # Azure OpenAI client setup
│   └── index.ts      # Centralized client exports
├── types/            # Shared TypeScript types
│   └── index.ts      # AI-related type definitions
├── actions/          # Server actions for AI operations (empty placeholder)
├── schemas/          # Zod schemas for validation (empty placeholder)
└── README.md         # This file
```

## 🎯 Purpose

This module demonstrates a clean architecture for:

- **Model Registry**: Define available AI models in one place
- **User Preferences**: Server-side cookie management for user's selected model
- **Client Configuration**: Centralized AI provider clients (Azure, OpenAI, Anthropic, etc.)
- **Type Safety**: Shared types across the AI module

## 💡 Usage Examples

### Uncomment and Configure

To activate this functionality:

1. **Install dependencies**:

   ```bash
   npm install @ai-sdk/azure
   # or for other providers:
   # npm install @ai-sdk/openai @ai-sdk/anthropic
   ```

2. **Set environment variables** (`.env.local`):

   ```env
   AZURE_RESOURCE_NAME=your-resource-name
   AZURE_API_KEY=your-api-key
   ```

3. **Uncomment the code** in the files you need

4. **Use in your app**:

   ```typescript
   import { getSelectedModel, setSelectedModel } from "@/ai/models/preference";
   import { azureOpenAI } from "@/ai/clients";

   // In a Server Component or Server Action
   const userModel = await getSelectedModel();
   await setSelectedModel("gpt-5.1");
   ```

### Adding New Models

Edit [models/registry.ts](models/registry.ts):

```typescript
export const MODEL_OPTIONS = [
  { id: "gpt-4.1", label: "GPT-4.1" },
  { id: "gpt-5.1", label: "GPT-5.1" },
  { id: "claude-3.5", label: "Claude 3.5" }, // Add here
] as const;
```

### Adding New Providers

Create a new file in `clients/` (e.g., `clients/openai.ts`), then export it in `clients/index.ts`.

## 🧹 Cleanup

If you don't need AI functionality:

- **Delete this entire folder**: `rm -rf ai/`
- Or keep it as reference and remove when ready to implement

## 📚 Learn More

- [Vercel AI SDK Documentation](https://sdk.vercel.ai/docs)
- [Azure OpenAI Service](https://azure.microsoft.com/en-us/products/ai-services/openai-service)
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
