# AI Agent Project Setup Prompt

Käytä tätä promptia kun haluat AI-agentin alustavan uuden projektin samalla rakenteella.

---

## Prompt (kopioi tämä)

```
Luo minulle fullstack-projekti seuraavalla rakenteella:

## Tech Stack
- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind v4, shadcn/ui
- **Backend:** Python FastAPI + OpenAI Agents SDK + LiteLLM
- **Paketinhallinta:** pnpm (frontend), uv (backend)

## Projektin kuvaus
[KUVAILE TÄHÄN MITÄ RAKENNAT - esim. "Chat-pohjainen matkasuunnittelija"]

## Kansiorakenne

```text
projekti/
├── app/                        # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx                # Pääsivu
│   ├── globals.css
│   ├── error.tsx
│   ├── loading.tsx
│   ├── components/             # Route-kohtaiset komponentit
│   │   └── [komponentit].tsx
│   └── api/
│       └── [endpoint]/
│           └── route.ts        # Backend proxy
│
├── components/
│   ├── ui/                     # shadcn/ui komponentit
│   └── layout/
│       └── header.tsx
│
├── lib/
│   ├── utils.ts                # cn() helper
│   └── api.ts                  # Backend API client
│
├── hooks/
│   └── use-[hook].ts
│
├── types/
│   └── index.ts                # Shared TypeScript types
│
├── backend/                    # Python FastAPI
│   ├── __init__.py
│   ├── main.py                 # FastAPI app entrypoint
│   ├── config.py               # Ympäristömuuttujat
│   ├── pyproject.toml          # uv projekti
│   ├── .python-version         # Python versio
│   │
│   ├── agent/
│   │   ├── __init__.py
│   │   ├── [agent_name].py     # OpenAI Agents SDK agentti
│   │   └── prompts/
│   │       └── [agent].md      # Agent instructions
│   │
│   ├── tools/
│   │   ├── __init__.py
│   │   └── [tool_name].py      # @function_tool työkalut
│   │
│   ├── services/
│   │   ├── __init__.py
│   │   └── [service].py        # Business logic
│   │
│   └── schemas/
│       ├── __init__.py
│       └── outputs.py          # Pydantic strukturoidut outputit
│
├── docs/
│   └── [dokumentaatio].md
│
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## Backend Pattern (OpenAI Agents SDK + LiteLLM)

### pyproject.toml
```toml
[project]
name = "projekti-backend"
version = "0.1.0"
requires-python = ">=3.11"
dependencies = [
    "fastapi>=0.109.0",
    "uvicorn>=0.27.0",
    "python-dotenv>=1.0.0",
    "httpx>=0.26.0",
    "pydantic>=2.5.0",
    "openai>=1.12.0",
    "openai-agents>=0.1.0",
    "litellm>=1.30.0",
]

[tool.uv]
dev-dependencies = [
    "pytest>=8.0.0",
    "pytest-asyncio>=0.23.0",
]
```

### Agent Pattern
```python
# agent/[name].py
from agents import Agent, AgentOutputSchema, Runner
from agents.extensions.models.litellm_model import LitellmModel
from pathlib import Path

INSTRUCTIONS = (Path(__file__).parent / "prompts" / "[name].md").read_text()

def get_model():
    """LiteLLM model with Azure/OpenAI support."""
    if os.getenv("AZURE_API_KEY"):
        return LitellmModel(
            model=f"azure/{os.getenv('AZURE_DEPLOYMENT_NAME', 'gpt-5.1')}",
            api_key=os.environ["AZURE_API_KEY"],
            api_base=os.getenv("AZURE_API_BASE"),
        )
    return "gpt-5.1"

agent = Agent(
    name="AgentName",
    instructions=INSTRUCTIONS,
    model=get_model(),
    output_type=AgentOutputSchema(OutputSchema, strict_json_schema=True),
    tools=[tool1, tool2, tool3]
)
```

### Structured Output Pattern
```python
# schemas/outputs.py
from pydantic import BaseModel, Field
from typing import Optional
from enum import Enum

class OutputSchema(BaseModel):
    """Agentin strukturoitu vastaus."""

    message: str = Field(description="Vastaus käyttäjälle")
    data: Optional[list[DataItem]] = Field(default=None)
    next_action: str = Field(description="Seuraava toiminto")
```

### Tool Pattern
```python
# tools/[name].py
from agents import function_tool

@function_tool
async def tool_name(
    param: str,
    optional_param: Optional[int] = None
) -> dict:
    """
    Tool description - tämä näkyy agentille.

    Args:
        param: Parametrin kuvaus
        optional_param: Valinnainen parametri

    Returns:
        Palautusarvon kuvaus
    """
    # Implementation
    pass
```

## Frontend Pattern

### API Client
```typescript
// lib/api.ts
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000"

export async function chat(message: string, sessionId?: string) {
  const res = await fetch(`${BACKEND_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, session_id: sessionId }),
  })
  return res.json()
}
```

### Chat Hook
```typescript
// hooks/use-chat.ts
"use client"
import { useState, useCallback } from "react"
import { chat } from "@/lib/api"

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = useCallback(async (content: string) => {
    setIsLoading(true)
    // ... implementation
    setIsLoading(false)
  }, [])

  return { messages, sendMessage, isLoading }
}
```

## Ympäristömuuttujat

### .env.example (root)
```bash
# Backend
BACKEND_URL=http://localhost:8000
```

### backend/.env.example
```bash
# OpenAI
OPENAI_API_KEY=

# Azure OpenAI (valinnainen)
AZURE_API_KEY=
AZURE_API_BASE=
AZURE_DEPLOYMENT_NAME=gpt-5.1

# App
LOG_LEVEL=INFO
```

## Käynnistysohjeet

### Frontend
```bash
pnpm install
pnpm dev
```

### Backend
```bash
cd backend
uv sync
uv run uvicorn main:app --reload
```

---

Luo nämä tiedostot tyhjinä placeholdereina (// TODO: kommenteilla) ellei erikseen pyydetä toimivaa koodia.
```

---

## Käyttöesimerkki

```
Luo minulle fullstack-projekti seuraavalla rakenteella:

## Tech Stack
- Frontend: Next.js 16, React 19, TypeScript, Tailwind v4, shadcn/ui
- Backend: Python FastAPI + OpenAI Agents SDK + LiteLLM
- Paketinhallinta: pnpm (frontend), uv (backend)

## Projektin kuvaus
Asiakaspalvelu-chatbot joka vastaa tuotetiedusteluihin.
Hakee tuotteet PostgreSQL-tietokannasta ja generoi vastaukset gpt-5.1:lla.

Agentin työkalut:
1. search_products - Hakee tuotteita hakusanalla
2. get_product_details - Hakee tuotteen tiedot ID:llä
3. check_availability - Tarkistaa saatavuuden

Luo kansiorakenne ja tyhjät placeholder-tiedostot.
```
