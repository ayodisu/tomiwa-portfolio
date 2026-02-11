import { Story, Service, Skill, Interest } from './types';
import {
  PenTool,
  BookOpen,
  Edit3,
  Feather,
  Palette,
  Shirt,
  Dribbble,
  Glasses,
  Layers,
  FileText
} from 'lucide-react';

export const CORE_SKILLS = [
  "Narrative Structure",
  "Character Development",
  "Pacing & Tension",
  "Dialogue Crafting",
  "World Building",
  "Thematic Consistency"
];

export const GENRE_SKILLS = [
  "Fiction",
  "Romance",
  "Poetry",
  "Genre Writing",
  "Literary Fiction"
];

export const SERVICES: Service[] = [
  {
    title: "Ghostwriting",
    description: "Capturing your voice and vision to tell stories that resonate without the byline.",
    icon: Feather
  },
  {
    title: "Beta Reading",
    description: "Critical analysis of manuscript flow, character arcs, and reader engagement.",
    icon: BookOpen
  },
  {
    title: "Editing",
    description: "Refining prose for clarity, impact, and grammatical precision while preserving style.",
    icon: Edit3
  },
  {
    title: "Plot Development",
    description: "Structuring vague ideas into compelling narratives with solid foundations.",
    icon: Layers
  }
];

export const INTERESTS: Interest[] = [
  { name: "Designing", icon: Palette },
  { name: "Basketball", icon: Dribbble },
  { name: "Reading", icon: Glasses },
  { name: "Fashion", icon: Shirt },
];

// Placeholder full text for demo purposes
const LOREM_IPSUM = `The rain hadn't stopped in days, creating a rhythm against the windowpane that mirrored the relentless thoughts in her mind. It was a chaotic symphony of nature, one that she found oddly comforting in its consistency. 

She turned the page of the worn notebook, the paper soft under her fingertips. This was where the world began and ended—in ink and pulp. Every word she wrote was a step towards a clarity she couldn't find in the noise of the city outside. 

"Structure," she whispered to herself. "It needs structure."

The character she was crafting, Elias, was too fluid, too unpredictable. He needed an anchor. Just like she did. She looked at the terracotta pot on the sill, a splash of deep earth tone against the grey wash of the afternoon. That was it. He needed something to lose.

As she wrote, the storm outside seemed to fade into the background, replaced by the vivid landscape of her imagination. This was the magic she chased—the moment when the fabricated becomes more real than the reality itself.`;

