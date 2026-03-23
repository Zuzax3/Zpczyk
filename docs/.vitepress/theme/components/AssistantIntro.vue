<script setup lang="ts">
import { ref, computed } from 'vue'
import PortfolioView from './PortfolioView.vue'
import AboutChat from './AboutChat.vue'

/**
 * STATES:
 * home.idle
 * home.speaking
 * home.menu
 * about.chat
 * talk.vn
 * portfolio.intro
 * portfolio.transition
 * portfolio.view
 * portfolio.detail
 */
const state = ref('home.idle')

const showSheet = computed(() =>
  state.value === 'home.speaking' ||
  state.value === 'home.menu' ||
  state.value === 'portfolio.intro'
)

const assistantPose = ref('idle')
const assistantText = ref('')

const heroImg = computed(() => {
  if (state.value === 'portfolio.detail') return '/assistant_back.png'
  if (assistantPose.value === 'active') return '/assistant_active.png'
  return '/assistant_idle.png'
})

function setState(next: string) {
  state.value = next
}

function onSceneClick(e: MouseEvent) {
  if (state.value === 'about.chat') return

  const target = e.target as HTMLElement | null
  if (target?.closest?.('button')) return

  if (state.value === 'home.idle') {
    assistantPose.value = 'active'
    assistantText.value = 'This is a space for work. And the gaps around it.'
    setState('home.speaking')
    return
  }

  if (state.value === 'home.speaking') {
    assistantText.value = 'What do you want to do?'
    setState('home.menu')
    return
  }

  if (state.value === 'portfolio.intro') {
    advancePortfolioIntro()
    return
  }
}

function chooseHomeAction(which: string) {
  if (which === 'portfolio') {
    startPortfolioIntro()
    return
  }

  if (which === 'talk') {
    assistantText.value = 'Alright. A small conversation. Keep it honest.'
    setState('talk.vn')
    return
  }

  if (which === 'about') {
    setState('about.chat')
    return
  }
}

const introLines = [
  'Yes. A portfolio. Not a confession, but close.',
  'Work, plus the noise around it.',
  'Pick a door. I’ll pretend it was your idea.'
]

const introIndex = ref(0)

function startPortfolioIntro() {
  introIndex.value = 0
  assistantPose.value = 'active'
  assistantText.value = introLines[introIndex.value]
  setState('portfolio.intro')
}

function advancePortfolioIntro() {
  if (introIndex.value < introLines.length - 1) {
    introIndex.value++
    assistantText.value = introLines[introIndex.value]
    return
  }

  setState('portfolio.view')
}
</script>

<template>
<section class="hero" aria-label="assistant hero" @click="onSceneClick">
  <div class="hero-media">
      <img class="hero-img" :src="heroImg" alt="" draggable="false" />
    </div>

    <div v-if="showSheet" class="overlay overlay-torso">
    <div
       class="sheet"
        >
        <div class="sheet-text">{{ assistantText }}</div>

        <div v-if="state === 'home.menu'" class="cta-wrap">
          <div class="cta-row">
            <button class="cta" type="button" @click="chooseHomeAction('portfolio')">
              This is a portfolio?
            </button>

            <button class="cta cta-primary" type="button" @click="chooseHomeAction('talk')">
              Let’s Talk
            </button>

            <button class="cta" type="button" @click="chooseHomeAction('about')">
              About you
            </button>
          </div>
        </div>
      </div>
    </div>

    <PortfolioView
      v-if="state === 'portfolio.view' || state === 'portfolio.detail'"
      @close="setState('home.menu')"
      @open-detail="setState('portfolio.detail')"
      @close-detail="setState('portfolio.view')"
    />

    <AboutChat
      v-if="state === 'about.chat'"
      @close="setState('home.menu')"
    />
  </section>
</template>

<style scoped>
:root{
  --panel-bg: #151515;
  --panel-radius: 14px;
  --muted: rgba(255,255,255,.65);
  --muted-strong: rgba(255,255,255,.75);
  --muted-subtle: rgba(255,255,255,.06);
  --accent-hover: rgba(255,255,255,.06);
}

.hero{
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  background: #fff;
  z-index: 0;
}

.hero-media{
  position: absolute;
  inset: 0;
  cursor: pointer;
  user-select: none;
}

.hero-img{
  position: absolute;
  top: 58%;
  left: 50%;
  width: clamp(420px, 38vw, 780px);
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: contain;
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
  transition: transform 420ms cubic-bezier(.2,.9,.2,1);
}

.sheet-text{
  font-size: clamp(12px, 1.05vw, 14px);
  line-height: 1.7;
  color: rgba(0,0,0,0.75);
  margin-bottom: 16px;
}


.cta-wrap{
  display: flex;
  justify-content: center;
}

.cta-row{
  display: grid;
  grid-template-columns: repeat(3, 240px);
  gap: 20px;
}

.cta{
  height: 46px;
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

.cta-primary{
  background: rgba(17,17,17,0.98);
  border-color: rgba(255,255,255,0.16);
}

@media (max-width: 820px){
  .cta-row{
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>