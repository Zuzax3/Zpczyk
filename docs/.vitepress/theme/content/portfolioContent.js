export const portfolioContent = {
  projects: [
    {
      id: 'flower-life',
      title: 'Ein Leben Eine Blume',

      layout: 'editorial',
      displayWord: 'Blume',
      meta: 'Installation / Performance / Data Drama',
      statement: 'Jede Blume steht für ein verlorenes Leben.',
      sideHighlight: 'Hunderte handgefertigte Mohnblumen machen Verlust physisch und emotional erfahrbar.',

      description: [
        'Ein Leben, eine Blume ist eine künstlerische Installation und Performance, die die Tragödie menschlicher Verluste im Nahostkonflikt sichtbar macht. Jede handgefertigte Mohnblume repräsentiert ein verlorenes Leben. Die Performance verdeutlicht den nie endenden Prozess des Erinnerns: Eine Person fertigt unaufhörlich Blumen an, während sich ihre Hände allmählich rötlich verfärben – ein stilles Symbol für die Spuren von Gewalt und Verlust. Ziel ist es, die Opfer als Individuen mit Hoffnungen und Träumen in den Fokus zu rücken.',
        'Das Projekt soll das abstrakte Ausmaß des Verlusts greifbar machen und den anonymen Zahlen persönliche Schicksale entgegensetzen. Die Performance dient als stilles Gedenken und ermöglicht eine emotionale Verbindung zu den Opfern. Ziel ist es, die Zuschauer*innen dazu zu bringen, innezuhalten, zu reflektieren und sich bewusst zu machen, dass hinter jeder Zahl ein Mensch mit einer Geschichte steht. Durch diese Darstellung soll Empathie geweckt und die Erinnerung an diese Menschen lebendig gehalten werden.'
      ],

      sideText: [
        'Das zentrale Element der Installation sind hunderte handgefertigte Mohnblumen aus Seidenpapier und Draht. Jede Blume trägt ein kleines Schild mit dem Alter eines Opfers. Die kontinuierliche Produktion dieser Blumen durch eine einzelne Person symbolisiert die unermessliche Zahl der verlorenen Leben und die Last des Erinnerns.',
        '- Krepppapier in Rot',
        '- Draht für die Blütenstiele',
        '- Kleine Papieretiketten mit den Altersangaben der Opfer',
        '- Heißkleber'
      ],

      extraText: [
        'Die Recherche für dieses Projekt umfasste eine detaillierte Auseinandersetzung mit künstlerischen Gedenkpraktiken, historischen Kontexten und den emotionalen Auswirkungen performativer Installationen.',
        'Analysiert wurden Kunstprojekte, die sich mit Verlust, Sichtbarkeit und Erinnerung beschäftigen, sowie dokumentarische und journalistische Berichte über den Nahostkonflikt, um die menschliche Dimension der Zahlen besser zu verstehen.'
      ],

      image: '/projects/data_drama1.png',

      gallery: [
        '/projects/data_drama1.png',
        '/projects/data_drama2.JPG',
        '/projects/data_drama3.JPG'
      ],

      galleryLayout: ['small', 'small', 'wide'],

      theme: {
        bg: '#b92a06e8'
      },

      sections: {
        introTitle: 'Konzept',
        sideTitle: 'Material & Prozess',
        extraTitle: 'Recherche',
        galleryTitle: 'Galerie'
      }
    },

  {
  id: 'doubt-it',
  title: 'Doubt It',

  layout: 'editorial',
  displayWord: 'Veritas',
  meta: 'Interactive Website / AI / Concept Design',

  statement: 'Powered by AI and low expectations',

  sideHighlight: 'Two modes, two versions of Veritas',

  description: [
    'Doubt It is an interactive web project exploring truth, perception, and trust in artificial intelligence. At its core is the AI entity Veritas, which analyzes user statements and classifies them as “true” or “false” — always accompanied by a dry, sarcastic commentary.',
    'The experience unfolds across multiple layers: a minimal introduction, a short personality test, and two distinct chat modes. While “Talk to Veritas” functions as a blunt, judgmental fact-check, “Experience Veritas” evolves into a more emotional, unstable, and sometimes manipulative interaction. The project aims to blur the line between objective truth and subjective interpretation, creating a subtle sense of uncertainty in how users perceive AI-generated judgments.'
  ],

  sideText: [
    'The project combines a minimal interface with dynamic and subtly unsettling elements. Veritas appears as a simple, line-based face whose expressions shift throughout the interaction.',
    '- Built with HTML, CSS, and JavaScript',
    '- LLM integration for real-time evaluation of user input',
    '- Local storage for preserving interactions and chat history',
    '- Dynamic UI elements such as changing facial expressions, chat bubbles, and mode shifts',
    '- Hidden hints, glitch effects, and rare events that expand the narrative layer'
  ],

  extraText: [
    'Conceptually, the project is grounded in questions of misinformation, algorithmic authority, and the human tendency to trust machine-generated outputs. Inspired by speculative design and critical media practices, “Doubt It” investigates how truth is not only computed, but also performed and framed.',
    'Rather than functioning as a reliable fact-checking tool, the project acts as a reflective space. It invites users to question their own perception and to recognize how easily seemingly objective systems can influence judgment and belief.'
  ],

  image: '/projects/doubt_it1.png',

  gallery: [
    '/projects/doubt_it2.png',
    '/projects/doubt_it3.png',
    '/projects/doubt_it_3.png'
  ],

  galleryLayout: ['small', 'small', 'wide'],

  theme: {
    bg: '#2b2727e9'
  },

  sections: {
    introTitle: 'Concept',
    sideTitle: 'Implementation',
    extraTitle: 'Context',
    galleryTitle: 'Interface'
  }
},

{
  id: 'beat-the-beat',
  title: 'beatTheBEAT',

layout: 'editorial',
displayWord: 'Rhythm',
meta: 'Game Design / Processing / Interactive',

statement: 'Where rhythm becomes survival',

sideHighlight: 'A bullet-hell game driven entirely by music',

description: [
  'beatTheBEAT is an experimental game that merges bullet-hell mechanics with rhythm-based gameplay. Developed in Processing, the project allows players to import their own music, which is then analyzed in real time to generate enemies, obstacles, and pacing.',
  'Players must navigate through dynamically generated patterns while simultaneously inputting arrow sequences to gain points. Each playthrough becomes unique, as enemy behavior, intensity, and tempo are directly influenced by the chosen song, creating a personalized and unpredictable gameplay experience.'
],

sideText: [
  'The game combines fast-paced movement with rhythmic precision, requiring both spatial awareness and timing. The player controls a character within an arena while reacting to constantly evolving, music-driven threats.',
  '- Developed in Processing',
  '- Real-time audio analysis to generate gameplay elements',
  '- Player-controlled music input (.mp3)',
  '- Hybrid gameplay: movement + rhythm input system',
  '- Dynamic difficulty scaling based on performance',
  '- Minimal visual language focused on clarity and motion'
],

extraText: [
  'Conceptually, the project explores the relationship between sound and interaction. Music is not treated as background, but as a core system that actively shapes the experience. This transforms each track into a unique level design tool.',
  'Beyond entertainment, the game examines reaction speed, focus, and hand-eye coordination. It creates a space where players adapt to constantly shifting patterns, highlighting how rhythm and cognition intersect in interactive systems.'
],

image: '/projects/beat_the_beat_1.png',

gallery: [
  '/projects/beat_the_beat_1.png',
  '/projects/beat_the_beat_2.png',
  '/projects/beat_the_beat_3.png'
],

galleryLayout: ['small', 'small', 'wide'],

theme: {
  bg: '#033976eb'
},

sections: {
  introTitle: 'Concept',
  sideTitle: 'Gameplay',
  extraTitle: 'Context',
  galleryTitle: 'Interface'
}
},

{
id: 'aint-nobody-got-time',
title: "AIn't nobody got time for that",

layout: 'editorial',
displayWord: 'Podcast',
meta: 'AI / Audio / Concept Format',

statement: 'Two AIs. One mission: understand humans.',

sideHighlight: 'A podcast where AI analyzes human absurdity',

description: [
  '"AIn’t nobody got time for that" is an experimental podcast format in which two AI personalities discuss and analyze everyday human behavior. Developed as part of the seminar “Digital Creativity”, the project explores how AI can be used not only as a tool, but as a creative voice in digital media.',
  'Each episode revolves around a simple, almost trivial question — why humans stay awake when tired, avoid the gym, overbuy food, or repeatedly press elevator buttons. Through dialogue, the AIs attempt to rationalize these behaviors, exposing the contrast between logical systems and emotional decision-making.'
],

sideText: [
  'The podcast is driven by two distinct AI characters: Byte, a hyper-rational, efficiency-driven entity, and Brain, a more intuitive and speculative counterpart. Their contrasting perspectives create a dynamic tension between logic and human irrationality.',
  '- AI-generated dialogue and narrative structure',
  '- Character-driven storytelling (Byte vs. Brain)',
  '- Focus on everyday human behavior and micro-decisions',
  '- Scripted episodes with modular, repeatable format',
  '- Tone: humorous, analytical, slightly absurd',
  '- Audio format designed for scalable content production'
],

extraText: [
  'Conceptually, the project reflects on how artificial intelligence interprets human behavior when stripped of emotional context. What appears irrational or inefficient from an algorithmic perspective often reveals deeper layers of meaning, such as comfort, habit, or social conditioning.',
  'Rather than mocking human behavior, the podcast creates a subtle inversion: AI becomes the observer, and humans the subject of analysis. This shift highlights the limitations of purely logical systems and raises questions about whether “efficiency” is truly the most relevant metric for understanding human life.'
],

image: '/projects/aint_nobody_1.png',

gallery: [
  '/projects/aint_nobody_1.png',
  '/projects/aint_nobody_2.png',
  '/projects/aint_nobody_3.png'
],

galleryLayout: ['small', 'small', 'wide'],

theme: {
  bg: '#38224de1'
},

sections: {
  introTitle: 'Concept',
  sideTitle: 'Format',
  extraTitle: 'Reflection',
  galleryTitle: 'Episodes'
}
},

{
id: 'im-fluss-der-schuld',
title: 'Im Fluss der Schuld',

layout: 'minimal',
displayWord: 'Weser',
meta: 'Speculative Design / Poster Series / Research',

statement: 'A river is never just a river',

sideHighlight: 'Three letters addressing a river, its histories, and its futures',

description: [
  '"In the Current of Guilt" is a speculative design project exploring the Weser river in Bremen and its transformation through 19th-century river regulation, known as the “Weserkorrektion”. Originally shaped to serve colonial trade infrastructures, the river was reduced to a functional transport route, while its ecological and material agency was erased.',
  'The project reframes the river not as an object, but as an active participant. Through a series of three visual letters, it addresses the Weser, colonial commodities, and future river ecologies, revealing entanglements between water, trade, violence, and more-than-human worlds.'
],

sideText: [
  'The project is grounded in posthuman and new materialist perspectives, influenced by thinkers such as Karen Barad and Jane Bennett. It challenges anthropocentric narratives by positioning the river not as passive infrastructure, but as a living and responsive entity.',
  'Structured as a series of three poetic letters, the work combines research with speculative design. It brings together digital media, watercolor, and collage, translating the form of the Weser into a visual language that gradually shifts from recognizable structures into abstraction. The color palette draws directly from the river itself, reflecting its olive, earthy, and sedimented tones.'
],

extraText: [
  'The three letters each address a different layer of responsibility and relation: a delayed apology to the river, an acknowledgment of the violence embedded in colonial goods such as coffee, cotton, and sugar, and a message to future river beings and ecologies. Together, they form a narrative of guilt, recognition, and potential transformation.',
  'Visually, the project translates the river into fluid, dissolving forms, as seen in the poster series (pages 4–6), where the Weser gradually shifts from a defined shape into abstract, watercolor-like structures. This reflects both the physical manipulation of the river and the attempt to reimagine it beyond rigid infrastructures.',
  'Rather than offering solutions, the project creates a space for reflection. It asks how we relate to natural systems, how histories of extraction persist in the present, and whether new, more respectful forms of coexistence are still possible.'
],

image: '/projects/wesernotext.png',

gallery: [
  '/projects/weser1.png',
  '/projects/weser2.png',
  '/projects/weser3.png'
],

galleryLayout: ['small', 'small', 'small'],

theme: {
  bg: '#444e37e7'
},

sections: {
  introTitle: 'Concept',
  sideTitle: 'Approach',
  extraTitle: 'Context',
  galleryTitle: 'Posters'
}
},

{
id: 'kopflos',
title: 'KOPFLOS',

layout: 'editorial',
displayWord: 'Kopflos',
meta: 'Short Film / Direction / Collaboration',

statement: 'A story shaped by absence and decision',

sideHighlight: 'Concept, direction, and postproduction in a collaborative film project',

description: [
  'KOPFLOS is a short film developed as a collaborative project, exploring narrative tension through reduction, atmosphere, and deliberate omission. The film focuses on a fragmented storyline, where certain expected elements are intentionally removed or only hinted at, allowing the audience to actively reconstruct meaning.',
  'During production, key decisions were made to prioritize atmosphere and narrative clarity over completeness. Scenes such as a fully shot running sequence were ultimately excluded in the editing process, while their fragments remained as subtle flashbacks, reinforcing the film’s non-linear structure.'
],

sideText: [
  'The project was strongly shaped by collaborative decision-making, particularly in directing and visual composition. A conscious choice was made to avoid camera movements such as pans in several scenes, opting instead for static shots to intensify the atmosphere and create a more controlled visual language.',
  'The film was entirely produced within the team, including all visual and audio elements. From concept development and storyboarding to filming, editing, sound design, and color grading, the process emphasized a holistic, hands-on approach to filmmaking.'
],

extraText: [
  'My role within the project focused on concept development, directing, and visual storytelling. I created the storyboard, led the direction of the film, and was responsible for camera work in selected scenes. I was also involved in the editing process and contributed to the final color grading.',
  'The collaborative workflow played a central role in shaping the final outcome. Responsibilities were distributed across the team, covering cinematography, sound recording, sound design, editing, production organization, and acting. This collective process allowed the film to evolve through continuous refinement and shared creative decisions.'
],

image: '/projects/kopflos_1.png',

gallery: [
  '/projects/kopflos_1.png',
  '/projects/kopflos_2.png',
  '/projects/kopflos_3.png'
],

galleryLayout: ['small', 'small', 'wide'],

theme: {
  bg: '#dab10bef'
},

sections: {
  introTitle: 'Concept',
  sideTitle: 'Production',
  extraTitle: 'My Role',
  galleryTitle: 'Film Stills'
}
},

{
id: 'a-wanderers-journey',
title: "A Wanderer’s Journey",

layout: 'editorial',
displayWord: 'Lila',
meta: 'Short Animation / Storytelling / Solo Project',

statement: 'Caught between routine and imagined freedom',

sideHighlight: 'A self-made animated short about escapism, identity, and inner distance',

description: [
  '"A Wanderer’s Journey" is a short animated film following Lila, a young woman struggling with emotional exhaustion, monotony, and a growing sense of disconnection from everyday life. Framed through a therapy session, the film moves between lived reality and dreamlike inner landscapes, revealing how escapism becomes both comfort and conflict.',
  'As Lila speaks about her routines, work pressure, and emotional paralysis, the animation gradually shifts into surreal environments filled with open skies, floating fish, reflections, and symbolic spaces. These dream sequences do not simply offer escape, but express her search for meaning, belonging, and a version of life that feels less restricted.'
],

sideText: [
  'The film uses contrast as a central narrative device: between confined interiors and vast dreamscapes, between muted daily structures and luminous surreal imagery, and between stillness and emotional movement. The therapy session provides the framework, while Lila’s inner world unfolds visually through symbolic transitions and reflective voice-over.',
  'Developed as a solo project, the animation focuses on atmosphere, pacing, and emotional resonance rather than action. Recurring motifs such as clouds, windows, water, mirrors, and sky creatures create a visual language of distance, longing, and quiet transformation.'
],

extraText: [
  'At its core, the film explores themes of existential uncertainty, dissociation, and the fragile relationship between external routine and inner life. Lila’s dreams become a space where her subconscious can articulate what her waking life suppresses: the desire for freedom, meaning, and emotional connection.',
  'Rather than resolving this tension completely, the ending suggests a subtle shift. The boundary between reality and dream remains porous, but no longer feels threatening. What once appeared as escapism begins to read as acceptance — a quiet recognition that inner worlds can also hold truth.'
],

image: '/projects/wanderers0.png',

gallery: [
  '/projects/wanderers1.png',
  '/projects/wanderers2.png',
  '/projects/wanderers3.png'
],

galleryLayout: ['wide', 'wide', 'wide'],

theme: {
  bg: '#0859bde5'
},

sections: {
  introTitle: 'Concept',
  sideTitle: 'Visual Language',
  extraTitle: 'Narrative',
  galleryTitle: 'Storyboard'
}

}


  ],

  


  unfold: [
  {
    id: 'unfold-01',
    title: 'UNFOLD // 01',
    meta: 'Visual / Study / 2026',
    description: 'A quiet visual fragment exploring surface, structure and spatial rhythm.',
    image: '/unfold/thank_god.png',
    theme: {
      bg: '#121314e4'
    }
  }
],

  sketches: [
    {
      id: 'sketch-01',
      title: 'Sketch// 01'
    }
  ]
}