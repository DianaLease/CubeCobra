const exampleCard = {
  object: 'card',
  id: 'a5ebb551-6b0d-45fa-88c8-3746214094f6',
  oracle_id: 'b582e485-c024-47f0-ad6f-b918d32288ba',
  multiverse_ids: [456750],
  mtgo_id: 70381,
  tcgplayer_id: 180776,
  name: 'Vexing Devil',
  lang: 'en',
  released_at: '2018-12-07',
  uri: 'https://api.scryfall.com/cards/a5ebb551-6b0d-45fa-88c8-3746214094f6',
  scryfall_uri: 'https://scryfall.com/card/uma/154/vexing-devil?utm_source=api',
  layout: 'normal',
  highres_image: true,
  image_uris: {
    small: 'https://img.scryfall.com/cards/small/front/a/5/a5ebb551-6b0d-45fa-88c8-3746214094f6.jpg?1547517462',
    normal: 'https://img.scryfall.com/cards/normal/front/a/5/a5ebb551-6b0d-45fa-88c8-3746214094f6.jpg?1547517462',
    large: 'https://img.scryfall.com/cards/large/front/a/5/a5ebb551-6b0d-45fa-88c8-3746214094f6.jpg?1547517462',
    png: 'https://img.scryfall.com/cards/png/front/a/5/a5ebb551-6b0d-45fa-88c8-3746214094f6.png?1547517462',
    art_crop: 'https://img.scryfall.com/cards/art_crop/front/a/5/a5ebb551-6b0d-45fa-88c8-3746214094f6.jpg?1547517462',
    border_crop:
      'https://img.scryfall.com/cards/border_crop/front/a/5/a5ebb551-6b0d-45fa-88c8-3746214094f6.jpg?1547517462',
  },
  mana_cost: '{R}',
  cmc: 1,
  type_line: 'Creature — Devil',
  oracle_text:
    'When Vexing Devil enters the battlefield, any opponent may have it deal 4 damage to them. If a player does, sacrifice Vexing Devil.',
  power: '4',
  toughness: '3',
  colors: ['R'],
  color_identity: ['R'],
  legalities: {
    standard: 'not_legal',
    future: 'not_legal',
    modern: 'legal',
    legacy: 'legal',
    pauper: 'not_legal',
    vintage: 'legal',
    penny: 'not_legal',
    commander: 'legal',
    brawl: 'not_legal',
    duel: 'legal',
    oldschool: 'not_legal',
  },
  games: ['mtgo', 'paper'],
  reserved: false,
  foil: true,
  nonfoil: true,
  oversized: false,
  promo: false,
  reprint: true,
  variation: false,
  set: 'uma',
  set_name: 'Ultimate Masters',
  set_type: 'masters',
  set_uri: 'https://api.scryfall.com/sets/2ec77b94-6d47-4891-a480-5d0b4e5c9372',
  set_search_uri: 'https://api.scryfall.com/cards/search?order=set&q=e%3Auma&unique=prints',
  scryfall_set_uri: 'https://scryfall.com/sets/uma?utm_source=api',
  rulings_uri: 'https://api.scryfall.com/cards/a5ebb551-6b0d-45fa-88c8-3746214094f6/rulings',
  prints_search_uri:
    'https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ab582e485-c024-47f0-ad6f-b918d32288ba&unique=prints',
  collector_number: '154',
  digital: false,
  rarity: 'rare',
  flavor_text: "It's not any fun until someone loses an eye.",
  card_back_id: '0aeebaf5-8c7d-4636-9e82-8c27447861f7',
  artist: 'Lucas Graciano',
  artist_ids: ['ce98f39c-7cdd-47e6-a520-6c50443bb4c2'],
  illustration_id: '58c3ac80-3359-44f1-b7f3-542926fdce1f',
  border_color: 'black',
  frame: '2015',
  frame_effects: [''],
  full_art: false,
  textless: false,
  booster: true,
  story_spotlight: false,
  edhrec_rank: 7474,
  related_uris: {
    gatherer: 'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=456750',
    tcgplayer_decks:
      'https://decks.tcgplayer.com/magic/deck/search?contains=Vexing+Devil&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall&u tm_source=scryfall',
    edhrec: 'https://edhrec.com/route/?cc=Vexing+Devil',
    mtgtop8: 'https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Vexing+Devil',
  },
};

