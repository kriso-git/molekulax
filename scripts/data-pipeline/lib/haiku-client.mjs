import Anthropic from '@anthropic-ai/sdk'
import 'dotenv/config'

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('[haiku-client] Missing ANTHROPIC_API_KEY in .env.local')
  console.error('[haiku-client] Copy .env.example to .env.local and set your real Anthropic API key')
  process.exit(1)
}

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export const MODEL = 'claude-haiku-4-5-20251001'

export async function callHaiku({ systemBlocks, userContent, tools, toolChoice, maxTokens = 4096 }) {
  return client.messages.create({
    model: MODEL,
    max_tokens: maxTokens,
    system: systemBlocks,
    messages: [{ role: 'user', content: userContent }],
    tools,
    tool_choice: toolChoice,
  })
}