export const STORIES: Story[] = [
  {
    id: '1',
    title: "NO CALM AFTER A STORM",
    accolade: "Shortlisted Piece",
    tags: ["Literary Fiction", "Drama"],
    excerpt: "The wind didn't howl; it screamed. And when it stopped, the silence was louder than the noise ever was.",
    fullText: `Thud. Thud. Thud
A steady pounding, rhythmic even, not from the ilyu or indyer. Those were from times
passed, the duty has now been delegated to our hearts.
Aside from my heart, the only sounds are those of crickets and the rustling of leaves. The
adults are all gone, and the children were not spared. Some were snatched by death, and
others by the fear of death.
Festive December, an oxymoron. Each family had tales to tell, tales of loss and some families
had no liberty of tales. The dead cannot speak.
December had no merriment; it was a time of fear and a time to remember the multitudes lost
to death, not from outbreaks of disease but at the hands of men. Once upon a time, our
prayers had been a bountiful harvest, and our fears were pests. Our prayers and fears shifted.
We prayed not to be prey…

Top 10 Shortlisted pieces, FA Yuletide Writing Prize, 2025`
  },
  {
    id: '2',
    title: "ExploTRAtion",
    tags: ["Experimental", "Prose"],
    excerpt: "Maps are drawn by victors, but the terrain is remembered by the feet that walked it bleeding.",
    fullText: `“Potentially dying is not lucky.”

The country was set to launch a rocket into space; for the first time carrying average civilians and not specialists. World powers had begun to mark territories, allocation was according to discovery and many countries had already marked their bases. 

Their anthem: Mars is habitable, earth is over populated. Relocation had begun, for the first time, people were landing directly on Mars outside the confines of spaceships. Adaptation and experimentation were in progress. There were risks everyone knew that at the back of their minds, though to what extent, the world remained uncertain. 

“They were going to die either way.” You spat out.

Inmates on death role- old and young, male and female, from different works of life, with different living conditions and upbringing were selected to take the journey. 

They were experiments…`
  },
  {
    id: '3',
    title: "AGELESS",
    tags: ["Fantasy", "Romance"],
    excerpt: "Time was a currency he had in abundance, yet he would trade eternity for a single moment of her fading light.",
    fullText: `A peaceful slumber marked half your day in the cradle.
Sleep became a rare jewel, available only in bit sizes.
Over half your day is spent in slumber, often peaceful.
 
Your teeth were yet to develop, confined to liquid alone for food.
Crk-crk, the sound of bones crushed under your teeth, unfortunate chicken.
Klik, the sound of your jaw clicking in an attempt to chew chicken.
 
You were clad in a soft cotton onesie, your comfort priority.
The corset—4 inches small—constricted your ribcage, the look ate but you couldn’t.
You have a one-piece wrapper on, comfort priority.
 
You cried as a stranger picked you up, the stranger you also met last week.
Faces were etched in your memory, impossible to forget.
Strangers call you Mom.
 
Life is a circle, spinning endlessly.
Spinning wheel, the beginning leads to the end.
00:00, 12:00, 23:59, 00:00...`
  },
  {
    id: '4',
    title: "GREY RUBIX",
    accolade: "Green List Winner",
    tags: ["Mystery", "Thriller"],
    excerpt: "Life isn't black and white. It's a puzzle where the colors shift every time you think you've solved a side.",
    fullText: `Two men stood by the mirror, clad in all black, an axe in each of their hands. I feared my heart would drill a hole in my ribcage from the pounding before the axe.

It was the dead of the night.
The heavy snores in the room brought me comfort; my mother was here with me. I felt around for my mother, careful not to make a sound.

My palm made contact with the cold bare floor that separated the mats we slept on; I couldn't see my mother.

I still heard the snores, but the darkness enveloped her. It was pitch black.

It was pitch black!

The effect of the words dawned on me, and I spun to the mirror. There were no men.
It was my mind playing the tricks it played unending.

I stood up from the mat and on the jelly that had replaced my legs; I wobbled to the mirror. My steps were short and calculated. I couldn't afford to knock anything over for the same reason I didn't turn on the lantern; it would wake my mother up.

I reached the front of the mirror and placed a wrapper over it.
Cuddled up on the mat, my whole body shook. There was no sleep for me, only torture.
Waking my mother crossed my mind, but it would only bring distress to us both.

I placed my hands on my ears to silence the bells that rang. A buried memory resurfaced. I had knelt surrounded by men and women in white, one of whom was my mother. They referred to it as a deliverance, but it did not deliver me. I kept the latter to myself.

The joy in my mother was a price for my sealed lips.


Green list, Psych moments flash fiction contest`
  },
  {
    id: '5',
    title: "CAGED TO BE FREE",
    tags: ["Poetry", "Philosophy"],
    excerpt: "The bars were not made of iron, but of expectations. I locked myself in to keep the world out.",
    fullText: `You watch your mom wipe a stray tear that fell off her eyes but you are not moved, it is not her first outburst and it most likely wouldn’t be her last, it is a little too much for missing a wedding though. Maybe you shouldn’t call your only sister’s wedding “a wedding”, you admonish yourself.

Adjusting the veil behind the bride, greeting friends and family, having a standby fan to make sure she doesn’t sweat off her makeup, sneaking treats to the bride, you had your duties and if you overlooked a few insignificant things like the fact that you had not spoken to your sister in eight years, it might have been fun…`
  }
];