<template>
  <div class="about-chat" @click.stop>
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
</template>

<script setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['close'])

// --- Conversation "nodes" (leicht erweiterbar) ---
const NODES = {
  start: {
    assistant: [
      "You’re looking for an About page...",
      "Fair. I’m not the messenger — just a relay.",
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
      "Rarely, anything here speaks alone.",
      "I’m usually positioned as a second voice — a device, a character, a system — when direct speech falls short.",
      "It’s not distance. It’s precision."
    ],
    choices: [
      { id: 'belief', label: "Ok. But what do you care about?", next: 'belief' },
      { id: 'work', label: "Show me the work.", next: 'work' },
      { id: 'end', label: "That’s enough. Thanks.", next: 'end' },
    ]
  },

  work: {
    assistant: [
      "Mostly: interactive pieces, visual systems, and narrative interfaces.",
      "Designs tend to work best when they feel calm — but still slightly unstable, as if they might respond.",
      "Projects are easier to understand than explanations. You can browse next."
    ],
    choices: [
      { id: 'end', label: "Alright. Let me browse.", next: 'end' },
      { id: 'voice', label: "Back to the assistant thing.", next: 'voice' },
    ]
  },

  belief: {
    assistant: [
      "I care about the gap between hearing and understanding.",
      "About what gets lost in translation and what gets invented to fill the silence.",
    ],
    choices: [
      { id: 'quick', label: "Short version?", next: 'quick' },
      { id: 'end', label: "Ok. I’ll look around.", next: 'end' },
    ]
  },

  quick: {
    assistant: [
      "Designer. Listener. Slightly suspicious of certainty.",
    ],
    choices: [
      { id: 'end', label: "Got it.", next: 'end' },
      { id: 'belief', label: "Tell me what you mean by doubt.", next: 'belief' },
    ]
  },

  end: {
    assistant: [
      "That’s enough context.",
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
  right: clamp(80px, 10vw, 160px);
  top: clamp(14%, 18vh, 22%);
  width: min(520px, 44vw);
  max-height: min(70vh, 720px);
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 16px;
  border-radius: 14px;
  background: rgba(255,255,255,0.42);
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 18px 40px rgba(0,0,0,0.10);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.chat-log{
  overflow: auto;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.msg{
  display: flex;
}
.msg.assistant{ justify-content: flex-start; }
.msg.user{ justify-content: flex-end; }

.bubble{
  max-width: 85%;
  font-size: 14px;
  line-height: 1.75;
  color: rgba(10,10,10,0.78);

  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255,255,255,0.55);
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
  border: none;
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
}

.chat-choice:hover{ transform: translateY(-1px); }

.chat-footer{
  display: flex;
  justify-content: flex-end;
}

.chat-exit{
  background: transparent;
  border: 1px solid rgba(0,0,0,0.12);
  color: rgba(10,10,10,0.70);
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
}
</style>
