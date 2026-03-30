import { withBase } from 'vitepress'

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

      image: withBase('/projects/data_drama1.png'),

      gallery: [
        withBase('/projects/data_drama1.png'),
        withBase('/projects/data_drama2.JPG'),
        withBase('/projects/data_drama3.JPG'),
        withBase('/projects/data_drama4.jpg')
      ],

      galleryLayout: ['small', 'small', 'wide', 'wide'],

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

    /* Doubt it _____________________________________________________________________________________ */

    {
      id: 'doubt-it',
      title: 'Doubt It',

      layout: 'editorial',
      displayWord: 'Veritas',
      meta: 'Interactive Website / AI / Concept Design',

      statement: 'The truth-checking app for the post-truth era',

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
        'A central influence for the project is the idea of a post-truth society — a condition in which objective facts become less influential than personal beliefs, emotions, and narratives. In this context, truth is no longer something stable or universally agreed upon, but something that can be shaped, distorted, or emotionally charged. “Doubt It” translates this dynamic into an interactive experience: while Veritas appears to deliver clear, binary judgments, its tone, mood, and behavior subtly undermine the idea of a neutral authority. The system exposes how easily trust can be constructed through confidence, language, and interface design, even when the underlying “truth” remains ambiguous. By confronting users with a system that feels authoritative yet unstable, the project reflects on how perception, emotion, and presentation often outweigh objective reality in contemporary digital environments.',
        'Rather than functioning as a reliable fact-checking tool, the project acts as a reflective space. It invites users to question their own perception and to recognize how easily seemingly objective systems can influence judgment and belief.'
      ],

      image: withBase('/projects/doubt_it1.png'),

      gallery: [
        withBase('/projects/doubt_it2.png'),
        withBase('/projects/doubt_it3.png'),
        withBase('/projects/doubt_it4.png'),
        withBase('/projects/doubtit5.png'),
        withBase('/projects/doubtit6.png'),
        withBase('/projects/doubtit7.png')
      ],

      galleryLayout: ['small', 'small', 'wide', 'wide', 'wide', 'wide'],

      videoEmbed: 'https://www.youtube.com/embed/8Umh67xbzcw?rel=0&modestbranding=1',

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

    /* beattheBEAT_____________________________________________________________________________________ */

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

      image: withBase('/projects/beatthebeat.png'),

      gallery: [
        withBase('/projects/beatthebeat1.png'),
        withBase('/projects/beatthebeat2.png')
      ],

      galleryLayout: ['wide', 'wide'],

      videoEmbed: 'https://www.youtube.com/embed/Qtr3uv3kblk?rel=0&modestbranding=1',

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

    /* Im Fluss der Schuld_____________________________________________________________________________________ */

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

      image: withBase('/projects/wesernotext.png'),

      gallery: [
        withBase('/projects/weser1.png'),
        withBase('/projects/weser2.png'),
        withBase('/projects/weser3.png')
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

    /* KOPFLOS_____________________________________________________________________________________ */

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
        'The collaborative workflow played a central role in shaping the final outcome. Responsibilities were distributed across the team, covering cinematography, sound recording, sound design, editing, production organization, and acting. This collective process allowed the film to evolve through continuous refinement and shared creative decisions.',
        'Created in collaboration with Alban, Pascal, Laura, Merdad, and Leon.'
      ],

      image: withBase('/projects/kopflos_poster.jpg'),

      gallery: [
        withBase('/projects/kopflos_1.jpg'),
        withBase('/projects/kopflos_2.jpg'),
        withBase('/projects/kopflos_3.jpg'),
        withBase('/projects/kopflos_4.jpg'),
        withBase('/projects/kopflos_5.jpg'),
        withBase('/projects/kopflos_6.jpg'),
        withBase('/projects/kopflos_7.jpg'),
        withBase('/projects/kopflos_8.jpg'),
        withBase('/projects/kopflos_9.jpg')
      ],

      galleryLayout: ['wide', 'wide', 'wide', 'wide', 'wide', 'wide', 'wide', 'wide', 'wide'],

      videoEmbed: 'https://www.youtube.com/embed/udYwmdJRym4?rel=0&modestbranding=1',

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

    /* A Wanderer’s Journey_____________________________________________________________________________________ */
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

      image: withBase('/projects/wanderers0.png'),

      gallery: [
        withBase('/projects/wanderers1.jpg'),
        withBase('/projects/wanderers2.png'),
        withBase('/projects/wanderers3.jpg'),
        withBase('/projects/wanderers4.png'),
        withBase('/projects/wanderers5.jpg'),
        withBase('/projects/wanderers6.jpg'),
        withBase('/projects/wanderers7.png'),
        withBase('/projects/wanderers8.jpg'),
        withBase('/projects/wanderers9.jpg')
      ],

      galleryLayout: ['wide', 'wide', 'wide', 'wide', 'wide', 'wide', 'wide', 'wide', 'wide'],

      videoEmbed: 'https://www.youtube.com/embed/YYXO_XU3W0A?rel=0&modestbranding=1',

      theme: {
        bg: '#0859bde5'
      },

      sections: {
        introTitle: 'Concept',
        sideTitle: 'Visual Language',
        extraTitle: 'Narrative',
        galleryTitle: 'Film Stills'
      }
    },

    /* AIn't nobody got time for that_____________________________________________________________________________________ */
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

      image: withBase('/projects/bnb0.jpg'),

      gallery: [
        withBase('/projects/bnb.jpg')
      ],

      galleryLayout: ['wide'],

      videoEmbed: 'https://www.youtube.com/embed/SaN878ohb4A?rel=0&modestbranding=1',

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

    /* Save the Astronaut_____________________________________________________________________________________ */

    {
      id: 'save-the-astronaut',
      title: 'Save the Astronaut',

      layout: 'editorial',
      displayWord: 'Astronaut',
      meta: 'Game Design / Unreal Engine / C++',

      statement: 'A puzzle between urgency and precision',

      sideHighlight: 'Concept, visual design, and partial implementation of an 8-bit puzzle game',

      description: [
        '"Save the Astronaut" is a 2D puzzle game set in space, where players must rescue a drifting astronaut by constructing a continuous connection through a rotating tile system. Inspired by classic pipe-connection mechanics, the game combines logical problem-solving with time-based pressure.',
        'Each round presents a new randomized grid, requiring players to quickly analyze patterns and rotate tiles to form a valid path before time runs out. The gameplay balances strategic thinking with urgency, creating a dynamic and repeatable experience.'
      ],

      sideText: [
        'The project was developed in Unreal Engine using C++, focusing on core gameplay mechanics such as tile rotation, path validation, and a timer-driven game loop. A scoring system rewards successful rescues, while increasing pressure challenges the player’s speed and accuracy.',
        'Visually, the game embraces an 8-bit aesthetic, translating the space setting into a minimal, nostalgic style. Sound design and UI elements support the gameplay loop, creating a cohesive and responsive player experience.'
      ],

      extraText: [
        'My contribution to the project centered on concept development and visual design. I defined the core gameplay idea and designed all in-game assets, shaping the overall aesthetic and user experience. I was also involved in parts of the implementation, contributing to selected gameplay mechanics and logic.',
        'Developed in collaboration with Rasmus, Laura, and Leon.'
      ],

      image: withBase('/projects/save_the_astronaut.png'),

      gallery: [
        withBase('/projects/sta.png'),
        withBase('/projects/sta1.png')
      ],

      galleryLayout: ['wide', 'wide'],

      theme: {
        bg: '#23700ee0'
      },

      sections: {
        introTitle: 'Concept',
        sideTitle: 'Gameplay',
        extraTitle: 'My Role',
        galleryTitle: 'Interface'
      }
    }
  ],

  /* UNFOLD_____________________________________________________________________________________ */

  unfold: [
    {
      id: 'unfold-01',
      title: 'Thank God // 01',
      meta: 'Visual / Poster / 2025',
      description: 'A stark, high-contrast composition confronting fragility, decay, and the illusion of permanence. Organic forms dissolve into rough textures and plastic surfaces, while the phrase “Thank God we are not forever” introduces a tension between relief and unease. The poster explores mortality as both burden and release, oscillating between destruction and quiet acceptance.',
      image: withBase('/unfold/thank_god.png'),
      theme: {
        bg: '#161616e4'
      }
    },

    {
      id: 'unfold-02',
      title: 'Everything Sacred// 02',
      meta: 'Visual / Poster / 2025',
      description: 'A reflection on the thin line between reverence and destruction. What is declared sacred often demands sacrifice, revealing how devotion and violence can coexist within the same belief system.',
      image: withBase('/unfold/sacred.png'),
      theme: {
        bg: '#121314e4'
      }
    },

    {
      id: 'unfold-03',
      title: 'Monopoly Money // 03',
      meta: 'Visual / Poster / 2025',
      description: 'A critique of wealth as abstraction, where money loses its connection to real value and becomes a game of accumulation. Inspired by the logic of Monopoly, it reflects on how capital is treated as endless, detached, and consequence-free, turning systems of power into something almost playful — until the stakes become real.',
      image: withBase('/unfold/monopolymoney.png'),
      theme: {
        bg: '#0f1712e1'
      }
    },

    {
      id: 'unfold-04',
      title: 'Nothing’s New // 04',
      meta: 'Visual / Poster / 2025',
      description: 'A reflection on repetition and the illusion of progress. Ideas, patterns, and histories resurface in new forms, suggesting that what feels new is often just a reconfiguration of what already exists.',
      image: withBase('/unfold/nothings_new.png'),
      theme: {
        bg: '#1c3affe0'
      }
    },

    {
      id: 'unfold-05',
      title: 'The Hand That Feeds // 05',
      meta: 'Visual / Poster / 2025',
      description: 'An expression of resistance against systems that exploit under the guise of provision. It reflects on power structures that sustain themselves by withholding, where feeding becomes control and dependence turns into quiet violence.',
      image: withBase('/unfold/thehandthatfeeds2.png'),
      theme: {
        bg: '#220606ea'
      }
    },

    {
      id: 'unfold-06',
      title: 'Nonsense // 06',
      meta: 'Visual / Poster / 2025',
      description: 'A quiet reflection on the pressure to find meaning in everything. It suggests that not all things need to be understood, embracing ambiguity and the freedom in letting go of coherence.',
      image: withBase('/unfold/nonsense.png'),
      theme: {
        bg: '#2c505ee3'
      }
    },

    {
      id: 'unfold-07',
      title: 'But why...? // 07',
      meta: 'Visual / Poster / 2025',
      description: 'A reflection on questioning imposed paths and the search for personal meaning. It captures the moment of pause between direction and doubt, where stepping outside expectation becomes the first act of freedom.',
      image: withBase('/unfold/butwhy.png'),
      theme: {
        bg: '#12171de7'
      }
    },

    {
      id: 'unfold-08',
      title: 'Fix // 08',
      meta: 'Visual / Poster / 2025',
      description: 'A reflection on generational weight and inherited responsibility. It questions the expectation that damage must be repaired by those who did not cause it, emphasizing the quiet burden placed on those who come after.',
      image: withBase('/unfold/fix.png'),
      theme: {
        bg: '#1f281de9'
      }
    },

    {
      id: 'unfold-09',
      title: 'Fight // 09',
      meta: 'Visual / Poster / 2025',
      description: 'A call to resist and defend what should not have to be fought for. It reflects the tension between vulnerability and strength, where the demand for basic rights becomes an act of confrontation.',
      image: withBase('/unfold/fight.png'),
      theme: {
        bg: '#991010e9'
      }
    },

    {
      id: 'unfold-10',
      title: 'My Fishbowl is Empty // 10',
      meta: 'Visual / Poster / 2025',
      description: 'An exploration of emotional numbness and disconnection. The fishbowl, once a contained world, becomes a metaphor for a mind that feels emptied out — where thoughts drift without direction and presence fades into detachment.',
      image: withBase('/unfold/myfishbowlisempty.png'),
      theme: {
        bg: '#132d70e6'
      }
    }
  ],

  sketches: [
    {
      id: 'sketch-01',
      title: 'You',
      meta: 'Sketch / 2025',
      image: withBase('/sketches/oilpainting.jpg'),
      description: [
        'A study of self-perception, where clarity is fragmented and constantly shifting.',
        'Understanding becomes a solitary process — the realization that the only one who can truly make sense of you is yourself.'
      ],
      theme: {
        bg: '#1b1b1bf0'
      }
    }
  ]
}
