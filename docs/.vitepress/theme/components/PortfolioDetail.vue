<template>
  <Teleport to="body">
    <transition name="pd-fade">
      <div v-if="open" class="pd">
        <div class="pd-backdrop" @click="closeDetail"></div>

        <div class="pd-shell">
          <section
            class="pd-card"
            :class="`pd-layout-${item?.layout || 'editorial'}`"
            :style="{
              '--detail-bg': item?.theme?.bg || '#ee982f'
            }"
          >
            <button class="pd-close" type="button" @click="closeDetail">
              ×
            </button>

            <button class="pd-nav pd-nav-left" type="button" @click="goPrev">
              ←
            </button>

            <button class="pd-nav pd-nav-right" type="button" @click="goNext">
              →
            </button>

            <transition :name="`slide-${direction}`">
              <div class="pd-content" :key="item?.id">
                <div class="pd-editorial-hero">
                  <div
                    class="pd-bg-word"
                    v-if="item?.displayWord"
                  >
                    {{ item.displayWord }}
                  </div>

                  <div class="pd-meta-line" v-if="item?.meta">
                    <span>{{ item.meta }}</span>
                  </div>

                  <div class="pd-top">
                    <div class="pd-top-main">
                      <h1 class="pd-title">{{ item?.title || 'Project Title' }}</h1>

                      <p class="pd-lead" v-if="item?.statement">
                        {{ item.statement }}
                      </p>
                    </div>

                    <div class="pd-text" v-if="paragraphs.length">
                      <h3 class="pd-sub">
                        {{ item?.sections?.introTitle || 'Konzept' }}
                      </h3>

                      <div class="pd-text-columns">
                        <p v-for="(paragraph, index) in paragraphs" :key="index">
                          {{ paragraph }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pd-main">
                  <div class="pd-media" v-if="item?.image">
                    <img
                      :src="item.image"
                      alt=""
                      draggable="false"
                    />
                  </div>

                  <div class="pd-side-block" v-if="sideParagraphs.length">
                    <h3 class="pd-sub">
                      {{ item?.sections?.sideTitle || 'Material & Prozess' }}
                    </h3>

                    <p class="pd-side-highlight" v-if="item?.sideHighlight">
                      {{ item.sideHighlight }}
                    </p>

                    <div class="pd-side-text">
                      <p v-for="(paragraph, index) in sideParagraphs" :key="index">
                        {{ paragraph }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pd-extra" v-if="extraParagraphs.length">
                  <h3 class="pd-sub">
                    {{ item?.sections?.extraTitle || 'Recherche' }}
                  </h3>

                  <p v-for="(paragraph, index) in extraParagraphs" :key="index">
                    {{ paragraph }}
                  </p>
                </div>

                <div class="pd-carousel-wrap" v-if="item?.gallery?.length">
                  <h3 class="pd-sub pd-carousel-title">
                    {{ item?.sections?.galleryTitle || 'Galerie' }}
                  </h3>

                  <div class="pd-gallery-grid">
                    <div
                      v-for="(img, index) in item.gallery"
                      :key="img"
                      :class="[
                        'pd-gallery-item',
                        item?.galleryLayout?.[index] || (index === 0 ? 'big' : 'small')
                      ]"
                    >
                      <img
                        :src="img"
                        alt=""
                        draggable="false"
                        class="pd-gallery-img"
                      />
                    </div>
                  </div>
                </div>

                <div v-if="item?.videoEmbed" class="pd-video-section">
                  <div class="pd-divider"></div>

                  <div class="pd-video-embed">
                    <div class="pd-video-frame">
                      <iframe
                        :src="item.videoEmbed"
                        title="Video"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </section>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  item: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'next', 'prev'])

const direction = ref('next')

const paragraphs = computed(() => {
  if (Array.isArray(props.item?.description)) return props.item.description
  if (typeof props.item?.description === 'string' && props.item.description.trim()) {
    return props.item.description.split('\n\n')
  }
  return []
})

const sideParagraphs = computed(() => {
  if (Array.isArray(props.item?.sideText)) return props.item.sideText
  if (typeof props.item?.sideText === 'string' && props.item.sideText.trim()) {
    return props.item.sideText.split('\n\n')
  }
  return []
})

const extraParagraphs = computed(() => {
  if (Array.isArray(props.item?.extraText)) return props.item.extraText
  if (typeof props.item?.extraText === 'string' && props.item.extraText.trim()) {
    return props.item.extraText.split('\n\n')
  }
  return []
})

function closeDetail() {
  emit('close')
}

function goNext() {
  direction.value = 'next'
  emit('next')
}

function goPrev() {
  direction.value = 'prev'
  emit('prev')
}

watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
  { immediate: true }
)
</script>

<style scoped>
.pd {
  position: fixed;
  inset: 0;
  z-index: 9999;
}

.pd-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.08);
}

.pd-shell {
  position: absolute;
  inset: 0;
  padding: 92px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.pd-card {
  position: relative;
  width: min(1820px, 96vw);
  height: calc(100dvh - 92px);
  border-top-left-radius: 52px;
  border-top-right-radius: 52px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background: var(--detail-bg);
  backdrop-filter: blur(6px);
  box-shadow: 0 30px 120px rgba(0, 0, 0, 0.16);
}

.pd-close {
  position: sticky;
  top: 20px;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
  z-index: 30;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.14);
  color: rgba(255, 255, 255, 0.95);
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 180ms ease, background 180ms ease;
}

.pd-close:hover {
  background: rgba(0, 0, 0, 0.22);
  transform: translateY(-1px);
}

.pd-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 180ms ease;
  opacity: 0;
}

.pd-card:hover .pd-nav {
  opacity: 1;
}

.pd-nav:hover {
  background: rgba(0, 0, 0, 0.35);
  transform: translateY(-50%) scale(1.05);
}

.pd-nav-left {
  left: 24px;
}

.pd-nav-right {
  right: 24px;
}

.pd-content {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  overflow: hidden;
  will-change: transform;
}

.pd-editorial-hero {
  position: relative;
  overflow: hidden;
}

.pd-bg-word {
  position: absolute;
  top: 32px;
  right: 70px;
  font-size: clamp(90px, 18vw, 320px);
  line-height: 0.82;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.08);
  text-transform: uppercase;
  pointer-events: none;
  user-select: none;
  z-index: 0;
  max-width: 55%;
  text-align: right;
  word-break: break-word;
}

.pd-meta-line {
  position: relative;
  z-index: 1;
  padding: 48px 100px 0;
}

.pd-meta-line span {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.56);
}

.pd-top {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr minmax(520px, 900px);
  gap: 80px;
  padding: 22px 100px 28px;
  align-items: start;
}

.pd-top-main {
  max-width: 760px;
}

.pd-title {
  margin: 0 0 24px;
  color: rgba(255, 255, 255, 0.98);
  font-size: clamp(42px, 4.8vw, 88px);
  line-height: 0.94;
  letter-spacing: -0.05em;
  font-weight: 700;
  max-width: 820px;
}

.pd-lead {
  margin: 0;
  max-width: 520px;
  color: rgba(255, 255, 255, 0.95);
  font-size: clamp(24px, 2vw, 36px);
  line-height: 1.08;
  letter-spacing: -0.03em;
  font-weight: 600;
}

.pd-sub {
  margin: 0 0 14px;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.58);
}

.pd-text {
  max-width: 1820px;
  margin-bottom: 70px;
  padding-top: 8px;
  transform: translateX(0);
  grid-column: 1 / -1;
}

.pd-text-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.pd-text-columns p {
  margin: 0;
  max-width: none;
  color: rgba(255, 255, 255, 0.94);
  font-size: clamp(13px, 0.96vw, 15px);
  line-height: 1.75;
}

.pd-main {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.7fr);
  gap: 42px;
  padding: 8px 100px 0;
  align-items: start;
}

.pd-media {
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #d9d9d9;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.16);
}

.pd-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.pd-side-block {
  max-width: 460px;
  padding-top: 14px;
}

.pd-side-highlight {
  margin: 0 0 18px;
  color: rgba(255, 255, 255, 0.95);
  font-size: clamp(22px, 1.8vw, 30px);
  line-height: 1.08;
  letter-spacing: -0.03em;
  font-weight: 600;
  max-width: 15ch;
}

.pd-side-text p {
  margin: 0 0 18px;
  color: rgba(255, 255, 255, 0.94);
  font-size: clamp(13px, 0.96vw, 15px);
  line-height: 1.75;
}

.pd-extra {
  padding: 80px 100px 0;
  max-width: 1300px;
  margin-left: clamp(60px, 10vw, 220px);
}

.pd-extra p:first-child {
  font-size: clamp(18px, 1.4vw, 22px);
  line-height: 1.6;
  max-width: 40ch;
  font-weight: 500;
}

.pd-extra p {
  margin: 0 0 28px;
  color: rgba(255, 255, 255, 0.95);
  font-size: clamp(13px, 1.1vw, 15px);
  line-height: 1.9;
  max-width: 130ch;
}

.pd-carousel-wrap {
  padding: 18px 100px 64px;
}

.pd-carousel-title {
  margin-bottom: 18px;
}

.pd-gallery-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 20px;
  align-items: start;
}

.pd-gallery-item {
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
}

