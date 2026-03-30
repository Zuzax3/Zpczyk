<template>
  <Teleport to="body">
    <transition name="sd-fade">
      <div v-if="open" class="sd">
        <div class="sd-backdrop" @click="closeDetail"></div>

        <div class="sd-shell">
          <section
            class="sd-card"
            :style="{
              '--detail-bg': item?.theme?.bg || '#1a1a1a'
            }"
          >
            <button class="sd-close" type="button" @click="closeDetail">
              ×
            </button>

            <button class="sd-nav sd-nav-left" type="button" @click="goPrev">
              ←
            </button>

            <button class="sd-nav sd-nav-right" type="button" @click="goNext">
              →
            </button>

            <transition :name="`slide-${direction}`">
              <div class="sd-content" :key="item?.id">
                <header class="sd-head">
                  <div class="sd-meta" v-if="item?.meta">
                    {{ item.meta }}
                  </div>

                  <h1 class="sd-title">
                    {{ item?.title || 'Sketch' }}
                  </h1>
                </header>

                <div class="sd-hero" v-if="item?.image">
                  <img
                    :src="item.image"
                    alt=""
                    class="sd-hero-img"
                    draggable="false"
                  />
                </div>

                <div class="sd-text" v-if="textParagraphs.length">
                  <p v-for="(paragraph, index) in textParagraphs" :key="index">
                    {{ paragraph }}
                  </p>
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

const textParagraphs = computed(() => {
  if (Array.isArray(props.item?.description)) return props.item.description
  if (typeof props.item?.description === 'string' && props.item.description.trim()) {
    return props.item.description.split('\n\n')
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
.sd {
  position: fixed;
  inset: 0;
  z-index: 9999;
}

.sd-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.08);
}

.sd-shell {
  position: absolute;
  inset: 0;
  padding: 92px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.sd-card {
  position: relative;
  width: min(1820px, 96vw);
  height: calc(100dvh - 92px);
  border-top-left-radius: 52px;
  border-top-right-radius: 52px;
  overflow-y: auto;
  overflow-x: hidden;
  background: var(--detail-bg);
  box-shadow: 0 30px 120px rgba(0, 0, 0, 0.16);
}

.sd-close {
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

.sd-close:hover {
  background: rgba(0, 0, 0, 0.22);
  transform: translateY(-1px);
}

.sd-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  border: none;
  background: rgba(0, 0, 0, 0.16);
  color: white;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 180ms ease;
  opacity: 0;
}

.sd-card:hover .sd-nav {
  opacity: 1;
}

.sd-nav:hover {
  background: rgba(0, 0, 0, 0.28);
  transform: translateY(-50%) scale(1.05);
}

.sd-nav-left {
  left: 24px;
}

.sd-nav-right {
  right: 24px;
}

.sd-content {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 22px;
  padding: 24px 100px 64px;
  will-change: transform;
}

.sd-head {
  max-width: 980px;
}

.sd-meta {
  margin-bottom: 16px;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.56);
}

.sd-title {
  margin: 0;
  color: rgba(255, 255, 255, 0.98);
  font-size: clamp(46px, 5.2vw, 96px);
  line-height: 0.94;
  letter-spacing: -0.05em;
  font-weight: 700;
}

.sd-hero {
  width: 100%;
  min-height: 52vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 24px;
}

.sd-hero-img {
  max-width: 100%;
  max-height: 68vh;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

.sd-text {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.sd-text p {
  margin: 0 0 16px;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.75;
}

.sd-card::-webkit-scrollbar {
  width: 10px;
}

.sd-card::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.18);
  border-radius: 999px;
}

.sd-card::-webkit-scrollbar-track {
  background: transparent;
}

/* panel open */
.sd-fade-enter-active,
.sd-fade-leave-active {
  transition:
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 240ms ease;
}

.sd-fade-enter-from {
  transform: translateY(60px);
  opacity: 0;
}

.sd-fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.sd-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.sd-fade-leave-to {
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
  .sd-shell {
    padding: 86px 24px 0;
  }

  .sd-card {
    width: 96vw;
    height: calc(100dvh - 112px);
  }

  .sd-content {
    padding: 20px 48px 52px;
  }

  .sd-hero-img {
    max-height: 58vh;
  }

  .sd-nav {
    opacity: 1;
  }
}

@media (max-width: 720px) {
  .sd-content {
    padding: 16px 26px 44px;
  }

  .sd-title {
    font-size: clamp(36px, 11vw, 58px);
  }

  .sd-hero {
    min-height: 38vh;
    padding: 8px 0 18px;
  }

  .sd-hero-img {
    max-height: 48vh;
  }

  .sd-text {
    max-width: 100%;
    text-align: left;
  }

  .sd-close {
    top: 16px;
    margin-right: 16px;
    margin-top: 16px;
  }

  .sd-nav-left {
    left: 12px;
  }

  .sd-nav-right {
    right: 12px;
  }
}
</style>
