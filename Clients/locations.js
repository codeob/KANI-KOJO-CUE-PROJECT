import lyricsBDIcon from './src/assets/icons/lyricsBDIcon.svg';
import rightarrow from './src/assets/icons/rArrow.svg';
import mixingNoteIcon from './src/assets/icons/mixingNoteIcon.svg';
import voiceNoteIcon from './src/assets/icons/voiceNoteIcon.svg';
import quillPenIcon from './src/assets/icons/quillPenIcon.svg';
import filmReelIcon from './src/assets/icons/filmReelIcon.svg';
import fullLyricsIcon from './src/assets/icons/fullLyricsIcon.svg';
import BTSPhotoIcon from './src/assets/icons/BTSPhotoIcon.svg';
      // need to change the scource "watchMusicVideo.svg" below since its currently white and not visible on the slide, withing on Georgina
import watchMusicVideo from './src/assets/icons/watchMusicVideo.svg';
import visualizerIcon from './src/assets/icons/visualizerIcon.svg';
import BTSVideoIcon from './src/assets/icons/BTSVideoIcon.svg';
import interviewIcon from './src/assets/icons/interviewIcon.svg';

const locationPins = [
  {
    id: 1,
    locationName: "Ota 42 - Adum",
    importance: "KO-JO'S BIRTHPLACE AND MOTHER'S FAMILY HOME",
    coords: { top: "56%", left: "37%" },
    image: "",
    songTitle: "Fruit of the Womb",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis",
    buttons: [
      { text: "FILM REEL", icon: filmReelIcon,   link: "" },
      { text: "REFLECTIONS",  icon:quillPenIcon, link: "" },
      { text: "LYRICS", icon: fullLyricsIcon,   link: "" },
    ],
  },
  {
    id: 2,
    locationName: "Ota 42 - Adum",
    importance: "KO-JO'S BIRTHPLACE AND MOTHER'S FAMILY HOME",
    image: "",
    coords: { top: "56%", left: "45%" },
    songTitle: "Big Boy",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis",
    buttons: [
      { text: "FILM REEL", icon: filmReelIcon,  link: "" },
      { text: "REFLECTIONS", icon: quillPenIcon, link: "" },
    ],
  },
  {
    id: 3,
    locationName: "Kotoko - Oduom",
    importance: "First friendship, first injury, love for football",
    image: "",
    coords: { top: "84%", left: "80%" },
    songTitle: "Next term",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis",
    buttons: [
      { text: "MIXING NOTES",   icon: mixingNoteIcon,  link: "" },
      { text: "VOICE NOTE",   icon: voiceNoteIcon,  link: "" },
      { text: "LYRICS BREAKDOWN",  icon: lyricsBDIcon,  link: "" },
    ],

  },
  {
    id: 4,
    locationName: "Jamaica House - Bantama",
    importance: "Core childhood home. Father’s side of the family",
    image: "",
    coords: { top: "10%", left: "9%" },
    songTitle: "Bantama Blues 3",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis",
    buttons: [
      { text: "BTS PHOTOS",  icon: BTSPhotoIcon,   link: "" },
      { text: "LYRICS BREAKDOWN",  icon: lyricsBDIcon,    link: "" },
      { text: "WATCH MUSIC VIDEO", icon: watchMusicVideo,   link: "" },  
    ],
  },
  {
    id: 5,
    locationName: "Jamaica House - Bantama",
    importance: "Core childhood home. Father’s side of the family",
    image: "",
    coords: { top: "55%", left: "45.8%" },
    songTitle: "Abrantie",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    buttons: [
      { text: "FILM REEL", icon: filmReelIcon,    link: "" },
      { text: "Lyrics Breakdown", icon: lyricsBDIcon,   link: "" },
    ],

  },
  {
    id: 6,
    locationName: "OWASS BASIC - Santasi",
    importance: "Junior and senior school years; early rap influences.",
    image: "",
    coords: { top: "57%", left: "42%" },
    songTitle: "Squad",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    buttons: [
      { text: "VISUALIZER",  icon: visualizerIcon, iconColor: "#7B3F00",  link: "" },
      { text: "LYRICS BREAKDOWN", icon: lyricsBDIcon,   link: "" },
    ],

  },
  {
    id: 7,
    locationName: "OWASS BASIC - Santasi",
    importance: "Junior and senior school years; early rap influences.",
    image: "",
    coords: { top: "69.8%", left: "27.2%" },
    songTitle: "Mr. Eben Interlude",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    buttons: [
      { text: "LYRICS BREAKDOWN", icon: lyricsBDIcon,    link: "" },
      { text: "INTERVIEW",  icon: interviewIcon,    link: "" },
      { text: "MIXING NOTES",   icon: mixingNoteIcon,    link: "" },
    ],

  },
  {
    id: 8,
    locationName: "SMALL LONDON - Breman",
    importance: "Grandmother's death and family changes.",
    image: "",
    coords: { top: "81.7%", left: "47.8%" },
    songTitle: "Mysterious Ways",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    buttons: [
      { text: "FULL LYRICS",  icon: fullLyricsIcon, link: "" },
      { text: "REFLECTION", icon: quillPenIcon,  link: "" },
    ],
  },
  {
    id: 9,
    locationName: "SMALL LONDON - Breman",
    importance: "Grandmother's death and family changes.",
    image: "",
    coords: { top: "88%", left: "56%" },
    songTitle: "Angel",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    buttons: [
      { text: "FILM REEL", icon: filmReelIcon,    link: "" },
      { text: "MIXING NOTES", icon: mixingNoteIcon,   link: "" },
      { text: "VOICE NOTES",  icon: voiceNoteIcon,    link: "" },
    ],

  },
  {
    id: 10,
    locationName: "F176 - Buokrom Estate",
    importance: "Adolescence, the first meeting with father.",
    image: "",
    coords: { top: "87%", left: "79%" },
    songTitle: "F176",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    buttons: [
      { text: "VOICE NOTE", icon: voiceNoteIcon,  link: "" },
    ],

  },
  {
    id: 11,
    locationName: "F176 - Buokrom Estate",
    importance: "Adolescence, the first meeting with father.",
    image: "",
    coords: { top: "23%", left: "16%" },
    songTitle: "Grew Up Fast",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    buttons: [
      { text: "FULL LYRICS", icon: fullLyricsIcon,  link: "" },
    ],
  },
  {
    id: 12,
    locationName: "F176 - Buokrom Estate",
    importance: "Adolescence, the first meeting with father.",
    image: "",
    coords: { top: "42%", left: "19.5%" },
    songTitle: "Tontonte",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    buttons: [
      { text: "BTS PHOTOS",  icon: BTSPhotoIcon,    link: "/bts-photos/tontonte" },
      { text: "VISUALIZER",  icon: visualizerIcon,  link: "" },
      { text: "FULL LYRICS", icon: fullLyricsIcon,   link: "" },
    ],

  },
  {
    id: 13,
    locationName: "CLAMP STREET - Lake",
    importance: "Current family home; recent life changes.",
    image: "",
    coords: { top: "13%", left: "43%" },
    songTitle: "Dreams",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    buttons: [
      { text: "FULL LYRICS", icon: fullLyricsIcon,   link: "" },
      { text: "VOICE NOTE", icon: voiceNoteIcon,   link: "" },
    ],

  },
  {
    id: 14,
    locationName: "CLAMP STREET - Lake",
    importance: "Current family home; recent life changes.",
    image: "",
    coords: { top: "60%", left: "19.5%" },
    songTitle: "You Are",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    buttons: [
      { text: "FILM REEL", icon: filmReelIcon,    link: "/film-reel/you-are" },
      { text: "FULL LYRICS",  icon: fullLyricsIcon,  link: "" },
      { text: "BTS VIDEO",  icon: BTSVideoIcon,   link: "" },
    ],

  },
  {
    id: 15,
    locationName: "CLAMP STREET - Lake",
    importance: "Current family home; recent life changes.",
    image: "",
    coords: { top: "13%", left: "60%" },
    songTitle: "The Fall",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    buttons: [
      { text: "FILM REEL", icon: filmReelIcon,   link: "" },
      { text: "MIXING NOTES", icon: mixingNoteIcon,    link: "" },
    ],

  },
  {
    id: 16,
    locationName: "CLAMP STREET - Lake",
    importance: "Current family home; recent life changes.",
    image: "",
    coords: { top: "13%", left: "74%" },
    songTitle: "Onipa Hia Mmoa",
    songUrl: "",
    videoUrl: "",
    artistName: "Kojo Cue",
    buttons: [
      { text: "FULL LYRICS", icon: fullLyricsIcon,   link: "" },
      { text: "CUE LIVE SESSION", icon: visualizerIcon,   link: "" },
    ],

  },
  {
    id: 17,
    locationName: "CLAMP STREET - Lake",
    importance: "Current family home; recent life changes.",
    image: "",
    coords: { top: "74%", left: "19.5%" },
    songTitle: "Onipa Hia Mmoa",
    songUrl: "",
    videoUrl: "",
    artistName: "Gold Dust",
    buttons: [
      { text: "WRITTEN STORY", icon: quillPenIcon,  link: "" },
      { text: "FULL LYRICS", icon: fullLyricsIcon,    link: "" },
    ],
  },
];

export default locationPins;