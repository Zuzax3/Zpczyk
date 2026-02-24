<script setup lang="ts">
import { ref, computed } from 'vue'
import PortfolioView from './PortfolioView.vue'
import AboutChat from './AboutChat.vue'

/**
 * STATES:
 * home.idle     -> nur Bild, kein Text
 * home.speaking -> Glas-Rect + Introtext
 * home.menu     -> Glas-Rect + 3 Buttons
 * about.chat    -> AboutChat overlay offen
 * talk.vn       -> placeholder
 * portfolio     -> placeholder
 */
const state = ref('home.idle', ' home.speaking', 'home.menu', 'portfolio.intro', ' portfolio.transition', 'portfolio.view')
// home.idle | home.speaking | home.menu | portfolio.intro | portfolio.transition | 

const showSheet = computed(() =>
  state.value === 'home.speaking' ||
  state.value === 'home.menu' ||
  state.value === 'portfolio.intro' ||
  state.value === 'portfolio.transition'
)

const assistantPose = ref('idle') // 'idle' | 'active'
const assistantText = ref('')     // Text im Glas-Rect

const heroImg = computed(() => {
  if (assistantPose.value === 'active') return '/assistant_active.png'
  return '/assistant_idle.png'
})

function setState(next) {
  state.value = next
}

/** Click irgendwo ins Bild -> nur Home-States */
function onSceneClick(e) {
  // Wenn About offen ist: nichts im Hintergrund klicken
  if (state.value === 'about.chat') return

  // clicks auf buttons nicht als scene-click werten
  if (e.target.closest?.('button')) return

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

  // home.menu: click ins leere macht nichts
}

function chooseHomeAction(which) {
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
  "Yes. A portfolio. Not a confession, but close.",
  "Work, plus the noise around it.",
  "Pick a door. I’ll pretend it was your idea."
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

  setState('portfolio.transition')

  setTimeout(() => {
    setState('portfolio.view')
  }, 420)
}

</script>



<template>
  <section class="hero" aria-label="assistant hero">
    <!-- Background drawing -->
    <div class="hero-media" @click="onSceneClick">
      <img class="hero-img" :src="heroImg" alt="" draggable="false" />
    </div>

    <!-- Glass Rect + Text -->
<div v-if="showSheet" class="overlay overlay-torso">
  <div
    class="sheet"
    :class="{ sheetUp: state === 'portfolio.transition' }"
    @click="state === 'portfolio.intro' ? advancePortfolioIntro() : null"
  >
    <div class="sheet-text">{{ assistantText }}</div>

    <div v-if="state === 'home.menu'" class="cta-row">

        <!-- 3 Buttons nur im Menü -->
        <div v-if="state === 'home.menu'" class="cta-row">
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

   <PortfolioView v-if="state === 'portfolio.view'" @close="setState('home.menu')" />

   <AboutChat v-if="state === 'about.chat'" @close="setState('home.menu')" />


  </section>
</template>


<style scoped>
/* =========================
   Variables / palette
   ========================= */
:root{
  --panel-bg: #151515;
  --panel-radius: 14px;
  --muted: rgba(255,255,255,.65);
  --muted-strong: rgba(255,255,255,.75);
  --muted-subtle: rgba(255,255,255,.06);
  --accent-hover: rgba(255,255,255,.06);
}

/* =========================
   HERO / background
   ========================= */
.hero{
  position: fixed;     /* statt relative */
  inset: 0;            /* top/right/bottom/left = 0 */
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  background: #fff;
  z-index: 0;          /* ggf. 1, falls was drüber liegt */
}


/* Klickfläche bleibt komplett */
.hero-media{
  position: absolute;
  inset: 0;
  cursor: pointer;
  user-select: none;
}

/* Figur größer + ruhiger platziert */
.hero-img{
  position: absolute;
  top: 55%;
  left: 50%;

  width: 520px;  /* HIER steuerst du die Größe */
  height: auto;

  transform: translate(-50%, -50%);
  object-fit: contain;
}




/* =========================
   OVERLAY / assistant sheet
   ========================= */
/* shared overlay base */
.sheet{
  position: absolute;
  left: 0;
  right: 0;

  /* >>> HIER: Position auf Brusthöhe <<< */
  top: 52%;
  transform: translateY(40px);

  /* >>> HIER: Höhe <<< */
  height: clamp(140px, 20vh, 240px);

  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  display: flex;
  flex-direction: column;   /* <-- erzwingt: Text oben, Buttons unten */
  justify-content: center;
  align-items: center;

 transition: transform 420ms cubic-bezier(.2,.9,.2,1);

}

.sheet-inner{
  width: min(980px, 86vw);
  text-align: center;
  padding: 28px 22px;
  pointer-events: auto; /* Buttons später klickbar */
}

.sheet-text{
  margin: 0;
  font-size: clamp(12px, 1.05vw, 14px);
  line-height: 1.7;
  color: rgba(0,0,0,0.75);
}




/* =========================
   CHOICES / buttons
   ========================= */
/* in deinem <style scoped> */


.cta-row{
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  gap: 28px;
  margin-top: 22px;
  align-items: center;
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



.sheetUp{
  transform: translateY(-28vh); /* tweak */
}

/* =========================
   responsive tweaks
   ========================= */
@media (max-width: 720px){
  .more-gallery { grid-template-columns: 1fr; }
  .more-img { height: 260px; }
}

/* end of organized styles */
</style>

