export const Recipes = [
  {
    id: 1,
    source: {
      type: 'feed',
      id: 'bbc', //goodfood
    },
    name: 'Ajiaco',
    intro: 'This classic Colombian soup is served with cream, capers, av..',
    description:
      'This classic Colombian soup is served with cream, capers, avocado, mote (boiled corn) and shredded chicken breast, all mixed in just before eating',
    instructions: [
      'Put the chicken, corn cobs, garlic, onion, pepper, potatoes, spring onions and coriander in a pan with 2 litres water and bring to the boil, season well, then simmer for approximately 45 mins over a medium heat.',
      'Remove the corn and the chicken and transfer them to a plate. Blend the remaining ingredients in the pan with a hand blender until you get a creamy consistency.',
      'Add the papas criollas and the guascas to the pan and cook over a medium heat for around 10-12 mins, or until the papas criollas start to get soft but do not disintegrate.',
      'Meanwhile, shred the chicken breasts finely with your hands, and cut the corn cobs into thick slices. Put into separate small bowls.',
      'Put the cream, capers, avocado and extra chopped coriander in small bowls as well, so that everyone can help themselves to what they want. Pour the soup into four soup bowls and serve alongside the other ingredients. Don’t forget napkins for eating the slices of corn.',
    ],
    time: '1h',
    timing: {
      prep: '30min',
      cook: '35min',
      total: '1h 5min',
    },
    notes:
      'INGREDIENTS\n        Latin American ingredients available from solandinomarket.co.uk.',
    portions: 4,
    category: { id: 'carbs', name: 'Carbs' },
    ingridients: [
      { amount: '2', item: 'skinless chicken breasts' },
      {
        amount: '2 cobs',
        item: 'choclo corn (a variety of large-kernel yellow corn) or regular corn cobs',
      },
      { amount: '4', item: 'garlic cloves , sliced' },
      { amount: '½', item: 'white onion , diced' },
      { amount: '1', item: 'yellow pepper , diced' },
      {
        amount: '4',
        item: 'medium potatoes (red or white), peeled and diced',
      },
      { amount: '2', item: 'spring onions , chopped' },
      {
        amount: '6',
        item: 'coriander sprigs, chopped, plus extra to serve',
      },
      {
        amount: '12',
        item: 'papas criollas (small yellow potatoes), cut in half',
      },
      { amount: '8 tbsp', item: 'guascas' },
      { amount: '100ml', item: 'single or double cream' },
      { amount: '4 tbsp', item: 'capers , drained' },
      {
        amount: '1',
        item: 'avocado, peeled, stoned and cut into small cubes',
      },
    ],
    nutricalFacts: {
      Calories: '385 calories',
      Fat: '3 grams fat',
      'Saturated fat': '1 grams saturated fat',
      Sodium: '0.1 milligram of sodium',
      Carbohydrates: '57 grams carbohydrates',
      Fiber: '12 grams fiber',
      Sugar: '7 grams sugar',
      Protein: '27 grams protein',
    },
    images: [
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/ajiaco-ebf1d94.jpg?quality=90&webp=true&resize=440,400',
    ],
    at: new Date(),
  },
]
