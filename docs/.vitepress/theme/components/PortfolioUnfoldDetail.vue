<template>
  <Teleport to="body">
    <transition name="ud-fade">
      <div v-if="open" class="ud">
        <div class="ud-backdrop" @click="closeDetail"></div>

        <div class="ud-shell">
          <section
            class="ud-card"
            :style="{
              '--detail-bg': item?.theme?.bg || '#111111'
            }"
          >
            <button class="ud-close" type="button" @click="closeDetail">
              ×
            </button>

            <div class="ud-content">
              <div class="ud-head">
                <div class="ud-meta" v-if="item?.meta">
                  {{ item.meta }}
                </div>

                <h1 class="ud-title">
                  {{ item?.title || 'UNFOLD' }}
                </h1>
              </div>

              <div class="ud-image-wrap" v-if="item?.image">
                <img
                  :src="item.image"
                  alt=""
                  class="ud-image"
                  draggable="false"
                />
              </div>

              <div class="ud-text" v-if="textParagraphs.length">
                <p v-for="(paragraph, index) in textParagraphs" :key="index">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { computed, watch } from 'vue'

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

const emit = defineEmits(['close'])

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

watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
  { immediate: true }
)
</script>

<style scoped>
.ud {
  position: fixed;
  inset: 0;
  z-index: 9999;
}

.ud-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.08);
}

.ud-shell {
  position: absolute;
  inset: 0;
  padding: 92px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.ud-card {
  position: relative;
  width: min(1820px, 96vw);
  height: calc(100dvh - 92px);
  border-top-left-radius: 52px;
  border-top-right-radius: 52px;
  overflow-y: auto;
  overflow-x: hidden;
  background: var(--detail-bg);
    backdrop-filter: blur(6px);
  box-shadow: 0 30px 120px rgba(0, 0, 0, 0.16);
}

.ud-close {
  position: sticky;
  top: 20px;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
  z-index: 10;
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

.ud-close:hover {
  background: rgba(0, 0, 0, 0.22);
  transform: translateY(-1px);
}

.ud-content {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 24px 100px 56px;
}

.ud-head {
  max-width: 920px;
  margin-bottom: 28px;
}

.ud-meta {
  margin-bottom: 14px;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.56);
}

.ud-title {
  margin: 0;
  color: rgba(255, 255, 255, 0.98);
  font-size: clamp(46px, 5.2vw, 96px);
  line-height: 0.94;
  letter-spacing: -0.05em;
  font-weight: 700;
  max-width: 10ch;
}

.ud-image-wrap {
  width: 100%;
  min-height: 42vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0 20px;
}

.ud-image {
  max-width: 100%;
  max-height: 62vh;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

.ud-text {
  max-width: 760px;
  padding-top: 10px;
}

.ud-text p {
  margin: 0 0 18px;
  color: rgba(255, 255, 255, 0.94);
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.85;
  max-width: 62ch;
}

.ud-card::-webkit-scrollbar {
  width: 10px;
}

.ud-card::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.18);
  border-radius: 999px;
}

.ud-card::-webkit-scrollbar-track {
  background: transparent;
}

.ud-fade-enter-active,
.ud-fade-leave-active {
  transition: opacity 240ms ease;
}

.ud-fade-enter-from,
.ud-fade-leave-to {
  opacity: 0;
}

.ud-fade-enter-from .ud-card {
  transform: translateY(60px);
  opacity: 0;
}

.ud-fade-enter-to .ud-card {
  transform: translateY(0);
  opacity: 1;
}

.ud-fade-leave-from .ud-card {
  transform: translateY(0);
  opacity: 1;
}

.ud-fade-leave-to .ud-card {
  transform: translateY(40px);
  opacity: 0;
}

.ud-card {
  transition:
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 240ms ease;
}

@media (max-width: 1100px) {
  .ud-shell {
    padding: 86px 24px 0;
  }

  .ud-card {
    width: 96vw;
    height: calc(100dvh - 112px);
  }

  .ud-content {
    padding: 20px 48px 44px;
  }

  .ud-title {
    max-width: none;
  }

  .ud-image {
    max-height: 54vh;
  }
}

@media (max-width: 720px) {
  .ud-content {
    padding: 16px 26px 34px;
  }

  .ud-title {
    font-size: clamp(36px, 11vw, 58px);
  }

  .ud-image-wrap {
    min-height: 30vh;
    padding: 8px 0 18px;
  }

  .ud-image {
    max-height: 46vh;
  }

  .ud-close {
    top: 16px;
    margin-right: 16px;
    margin-top: 16px;
  }
}
</style>