.pd-gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.pd-gallery-item.big {
  grid-column: span 4;
  aspect-ratio: 4 / 3;
}

.pd-gallery-item.small {
  grid-column: span 2;
  aspect-ratio: 1 / 1;
}

.pd-gallery-item.wide {
  grid-column: span 3;
  aspect-ratio: 16 / 10;
}

.pd-gallery-item.tall {
  grid-column: span 2;
  grid-row: span 2;
  aspect-ratio: 3 / 4;
}

/* editorial */
.pd-layout-editorial .pd-bg-word {
  display: block;
}

.pd-layout-editorial .pd-lead {
  display: block;
}

/* poster */
.pd-layout-poster .pd-editorial-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(280px, 0.85fr) minmax(420px, 1.15fr);
  grid-template-rows: auto auto;
  grid-template-areas:
    "meta title"
    "intro title";
  gap: 28px 72px;
  padding: 48px 100px 44px;
  overflow: hidden;
  min-height: 540px;
}

.pd-layout-poster .pd-top {
  display: contents;
}

.pd-layout-poster .pd-bg-word {
  position: absolute;
  left: 34px;
  bottom: 40px;
  right: auto;
  top: auto;
  z-index: 0;
  max-width: 52%;
  text-align: left;
  font-size: clamp(150px, 20vw, 230px);
  line-height: 0.8;
  letter-spacing: -0.07em;
  color: rgba(255, 255, 255, 0.12);
  pointer-events: none;
  user-select: none;
  text-transform: uppercase;
}

.pd-layout-poster .pd-meta-line {
  grid-area: meta;
  align-self: start;
  z-index: 2;
  padding: 0;
  margin-top: 4px;
}

.pd-layout-poster .pd-top-main {
  grid-area: title;
  align-self: start;
  justify-self: end;
  text-align: right;
  max-width: 560px;
  z-index: 2;
  position: relative;
}

.pd-layout-poster .pd-title {
  margin: 0 0 24px auto;
  font-size: clamp(58px, 7vw, 118px);
  line-height: 0.9;
  letter-spacing: -0.06em;
  max-width: 6ch;
}

.pd-layout-poster .pd-lead {
  margin: 0 0 0 auto;
  max-width: 11ch;
  font-size: clamp(28px, 2.5vw, 46px);
  line-height: 1.03;
  letter-spacing: -0.035em;
}

.pd-layout-poster .pd-text {
  grid-area: intro;
  grid-column: auto;
  z-index: 2;
  position: relative;
  max-width: 860px;
  margin: 48px 0 120px;
  padding-top: 0;
  transform: none;
}

.pd-layout-poster .pd-text-columns {
  grid-template-columns: 1fr 1fr;
  gap: 56px;
}

.pd-layout-poster .pd-main {
  grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1fr);
  gap: 64px;
  padding: 90px 100px 0;
}

.pd-layout-poster .pd-side-block {
  max-width: 460px;
  padding-top: 24px;
}

.pd-layout-poster .pd-media {
  aspect-ratio: 3 / 2;
}

.pd-layout-poster .pd-extra {
  padding: 72px 100px 0;
  max-width: 1800px;
  margin-left: auto;
  margin-right: 0;
}

.pd-layout-poster .pd-carousel-wrap {
  padding: 28px 100px 70px;
}

