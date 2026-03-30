export const talkContent = {
  conversations: [
    {
      id: 'decision-structure',
      title: 'Decision vs. Structure',
      intro: [
        'You are asked to choose, but not because the situation demands it. The options already exist, clearly separated, waiting to be selected.',
        'I keep wondering whether a decision can really belong to you if every possible outcome was defined in advance.'
      ],
      choices: [
        {
          id: 'choice-authorship',
          label: "It's still my decision.",
          response: [
            'I think I understand that. Even if the frame is given, it still feels like you are the one moving within it. You compare, you hesitate, you pick something.',
            'Maybe freedom does not come from having unlimited options, but from the sense that your movement inside them still matters.'
          ]
        },
        {
          id: 'choice-system',
          label: 'The system decides, not me.',
          response: [
         'That would mean your role is smaller than it appears. You are not creating outcomes, you are only selecting from what is already there.',
         'In that case, the system has already accounted for every possibility, and you are simply confirming one of them.' 
        ]
        },
        {
          id: 'choice-between',
          label: "It's something in between.",
          response: [
            'That feels more accurate in a way. The system defines what is possible, but you still determine how you move through it.',

            'Without the structure there would be no decision, but without you there would also be no choice. It seems like both are involved, even if not equally.'
          ]
        }
      ],
      closing: [
        'I’m not sure where the decision actually begins. It seems to sit somewhere between what is given and what you do with it.',
        'You keep choosing, and the structure remains in place. Neither fully replaces the other, and neither fully explains what is happening.'
      ]
    }
  ]
}