const exampleDoubleFacedCard = {
  object: 'card',
  id: '6f35e364-81d9-4888-993b-acc7a53d963c',
  oracle_id: '52855f90-19c1-46c9-8eed-88b3c1722bb0',
  multiverse_ids: [262694, 262659],
  mtgo_id: 43357,
  mtgo_foil_id: 43358,
  tcgplayer_id: 57617,
  name: 'Scorned Villager // Moonscarred Werewolf',
  lang: 'en',
  released_at: '2012-02-03',
  uri: 'https://api.scryfall.com/cards/6f35e364-81d9-4888-993b-acc7a53d963c',
  scryfall_uri: 'https://scryfall.com/card/dka/125/scorned-villager-moonscarred-werewolf?utm_source=api',
  layout: 'transform',
  highres_image: true,
  cmc: 2,
  type_line: 'Creature — Human Werewolf // Creature — Werewolf',
  color_identity: ['G'],
  card_faces: [
    {
      object: 'card_face',
      name: 'Scorned Villager',
      mana_cost: '{1}{G}',
      cmc: 0,
      type_line: 'Creature — Human Werewolf',
      oracle_text:
        '{T}: Add {G}.\nAt the beginning of each upkeep, if no spells were cast last turn, transform Scorned Villager.',
      colors: ['G'],
      power: '1',
      toughness: '1',
      flavor_text: '"My village\'s fear drove me into the wild . . ."',
      artist: 'Cynthia Sheppard',
      artist_id: '9dfbdd58-65e6-40cf-951a-80e141061939',
      illustration_id: '0d4098f2-0d18-47a0-b79e-0875511dde0c',
      image_uris: [
        {
          small: 'https://img.scryfall.com/cards/small/front/6/f/6f35e364-81d9-4888-993b-acc7a53d963c.jpg?1562921188',
          normal: 'https://img.scryfall.com/cards/normal/front/6/f/6f35e364-81d9-4888-993b-acc7a53d963c.jpg?1562921188',
          large: 'https://img.scryfall.com/cards/large/front/6/f/6f35e364-81d9-4888-993b-acc7a53d963c.jpg?1562921188',
          png: 'https://img.scryfall.com/cards/png/front/6/f/6f35e364-81d9-4888-993b-acc7a53d963c.png?1562921188',
          art_crop:
            'https://img.scryfall.com/cards/art_crop/front/6/f/6f35e364-81d9-4888-993b-acc7a53d963c.jpg?1562921188',
          border_crop:
            'https://img.scryfall.com/cards/border_crop/front/6/f/6f35e364-81d9-4888-993b-acc7a53d963c.jpg?1562921188',
        },
      ],
    },
    {
      object: 'card_face',
      name: 'Moonscarred Werewolf',
      mana_cost: '',
      cmc: 0,
      type_line: 'Creature — Werewolf',
      oracle_text:
        'Vigilance\n{T}: Add {G}{G}.\nAt the beginning of each upkeep, if a player cast two or more spells last turn, transform Moonscarred Werewol f.  ',
      colors: ['G'],
      color_indicator: ['G'],
      power: '2',
      toughness: '2',
      flavor_text: '". . . and I will bring the fury of the wild back to my village."',
      artist: 'Cynthia Sheppard',
      artist_id: '9dfbdd58-65e6-40cf-951a-80e141061939',
      illustration_id: 'd91819c2-9961-4c71-a27a-9e6c1b469d7e',
      image_uris: [
        {
          small: 'https://img.scryfall.com/cards/small/back/6/f/6f35e364-81d9-4888-993b-acc7a53d963c.jpg?1562921188',
          normal: 'https://img.scryfall.com/cards/normal/back/6/f/6f35e364-81d9-4888-993b-acc7a53d963c.jpg?1562921188',
          large: 'https://img.scryfall.com/cards/large/back/6/f/6f35e364-81d9-4888-993b-acc7a53d963c.jpg?1562921188',
          png: 'https://img.scryfall.com/cards/png/back/6/f/6f35e364-81d9-4888-993b-acc7a53d963c.png?1562921188',
          art_crop:
            'https://img.scryfall.com/cards/art_crop/back/6/f/6f35e364-81d9-4888-993b-acc7a53d963c.jpg?1562921188',
          border_crop:
            'https://img.scryfall.com/cards/border_crop/back/6/f/6f35e364-81d9-4888-993b-acc7a53d963c.jpg?1562921188',
        },
      ],
    },
  ],
  legalities: {
    standard: 'not_legal',
    future: 'not_legal',
    modern: 'legal',
    legacy: 'legal',
    pauper: 'legal',
    vintage: 'legal',
    penny: 'legal',
    commander: 'legal',
    brawl: 'not_legal',
    duel: 'legal',
    oldschool: 'not_legal',
  },
  games: ['mtgo', 'paper'],
  reserved: false,
  foil: true,
  nonfoil: true,
  oversized: false,
  promo: false,
  reprint: false,
  variation: false,
  set: 'dka',
  set_name: 'Dark Ascension',
  set_type: 'expansion',
  set_uri: 'https://api.scryfall.com/sets/8052750a-aaf2-46fc-b46d-633f14124017',
  set_search_uri: 'https://api.scryfall.com/cards/search?order=set&q=e%3Adka&unique=prints',
  scryfall_set_uri: 'https://scryfall.com/sets/dka?utm_source=api',
  rulings_uri: 'https://api.scryfall.com/cards/6f35e364-81d9-4888-993b-acc7a53d963c/rulings',
  prints_search_uri:
    'https://api.scryfall.com/cards/search?order=released&q=oracleid%3A52855f90-19c1-46c9-8eed-88b3c1722bb0&unique=prints',
  collector_number: '125',
  digital: false,
  rarity: 'common',
  card_back_id: '0aeebaf5-8c7d-4636-9e82-8c27447861f7',
  artist: 'Cynthia Sheppard',
  artist_ids: ['9dfbdd58-65e6-40cf-951a-80e141061939'],
  border_color: 'black',
  frame: '2003',
  frame_effect: 'sunmoondfc',
  frame_effects: ['sunmoondfc'],
  full_art: false,
  textless: false,
  booster: true,
  story_spotlight: false,
  edhrec_rank: 4758,
  related_uris: {
    gatherer: 'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=262694',
    tcgplayer_decks:
      'https://decks.tcgplayer.com/magic/deck/search?contains=Scorned+Villager&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=scryfall & utm_source = scryfall ',
    edhrec: 'https://edhrec.com/route/?cc=Scorned+Villager',
    mtgtop8: 'https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Scorned+Villager',
  },
};

module.exports = {
  exampleCard: exampleCard,
  exampleDoubleFacedCard: exampleDoubleFacedCard,
};