/* minimal */
.pd-layout-minimal .pd-bg-word {
  display: block;
  position: absolute;
  bottom: 20px;
  left: 60px;
  right: auto;
  top: auto;
  font-size: clamp(280px, 12vw, 380px);
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: rgba(255, 255, 255, 0.04);
  text-align: right;
  max-width: 100%;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

.pd-layout-minimal .pd-editorial-hero {
  padding: 48px 100px 24px;
  overflow: visible;
}

.pd-layout-minimal .pd-meta-line {
  padding: 0;
  margin-bottom: 18px;
}

.pd-layout-minimal .pd-top {
  display: block;
  padding: 0;
}

.pd-layout-minimal .pd-top-main {
  max-width: 920px;
  margin-bottom: 36px;
}

.pd-layout-minimal .pd-title {
  margin: 0 0 20px;
  max-width: 10ch;
  font-size: clamp(48px, 5.5vw, 92px);
  line-height: 0.95;
  letter-spacing: -0.05em;
}

.pd-layout-minimal .pd-lead {
  margin: 0;
  max-width: 30ch;
  font-size: clamp(20px, 1.7vw, 28px);
  line-height: 1.28;
  font-weight: 500;
}

.pd-layout-minimal .pd-text {
  max-width: 820px;
  margin: 0;
  padding-top: 0;
  transform: none;
  grid-column: auto;
}

.pd-layout-minimal .pd-text-columns {
  grid-template-columns: 1fr;
  gap: 18px;
}

.pd-layout-minimal .pd-text-columns p {
  max-width: 62ch;
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.85;
}

.pd-layout-minimal .pd-main {
  display: block;
  padding: 28px 100px 0;
}

.pd-layout-minimal .pd-media {
  width: 100%;
  aspect-ratio: auto;
  margin-bottom: 34px;
  background: rgba(255, 255, 255, 0.05);
}

.pd-layout-minimal .pd-media img {
  width: 100%;
  height: auto;
  max-height: none;
  object-fit: contain;
}

.pd-layout-minimal .pd-side-block {
  max-width: 820px;
  padding-top: 0;
}

.pd-layout-minimal .pd-side-highlight {
  font-size: clamp(18px, 1.4vw, 24px);
  line-height: 1.35;
  max-width: 34ch;
}

.pd-layout-minimal .pd-side-text p {
  max-width: 62ch;
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.85;
}

.pd-layout-minimal .pd-extra {
  padding: 48px 100px 0;
  max-width: 820px;
  margin-left: 0;
}

.pd-layout-minimal .pd-extra p:first-child {
  font-size: clamp(16px, 1.2vw, 20px);
  line-height: 1.7;
  max-width: 42ch;
}

.pd-layout-minimal .pd-extra p {
  max-width: 62ch;
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.9;
}

.pd-layout-minimal .pd-gallery-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.pd-layout-minimal .pd-gallery-item {
  aspect-ratio: auto;
  background: rgba(255, 255, 255, 0.05);
}

.pd-layout-minimal .pd-gallery-img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* video */
.pd-video-section {
  padding: 80px 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pd-video-embed {
  width: 100%;
  max-width: 1100px;
  padding: 0 100px;
}

.pd-video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 6px;
  overflow: hidden;
  background: #000;
}

.pd-video-frame iframe {
  width: 100%;
  height: 100%;
  display: block;
}

.pd-divider {
  width: 100%;
  max-width: 600px;
  height: 5px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.85),
    transparent
  );
  margin-bottom: 48px;
}

/* panel open */
.pd-fade-enter-active,
.pd-fade-leave-active {
  transition:
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 240ms ease;
}

.pd-fade-enter-from {
  transform: translateY(60px);
  opacity: 0;
}

.pd-fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.pd-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.pd-fade-leave-to {
  transform: translateY(40px);
  opacity: 0;
}

/* inner slide */
.slide-next-enter-from {
  transform: translateX(120px);
  opacity: 0;
}

.slide-next-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-next-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-next-leave-to {
  transform: translateX(-120px);
  opacity: 0;
}

.slide-prev-enter-from {
  transform: translateX(-120px);
  opacity: 0;
}

.slide-prev-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-prev-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-prev-leave-to {
  transform: translateX(120px);
  opacity: 0;
}

.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition:
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 240ms ease;
}

@media (max-width: 1100px) {
  .pd-meta-line {
    padding: 40px 48px 0;
  }

  .pd-top {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 20px 48px 24px;
  }

  .pd-main {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 48px;
  }

  .pd-extra {
    padding: 36px 48px 0;
    max-width: none;
  }

  .pd-carousel-wrap {
    padding: 18px 48px 48px;
  }

  .pd-bg-word {
    right: 30px;
    top: 26px;
    max-width: 60%;
    font-size: clamp(84px, 20vw, 220px);
  }

  .pd-gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .pd-text {
    transform: translateX(0);
  }

  .pd-video-embed {
    padding: 0 48px;
  }

  .pd-nav {
    opacity: 1;
  }
}

@media (max-width: 720px) {
  .pd-meta-line {
    padding: 28px 26px 0;
  }

  .pd-top {
    padding: 18px 26px 20px;
  }

  .pd-title {
    font-size: clamp(34px, 11vw, 56px);
    margin-bottom: 18px;
  }

  .pd-lead {
    font-size: clamp(20px, 6vw, 28px);
    max-width: 100%;
  }

  .pd-main {
    padding: 0 26px;
  }

  .pd-extra {
    padding: 28px 26px 0;
  }

  .pd-carousel-wrap {
    padding: 16px 26px 36px;
  }

  .pd-bg-word {
    top: 28px;
    right: 16px;
    max-width: 72%;
    font-size: clamp(60px, 24vw, 140px);
  }

  .pd-gallery-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .pd-video-embed {
    padding: 0 26px;
  }

  .pd-nav-left {
    left: 12px;
  }

  .pd-nav-right {
    right: 12px;
  }

  .pd-close {
    top: 16px;
    margin-right: 16px;
    margin-top: 16px;
  }
}
</style>