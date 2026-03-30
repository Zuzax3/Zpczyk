<template>
  <div class="about-chat" @click.stop>
    <div class="about-sheet">
      <div class="chat-log">
        <div
          v-for="(m, i) in messages"
          :key="i"
          class="msg"
          :class="m.role"
        >
          <div class="bubble">{{ m.text }}</div>
        </div>
      </div>

      <div v-if="choices.length" class="chat-choices">
        <button
          v-for="c in choices"
          :key="c.id"
          class="chat-choice"
          type="button"
          @click="pick(c)"
        >
          {{ c.label }}
        </button>
      </div>

      <div class="chat-footer">
        <button class="chat-exit" type="button" @click="$emit('close')">
          back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['close'])

// --- Conversation "nodes" (leicht erweiterbar) ---
const NODES = {
  start: {
    assistant: [
      "You’re probably looking for an About page.",
      "That makes sense. I’m not really the one speaking — just the thing that carries it.",
    ],
    choices: [
      { id: 'voice', label: "Why an assistant?", next: 'voice' },
      { id: 'work', label: "What kind of work is this?", next: 'work' },
      { id: 'belief', label: "What do you care about?", next: 'belief' },
      { id: 'quick', label: "Give me the short version.", next: 'quick' },
    ]
  },

  voice: {
    assistant: [
     "A lot of the work doesn’t speak directly.",
    "I tend to use interfaces, situations, or small systems to frame it instead of explaining it upfront.",
    "It’s less about distance, more about letting things unfold on their own."
    ],
    choices: [
      { id: 'belief', label: "Ok. But what do you care about?", next: 'belief' },
      { id: 'work', label: "Show me the work.", next: 'work' },
      { id: 'end', label: "That’s enough. Thanks.", next: 'end' },
    ]
  },

  work: {
    assistant: [
     "The projects move across different formats — posters, games, short films, installations, and web-based pieces.",
     "There isn’t a single medium that defines them. Most of the time, the format follows the idea.",
     "A lot of the work starts with a concept and then looks for the right form to carry it."
    ],
    choices: [
      { id: 'end', label: "Alright. Let me browse.", next: 'end' },
      { id: 'voice', label: "Back to the assistant thing.", next: 'voice' },
    ]
  },

  belief: {
    assistant: [
    "I’m interested in how people interpret things, especially when something isn’t fully explained.",
    "In how small shifts in context can change what something means.",
   "And in situations where you have to decide without being completely sure."
    ],
    choices: [
      { id: 'quick', label: "Short version?", next: 'quick' },
      { id: 'end', label: "Ok. I’ll look around.", next: 'end' },
    ]
  },

  quick: {
    assistant: [
       "Concept-driven work across different media.",
      "Often interactive, sometimes narrative, always tied to an idea.",
    ],
    choices: [
      { id: 'end', label: "Got it.", next: 'end' },
      { id: 'belief', label: "Tell me what you mean by doubt.", next: 'belief' },
    ]
  },

  end: {
    assistant: [
    "That should be enough to get an idea."
    ],
    choices: []
  }
}

// --- state ---
const nodeKey = ref('start')
const messages = ref([]) // {role:'assistant'|'user', text:''}

// initial render
function boot() {
  messages.value = []
  nodeKey.value = 'start'
  pushAssistantLines(NODES.start.assistant)
}
boot()

const choices = computed(() => NODES[nodeKey.value]?.choices ?? [])

function pushAssistantLines(lines) {
  for (const line of lines) {
    messages.value.push({ role: 'assistant', text: line })
  }
}

function pick(choice) {
  // user bubble
  messages.value.push({ role: 'user', text: choice.label })

  // jump node
  nodeKey.value = choice.next

  // assistant reply
  const node = NODES[nodeKey.value]
  if (node?.assistant?.length) pushAssistantLines(node.assistant)
}
</script>

<style scoped>
.about-chat{
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: clamp(24px, 6vw, 120px);
}

.about-sheet{
  width: min(720px, 58vw);
  min-height: clamp(220px, 28vh, 360px);
  max-height: min(68vh, 720px);
  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 20px 22px;
  border-radius: 18px;
  background: rgba(255,255,255,0.55);
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 18px 40px rgba(0,0,0,0.10);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.chat-log{
  overflow: auto;
  padding-right: 6px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 0;
}

.msg{
  display: flex;
}
.msg.assistant{ justify-content: flex-start; }
.msg.user{ justify-content: flex-end; }

.bubble{
  max-width: 90%;
  font-size: 13px;
  line-height: 1.75;
  color: rgba(10,10,10,0.76);

  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255,255,255,0.6);
  border: 1px solid rgba(0,0,0,0.06);
}

.msg.user .bubble{
  background: rgba(20,20,20,0.92);
  color: rgba(255,255,255,0.92);
  border-color: rgba(255,255,255,0.10);
}

.chat-choices{
  display: grid;
  gap: 10px;
}

.chat-choice{
  width: 100%;
  background: rgba(20,20,20,0.92);
  color: rgba(255,255,255,0.92);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 12px;
  letter-spacing: 0.02em;
  cursor: pointer;
}

.chat-choice:hover{ transform: translateY(-1px); }

.chat-footer{
  display: flex;
  justify-content: flex-end;
}

.chat-exit{
  background: rgba(20,20,20,0.92);
  color: rgba(255,255,255,0.92);
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
}

@media (max-width: 820px){
  .about-sheet{
    width: min(92vw, 980px);
    min-height: clamp(260px, 34vh, 380px);
  }

  .about-chat{
    justify-content: center;
    padding-right: 0;
  }
}
</style>
