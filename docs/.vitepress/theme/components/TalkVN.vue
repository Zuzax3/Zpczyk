<script setup lang="ts">
import { computed, ref } from 'vue'
import { talkContent } from '../content/talkContent'

const emit = defineEmits(['close'])

type Phase = 'intro' | 'choice' | 'reply' | 'closing'

const conversation = talkContent.conversations?.[0] ?? {
  intro: [],
  choices: [],
  closing: []
}

const phase = ref<Phase>('intro')
const introIndex = ref(0)
const replyLines = ref<string[]>([])
const replyIndex = ref(0)
const closingIndex = ref(0)

const currentLine = computed(() => {
  if (phase.value === 'intro') return conversation?.intro?.[introIndex.value] ?? ''
  if (phase.value === 'reply') return replyLines.value[replyIndex.value] ?? ''
  if (phase.value === 'closing') return conversation?.closing?.[closingIndex.value] ?? ''
  return ''
})

function advance() {
  if (phase.value === 'choice') return

  if (phase.value === 'intro') {
    if (introIndex.value < conversation.intro.length - 1) {
      introIndex.value++
      return
    }
    phase.value = 'choice'
    return
  }

  if (phase.value === 'reply') {
    if (replyIndex.value < replyLines.value.length - 1) {
      replyIndex.value++
      return
    }
    phase.value = 'closing'
    return
  }

  if (phase.value === 'closing') {
    if (closingIndex.value < conversation.closing.length - 1) {
      closingIndex.value++
      return
    }
    emit('close')
  }
}

function pick(choice: (typeof conversation.choices)[number]) {
  replyLines.value = choice.response
  replyIndex.value = 0
  closingIndex.value = 0
  phase.value = 'reply'
}
</script>

<template>
  <div class="talk-vn" @click="advance">
    <div class="sheet">
      <div class="sheet-text">{{ currentLine }}</div>

      <div v-if="phase === 'choice'" class="cta-wrap">
        <div class="cta-row">
          <button
            v-for="c in conversation.choices"
            :key="c.id"
            class="cta"
            type="button"
            @click.stop="pick(c)"
          >
            {{ c.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.talk-vn{
  position: absolute;
  inset: 0;
  z-index: 10;
}

.sheet{
  position: absolute;
  left: 50%;
  top: 52%;
  transform: translate(-50%, 40px);
  width: min(980px, 86vw);
  height: clamp(140px, 20vh, 240px);
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 18px 20px;
  border-radius: 18px;
}

.sheet-text{
  font-size: clamp(12px, 1.05vw, 14px);
  line-height: 1.7;
  color: rgba(0,0,0,0.78);
  text-align: center;
}


.cta-wrap{
  display: flex;
  justify-content: center;
  width: 100%;
}

.cta-row{
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 220px));
  gap: 16px;
}

.cta{
  height: 44px;
  border-radius: 8px;
  background: rgba(17,17,17,0.92);
  color: rgba(255,255,255,0.92);
  border: 1px solid rgba(255,255,255,0.10);
  font-size: 12px;
  letter-spacing: 0.02em;
  cursor: pointer;
}

.cta:hover{
  transform: translateY(-1px);
}

@media (max-width: 820px){
  .cta-row{
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
