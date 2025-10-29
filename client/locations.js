import lyricsBDIcon from './src/assets/icons/lyricsBDIcon.svg';
import mixingNoteIcon from './src/assets/icons/mixingNoteIcon.svg';
import voiceNoteIcon from './src/assets/icons/voiceNoteIcon.svg';
import quillPenIcon from './src/assets/icons/quillPenIcon.svg';
import filmReelIcon from './src/assets/icons/filmReelIcon.svg';
import fullLyricsIcon from './src/assets/icons/fullLyricsIcon.svg';
import BTSPhotoIcon from './src/assets/icons/BTSPhotoIcon.svg';
import watchMusicVideo from './src/assets/icons/watchMusicVideo.svg';
import visualizerIcon from './src/assets/icons/visualizerIcon.svg';
import BTSVideoIcon from './src/assets/icons/BTSVideoIcon.svg';
import interviewIcon from './src/assets/icons/interviewIcon.svg';

// Import video files for location-specific videos
// These videos are used in VideoPlayer.jsx and FilmReel.jsx components
// Video assignment: Locations with film-reel buttons get YouAreFilmReelVideo; locations with BTS VIDEO buttons get BTSYouAreVideo

const locationPins = [
  {
    id: 1,
    locationName: "Ota 42 - Adum",
    importance: "Cue’s birthplace and his mother’s family home in Adum, Kumasi — where his story quietly began and, years later, came full circle as his mother returned to live there.",
    coords: { top: "40%", left: "50%" },
    image: "",
    songTitle: "Fruit of the Womb",
    songUrl: "",
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Fruit%20of%20the%20Womb%20Film%20Reel.mp4?alt=media&token=8837820d-db42-4658-96e7-6bf8a395a132',
    artistName: "Kojo Cue",
    lyrics: `I made a little mistake
Have I taken on more than I weigh?
But you gave and you gave and you gave me the world
So I’ll keep on, on my way
And I’ll try, I’ll try, I’ll try

My mummy dey grow 
But I still no blow enough to put her in her home
I still no fit change the car she get from years ago
I still no fit take over all of her rent mpo
She still the work and oh
Naturally
She still be proud of me
She asks for money sometimes but
Her number one request still be grand kiddies
Meanwhile I dey grind in these 
streets
Struggling to pay my masters fees

My mummy dey grow
Ɔyi ne duku pɛ plenty grey dey show
She dey stress climb stairs cos her knees dey go
BP dey rise and I have a need to show
fruits of the seeds she sow
Na ne plan ne sɛ ɔrehwɛ ne ba sukuu
Na daakye bi ne ba nso abɛ hwɛ no bi
Ɛnso Cue no fit find his feet
brother and a wife to feed, wondering if this rich dad thing sef man fit be

My mummy dey grow, 
Ɛnso still a, me nyɛɛ hwee nmaa no killa, 
I mean by now ɛwɔ sɛ nka m’ama no villa
And like a 100 visa
Maids ne gardeners, paying for her drivers

Last time I passed by the house where
I said 
I was gonna buy her, when I grow up
Yeah I think the owner 
Turned it into some apartments
And I still cant afford mummy a flat there
Funny I was on my way to carry mattress from mummy ein house when 
I by chance met 
my homie from back then

Ɔse Cue my mummy she go
Maame yi brɛ a w’abrɛ me ho yi
M’antumi anma no bed sheet mpo
Anma no fridge mpo 
She used to cry when she threw food away
And say, “I wish your grandmother was still here today”
And here I dey eating through my tears
Nka Leti ntwɛn ma kofi nhitte ansa eh
Nyame nnim me plans, nka ɔnma no npicke ansa eh
Nnipa na me frɛ no da biara
Now she no fit answer and
I feel so lonely out here
Hold yours cos you’re lucky to have her
Made me feel terrible as a son, 
I no dey call enough, 
Blame it on these schemes adey run
These streets, no be fun
These gees, no fit come

My mummy dey grow
Nansa yi weekend biara maninii dey go
Wonder how she feels to know
That I still no be close 
To paying her back and giving her what she want or
Four more
When you’ve taken plenty shots and still put nothing on the scoreboard
I Wonder who you disappoint more?
Your mummy or your wife?
Shit I might
have to tell y’all the story of my life. 
`,
    buttons: [
      { text: "FILM REEL", icon: filmReelIcon, link: "/location/1/film-reel" },
      { text: "INTERVIEW", icon: quillPenIcon, link: "/location/1/reflection" },
      { text: "LYRICS", icon: fullLyricsIcon, link: "/location/1/lyrics" },
    ],

  },
  {
    id: 2,
    locationName: "Ota 42 - Adum",
    importance: "Cue’s birthplace and his mother’s family home in Adum, Kumasi — where his story quietly began and, years later, came full circle as his mother returned to live there.",
    image: "",
    coords: { top: "46%", left: "47%" },
    songTitle: "Big Boy",
    songUrl: "",
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Big%20Boy%20Film%20Reel.mp4?alt=media&token=05a852d0-178f-430d-a950-8e7cea372aba',
    artistName: "Kojo Cue",
    lyrics: `I made a little mistake
Have I taken on more than I weigh?
But you gave and you gave and you gave me the world
So I’ll keep on, on my way
And I’ll try, I’ll try, I’ll try

My mummy dey grow 
But I still no blow enough to put her in her home
I still no fit change the car she get from years ago
I still no fit take over all of her rent mpo
She still the work and oh
Naturally
She still be proud of me
She asks for money sometimes but
Her number one request still be grand kiddies
Meanwhile I dey grind in these 
streets
Struggling to pay my masters fees

My mummy dey grow
Ɔyi ne duku pɛ plenty grey dey show
She dey stress climb stairs cos her knees dey go
BP dey rise and I have a need to show
fruits of the seeds she sow
Na ne plan ne sɛ ɔrehwɛ ne ba sukuu
Na daakye bi ne ba nso abɛ hwɛ no bi
Ɛnso Cue no fit find his feet
brother and a wife to feed, wondering if this rich dad thing sef man fit be

My mummy dey grow, 
Ɛnso still a, me nyɛɛ hwee nmaa no killa, 
I mean by now ɛwɔ sɛ nka m’ama no villa
And like a 100 visa
Maids ne gardeners, paying for her drivers

Last time I passed by the house where
I said 
I was gonna buy her, when I grow up
Yeah I think the owner 
Turned it into some apartments
And I still cant afford mummy a flat there
Funny I was on my way to carry mattress from mummy ein house when 
I by chance met 
my homie from back then

Ɔse Cue my mummy she go
Maame yi brɛ a w’abrɛ me ho yi
M’antumi anma no bed sheet mpo
Anma no fridge mpo 
She used to cry when she threw food away
And say, “I wish your grandmother was still here today”
And here I dey eating through my tears
Nka Leti ntwɛn ma kofi nhitte ansa eh
Nyame nnim me plans, nka ɔnma no npicke ansa eh
Nnipa na me frɛ no da biara
Now she no fit answer and
I feel so lonely out here
Hold yours cos you’re lucky to have her
Made me feel terrible as a son, 
I no dey call enough, 
Blame it on these schemes adey run
These streets, no be fun
These gees, no fit come

My mummy dey grow
Nansa yi weekend biara maninii dey go
Wonder how she feels to know
That I still no be close 
To paying her back and giving her what she want or
Four more
When you’ve taken plenty shots and still put nothing on the scoreboard
I Wonder who you disappoint more?
Your mummy or your wife?
Shit I might
have to tell y’all the story of my life. 

`,
    buttons: [
      { text: "FILM REEL", icon: filmReelIcon, link: "/location/2/film-reel" },
      { text: "INTERVIW", icon: quillPenIcon, link: "/location/2/reflection" },
    ],

  },
  {
    id: 3,
    locationName: "Kotoko - Oduom",
    importance: "Oduom — the birthplace of his love for football, where scraped knees and street games near the Kotoko camp sparked dreams that never faded.",
    image: "",
    coords: { top: "80%", left: "58%" },
    songTitle: "Next term",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis Next term",
    buttons: [
      { text: "MIXING NOTES", icon: mixingNoteIcon, link: "/location/3/mixing-notes" },
      { text: "VOICE NOTE", icon: voiceNoteIcon, link: "/location/3/voice-note" },
      { text: "LYRICS BREAKDOWN", icon: lyricsBDIcon, link: "/location/3/lyrics-breakdown" },  // ask where this link routes to?
    ],
    mixingNoteImages: [
      {
        id: 1,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/NXT1_a.jpg?alt=media&token=6fb5c997-de0c-4e3d-84eb-a073c5138275",
        title: "Next term Mixing Note 1",
      },
      {
        id: 2,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/NXT1_b.jpg?alt=media&token=2302d04b-4d47-409c-a3bf-18c55f26fc43",
        title: "Next term Mixing Note 2",
      },
      {
        id: 3,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/NXT2_a.jpg?alt=media&token=5926103d-1e55-4f75-b628-68da00559da2",
        title: "Next term Mixing Note 3",
      },
      {
        id: 4,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/NXT2_b.jpg?alt=media&token=5414ab02-dad2-44f2-a89a-a99d094c4b75",
        title: "Next term Mixing Note 4",
      },
      {
        id: 5,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/NXT3_a.jpg?alt=media&token=85aafc68-1594-4691-9146-8ac46f49982c",
        title: "Next term Mixing Note 5",
      },
      {
        id: 6,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/NXT3_b.jpg?alt=media&token=e6933f31-6ca1-4408-915e-069f9c305780",
        title: "Next term Mixing Note 6",
      }      
    ],

  },
  {
    id: 4,
    locationName: "Jamaica House - Bantama",
    importance: "Cue’s father’s family home in Bantama — the unshakable center of his world, filled with childhood laughter, family lessons, and the comfort of belonging.",
    image: "",
    coords: { top: "13%", left: "52%" },
    songTitle: "Bantama Blues 3",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis Bantama Blues 3",
    buttons: [
      { text: "BTS VIDEO", icon: BTSVideoIcon, link: "/location/4/video" },
      { text: "MIXING NOTES", icon: mixingNoteIcon, link: "/location/4/mixing-notes" },   // ask where this link routes to?
      { text: "WATCH MUSIC VIDEO", icon: watchMusicVideo, link: "/location/4/comingsoon" }, 
    ],
    mixingNoteImages: [
      {
        id: 1,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/BB%201_a.PNG?alt=media&token=6f4f9852-0025-4452-ac71-7803032435f5",
        title: "Bantama Blues 3 Mixing Note 1",
      },
      {
        id: 2,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/BB%201_b.PNG?alt=media&token=35172f4c-eea2-4740-bb5c-98ebb8f3a6df",
        title: "Bantama Blues 3 Mixing Note 2",
      },
      {
        id: 3,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/BB%202_a.PNG?alt=media&token=0e70a03f-e474-45f0-8502-706eb4729b3c",
        title: "Bantama Blues 3 Mixing Note 3",
      },
      {
        id: 4,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/BB%202_b.PNG?alt=media&token=a1a2b8e4-f61c-4c26-beac-3871237e5efa",
        title: "Bantama Blues 3 Mixing Note 4",
      },
      {
        id: 5,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/BB%203_a.PNG?alt=media&token=58f81e84-776d-4dae-95e0-d04ac2435f7d",
        title: "Bantama Blues 3 Mixing Note 5",
      },
      {
        id: 6,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/BB%203_b.PNG?alt=media&token=38455506-09c5-4fba-a9d8-1eb950f0b770",
        title: "Bantama Blues 3 Mixing Note 6",
      },
      {
        id: 7,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/BB%204_a.PNG?alt=media&token=c73bfe06-0067-4fdb-8132-5878d80aded1",
        title: "Bantama Blues 3 Mixing Note 7",
      },
      {
        id: 8,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/BB%204_b.PNG?alt=media&token=d780738c-fd26-47b5-ab2f-40da5b8e4a63",
        title: "Bantama Blues 3 Mixing Note 8",
      },
      
    ],

  },
  {
    id: 5,
    locationName: "Jamaica House - Bantama",
    importance: "Cue’s father’s family home in Bantama — the unshakable center of his world, filled with childhood laughter, family lessons, and the comfort of belonging.",
    image: "",
    coords: { top: "19%", left: "47%" },
    songTitle: "Abrantie",
    songUrl: "",
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Abrantie%20Film%20Reel.mp4?alt=media&token=fba62780-14e3-4146-bb22-dafb2edea49c",
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis Jamaica House - Bantama Abrantie",
    buttons: [
      { text: "FILM REEL", icon: filmReelIcon, link: "/location/5/film-reel" },
      { text: "MIXING NOTES", icon: mixingNoteIcon, link: "/location/5/mixing-notes" },
    ],
    mixingNoteImages: [
      {
        id: 1,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/AB1_1.jpg?alt=media&token=ba4837dc-204e-4260-9fb3-f245201f7f52",
        title: "Abrantie Mixing Note 1",
      },
      {
        id: 2,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/AB1_2.jpg?alt=media&token=fe6c80af-8cd6-4120-a48d-c324ff55db40",
        title: "Abrantie Mixing Note 2",
      },
      {
        id: 3,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/AB2.jpg?alt=media&token=7e5da675-5a4c-4676-8e0f-91bcc46de613",
        title: "Abrantie Mixing Note 3",
      }
    ],

  },
  {
    id: 6,
    locationName: "OWASS BASIC - Santasi",
    importance: "Cue’ JSS. A place rich with memories and mischief where his love for literature first took root. And where his science teacher became the unlikely villain of his childhood story",
    image: "",
    coords: { top: "36%", left: "36%" },
    songTitle: "Squad",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis OWASS BASIC - Santasi",
    buttons: [
      { text: "VISUALIZER", icon: visualizerIcon, iconColor: "#7B3F00", link: "/location/6/video" },     // ask where this link routes to?
      { text: "LYRICS BREAKDOWN", icon: lyricsBDIcon, link: "/location/6/lyrics-breakdown" },    // ask where this link routes to?
    ],

  },
  {
    id: 7,
    locationName: "OWASS BASIC - Santasi",
    importance: "Cue’ JSS. A place rich with memories and mischief where his love for literature first took root. And where his science teacher became the unlikely villain of his childhood story",
    image: "",
    coords: { top: "40.5%", left: "30.5%" },
    songTitle: "Mr. Eben",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis Mr. Eben Interlude",
    buttons: [
      { text: "LYRICS BREAKDOWN", icon: lyricsBDIcon, link: "/location/7/lyrics-breakdown" },  // Ask question on this
      { text: "INTERVIEW", icon: interviewIcon, link: "/location/7/interview" },
      { text: "MIXING NOTES", icon: mixingNoteIcon, link: "/location/7/mixing-notes" },
    ],
    mixingNoteImages: [
      {
        id: 1,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/MrE.jpg?alt=media&token=6ccf0b50-bec5-4557-b560-71d7dfc1faa0",
        title: "Mr. Eben Mixing Note 1",
      }
    ],

  },
  {
    id: 8,
    locationName: "SMALL LONDON - Breman",
    importance: "Home in Breman with his grandmother and auntie from 2000 to 2003 — the setting of his earliest independence, first love, and long walks to school..",
    image: "",
    coords: { top: "36%", left: "72%" },
    songTitle: "Mysterious Ways",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: `Kwaku ahyɛ ne white shirt 
Lilian agye ne white dress 
Me deɛ Rose nti na me baa yɛ 
nso I no see am yet
Madam grace 
se obiara ntena ase yɛ ntie nyame asem
But e be she norr dey read some book
To the mandem
Things she dey say beats my logic 
can’t understand them
couldn’t wait I was the first to put up my hands when
They said (obi wo question anaa?)
Me bisa yɛ with a serious face
frowned and she answered
(God works in mysterious ways)

Read your Bible
Pray everyday
Pray everyday
Pray everyday
Read your Bible 
Pray everyday 
If you want to 
grow

Ante never let us skip
Hymn nkoara she let us sing
Maa Abena caught the Holy Ghost
Next week then e enter Vic
All my friends dey feel the spirit
Me nkoara e never touch me
No matter how hard I beg Jesus to forgive and forget my sins
Madam grace se me ha adwene
Nickname thomas I be doubting
Ɔma yɛn kenkan Job and same
Questions filled my soul again
I raise my hand ɔse Junior no no
What do you want to know again?
(nti God killed the children too?
But what did the children do?)
Ɔse bonsam hyɛ wo mu a pie 
There norr wey she raise her cane
as it came down all I heard say
God works in mysterious ways

Read your Bible
Pray everyday
Pray everyday
Pray everyday
Read your Bible 
Pray everyday 
If you want to 
grow

Ante yare, ɔrefon 
In so much pain for long
All the Doctors no fit solve 
All the plenry nnuro we bought
Everyday I called on God
Every night she called on God
Dunno if he heard or not
Be like say ein ear comot
Nti wani nhuu yɛ koraa?
Ana maame yi rebrɛ saa?
Way she dey love you paa
Can’t you come through once?
Miracle you can’t do one?
Even if you pass through man?
See as her tears dey flow 
See as her eyes dey close 

Read her Bible
Prayed everyday
Prayed everyday
Prayed everyday
Read her Bible 
Prayed everyday
Saw her faith dey shake
As she face pain
So I read my Bible
Prayed everyday
Prayed everyday
Prayed everyday
Read my Bible 
Prayed everyday
Prayed everyday
Prayed everyday

Skit

Pastor said Ante’s gone 
She’s never coming back again
But one day if we hear horn 
We go be in her arms again
For now we for look to God
And make Jesus our friend
And come find him in the church
Like they confined him in church
Well I couldn’t find him in church
only found hymns church
So on the day my Angel go
I knew 
I was never ever 
coming back here
again
`,
    WrittenReflection: `When I was nine, I began looking for God. Not out of holiness or fear of hell. I just wanted the power. The magic trick. The thing that could split oceans or make people stare. I thought maybe if I prayed hard enough, I could bend the world to my will.
But what began as a hunt for magic turned into something else. A question that kept widening until it swallowed me whole. God became less a person and more a question that kept changing shape every time I thought I had an answer.
I grew up Presbyterian. Clean shirts, quiet hymns, and people pretending they were okay. I inherited it from my parents like they inherited it from their parents. Then I fell in love,  first love, Leticia, and she dragged me to the Church of Pentecost. That was louder. People spoke in tongues, danced like they were on fire, cried like they’d seen death and were bargaining with it. I thought maybe that’s where God hid - in the noise.
After that, I couldn’t stop chasing him. SDA, Sunsum sore, Assemblies of God, Deeper Life, Latter-day Saints; I tried them all. My mom stopped me before I got baptized by the Mormons. Said they were strange. I wanted to tell her that everyone searching for God was strange.
When Christianity stopped making sense, I started peeking into other rooms. Krishna, Buddha, the eastern calm. At Sat Sang, they said God was beyond religion. I believed them until I didn’t.
Then I walked with an African priest - a man who seemed to breathe secrets. He taught me about spirits, rituals, Crowley, the 6th & 7th Books of Moses. Things hidden behind curtains most people are too scared to touch, the names that could open invisible doors. I kept thinking that if I could just say the right name, God would finally turn around. He never did. Occult, they call it. I just wanted answers. I didn’t find any. Just more doors.
By the time I was 19, I’d read the Bible from cover to cover. It said everything and nothing at the same time. Once, when I was six, my uncle - a Muslim convert - made me pray Salat beside him. He gave me a Muslim name. I don’t remember it now, but sometimes when I see the way one well placed Alhamdulillah can calm me, I think God does.
After all that searching, I found that God doesn’t live in temples or chants. He isn’t in the noise, or the smoke, or the holy books. He lives in the quiet machinery of everything. He’s in the quiet pulse inside everything that breathes. The way a leaf trembles, the way pain insists on staying, the way time refuses to stop. In you, in me, in the man you hate, in the woman you miss, in the insect you crush. He’s not watching - He is the watching.
To know Him, you have to love Him. But to love Him, you have to love everything that’s falling apart including yourself. Not the Sunday-school kind of love but the kind that starts with looking in the mirror and not hating what you see. Then extend it, to the people who piss you off, to the ones who left, to the ones who stayed.

Jesus said, “Love your neighbor as yourself.” Maybe he knew that would be the hardest command of all - to look at the face of another and see your own reflection, flickering and temporary, carrying the same desperate hope. Jesus said it first, but the truth is older than he is. God is everywhere, but if you want to hear him, you have to shut up long enough to listen inside your own chest.

`,
    buttons: [
      { text: "FULL LYRICS", icon: fullLyricsIcon, link: "/location/8/lyrics" },
      { text: "REFLECTION", icon: quillPenIcon, link: "/location/8/reflection" },
    ],

  },
  {
    id: 9,
    locationName: "SMALL LONDON - Breman",
    importance: "Home in Breman with his grandmother and auntie from 2000 to 2003 — the setting of his earliest independence, first love, and long walks to school.",
    image: "",
    coords: { top: "43%", left: "77%" },
    songTitle: "Angel",
    songUrl: "",
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Angel%20Film%20Reel.mp4?alt=media&token=4631e9d9-4cca-4d2f-b215-892441680782',
    artistName: "Kojo Cue",
    lyrics: "",
    buttons: [
      { text: "FILM REEL", icon: filmReelIcon, link: "/location/9/film-reel" },
      { text: "MIXING NOTES", icon: mixingNoteIcon, link: "/location/9/mixing-notes" },
      { text: "VOICE NOTES", icon: voiceNoteIcon, link: "/location/9/voice-note" },  // check this again
    ],
    mixingNoteImages: [
      {
        id: 1,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Ang1_1.jpg?alt=media&token=e0b24473-9886-41f9-b176-a59978e6b002",
        title: "Angel Mixing Note 1",
      },
      {
        id: 2,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Ang2_1.jpg?alt=media&token=9b91284f-75b2-49dd-ad6f-3a5f08c3adfa",
        title: "Angel Mixing Note 2",
      },
      {
        id: 3,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Ang2_2.jpg?alt=media&token=30c8d685-aa33-4f9d-a731-829523707d83",
        title: "Angel Mixing Note 3",
      }
    ],

  },
  {
    id: 10,
    locationName: "F176 - Buokrom Estate",
    importance: "Buokrom Estate, 2004–2007 — where Cue came of age, met his father for the first time, and found ambition shaping the boy into a young man.",
    image: "",
    coords: { top: "50%", left: "72%" },
    songTitle: "F176",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: "",
    buttons: [
      { text: "VOICE NOTE", icon: voiceNoteIcon, link: "/location/10/audio" },
    ],

  },
  {
    id: 11,
    locationName: "F176 - Buokrom Estate",
    importance: "Buokrom Estate, 2004–2007 — where Cue came of age, met his father for the first time, and found ambition shaping the boy into a young man.",
    image: "",
    coords: { top: "58%", left: "68%" },
    songTitle: "Grew Up Fast",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: `Never had a chance to choose red or blue pill
How adey SS2 dey think about the two bills?
Making a mess at school because two
grown people dey fight
pushing me to pick a side
Ɔnfa hoo how I feel
My peers dey think of school, adidas and then Nike
Or which girl dem dey like
The letters sef me adey write
But I’m forced to think about how to provide
For mummy and kiddie bro
nti me nyini oh, e b so
Life of a first born son
as ein poppy run
World on my shoulders, I no grow yet 
but afor be man
Without a blueprint
No one in my corner
In the ring without my shoe strings
Still I for win, don’t have the luxury of losing,
Even if afor sin
Take my family out the hood king
Have to keep it pushing
Helping my mother sell angwamoo on the school pitch
All I ever felt was envy staring at the cool kids

Nsa tiaa nyinaa nyɛ pɛ now I know now
Don’t try to put the world up on your shoulders
Weytin be mine no be your own
Research and find yourself and you will know that
Don’t take too much time before its over
So man define your own persona
The clock dey tick while you dey slow down
Research and find yourself and you will know that


I mean it hurts that your daddy had to die so but
How Abi 22 dey provide for your household
What?
your mummy, elder bro and uncles no dey do
Wo regye from Ju, and if I talk abi asshole huh?
How about
we just vibe
and I do what no go wound me
Instead of you acting like
all your bills be my duty
Comparing me to your ex, that man is 32
still he no fit see top
If anything I’m better boo
But you know 
what to do 
to make it still about me
How’s your poverty fucking up how I feel about me
Manipulate kakra
gaslight kakra
Ama small boy afei me da dwene mpo kyen wo papa
Losing my youth though I’m still in this school
cos I’m thinking it’s cool z
to be a responsible dude 
Enso me bo so nkuro nwii afei na me nyini
I had to learn to say no, I’m not a genie

Nsa tiaa nyinaa nyɛ pɛ now I know now
Don’t try to put the world up on your shoulders
Weytin be mine no be your own
Research and find yourself and you will know that
Don’t take too much time before its over
So man define your own persona
The clock dey tick while you dey slow down
Research and find yourself and you will know that

Drive slow
don’t rush to get grown, my man
Dem try tell me on the low 
but the damage was done
Growing up quick no be fun
Children for fit to make mistakes
Play with fire, 
burn, learn, 
how to make it shape
Rough metals into swords as you hone am
All the mistakes wonna parents never go own up
Barely 6 being treated like a grown up
W’af3four redi agoro no 
na wo nkoara wo so nsuo nam
I swear e no be my fault
premature adult
I skipped some steps 
in the process so now a part of
Me dey
Look in the mirror and see a kid
I swear I still look in the mirror and see a kid
But I no fit lose it
Have to keep it pushing
So my kiddie bro
go dey grow, up cruising
Helping my mother sell angwamoo on the school pitch
All I ever felt was envy staring at the cool kids
Grew up too quick
`,
    buttons: [
      { text: "FULL LYRICS", icon: fullLyricsIcon, link: "/location/11/lyrics" },
    ],

  },
  {
    id: 12,
    locationName: "F176 - Buokrom Estate",
    importance: "Buokrom Estate, 2004–2007 — where Cue came of age, met his father for the first time, and found ambition shaping the boy into a young man.",
    image: "",
    coords: { top: "55%", left: "76%" },
    songTitle: "Tontonte",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: `Ehhhhh ahhhhh (Ginseng asɛ nsuo grawa)
Mmm ahhh mmmm (Me redwene, got me thinking louder)
Wiase nsɛmsɛm na adane me adwenedwene ahhh (ɔkɔ baabi a)
Me twa bi a wo se me yɛ asommorodwe ei (ɔkɔ baabi aye)
Kwame ei 

Back in the days me hu me 
OG biara na w’abo 
Nti me bisa no, Bra Dan
aden na daa na w’ayɛ sram
Ɔse wo bɛ nyini abɛ to
he went to Lagos to get rich
hustle hard make e pick
Dem deport am 83
W’anfa hwee 
agye ne Ghana must go
But man be who dey do 
No be who do some
Ɔbra nso kakra ni wo ho a it’s too gruesome
To make a move, you for move on
Nti ne nsem hyɛ tirimu
Hwɛ, ɔgye ne quarter on credit
Na ɔne brothers asette 
Gulder nam mu, ɛsweate
Talking pain and lessons
Gain and blessings
The women, the children
And now I get it 

Ma yɛ barima nti 
Ɔbra no rekɔ m’ani 
I’m at that age, I dey craze
But the Hennessy’s
Cheaper than therapy
Nti Friday then I link boys
Kokroko na ɛɛma me joy
Ɛnmaa m’ani so a me nkɔɔ yɛ
Me wia a m’atippo rejoice
Finding myself in the stories shared
Everybody needs somebody who’s always there
Eka ba a yɛ bɛ sorte chef 

Afei deɛ asante akae nakyi wakae nakyi oh ei (kae nakyi oh ei)
Ɛnso ɛnkaa akyi, Konkontibaa dane aponkyereni 
na wakɔ baabi a, akɔ baabi oh ei (kɔ baabi oh ei)
If he come back ɛnsuo no mu nso a ɛnyɛ me nwanwa

Wiase abrabɔ yi ɛnyɛ mmirika oh (ohhhh)
Ɛnyɛ mmirika oh (ɛnyɛ mmirika oh)
Me nim sɛ dabi ɛbɛ se sa (ɛbɛ se sa ahh)
Wiase abrabɔ yi ɛnyɛ mmirika oh (ohhhh)
Ɛnyɛ mmirika oh (ɛye ahhh ahhh ahhh)
Me nim sɛ dabi ɛbɛ se sa (ɛbɛ se sa ahh)

Asem a preko ka kyerɛ ne ba no
Afei na ato aso mu, afei na mate aseɛ
Nsɛm a ɛsii yɛ a na nka me nfa hoo
Afei na mahu ani, anoo ne ne nkyereaseɛ
Youthful exuberance, tintiriti 
Ɔbra go calm you down, ma biribi nsi
I’m sorry mama, na me nnim nti
Alcohol no be food oh, adwendwen nti
2 whiskey, coke koraa nfra
The weight I place on my shoulders, Job koraa nsoa
Nyame hyira Nnipa kakra bi a 
na ɔrebɛ twa wo mpoa 
Ohu wo te sɛ akoa
Ɛnso ɛhia ɛnyi mu

Ɛhia se, na ɛhia ni, 
Ɛhia nnim, neɛ ɔhia bi
Ɔhia di, deɛ nua ni mu
Yɛ mia ani, de hua bi
nnua nim, Nyame anim
Neɛ enti a na Three hyɛ bitters wo mpa ase
Salary nto nsaase, yɛ de te nsa ase

Paapa baa yɛ na wa vex I couldn’t believe
Sɛ ɛnti a ɔbaa ɛyɛ a ɔnnidi
This life as a test no ankɔ me tiri mu
Plans no ma forme nso ne koraa koraa committee
Na me dwene sɛ mɛ yɛ fast na makɔ m’anim
Crash makoma for the side nti matɔ mani
Magye lime ne Ginseng 
Magye ice se makae makyi
Ɔsoma me a asɔ mani 

Afei deɛ asante akae nakyi 
wakae nakyi oh ei 
(kae nakyi oh ei)
Ɛnso ɛnkaa akyi, Konkontibaa dane aponkyereni 
na wakɔ baabi a, akɔ baabi oh ei 
(kɔ baabi oh ei)
If he come back ɛnsuo no mu nso a ɛnyɛ me nwanwa

Me se afei deɛ me nom Ginseng asɛ nsuo grawa
Me redwene, got me thinking louder 
Konkontibaa dane aponkyerenii no ɔkɔ baabi a
Hmmm ɔkɔ baabi aye
Ɔhu sɛ wooo 
yike eiii, ahhhh

Wiase nsɛmsɛm, wiase nsɛm ntira
Ɛyɛ a na ɛbi se me pɛ nsa ahh
Bosome aso, ɛfie wura ɛregye ohhhh boooo
Nkoraa school fees yi ayɛ dendenden (Wiase abrabɔ yi ɛnyɛ mmirika oh)
Aso oh me yere yi nso a (Ɛnyɛ mmirika oh)
ɔno na ɔbɛ yɛ mawerɛkyekyerɛ (Me nim sɛ dabi ɛbɛ se sa)
Nanso aboa ɔhia ama odo yi ayɛ nwononwononwono (Wiase abrabɔ yi ɛnyɛ mmirika oh)
Yɛ kɔ da ɔde n’ani akyerɛ dan odo eiiii (Ɛnyɛ mmirika oh)
Me nom nsa mo se asommorodwe eiii (Me nim sɛ dabi ɛbɛ se sa)
Wiase nsemsem na ama no aba saa (Wiase abrabɔ yi ɛnyɛ mmirika oh)
(Ɛnyɛ mmirika oh)
(Me nim sɛ dabi ɛbɛ se sa)


(ɛnyɛ mmirika oh)
 (ɛbɛ se sa ahh)
(ohhhh)
 (ɛye ahhh ahhh ahhh)
 (ɛbɛ se sa ahh)


`,
    buttons: [
      { text: "BTS PHOTOS", icon: BTSPhotoIcon, link: "/location/12/bts-photos" },
      { text: "VISUALIZER", icon: visualizerIcon, link: "/location/12/video" },
      { text: "FULL LYRICS", icon: fullLyricsIcon, link: "/location/12/lyrics" },
    ],

  },
  {
    id: 13,
    locationName: "CLAMP STREET - Lake",
    importance: "Cue’s present home — the calm after all the movement.",
    image: "",
    coords: { top: "66%", left: "27%" },
    songTitle: "Dreams",
    songUrl: "https://drive.google.com/uc?export=download&id=10MdmU5D7AXKnoLj1DHg8yW6WVE2JxG0W",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis",
    buttons: [
      { text: "MIXING NOTES", icon: mixingNoteIcon, link: "/location/13/mixing-notes" },
      { text: "VOICE NOTE", icon: voiceNoteIcon, link: "/location/13/voice-note" },
    ],
    mixingNoteImages: [
      {
        id: 1,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/DR1_a.jpg?alt=media&token=a4b2cf38-0d9d-42e4-b165-f72da00885c0",
        title: "Dreams Mixing Note 1",
      },
      {
        id: 2,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/DR1_b.jpg?alt=media&token=a925661d-8a2f-4435-be83-d255041dad26",
        title: "Dreams Mixing Note 2",
      },
      {
        id: 3,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/DR2_a.jpg?alt=media&token=a6fc0c82-c739-4a60-92e1-706af529adb3",
        title: "Dreams Mixing Note 3",
      },
      {
        id: 4,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/DR2_b.jpg?alt=media&token=2f615872-9ed4-4538-bc63-fc55cb88013d",
        title: "Dreams Mixing Note 4",
      },
    ],

  },
  {
    id: 14,
    locationName: "CLAMP STREET - Lake",
    importance: "Cue’s present home — the calm after all the movement.",
    image: "",
    coords: { top: "62%", left: "34%" },
    songTitle: "You Are",
    songUrl: "",
    videoUrl: '',
    artistName: "Kojo Cue",
    lyrics: `I lost my sight
I’m driving blind when I’m with you
I think I’m fell and hit my head in love
With you
With you, with you
Midoh!

Last one did me dirty
Na wo yɛ certi 
From the day you text me
Had nothing to hide
Before na me lie
Ɛyɛ shape ene size
Tapped into your mind
Saw all the divine designs 
kae when you met me?
Wo se “I thought you were taller”
And then you led me 
to your room for the vibes
Na Connection no yɛ high wae
Touched all your hotspots
by week two Cue knew this was the wife I
Was made for
kept me really close
Real like IG videos
pity those who
Let you slip into my safe hands in pretty clothes boo
Now where should we go to?
Hwim
Next to the Eiffel Tower we made love 
Swear a lot of my firsts you dey mong 
Drove that white Corolla like a grey porsche
It’s like time stopped when our song came on
 
Rising sun in the morning you light my world
Girl with you there’s no dull
And I no fit make it a day 
Without your love yeah
Hold me down, you dey hold me close
If e no be you my song no fit bounce
With just your love I’ll shut the whole world down ou ouhhh

You are, are
You are my true love yeah
My true love yeah
You are, are
You are my true love 
Yeah, eh, 

I’m tryna love you like a gangsta
Spray you money like a banker
Anything you want I’ll do
Anything you want I’ll do
tryna love you like a gangsta yeah
Spray you money like a banker yeah eh
Anything you want
Anything you want I’ll do

You know the road to the holes where the bones dey 
But your oath to Kojo’s that you won’t say 
For my growth, aint a role that you won’t play
For your own, ain’t a toll that I won’t pay
And she won’t play about me
she go jump you
Wo te yɛn dede a pass and go like 1,2
Ka yɛn asɛm a we go haunt you
She be the one, true
She come first then I come too
Easiest words I ever said, I do
Cos I did, and I’m doing 
Only place I wanna be is a house you in
We no be perfect, we fine tuning
The rocks no fit scratch you, a boss!
Talk dem dey talk, you know you’re loved only by Cue
Opps no fit touch you
my Ace in tennis
You be my own
Yeah you be my home 

Rising sun in the morning you light my world
Girl with you there’s no dull
And I no fit make it a day 
Without your love yeah
Hold me down, you dey hold me close
If e no be you my song no fit bounce
With just your love I’ll shut the whole world down ou ouhhh

You are, are
You are my true love yeah
My true love yeah
You are, are
You are my true love 
Yeah, eh, 

I’m tryna love you like a gangsta
Spray you money like a banker
Anything you want I’ll do
Anything you want I’ll do
tryna love you like a gangsta yeah
Spray you money like a banker yeah eh
Anything you want
Anything you want I’ll do

I lost my sight 
I’m driving blind when I’m with you
I think I’m fell and hit my head in love
With you
With you, with you
Fell and hit my head in love
`,
    buttons: [
      { text: "MIXING NOTES", icon: mixingNoteIcon, link: "/location/14/mixing-notes" },
      { text: "FULL LYRICS", icon: fullLyricsIcon, link: "/location/14/lyrics" },
      { text: "BTS VIDEO", icon: BTSVideoIcon, link: "/location/14/video" },
      { text: "WATCH MUSIC VIDEO", icon: watchMusicVideo, link: "/location/14/comingsoon" }, 
    ],
    mixingNoteImages: [
      {
        id: 1,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/YA1_a.jpg?alt=media&token=fbcdd0a6-d636-43ab-9741-7d69d4ddac3a",
        title: "You Are Mixing Note 1",
      },
      {
        id: 2,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/YA1_b.jpg?alt=media&token=394cf1c3-3276-4805-be0b-79642b58458a",
        title: "You Are Mixing Note 2",
      },
      {
        id: 3,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/YA2_a.jpg?alt=media&token=17406b09-1d8c-4921-9c6b-2afdc780351b",
        title: "You Are Mixing Note 3",
      },
      {
        id: 4,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/YA2_b.jpg?alt=media&token=64e11914-db00-403c-b9af-a5810f88a8c4",
        title: "You Are Mixing Note 4",
      },
    ],

  },
  {
    id: 15,
    locationName: "CLAMP STREET - Lake",
    importance: "Cue’s present home — the calm after all the movement.",
    image: "",
    coords: { top: "59%", left: "31%" },
    songTitle: "The Fall",
    songUrl: "",
    videoUrl:'https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/The%20Fall%20Film%20Reel.mp4?alt=media&token=4aaf2a06-c8f2-4e1e-9cfb-93fcdc4a524d' ,
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis",
    buttons: [
      { text: "FILM REEL", icon: filmReelIcon, link: "/location/15/film-reel" },
      { text: "MIXING NOTES", icon: mixingNoteIcon, link: "/location/15/mixing-notes" },
      { text: "INTERVIEW", icon: interviewIcon, link: "/location/15/interview" },
    ],
    mixingNoteImages: [
      {
        id: 1,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/TF1_a.jpg?alt=media&token=991c7f71-6b15-4df2-88d6-ae8e9ef3d4f6",
        title: "The Fall Mixing Note 1",
      },
      {
        id: 2,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/TF1_b.jpg?alt=media&token=ec4c8013-fc87-4479-a97c-63347cf56987",
        title: "The Fall Mixing Note 2",
      },
      {
        id: 3,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/TF2_a.jpg?alt=media&token=6d68640b-d10c-4116-ac14-7407bad1b0a2",
        title: "The Fall Mixing Note 3",
      },
      {
        id: 4,
        src: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/TF2_b.jpg?alt=media&token=b470aed5-6adc-4bcd-b6d2-dd6d3d82778f",
        title: "The Fall Mixing Note 4",
      },
    ],

  },
  {
    id: 16,
    locationName: "CLAMP STREET - Lake",
    importance: "Cue’s present home — the calm after all the movement.",
    image: "",
    coords: { top: "60%", left: "27%" },
    songTitle: "Onipa Hia Mmoa",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: `Bere a yi si, kojo kill
Kojo kill, bere a yi si, mmh
Onipa yɛ nha mmoa wo, hmmm
Adiɛn, yɛɛ wo

Cousin Ann dey blow my phone up
A ntena nso tɛma ho ma
Dwuma abako a minyae nti
Na sɛ minya ho na
Wɛ si ne BPɛ dwo
Wɛ nso sɛ nako ma
Wɛ iba school fees
Wɛ maame ayi ye ntoma
Obiɛ bɛtwa ne die before the cake hit
Wo nyɛ icing mpɔ, although you you bake it
Community or tax, easy for you to hate it
Sweat the street, you naked
When you the first to make it

Heavy is the head
To muster courage I suppose
From the cradle to the grave
Oh, every man must stand alone
And favours they are wearing out
And walls are closing in
Me say, asem na aba ama
Sɛ obiɛ nyɛ bi ka
Ɔdehye me poli gege, na to be continued

Story story
Onipa yɛ nmoa na sɛ ankaa yɛ nani red roti
Adwuma tiɛfɛ nni ma tem
Ɛbaasa ɛbaasa from morning to morning
Onipa yɛ nmoa na sɛ ankaa yɛ nani red roti
And that fam no be easy, how I go do

All my well wishes hoping I′m the one who drops the coin
200 Cedi mo mo nti, I almost lost a friend
He say I dey do some wey when he text
Plus he putting work so why he own no dey set?
My progress dey make am salty, that's a lot to deal with
Looking back at the city go fit crush your spirit
Obiɛ ɛnyɛ mmoa ampa
But to pay nɛyɛ sen
Wode solve ɛbu sɛ mma wo future so bɛyɛ den
I grow wey I see say
My uncle no be wicked
Ontumi ifa yɛn trickies
Yɛnhyɛ me yɛnhyɛ ne tickets
Me buawa ayɛ nyinaa yɛbɛ ka two
But me dwiri me ho a
There′s a chance that I make it to four
And maybe make it to more
Then I go fit help with more than I could take in before
Maame si bua no wukro ɛbia
Pɛne yi bɛn na kɛbɛsraa koda ɛska wo nyɛntra
Ɛnyɛ sɛ me 3 mu adiɛn, eno ɛfia
But I'm just one man
Yeah I'm just one man
Thousand things on my head
Thousand people I for help
Ma te saa abom nti obiɛ bɛgyene hyɛ
But I′m just one man

Story story
Onipa yɛ nmoa na sɛ ankaa yɛ nani red roti
Adwuma tiɛfɛ nni ma tem
Ɛbaasa ɛbaasa from morning to morning
Onipa yɛ nmoa na sɛ ankaa yɛ nani red roti
And that fam no be easy, how I go do
Story story
Onipa yɛ nmoa na sɛ ankaa yɛ nani red roti
Adwuma tiɛfɛ nni ma tem
Ɛbaasa ɛbaasa from morning to morning
Onipa yɛ nmoa na sɛ ankaa yɛ nani red roti
And that fam no be easy, how I go do

Sɛ yɛ titi wo fi kɛsie m na obia atia obia abaa
Obia hwe obia awugyaa w′adia obia anfaa
Kofi Nana yɛ dwia ne mmanitu niso obia sua
It's hard for them not to keep their hands out
Adiwo di homework bɛ fie, wo fa desk ne mma wo answer
Police tokye wo, askɔ ne mma wo cover
Wo poma ɛbaa sɛ wo kɔ school na ɛdɛwa saa mba
So when they call, how you no go answer?
See at the bottom, we share the pain and share the stress
Baako kɔ fa bar, we all dey split and share the mess
So when one makes it out, you feel like you for pull we some
How I go dog my nieces when my uncle pull me on?
But I′m just one man

Onipa yɛ nmoa na sɛ ankaa yɛ nani red roti
From morning to morning
Onipa yɛ nmoa na sɛ ankaa yɛ nani red roti
And that fam no be easy, how I go do
Story
`,
    buttons: [
      { text: "FULL LYRICS", icon: fullLyricsIcon, link: "/location/16/lyrics" },
      { text: "CUE LIVE SESSION", icon: visualizerIcon, link: "/location/16/video" },
    ],

  },
  {
    id: 17,
    locationName: "CLAMP STREET - Lake",
    importance: "Cue’s present home — the calm after all the movement.",
    image: "",
    coords: { top: "69%", left: "31%" },
    songTitle: "Gold Dust",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: `I swear this girl she’s got a diamond for a heart
Cos with a little bit of light
She’s the prettiest sight
There’s not a thing in this world that could crack her soul
You don’t need to be told
Where she’s coming from

Drifting back home, praying
nobody go cross me
Godspeed
The phone rings I almost hit a troski
Now I’m blaming the driver 
mo deɛ baabiara mo bɛ parke
As I pick and hear her say
Kojo come back
the babies dey come now
Come where? Come how? 
Na sɛ ɛnduruu 9 months,
The U-Turn I hit 
Kaa kitikiti I flip the sentra for top high 
My hands dey shake on the steer
I almost orphan you before you were here
Called your grandma
She was there, she came with a friend too
Your other gran dey call dey check
On her daugther and you 
Doctor Baffour no dey town 
but we’ve been referred to
Tkay cos today 
then no one dey expect you
Te Komfo Anokye labour ward, I’m praying to God 
Please will anybody 
tell me something? It’s taking too long 
You know how e Dey
it’s like every doctor you’re facing be opp
Every time they open the door
I’m hoping they want to

Tell me that you are from heaven
Sent down to rescue me
Tell me someone from heaven
Can fall in love with me

Te hor din but the nerves plenty 
Your granny pacing up and down, odidi nursefoc akyi 
Are they okay? Akorsi sen? W’abisa b3y3 twenty
Dr. TKay sor me nsa na y3 kor t33 baabi 
Ose oprepare me
for how it could be
I say whatever you do abeg bring my wife to me
I’ll be lost without her that was before you landed
In the ward, And I saw 
all the love your eyes held
Your mama is a warrior, she pushed you out safe
preterm babies so they put you some place
Called Nicu
Covid Nti only I could come with you
Your calm faces in an incubator made my eyes rain
M3 ka nokore a me mma
Always been afraid of raising kids
What if I fuck them up
Try making them great and they hate it
Do my best and still fail 
cos the world is ruin
You kiss trauma, and I hug blame 
for putting you in it
But mo nsa tor me nsem
Was like my grandmothers came back to me
So naturally, 
I’ll name you after them, 
Pinamang ne kwaakyewaa
Greatest blessings life gave me
I know they sent you here to come save me
My babies 

Tell me that you are from heaven
Sent down to rescue me
Tell me someone from heaven
Can fall in love with me
Tell me that you are from heaven
Sent down to rescue me
Tell me someone from heaven
Can fall in love with me

Tell me that you are from
Heaven
Heaven
Heaven
Heaven
Heaven
Heaven
Tell me that you are from heaven
From heaven
Sent down to rescue me
Tell me someone from heaven
From heaven
Can fall in love with me
Somehow
Someway
Some day

I swear she’s breathing gold dust in her lungs
Cos when she parts her lips to speak its like she got 
Heaven deep down
When she stops to catch her breath you’ll see her glow
Nobody has to tell you
Where she’s coming from
`,
    WrittenRelection: `There’s always that one song that seems to summon itself—like it existed long before I ever reached for it. Every time I work on a project, one track insists on being born without my guidance. It starts as a fragment in my mind, an idea so certain in feeling yet shapeless in sound. Usually, I can already hear the production breathing beneath the words, but with these songs, I know nothing. I just wait—helpless, hopeful—for the moment when sound finds form.
It’s strange how these songs, the ones that come uninvited, end up becoming the spine of everything. A Ghetto Story did that on The Shining. Rich Dad did the same on FMB. And now Gold Dust has followed that pattern—appearing first as an absence that wouldn’t leave me alone.
I remember the night clearly. I was at Paapa Versa’s album listening. He’s someone I’ve long wanted to create with, though the timing never seemed to align. Before one of the opening acts, a singer named Tsiee, began his set, he mentioned he’d written a song for a friend who ended up rejecting it. Then he began to sing the hook—and in that instant, I recognized it. Not as something new, but as something I had been waiting to hear.
I reached out to him, got the song, and brought it to Evans and Paapa. And like that—through the quiet machinery of coincidence—the universe handed me what I was missing. Gold Dust took its time, argued with us, resisted completion. But in the end, it allowed itself to be finished.
Some songs you make. Others choose you. This one felt like it already existed somewhere, waiting for me to catch up.
`,
    buttons: [
      { text: "WRITTEN STORY", icon: quillPenIcon, link: "/location/17/reflection" },
      { text: "FULL LYRICS", icon: fullLyricsIcon, link: "/location/17/lyrics" },
    ],

  },
];

export default locationPins;