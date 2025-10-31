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
      { text: "INTERVIEW", icon: interviewIcon, link: "/location/1/interview" },
      { text: "LYRICS", icon: fullLyricsIcon, link: "/location/1/comingsoon" },
    ],
    interview: [
      {role: "interviewer", text: `Ko-Jo Cue looks like the ideal poster boy for Ghanaian cool kids, and he’s actually a ‘cool kid’; from his appearance, to his cool demeanor and mannerisms. Somewhat reminiscent of a young Lupe [Fiasco]. However, beneath all that mint cool demeanor is a character I’d liken to a dragon; spitting fire is second nature to him, especially when his eardrums receive signals requesting that he steps up to a mic to speak his mind. He does it so effortlessly, and with a swagger which is unique to only him. Ko-Jo seems to face the struggles of the [everyday] Ghanaian youth, and for this reason, his words tend to resonate with many of them, who’ve chosen him as one of the voices they resort to when they’re in need of some advice from someone they know understands their pain. Heck! Some even consider him a shrink because the time they spend interacting with his music feels like therapy [sessions]. Jesus Muhammad met up with him at one of Accra’s newest spots, the Barndoor Beer Garden in the Nyaniba Estates for a conversation. 

  Man like Ko-Jo. What’s good chale?` },
      { role: "cue", text: "Yo, I’m good chale. I’m doing alright." },
      { role: "interviewer", text: "Nice. That’s great to hear. So we’re here this evening to have a talk about you and your music. You’re one of the guys many people I’ve spoken to about rap in Ghana consider a solid guy…" },
      { role: "cue", text: "Oh, you sure? Haha…" },
      { role: "interviewer", text: "Oh yeah chale. Forreal!" },
      { role: "cue", text: "That’s good to know. All my work hasn’t been in vain then. Haha.." },
      { role: "interviewer", text: "So it’s only right that the fans get to know one of their favourite rappers better. Can we do that?" },
      { role: "cue", text: "For sure! Let’s get into it." },
      { role: "interviewer", text: "So you’re by the fans as Ko-Jo Cue. If I may ask, what’s your [government] name?" },
      { role: "cue", text: "I hate my government name, and it’s not even because I’m a rapper. It’s because of the English part of it. My name is Linford Kennedy Amankwaa." },
      { role: "interviewer", text: "Oh wow! So there’s no Kojo in your name?" },
      { role: "cue", text: "No, not as part of my legal name." },
      { role: "interviewer", text: "Ohok. So why the name Ko-Jo Cue?" },
      { role: "cue", text: "Kojo [obviously] because I was born on a Monday. And the Cue I got from a collective I was a part of called The Cue. I came up with the social media strategy for everyone who was involved in the collective and asked that they add Cue to their handles, just to make people curious about what it was about. At that time, the name I was using for music was just Kojo, but Kojo was just so common. The people who saw my handle on social media started to call me Kojo Cue as a differentiator, and after it stuck, I was like Ok. Cool. For a long time, I struggled with coming up with an artist name, so once people started to call me by that name, it worked for me." },
      { role: "interviewer", text: "Wait, so you didn’t have any rap name prior to that?" },
      { role: "cue", text: "Kojo." },
      { role: "interviewer", text: "Just Kojo?" },
      { role: "cue", text: "Yeah. Haha. But before I decided to go with Kojo, I called myself Jazziflo. But I don’t think I ever put out any work with that name. So I just went from Jazziflo to Kojo, and I added the hyphen later to make it stand out from the ordinary Ko-Jo. " },
      { role: "interviewer", text: "Ohok. Why Jazziflo tho? Are you into Jazz?" },
      { role: "cue", text: "No. No. Well, I like Jazz now, but that wasn’t the case during the period when I was known as Jazziflo. The Jazzi came because I’m a big fan of Jay-Z…" },
      { role: "interviewer", text: "Ohok. That makes two of us then" },
      { role: "cue", text: "Haha. And reading from The Source [magazine] and other magazines of the time, I found out that he used to be known as Jazzy, and it evolved to Jay-Z. So I was like if he didn’t use the name [Jazzy], let me use it. So I started calling myself Jazzy. But a friend of mine who is also an artist said he felt Jazzy was too easy a name for another rapper elsewhere to have, so he suggested I add something to it for it to stand out. I remember at the time he’d been trying to introduce me to Facebook and was teaching me how to use Facebook to market my music. While helping me to create my Facebook page, he added ‘flo’ to the name and that’s how I became Jazziflo. Shouts to him; his name is Kweku Darfoor, but he goes by the [nick]name Long John now. Back then, he was in a group called Soul Brothaz, and those guys played a very important part in my early stages. " },
      { role: "interviewer", text: "Ohok. When was this tho? Was it in secondary school?" },
      { role: "cue", text: "Was it right after secondary school? Erm… I think this was during my last year of secondary school. So this was about 2007 or 2008." },
      { role: "interviewer", text: "Ok. So what’s your background? What’s your family like? Where did you grow up? Where did you school?" },
      { role: "cue", text: "I grew up in Kumasi. I was raised by my grandma mostly, and my aunties. However, at the age of 12 I think, I started to live with my mum more. For my basic education, I probably attended about 10 schools…" },
      { role: "interviewer", text: "What?!" },
      { role: "cue", text: "Yeaaah! Because we moved around a lot. We didn’t own our own home so chale, from here to there. And every time we moved, I changed schools. I ended up completing JSS at OWASS Basic; that’s…" },
      { role: "interviewer", text: "Opoku Ware [Secondary School]?" },
      { role: "cue", text: "Yeah! That’s their basic school. And from there, I attended Kumasi Anglican Secondary [School]. Then I obtained my first degree at the Ghana Institute of Journalism. " },
      { role: "interviewer", text: "Ohok. In which year was that?" },
      { role: "cue", text: "2014." },
      { role: "interviewer", text: "Ok. Have you got any siblings?" },
      { role: "cue", text: "Yeah. On my dad’s side." },
      { role: "interviewer", text: "How was growing up for you? What was it like at home?" },
      { role: "cue", text: "It was fun. Err… Compound house settings. Being raised by my grandma with other cousins, there were always people around. You have no idea what privacy is, you know. Lots of community. There wasn’t even enough time for you to start thinking too much and end up depressed because there were people around always. One of the things which stuck out about my childhood to me was we lived in a big family house with my grandma and her sisters, as well as many of their grandchildren, and at night my cousins and I would have supper by hopping from one grandma to another eating what they’d prepared, till we’d eaten from all our grandmothers. So in one night, we could have four or five different meals; fufu from one of them, rice from another, and so on. Those were fun times and they’re some of the fondest memories of my childhood." },
      { role: "interviewer", text: "Haha. Nice. What’s the relationship with your cousins like now? Are you guys still that close?" },
      { role: "cue", text: "There was a break when I had to move to go live with my mum. So, the grandma I’m talking about was my dad’s mum. My mum’s folk were more like middle to high class, so it wasn’t the same settings; it was more about the nuclear [family] at their end. After I moved to my mum’s, there was a break in the relationship with my cousins at my grandma’s. But I’m still super super cool with about 3 of my direct cousins with whom I share the same grandma; we slept on the same mat together and stuff. With them, I still have a solid relationship. They’re all out of the country now but we do talk from time to time. The love stays strong no matter how long it takes us to hear from each other. " },
      { role: "interviewer", text: "That’s nice! So what are your interests?" },
      { role: "cue", text: "Errmm… My first love was football…" },
      { role: "interviewer", text: "Oh yeah?! Do you still play?" },
      { role: "cue", text: "Not as much. The last few times I tried to play, I had to accept that my stamina is trash…" },
      { role: "interviewer", text: "Hahaha… I understand." },
      { role: "cue", text: "Hahaha.. Yeah chale. My stamina is trash. But I still watch it religiously, and I’m still interested in the world of football. Errr.. I have this desire to become a manager someday, to make up for the fact that I couldn’t play football on a professional level. Like I said earlier, football was always my first love, but because I was light skinned, and because in the early 90s, football wasn’t a thing most of our parents considered lucrative, they tried to steer me away from football. I was also a sharp guy in school, so they believed there were more sensible options for me to pursue other than playing football. As I mentioned earlier, I was moved around a lot as a kid, and in one of those movements, I was sent to an aunty who lived on [the KNUST] campus where there was no one around to play football with. However, her husband had a library. So I started reading graphic novels, and the interest in reading developed from there. I was sent to my aunt as a way of preventing me from becoming a koborlor and a footballer, and I ended up becoming a writer and a lover of literature. " },
      { role: "interviewer", text: "Ohok. So you could say that’s where the love for words and music came from?" },
      { role: "cue", text: "Yeah. That’s where the love for words especially came from. I feel like the love for music was always there because in my grandma’s house, what always woke me up in the morning was the radio, playing music from Kakaiku [or one of those groups from highlife’s band era]. So there was always music around. It wasn’t something I’d wanted to do, but it was always around. And then I got interested in writing and reading. However, I still didn’t want to be a writer as such. My folks tho, they had high hopes for me because by school standards, I was an intelligent kid. And as it usually happens with intelligent Ghanaian school kids, “you’re going to do science.” " },
      { role: "interviewer", text: "Hahaha…" },
      { role: "cue", text: "Yeaaah. You’re forced to pursue science at the secondary level. Even though I loved to read and write, I didn’t want to become a writer or a musician. It was one of my older cousins, who was like one of my first idols, one of those I really looked up to, who started doing music while he was in SS. I was in primary school at the time. He introduced me to Obrafour’s Pae Mu Ka. There was a song on the album called ‘Aden?’ and it resonated with me so much that I learnt to rap the whole song. And because I knew how to write, I felt I could write my own lines. But even then, it was just for the fun of it. Doing music was never in the conversation. Then when I went to SS… Well, I went to the same school the likes of Okyeame Kwame, Lord Kenya, Moses OK, and Noble Nketia attended. So music was a big thing there. Instead of bullying you, you were offered the opportunity to rap, and if you were good, they let you slide. That’s why I picked rapping up, as a way to escape the seniors and their trouble. It wasn’t until the last year of secondary school that I started considering music as a thing to pursue as a career." },
      { role: "interviewer", text: "Interesting! So when you were pursuing science in school, what did you have in mind?" },
      { role: "cue", text: "I actually did not do science in SS. I still ended up doing literature." },
      { role: "interviewer", text: "Oh ok." },
      { role: "cue", text: "But that’s how I know I never had any interest in science. Whenever I was asked what I wanted to become when I grew up, I’d always say scientist. And that was enough for them; they’d tell everyone what my response was. But they were also not educated enough to ask which kind of scientist I wanted to be. I also didn’t care enough to specify which kind of scientist I wanted to become. It just felt like they felt happy whenever I’d say that, so I’d say just that and keep it moving. Haha…" },
    ]
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
      { text: "INTERVIEW", icon: interviewIcon, link: "/location/2/interview" },
    ],
interview: [
      { role: "interviewer", text: "Hahaha… Smart! So you mentioned that your older cousin whom you looked up to… What’s his name?" },
      { role: "cue", text: "Rebel. Nana Kwame. But till date, everyone calls him T-Rebel." },
      { role: "interviewer", text: "Ok. Is he one of the cousins you said are out of the country now?" },
      { role: "cue", text: "He’s also out [of the country], but he’s not one of them. He was way older. Regarding those I spoke about, I’m the oldest one. The age difference between myself and the one directly after me is two (2) years, and I’m five (5) years older than the last one. But Rebel was way older." },
      { role: "interviewer", text: "Ohok. So, the question is, what got you into music? Was it T-Rebel? Or there was an incident which made you start?" },
      { role: "cue", text: "I’d say the genesis is definitely Rebel. But, in SS3, my parents had just split and I was with my mum. We were going through hard times; she’d just had my kid brother too. And some of the conversations we were having, in terms of the direction they were going in, I was being asked to man up quickly so I could take care of the family. And because of this, rap started looking like the most viable and lucrative thing to do. When you’re being told “finish SS early so you can go and learn this craft,” rap doesn’t feel like something for the kobolors anymore. Right?" },
      { role: "interviewer", text: "Yeaaah." },
      { role: "cue", text: "So, I picked it up because at that point in my life, it appeared to be one of my best paths to becoming a provider. I mean, I didn’t even think I’d make it to uni at that point. So I just picked it up, and decided to be more serious about it. I found people in school who had taken it seriously, started recording demos, started going to the studio religiously, hang around to help with little tasks just to be able to get a chance to see how music is made, and what not. And from that point, it just became like air." },
      { role: "interviewer", text: "Which studios were those?" },
      { role: "cue", text: "Pokallos Studio in Kumasi. I started going there because at the time, a Hiplife artist named Lazy Dog had recorded a song there which ended up becoming a hit in Kumasi. A lot of gospel musicians also recorded at the studio. It was one of the prime places to go to in Kumasi for recording. A friend took me there to record a demo, and I decided to start going there to hang around. And that’s how I ended up meeting the Soul Brothaz. They’d come to record a demo. Back then, I used to moonlight as a studio boy, and it helped me get into sessions with people who had come to record demos. A lot of those guys were novices, and had little to no recording experience, so they usually had no idea how to go about the process. The engineer, in order to speed up the process, would say to me “Chale Jazzi, help them figure out this thing”, and in figuring it out, they’d say “Chale, you’re good ooh! Hop on the song eh.” So it was a similar situation with Soul Brothaz. They’d come to work on a song. Ermm… I remember they were with some chick. I helped them figure out what it was they wanted to do, and the chick was like “Oh, this guy is really cool. You guys should let him do something.” And the guys agreed. They were in KNUST at the time. So when they took the record to school, and people heard it, they were really feeling it. They later hit me up and asked that we stay connected so we could figure out what we could do together. Eventually, I had to leave Pokallos, because I was trying to move from being just a studio boy to becoming someone who could actually record music. But the owner of the studio told me that I had to pay some money to become an official apprentice. I didn’t have the money tho, and I realised that after we’d had that conversation, they started to restrict my access to the studio. So I just left." },
      { role: "interviewer", text: "Oh wow!" },
      { role: "cue", text: "Yeah chale. I remember, we were living in Maakro at the time and Skype had become a thing in Kumasi and Maakro. One of those whom I helped to make demos had a cousin who owned an Internet café, so I used to just go sit around. I’d regularly see people on Skype and after probing I found out that they were making money from Skype. So I started doing it too. For like a whole year, I wasn’t doing music; the Skype thing was my new hustle. I was at it for about six (6) or (7) months before I started making some money. And for a kid at that time to be making that kind of money from that kind of hustle… Chale, I wasn’t thinking about if it was right or wrong. I just wanted to be able to help my mum pay some of the bills at home and hold some people down; it was a big thing for me." },
      { role: "interviewer", text: "I feel you chale." },
      { role: "cue", text: "So I was hanging in there when one day, out of the blue, I received a call from one of the guys from Soul Brothaz. He said they’d found a guy who makes beats and found another who can record, mix and master. According to him, these guys were students [at KNUST] and they offered their services at a way cheaper rate than what the market rate was at the time. How much did he even say it cost? I think it was GHC20 to record and GHC30 to mix and master. Frankly, at this point, I’d even forgotten about music. Ironically, I was actually making enough money to afford going back to Pokallos to sign up as an apprentice. But music was in the past for me; I was so focused on my new hustle. The Soul Brotha said he wasn’t just letting me in on the info, but he was inviting me to come through as well, in case I had any plans to record masters. ‘Masters’ is the term we used at the time to differentiate between a demo and music which was ready for the market. So I was like cool. I went to them one day, and they took me to the guy. He was known as Mac Fancy, but his real name was Frank. He was super into Southern Hip-Hop at the time; Rick Ross and them. So he made those types of beats. But I was more of a Hiplife, East Coast Hip-Hop guy." },
      { role: "interviewer", text: "Boom bap?…" },
      { role: "cue", text: "Yeah! So the kind of beats he made weren’t really my vibe. But he was very very talented. And I could also see more opportunities in the future. So I decided to stick with him. He’d give me a beat pack and I’d give him some money. But I wouldn’t use it. I’d just take it home and listen to it. Sometimes, try writing to some of them. But I wasn’t feeling what they sounded like, because I just couldn’t figure out how the flow was supposed to lay on the beat…" },
      { role: "interviewer", text: "The pockets, you mean?" },
      { role: "cue", text: "Yeah. Errmm… I think at a point, we ended up going to the guy who the guys went to for recording, a guy named Okechukwu, to make a song, and I returned to the [Internet] café with it and played it for one of the guys. He was quite impressed and suggested that I did something about it. He was like “since you’re here all day, why don’t you upload it to MySpace?” I thought it was a good idea, so I put it on MySpace and Reverbnation. A while after, the folks in these worlds started showing me love; on Reverbnation, I was quickly climbing up the charts. I thought Oh, this is cool. Gradually, I started getting sucked back into the music thing. Mac Fancy and I also started strengthening our chemistry." },
      { role: "interviewer", text: "Great!" },
      { role: "cue", text: "He started to make beats that I could work with. So we started frequenting Okechukwu’s place. At the time, we weren’t thinking too much about what to do with the music; once we recorded, mixed and mastered, we just uploaded them to MySpace and Reverbnation. Then a chance encounter with someone on Reverbnation… Another guy on Reverbnation who’d noticed that I was always topping the charts even though he had never heard of me outside of Reverbnation. Apparently, aside topping the charts, one other thing which made him notice me was my name, Jazzy Flow. His name was Ian Jazzi…" },
      { role: "interviewer", text: "Oh, Ian Jazzi. Haha. Interesting." },
      { role: "cue", text: "It turned out that had been his nickname forever, and that was also his rap name. So he just moved to me one day and asked why I dey call my body Jazzi, and I was like Ah! What do you mean by why is that my name? That’s my name. I think he thought I was from Accra, so in his mind, I ought to have known that within the Accra rap circles, he was the Jazzi." },
      { role: "interviewer", text: "Haha… This is hilarious." },
      { role: "cue", text: "Yeah chale. That’s when I told him I was from Kumasi and had no idea of anyone called Jazzi or Ian Jazzi for that matter. Eventually, I told him It’s simple. I have this name because I was inspired by Jay-Z. And then we just started chatting about music and what a rapper needs to do to succeed. He gave me game chale. He was the one who told me that you need a manager. I had absolutely no idea about that. He mentioned that he’d played my song to someone and the person was really digging it, so he could connect me to the guy for him to manage me. I was like Yeah, why not? But he wanted something in return; the tradeoff was that I let go the name Jazzi. I was like Hoh, that one no b matter kraa. Haha." },
      { role: "interviewer", text: "Hahaha… Well, that wasn’t a bad tradeoff. Fair play." },
      { role: "cue", text: "Yeah chale. So I came to Accra. I was done with SS by this time, and I’d spent about two (2) years at home doing my café hustle." },
    ],
  },
  {
    id: 3,
    locationName: "Kotoko - Oduom",
    importance: "Oduom — the birthplace of his love for football, where scraped knees and street games near the Kotoko camp sparked dreams that never faded.",
    image: "",
    coords: { top: "80%", left: "58%" },
    songTitle: "Next term",
    songUrl: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/nextterm.mp3?alt=media&token=72df2a02-c29b-4b92-8b9e-5c24f1bf5e2c",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis Next term",
    buttons: [
      { text: "MIXING NOTES", icon: mixingNoteIcon, link: "/location/3/mixing-notes" },
      { text: "VOICE NOTE", icon: voiceNoteIcon, link: "/location/3/voice-note" },
      { text: "LYRICS BREAKDOWN", icon: lyricsBDIcon, link: "/location/3/comingsoon" },  // ask where this link routes to?
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
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/BTS%20Recording%20Skits.mp4?alt=media&token=96de9fdb-afc8-4751-a676-60e253438e29",
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
    songUrl: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Cobby%20Voice%20Note.m4a?alt=media&token=bcd329bf-5bab-4070-a1c6-56db82933e78",
    videoUrl: "",
    artistName: "Kojo Cue",
    lyrics: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad ab provident at commodi corporis perferendis perspiciatis nulla velit accusantium quas aliquid doloremque quasi! Nesciunt ex ipsam id est? Illum nulla sunt voluptas necessitatibus dicta accusantium doloremque repellat atque, dolore incidunt laborum placeat adipisci earum suscipit aliquam nam quo debitis autem architecto, libero sapiente esse consequatur! Odit, animi harum eligendi, doloremque commodi eaque perferendis ut, enim aperiam corrupti repellat. Quia dolor aliquid voluptatibus soluta odio cumque explicabo odit, perspiciatis omnis OWASS BASIC - Santasi",
    buttons: [
      { text: "BTS PHOTOS", icon: BTSPhotoIcon, link: "/location/6/bts-photos" },
      { text: "VOICE NOTES", icon: voiceNoteIcon, link: "/location/6/voice-note" },  // check this again
      { text: "LYRICS BREAKDOWN", icon: lyricsBDIcon, link: "/location/6/comingsoon" },    // ask where this link routes to?
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
      { text: "LYRICS BREAKDOWN", icon: lyricsBDIcon, link: "/location/7/comingsoon" },
      { text: "INTERVIEW", icon: interviewIcon, link: "/location/7/interview" },
      { text: "MIXING NOTES", icon: mixingNoteIcon, link: "/location/7/mixing-notes" },
    ],
    interview: [
      { role: "interviewer", text: "Was that your first time in Accra?" },
      { role: "cue", text: "No, that was my second time. But that was the first time I came to Accra by myself. My uncle had brought me to Accra for the first time when I was a kid and he took me to the popular places and stuff. " },
      { role: "interviewer", text: "Ohok." },
      { role: "cue", text: "So yeah, I went to meet Ian Jazzi and his guy in Osu, around Koala, and I played a bunch of my songs for them. Back then, I rapped with this terrible LAFA. When I was done, Jazzi’s guy, whose name is Tallal Sangari, said “Chale, I can tell you’ve never been out of this country. Anyone who has [been out of the country] can tell you’re faking the accent. There’s no need to fake it, you can be yourself. Why don’t you rap in Twi, because this track that you did in Twi, I prefer that more?” So I was like Cool. No qualms at all. He said he needed me to return to Kumasi and get straight to work. Tallal was a huge fan of Lil Wayne’s, so he said he wanted me to follow the mixtape formula; he wanted me to drop a mixtape every month for a year. That he said, would serve as my practice hours. I agreed and decided that each mixtape would have twelve (12) songs, because I’m a fan of the number three (3) and its multiples. So I returned to Kumasi, to get to work. Unfortunately, by the time I returned, Okechukwu and Mac Fancy had graduated from school. Okechukwu had already returned to Nigeria. But I was able to talk to Mac Fancy to explain what was happening to him and the need for me to get to recording ASAP. That was when he told me of this guy called Cabum who was making some noise on the Kumasi scene…  " },
      { role: "interviewer", text: "Oooh! So you didn’t even know of Cabum by then? I’d always thought you and Cabum were day ones." },
      { role: "cue", text: "Naah. I didn’t know of him at the time." },
      { role: "interviewer", text: "Wow!" },
      { role: "cue", text: "Yeah chale. So Cabum’s music was making waves and the people loved him. Frank had connected with his producer, Peewezel, who also happened to be a student at KNUST. So he assured me he was going to take me to Peewezel. At the time, Peewezel’s room on campus was at Evandy, if my memory serves me right. So we went there, and he took us to his studio at Suame. Then he took us to another studio in Adoato. At the studio in Adoato, I met this other guy; he was a young guy like me, but he’d set up a studio in his house. And for some reason, he and I connected instantly. Honestly, I have no idea why we connected like that. His name was Big Jeff. I went to the studio because of Peewee, but I remained there even after he’d left. Later, Big Jeff and I ended up finding out that his mum had been my mum’s school mother in secondary school. So I spent a lot of time with Big Jeff in his studio, making records and trying to put the mixtape together. Then Big Jeff also had to move to Accra, so I was stranded once again." },
      { role: "interviewer", text: "Oh chale! Ain’t that some sh*t?!" },
      { role: "cue", text: "Haha. But then I remembered Peewee could help, so I went back to him and explained that I’d recorded some songs with Big Jeff which I needed mixed. Luckily for me, he agreed to that, and asked that I came over to his crib the next day at 8am so we could get to work. Chale, I was at his place by 6am the next morning, but instead of working on the mix job, he’d make me follow him around in town running errands. By the time we were done with his rounds, we’d be exhausted and he’d ask me to return the next day. Surely, I’d return, but he’d never mix the songs. This went on for a couple of days, almost a week I think. But I was so back into the music at that point that I was just happy to in that environment; I’d go to the studio and Cabum would be recording. I’d only been hearing of him on the radio. So, to be able to see him record in person and not even have my stuff mixed, chale, that was enough for me. However, because of the way I was still always punctual and dedicated, without complaining, Peewezel took a liking to me. He said he liked my work ethic. Eventually, he mixed my songs for me. And it even went beyond him giving me that full service; we formed a bond, and then he had the opportunity to work at some new studio. He’d taught me how to record by then. So, he was like if my plan is to record the mixtapes, what we could do was that I’d come to the studio to help him record other guys, and at the end of the day, when he was going home, he’d leave the studio keys with me so I could record myself. Then later, we could figure out how to go about the mixing and mastering. That, he said, was the little he could do to help me achieve my goals. " },
      { role: "interviewer", text: "Oh cool. That was nice of him." },
      { role: "cue", text: "Yeah chale! So, that’s how I met Peeweezel, whom I’d later form a crew with. " },
      { role: "interviewer", text: "Which year was this tho?" },
      { role: "cue", text: "That was 2008/09, into 2010. ." },
      { role: "interviewer", text: "So what happened after this period?" },
      { role: "cue", text: "You know what, meeting Ian Jazzi and Tallal also informed my decision to come to school in Accra." },
      { role: "interviewer", text: "Oh yeah?! Why’s that?" },
      { role: "cue", text: "I wanted to be closer to the movers and the shakers in the music biz. And also so I could be closer to my manager to make work easier. So I finally decided to come to school. School hadn’t been on my mind for a very long time, but to be able to make the move to Accra, schooling made perfect sense as an excuse or a reason. And then, I won’t even say I found my moral compass or whatever,… I don’t know where the switch happened, but at some point, when I’d go to the café, I’d spend more energy trying to promote my music on Facebook instead of doing the other stuff. Chale, I just eased off on the other stuff. There was now enough money for me to go to school, so I just stopped. I started school some time later, and began entering different spaces. " },
      { role: "interviewer", text: "Ohok. So, who would you say are your musical influences?" },
      { role: "cue", text: " Errmm… Obrafour, definitely. Jay-Z is a huge influence as well. A bit of Lil Wayne at some point. I’ve gone through my phases, so I’ve been influenced by Okyeame Kwame as well. E.L. too. Bra Kevin and [Lil] Shaker. Kendrick, Drake, and Ab-Soul, at some point. J. Cole too. But I’d say my main ones, or those who formed the foundation of whom I am today, would be Obrafour, M3nsa, and Okyeame Kwame on one hand, and Tupac, Jay-Z, and Kanye on the other. " },
      { role: "interviewer", text: "Ohok. I guess it’s the scenario where your idols became your friends?" },
      { role: "cue", text: "Yes!..." },
      { role: "interviewer", text: "Because you mentioned Shaker and Bra Kevin…" },
      { role: "cue", text: "Yeah. " },
      { role: "interviewer", text: "At the time, you were hearing of them but you didn’t know them personally." },
      { role: "cue", text: "Yeah chale. I remember the first time I met… and I’ve told him this story before. The first time I met Okyeame Kwame was at Pokallos, and I was frozen in the same place." },
      { role: "interviewer", text: "Hahaha…" },
      { role: "cue", text: "Yeaaahhh! He’d come to record one of the songs on the ‘Woso’ album. It was produced by the Pokallos guy; Big Dave, Tunji, who’s now one of my godfathers. I had no idea Okyeame Kwame would be coming to the studio, and at the time, Okyeame Kwame was the Best Rapper Alive. You understand? He was killing every feature; I was super into the stuff they were doing. So, I’m just walking out of the studio to go buy some stuff for either Tunji or Smoke, one of them. I’ve forgotten who exactly it was. I just walk out of the studio, and Okyeame Kwame walks past me. Chale, I start shaking, then I freeze. I’m sure I stood there for a good five minutes after he’d passed. Years later, I’m in a position where I can have conversations with him. Shaker as well; I got to know Shaker from Reverbnation. But I think with Shaker, it wasn’t much of an idol situation. It was more like a peer whom you respect. You get it?" },
       { role: "interviewer", text: "Yeaah…" },
       { role: "cue", text: "With him, I wasn’t star struck, but there was still a lot of respect for him." },
        { role: "interviewer", text: "Ohok. Back then, those guys were killing it with the Skillions." },
        { role: "cue", text: "Yeaaah. Also, moving to Accra at that point meant I needed a place to record. And that’s how I ended up at KluMonsta’s place in Adenta, because some of the guys who used to record at Klu’s studio were students at KNUST, and they used to come record at Peewee’s. Guys like Loonee TKR. So I had that connection from there. When I mentioned the need for me to find a studio to record at after I’d finally moved to Accra, that was when they suggested I check Klu’s place out. I think the first person to take me to Klu’s end was either Kay-Ara or Looney." },
         { role: "interviewer", text: "Interesting." },
         { role: "cue", text: "Klu later also moved to Kumasi for school, and he needed a place to record. So we made a deal where he could record for free at our studios in Kumasi, while I record for free at his in Accra." },
        { role: "interviewer", text: "Ohok. But how did you meet Kay-Ara? " }, 
         { role: "cue", text: "Ermmm… He hit me up on Reverbnation one day. At that point, I’d already put out two mixtapes. So, he said he wanted me to feature on a song he was working on. In my head, I was like Who’s this n*gga?" },
         { role: "interviewer", text: "Hahaha…" },
         { role: "cue", text: "So I go on his Reverbnation page to check out some of his stuff. And I remember, the first time I listened to him, he had done… Bra Kevin [Beats] had this freestyle called X-Men vs. Transformers, and Kay-Ara had done his version of that where he was talking about a recent heartbreak that he’d had. I was also dealing with heartbreak; I’d just come out of my first ever heartbreak. So when I heard the song, I was like Yo!. It hit me chale. So I was like I’ll do the record. I’ll be in Accra on this date. We’ll go record it at Klu’s. The first day we met, we just got to talking; we talked about any and almost everything. And our relationship grew stronger from there. Like, I’m genuinely a fan… I’d say he’s one of my favourite rappers ever. I learnt how to make projects from him, even though I’d already put out two mixtapes before him. Prior to meeting him, I was doing what [most] Ghanaians usually do when it comes to music projects; just throw a bunch of songs they’ve done… But through watching him craft his mixtapes, I started to take cues and started to be more meticulous with it. Then I found out he was a twin; my dad is a twin, my mum’s dad is a twin. Kay-Ara’s twin is a girl, my dad’s twin is a girl. Kay-Ara’s name is Kwaku Atta, and my dad’s uncle whom he had a great relationship with was also a twin and he was called Kwaku Atta. My dad is light skinned, and his uncle was dark skinned; I’m light skinned and Kay-Ara is dark skinned. So, it just felt like there was something there. We started doing almost everything together. He’d help me out when I was working on my projects, and I’d do the same for him. And through our conversations, we both begun to realise that our lives have very similar patterns. Yeaaah. So we started calling ourselves Twin Souls. And we make this joke that we were supposed to be twins, but I ended up going the other way. " },
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
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/BTS%20MW.mp4?alt=media&token=6cbb2511-4980-4e34-9c7d-010cc2da6b67",
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
      { text: "FULL LYRICS", icon: fullLyricsIcon, link: "/location/8/comingsoon" },
      { text: "REFLECTION", icon: quillPenIcon, link: "/location/8/reflection" },
      { text: "BTS VIDEO", icon: BTSVideoIcon, link: "/location/8/video" },
    ],

  },
  {
    id: 9,
    locationName: "SMALL LONDON - Breman",
    importance: "Home in Breman with his grandmother and auntie from 2000 to 2003 — the setting of his earliest independence, first love, and long walks to school.",
    image: "",
    coords: { top: "43%", left: "77%" },
    songTitle: "Angel / Pente Interlude",
    songUrl: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Kiki_Angel%20(Voice%20Note).m4a?alt=media&token=86b6fdff-fcf3-4230-b34c-87560e554c99",
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
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/BTS%20Mixing.mp4?alt=media&token=c7e10a59-5db2-49fe-a7db-7b248e6fc03c",
    artistName: "Kojo Cue",
    lyrics: "",
    buttons: [
      { text: "VOICE NOTE", icon: voiceNoteIcon, link: "/location/10/comingsoon" },
      { text: "INTERVIEW", icon: interviewIcon, link: "/location/10/interview" },
      { text: "BTS VIDEO", icon: BTSVideoIcon, link: "/location/10/video" },
    ],
    interview: [
      { role: "interviewer", text: "Hahaha… So let’s talk about your projects. You mentioned that you put two mixtapes out. How many mixtapes did you put out before you dropped your first album?" },
      { role: "cue", text: "Ok. So, as I mentioned earlier, the idea of the mixtapes was for them to kind of serve as practice hours. The plan was for me to drop twelve (12) mixtapes, one every month with twelve songs on there. And with that, I was supposed to figure out my sonic identity and style. However, by the time I got to the sixth tape, I’d got a firmer grasp of what I wanted to do and who I wanted to be. So then, the pace of releasing [the subsequent tapes] slowed down. I dropped Now and the Here-After Nigga (N.A.T.H.A.N), Now or Never Again (N.O.N.A), Now and Forever, The Wait, Before We Shine, Before We Shine 2, and The Shining. I chose to call The Shining a mixtape even though it was the first project which was closest to an album; all the others featured me rapping over instrumentals to other people’s songs but with The Shining, it was all original music. Oh, I had another tape called Foreplay as well. So I have about eight (8) mixtapes." },
      { role: "interviewer", text: "In a period of a year?" },
      { role: "cue", text: "In like two (2) years." },
      { role: "interviewer", text: "Two (2) years!" },
      { role: "cue", text: "Yeaaah! Eight (8) mixtapes in like two (2) years. Or let me say seven (7) of them in a year and a half, and another one way later, because I dropped The Shining after I signed to BBnZ. So, in between Before We Shine 2 and The Shining, I had a bunch of singles floating around." },
      { role: "interviewer", text: "And after dropping The Shining, you’ve done Pen & Paper with Shaker, For My Brothers, and 21 Memory Lane The EP?" },
      { role: "cue", text: "Yeah. But For My Brothers is my first album." },
      { role: "interviewer", text: "Your magnum opus, is it?" },
      { role: "cue", text: "Yeaaah." },
      { role: "interviewer", text: "But would I be wrong if I said you made a name for yourself with the mixtapes way before you even dropped the album?" },
      { role: "cue", text: "No, you wouldn’t be wrong. So, I actually got signed to BBnZ because I’d made this song called ‘Corolla Music’, and when I put it out, it caught fire on the Internet, especially on Twitter…" },
      { role: "interviewer", text: "Was it based on ‘Aston Martin Music’?" },
      { role: "cue", text: "Noooo. It was based more on the Migos ‘Versace’ song." },
      { role: "interviewer", text: "I see." },
      { role: "cue", text: "But it comes from… It’s like, the flow pattern was like the Migos style because that Migos style had just come out at the time…" },
      { role: "interviewer", text: "Ok." },
      { role: "cue", text: "The name ‘Corolla Music’ came from Rozay’s ‘Maybach Music’ tho. And at the time, I was with the woman who eventually became my wife… She had a [Toyota] Corolla which she let me drive sometimes. And that car served as the inspiration for that song." },
      { role: "interviewer", text: "Interesting!" },
      { role: "cue", text: "I remember, I had recorded the song on my phone as a freestyle to the ‘Versace’ beat, and I was supposed to shoot a video for another song I was about to drop. When I met Jeneral Jay, the guy who was going to direct the video, and who happens to be a friend of mine from back in the day when I used to record in Okechukwu’s bedroom, to discuss the details and logistics for the shoot, we realized that it was going to be impossible to shoot the video. However, he suggested that if there was any other video I wanted to shoot which didn’t require a lot of logistics, we could probably look at that. Something like a random freestyle. He had the camera with him. So, I told him I had this freestyle I recorded on my phone but I wasn’t sure if it was good enough. After listening to it, he said it was fire, but he suggested that we went to studio to record it properly. So, we went to iPapi’s studio in Dichemso; and instead of recording on the ‘Versace’ beat, we decided to it over an original beat. We recorded and shot the video on the same day. And I dropped the audio the next week. For some reason tho, he video was never released. The song caught so much fire on Twitter that Caroline started a conversation on Hip-Hop on radio in Ghana. Long story short, that’s what caught the attention of the BBnZ guys. And the first thing they did was they sent me a DJ Juls record which featured EL and Blackway." },
      { role: "interviewer", text: "Whoa!" },
      { role: "cue", text: "They said they wanted me on the song. I remember I ended up writing my verse in the back seat of a trotro, while I was on my way to class. By that time, Peewee had also moved to Accra, because revenue was drying up in Kumasi and he needed to be close to the movers and shakers in Accra. He set up camp in Ashongman, so that’s where we were all based and operating from. I recorded my verse and sent it back to them. Later, EL called me to say “we can do collaborations all day, but if you don’t have the proper machinery behind you, most of these things won’t go anywhere. My people are interested about having you on their label, so if you don’t have any situation, let’s talk about making it happen.” I was like Hell yeah! Let’s do it. I went with Peewee to meet Alvin, Kwame, and the other guys." },
      { role: "interviewer", text: "So are you still with BBnZ?" },
      { role: "cue", text: "No. I’m not officially signed to the label. But we have a great relationship, and we have other things we do together outside the music. They’re like my family now." },
      { role: "interviewer", text: "Great. Also, I found out that you’re one of the people behind rain. Labs. How did that come about?" },
      { role: "cue", text: "I’ve always been interested in how things work. I love Hip-Hop, I watch all the DVDs. Read all the magazines I can find. Anything. The only time I have lost a phone, I was in the café printing material on how record labels work. I was so distracted that I left my phone, and I walked from my computer to go pick the print outs. By the time I returned to the computer, my phone was gone. I didn’t even notice it till I was ready to leave. By which time, the person was gone. Later, I found out who did it because they used to come… It’s Bantama, so someone in the streets got some info. I never got the phone back tho. So, I’ve always been interested in that part; for the most… because I was with my first manager only for about a year before I left." },
      { role: "interviewer", text: "Ohok." },
      { role: "cue", text: "For the major part of my career, up until BBnZ, I was doing everything by myself. Even when we formed The Cue, I was the one in charge of social media marketing and stuff. I was always interested in stuff like that. Sometime before the lockdown period, I’d made some friends and we got to discussing how a lot of people in our industry don’t know how things should work and how could help to change things. So during lockdown, everything is at a standstill, we’re all at home, and we fast track one of those conversations. We decide that we’re going to use music marketing and PR to help change things in our own little way. rain. Labs was born out of Harmattan Rain, the blog…" },
      { role: "interviewer", text: "So Benewaa is a part of it?" },
      { role: "cue", text: "Yeah, she is. So when we discussed it, Benewaa said she already had the idea and had a name for it. We liked the name she proposed so we decided to run with it. So it’s me, Benewaa, Trebla, and Mikey Ashkar. I brought Trebla onboard, because I knew Benewaa,… She wanted to do a performance series for Harmattan Rain, so she reached out to me and we did that. It never came out, but we formed a relationship out of that; we’d had conversations about the lack of knowledge in the industry. For Trebla, I knew him from way back because he also used to record at Peewee’s, and I’d had similar conversations about the industry with him. So I connected the three of us, then Benewaa was also like I also have someone I’d like to bring onboard; he’s into advertising. I knew Mikey, but I didn’t know he was the one Benewaa had been talking about, and I think Trebla also knew him already. So we got to work. The idea was, as proof of concept, we’d randomly pick three (3) or four (4) artists, and do pro bono work for them. That was a way to build our portfolio. So we picked Joey and KiDi…" },
      { role: "interviewer", text: "Joey B?" },
      { role: "cue", text: "Yeah. Joey B. KiDi has a close relationship with Benewaa, but Joey had approached her for some help with some of his stuff. So she brought the two of them and we worked on KiDi’s Blue EP, the project which had ‘Say Cheese’; we did PR, strategy, and label pitching. We did the same thing for Joey’s ‘Lava Feels.’ Through those projects, and through word of mouth, Gyakie approached us to do some work for her. There was another person, whose name I can’t remember. But within that space, we four (4) pro bono jobs, and that got people coming to us. That was 2020. Then in 2021, we started charging for our services. We did Pappy Kojo, and a bunch of other stuff. And then, when people would come to us, they’d ask if we did distro. We kept hearing it so much that we decided to investigate, and it turned out we could. So added that to our services. I think the first person we did distro for was Fameye; we’d done PR for him and he loved it, so he asked us to handle the distro for one of his songs. Crazy enough, we probably do more distro now than music marketing. Even some of the music labels such as Sony Music and Empire come to us when they need people to help them handle stuff in Ghana. Somewhere along the line, Benewaa, who’d left Harmattan Rain for John Hill to run, introduced us to him. And I’ve got to say it; John is an amazing guy…" },
      { role: "interviewer", text: "Is he Ghanaian?" },
      { role: "cue", text: "Yeah, John Hill is Ghanaian. But he currently lives in the UK. John is amazing. So we became the five (5) horsemen." },
      { role: "interviewer", text: "So, who are some of the people you work with? Your frequent collaborators?" },
      { role: "cue", text: "Errmmm… Currently, my frequent collaborators would be iPapi, a producer. Crazy, also a producer. Tronomie, an engineer and producer. Errmm… This new kid I found called Drumx…" },
      { role: "interviewer", text: "He’s the guy who produced ‘001’, right?" },
      { role: "cue", text: "Yeah, that’s him. And on the music end, I can’t say there’s anyone I’d call a frequent collaborator apart from Shaker. I don’t think I worked with anyone from The Shining on For My Brothers. I don’t think I worked with anyone from Pen & Paper on For My Brothers. So I’d say it’s usually on the production end." },
      { role: "interviewer", text: "Ohok. But how about videography and stuff?" },
      { role: "cue", text: "With videos, I used to shoot with Esianyo Kumodzi a lot. My last video was by Third Eye Montage. My graphics guy for the last three (3) years has been Aprodo of Y Programming. Evans Kafui Ofori is my creative director, since For My Brothers." },
      { role: "interviewer", text: "And who does your photography?" },
      { role: "cue", text: "Kush! Ah! Kush on Shotz Photography. That’s my brother. He just takes photos and sends them to me. Kush has been taking photos of me since like 2014." },
      { role: "interviewer", text: "Ok. Nice. So if I were to ask you, ever since you got into the game, what have been some of your successes, what would you say?" },
      { role: "cue", text: "The first major thing I’d mention is that I had a show in 2016,… Yeah, I think it was 2016. It was called ‘Cue for President.’ It took place at Alliance Francaise, and I sold out the venue. The second thing is, I actually become the KFC brand ambassador for…" },
      { role: "interviewer", text: "Yeaaah. For Streetwise. I remember that." },
      { role: "cue", text: "Yeah. Streetwise 2. That was for a whole year. And then I made an album with Shaker called Pen & Paper, got nominated in different categories at the VGMAs, and actually came close to winning rapper of the year. I say this because when the vote stats were released, I was really close to… Right behind Sarkodie, really close. We won the award for Best Edited Video for one of our projects at the 4Syte Music Video Awards, then went on tour with Ms. Lauryn Hill. But I think that the best thing I’ve ever done is this album I did called For My Brothers. I put it out in 2019, and so many people, both in real life and online, have come up to me to tell me how incredible the album is and how it has changed their lives. I have also seen it reflect in my streaming stats because For My Brothers is still my most streamed project across board even though on the ground, Pen & Paper seemed to be farther reaching. For My Brothers, as far as numbers is concerned, is top. I’d say that’s… Oh! Plus I also mentored kid named Kofi Jamar…" },
      { role: "interviewer", text: "Kofi Jamar?! Kofi Jamar, Kofi Jamar?" },
      { role: "cue", text: "Yeah." },
      { role: "interviewer", text: "Oh nice!" },
      { role: "cue", text: "I mentored a kid named Kofi Jamar from around 2012/13, and he ended up having one of the biggest singles in the country when Asakaa popped off. Ermm… My cousin and I started a record label, and Kofi Jamar was our first artist. But he left." },
      { role: "interviewer", text: "Which cousin? Was it T-Rebel?" },
      { role: "cue", text: "No, another cousin. His name is Boss. So Kofi Jamar was our first artist, but he left. We were able to find another artist and we made him a big artist. This guy named Kweku Flick." },
      { role: "interviewer", text: "Oh forreal?! You’ve really been in the back end pulling strings." },
      { role: "cue", text: "Ahhh… I’ve tried. Hahaha." },
      { role: "interviewer", text: "You’ve done a great job." },
      { role: "cue", text: "Yeaaah. I’ve tried chale." },
      { role: "interviewer", text: "And how about the struggles?" },
      { role: "cue", text: "I feel like a lot of my struggle has had to do with a lack of resources. And that’s why I’m so interested in that conversation at the moment. Because when I signed to BBnZ, I signed under the impression that I was now signed to a label and all my problems were going to be solved. I didn’t understand their model. But they also signed me under the impression that they could see I had my own hustle, so all they needed to do was to back me financially or whatever and things could move. So when I signed to them, I kind of switched off and I was expecting the label to do stuff for me. But nothing was getting done because they were also waiting for me to come up with stuff so that they could support me. So I spent like a year or two being super depressed because nothing was working out, and those were really troubling times for me. Once I started to get back into my groove, things started moving. But it’s always been resources, in terms of people who believe in and can see the vision, and then money. Finding just those two things can be very difficult. And errr… I have also grown enough over time, to the point where now I know how to do a lot more with less. And I’m still growing, so that’s much about it. Anything else, I don’t really consider a struggle. For example, a lot of people think “a lot of the songs you make, Ghanaians don’t like them.” I don’t believe that; I just believe that I haven’t had enough resources to enable me put it in front of as many Ghanaians as possible. Yeaaah… Because I can guarantee that if a hundred (100) Ghanaians listen to For My Brothers, I’d belong in the ninety (90) to ninety-four (94) percentile. You understand?" },
      { role: "interviewer", text: "Yeaaah!" },
      { role: "cue", text: "So it’s definitely not the music; it’s just the marketing which needs more ingenuity and resources." },
      { role: "interviewer", text: "Ok. Do you think you get radio love? Aside the likes of YFM and Guide Radio? Do you think your music goes beyond these urban music stations?" },
      { role: "cue", text: "Oh yeah! I think when I make music which works for radio, I get...  Even when I make music which isn’t necessarily for radio… For example, when I dropped ‘001’, the first message I received was from Abeiku Santana’s producer, asking if I could make it for an interview the next day..." },
      { role: "interviewer", text: "Oh nice! That’s on, errmm… Peace FM?" },
      { role: "cue", text: "On Okay FM. Yeah, you understand?" },
      { role: "interviewer", text: "Good. Okay FM." },
      { role: "cue", text: "I think when I make music which fits… The problem is I don’t make a lot of radio-ready, club-ready hits. I think that’s the problem." },
      { role: "interviewer", text: "You just talk your real sh*t." },
      { role: "cue", text: "Yeaaah. I don’t make a lot of that. You know when you talk of radio, you’d have to pay attention to tempo, you’d have to pay attention to the kind of bounce that’s going around. The Afrobeats bounce is more like… And I don’t make that at the moment. So yeah… I won’t put it on the radio people at all." },
      { role: "interviewer", text: "Ok. What’s your YouTube looking like? Are you happy with the views, the reactions, the comments?" },
      { role: "cue", text: "My YouTube and my Instagram are two things which I’m certain need a lot of work, because on YouTube for instance, I don’t have as much content as I could have had for being in the game for… If you count from even 2014. I’m almost in my 10th year. I don’t have content to match that; I didn’t shoot enough videos, whether music videos, whether behind the scenes footage, whatever. And my Instagram is the same way. I think my biggest problem, and back again to the resources bit, was that at some point, I was working alone, not working with a team. Even when I managed to build a team, it was a very small one. And I have a problem with… Ermm… Because of the era I came from, most of the time, when I’m having moments, I forget to…" },
      { role: "interviewer", text: "Record them?" },
      { role: "cue", text: "You understand! Drake has a line… “I can’t leave and hold the camera. Someone has to tape this.” I always forget to tape it. You understand?" },
      { role: "interviewer", text: "Yeah." },
      { role: "cue", text: "I’ve been in some very very interesting rooms, and then…" },
      { role: "interviewer", text: "You wish you had just…" },
      { role: "cue", text: "Yeah! Like, if someone doesn’t remember to say “Yo, lemme take a picture.” I forget. That’s because I’m enjoying the moment. Plus, I didn’t even have an understanding of, or I think I lost… I became so focused on being an artist that I forgot what it was like to be a fan. So I forgot how it felt like to be looking in the Source magazine, seeing Jay-Z hanging out somewhere with Juvenile, and thinking Oooh, I didn’t even think this connection would happen, and these people are here. Or seeing that this person and this other person are friends. So I lost that bit. Say I’m in the studio with M.anifest or Sarkodie, the first thing on my mind isn’t Ooh, this would be dope for the fans to see. It’s something I’ve had to re-approach. That’s the thing; I don’t think I have more than ten thousand (10,000) subscribers on YouTube. I’ve never had a million views for a video. I think my biggest video on YouTube has about 400k views; that’s ‘Up and Awake’, with Shaker." },
      { role: "interviewer", text: "Nice. But are you looking at working on it, or you think it’s something which is…" },
      { role: "cue", text: "Oh no, no, no. It’s something I’m consciously doing now. I’m really looking at working on it; to build content all around, but especially for Instagram and the other visual content platforms. Absolutely, I’m working on it." },
      { role: "interviewer", text: "Ok. What about interviews? Do you think you get asked to share your thoughts and views on the game on the regular?" },
      { role: "cue", text: "Yeaaah! I think one of my strongest… My Interviewing skills, probably because of my communications background or whatever. But that’s one of my strongest skills." },
      { role: "interviewer", text: "I think I’ve been witness to that." },
      { role: "cue", text: "Yeah. That’s one of my strongest skills. People always want to talk to me, even beyond the music. Like, most times, when I do interviews, it’s towards the end that they go like “Oh! We haven’t even talked about the music. What do you have for us?” So yeah, I do get a lot of interviews." },
      { role: "interviewer", text: "Ok. But are there are stand out ones? Like, interviews which you look back on and think that was a sick interview?" },
      { role: "cue", text: "I’ve had a bunch of them, but in recent times dieeer,… In recent times, I’d say the 3 Music one seems to resonate with a lot of people." },
      { role: "interviewer", text: "The one with C-Real?" },
      { role: "cue", text: "Yeah. And I just did an interview with Kojo Manuel as well that’s not yet out; it was well-researched on his part and I liked that. Also, I did one with Gabriel Myers Hansen, from around the… Ermm… from around the…" },
      { role: "interviewer", text: "Is it Pan African Music or something?" },
      { role: "cue", text: "Yep! Him too." },
      { role: "interviewer", text: "Ohok. I think I really enjoyed the… Eeermm…" },
      { role: "cue", text: "The 3 Music one?" },
      { role: "interviewer", text: "Naah. The one with Kojo… Errmm… What’s his name? Pffft… Big head…" },
      { role: "cue", text: "Oh! Kojo Sheldon." },
      { role: "interviewer", text: "Yeah! Kojo Sheldon!" },
      { role: "cue", text: "Yeah. The Kojo Sheldon interview was great too. Chale, as long as I get a person who… Oh! And I’ve had some of the best conversations with Mz Naa and Akosua Hanson as well." },
      { role: "interviewer", text: "Nice. So a lot of times, you hear people say “The industry this, the industry that. Ghana music industry, the gatekeepers, blah, blah, blah…” It seems to be a recurring theme amongst our folk here. Within the time you’ve spent within the industry, is there anything you’ve experienced which you’d consider as industry drama?" },
      { role: "cue", text: "Truthfully, there may have been some things which were done to me. But the way I am, I don’t believe in other people blocking my shine. I don’t believe in people having that much power over my destiny, especially in this era. Because I come from the era where you definitely needed the radio guy…" },
      { role: "interviewer", text: "To shine!" },
      { role: "cue", text: "You understand?! But we’re currently in an era where you don’t need any of those people anymore. You can go directly to the consumer. So, that’s not even a conversation to have now. Plus, I am not super interested in accolades, as much as the next person; so I don’t have any of those Oh, I wasn’t given this award, I wasn’t nominated for this energy. It’s not a thing I worry about…" },
      { role: "interviewer", text: "You feel there are much bigger fish to fry." },
      { role: "cue", text: "Exactly. If there’s truly anything in the industry I have a problem with, it’s the fact that we have a lot of people who have opinions about the industry, but have no experience and no education, and they’re not even trying to educate themselves. That’s the only problem I… I feel like if more of them try to improve, then collectively, we’ll all improve. Instead of not working on yourself, but every day criticizing almost everything. And sometimes, even some of the stuff you’re criticizing, you’re only saying what you’re saying because you don’t understand. You could educate yourself by just going on the Internet, it’s that simple. Yeah, that’s about it." },
      { role: "interviewer", text: "Ok. But what about the lack of structure?" },
      { role: "cue", text: "The lack of structure is a problem, but you can spend all of your career being mad at the people who came before you for not building a structure, or you can build a structure so that those coming after you will not come and complain about you and those before you again. Yeah, so that’s one of my major reasons for wanting to be involved in rain.Labs. To try and help build something." },
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
      { text: "FULL LYRICS", icon: fullLyricsIcon, link: "/location/11/comingsoon" },
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
      { text: "WATCH MUSIC VIDEO", icon: watchMusicVideo, link: "/location/12/comingsoon" },
      { text: "FULL LYRICS", icon: fullLyricsIcon, link: "/location/12/comingsoon" },
    ],

  },
  {
    id: 13,
    locationName: "CLAMP STREET - Lake",
    importance: "Cue’s present home — the calm after all the movement.",
    image: "",
    coords: { top: "66%", left: "27%" },
    songTitle: "Dreams",
    songUrl: "https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/Askor%20Voice%20Note.m4a?alt=media&token=981b2622-c5e4-4b93-993f-b206b30b69ac",
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
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/BTS%20You%20Are.mp4?alt=media&token=1fc4015b-6d88-4755-8bc7-3fba1ef64a5e',
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
      { text: "FULL LYRICS", icon: fullLyricsIcon, link: "/location/14/comingsoon" },
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
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/kanialbum.firebasestorage.app/o/The%20Fall%20Film%20Reel.mp4?alt=media&token=4aaf2a06-c8f2-4e1e-9cfb-93fcdc4a524d',
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
    interview: [
      { role: "interviewer", text: "Oh ok. Great. Errmmm… Can you break down your last album? That’s For My Brothers, right?" },
      { role: "cue", text: "Yeaaah! Errmm… Music for people like me. Yeah, music for people like me, to get them through the bad days and the good days, and to remind them that they’re not alone in whatever struggle they’re facing. And to let them know that they’ll get out of it. Yeah." },
      { role: "interviewer", text: "A song like ‘Dua’, is it based on a real experience?" },
      { role: "cue", text: "It’s not based on a real experience line by line, but the idea of it came from errmm… Something my dad used to say to me, which is the phrase “Kojo wo bɛ brɛ.” So, it’s not like a line by line, that’s what he used to say; it’s just that phrase. But then I took the phrase and kind of built on it, using all the things we heard from… So everything I said is something I’ve heard before from one person or another, not just from my dad. All those things we heard, but separated them into good advice, but bad way of communicating, and good advice, good way of communicating." },
      { role: "interviewer", text: "Ohok. But I think it’s a really… Errmm… Poignant song, because I think with the older folk, most times, their way of advising you is that “If you’re going down this path, then you’re going to be a failure or a disgrace.” So hearing that song was kind of interesting." },
      { role: "cue", text: "Thank you." },
      { role: "interviewer", text: "I’ve also heard those words several times, because in the minds of the old folk, there’s only one way this thing you’re doing could end." },
      { role: "cue", text: "Yeah." },
      { role: "interviewer", text: "Ok. So which artists are you feeling these days?" },
      { role: "cue", text: "Baaba J! I’m big on Baaba J. ‘Wonderful’ is like my favourite song this year. Kweku Smoke, Kwaku DMC; I’m big on them too. I’ve been listening to them a lot. Koo Kusi as well. Eermmm… Yeah, I think in Ghana, at the moment, those are the people I’m feeling or artists I’ve been listening to. Outside of Ghana, I’ve been listening to ermmm… Stove God Cooks, Lizzie McAlpine, Errmm… What’s her name. Sabrina. Sabrina Carpenter. And then, of course, Daddy Lumba never leaves. A lot of the Highlife never leaves; they’re always in the background. Yeah. And then Dave and Stormzy as well." },
      { role: "interviewer", text: "Ohok. How about Little Simz?" },
      { role: "cue", text: "Oh yeah! Simbi when she drops. Since I heard ‘God Bless Mary’, whenever Simbi drops some stuff, I’m sure to give it a listen." },
      { role: "interviewer", text: "Nice. So, as an artist, your appearance is a major part of what you etch into the minds of your followers, or your fans. When it comes to clothing brands, which ones are your go to brands? Or which brands would you say are making a killing on the scene these days?" },
      { role: "cue", text: "In Ghana?" },
      { role: "interviewer", text: "Well, Ghana. Errr… The main thing should be Ghana. Otherwise, elsewhere is fine as well." },
      { role: "cue", text: "I’d admit that I sort of switched off from fashion, as a way of fighting my dad. Because my dad is a fashionista; old school fashionista." },
      { role: "interviewer", text: "Oh yeah?!" },
      { role: "cue", text: "Forreal! He loves fashion." },
      { role: "interviewer", text: "A borga?" },
      { role: "cue", text: "Yes. So, I used to be very into… I mean, Hip-Hop culture, so I used to be heavily into Hip-Hop fashion. Then when my dad came into my life and he left, I started to feel like he cared more about fashion than he did about me. So I disconnected from fashion. For a long time, I was really adoncare; I really didn’t care how I looked. I’d just pull up in some random whatever I can find. But somewhere in 2016 or so, one of my best friends from GIJ, who’s kid brother was super into fashion, saw me at an event and he didn’t like the way I was looking. So, he reached out to his [older] brother and told him he wasn’t digging the way I was looking, and proposed that he’d love to style me. His brother told me and I was like Yeah, why not?! Let’s geddit! I told him to put a look book together, and he did that. We went through a bunch of stuff, and discussed what he thought I should look like. I tried some of them out and figured what I’m comfortable with. And from there, the fashion sort of started coming back. I started going out and picking stuff myself; I became actively conscious. But to the question itself, ermmm… I am super on… I am on the Adidas side in the Adidas/Nike war, because the very first pair of hip sneakers I owned was a pair of [Adidas] Superstar(s)." },
      { role: "interviewer", text: "Ohok." },
      { role: "cue", text: "So I’m on the Adidas side on that one; I wear everything but I’m on the Adidas side when it comes to that one. Lately, I like Reebok and New Balance a lot. But Adidas bought Reebok, so it’s still on the same side. Converse Chuck Taylors as well; that’s because when The Game came out, I was a blood n*gga in Buokrom Estates, and we were always wearing Chuck Taylors. So yeah, Chuck Taylors. I also find canvas shoes very comfortable. In Ghana, I love what Studio Kojo Kusi is doing. Tribe of God as well; I love what they’re doing a lot. Also, Fear No Man; I feel like they’re [one of] the pioneers of modern streetwear scene in Ghana. Free the Youth looks great too. And this other brand called Rebl." },
      { role: "interviewer", text: "Yeah, Rebl!" },
      { role: "cue", text: "I used to wear their stuff a lot. And there’s this brand called Fumé, or something along those lines; I want to get some of their stuff." },
      { role: "interviewer", text: "Nice! So I’d want us to play a quick game. I give you two options, and you choose one. This or that kind of format. Cool?" },
      { role: "cue", text: "Yeah, let’s do it." },
      { role: "interviewer", text: "Great! So, waakye or jollof?" },
      { role: "cue", text: "Jollof. Even though I think waakye is more elite,..." },
      { role: "interviewer", text: "Haha. Waakye is more elite?" },
      { role: "cue", text: "In terms of taste." },
      { role: "interviewer", text: "Oh forreal?!" },
      { role: "cue", text: "I feel like waakye is more… By elite, I mean waakye is better tasting than jollof. Jollof, I feel, fits in more contexts than waakye. In my head, waakye is like either for breakfast,..." },
      { role: "interviewer", text: "Lunch, or supper." },
      { role: "cue", text: "Yeah. But jollof can do many other things. But waakye is more specific." },
      { role: "interviewer", text: "Haha. Yeaaah. And you know for some time now, there’s been a proliferation of night time waakye joints in town?" },
      { role: "cue", text: "Yeah. It used to not be a thing." },
      { role: "interviewer", text: "Yeaaah. Those days, it used to be a you chop morning, latest afternoon, that’s when you eat waakye…" },
      { role: "cue", text: "Yeah. But night waakye has become a thing now. We dey chop am every time." },
      { role: "interviewer", text: "Yeaaah. E b so! Hahaha… Ok. Next question. Shorts or trousers?" },
      { role: "cue", text: "Ha! If you’d asked me this just two weeks ago, it’d have been very easy to answer." },
      { role: "interviewer", text: "Haha. What changed?" },
      { role: "cue", text: "I got some shorts, and I wore them outside. I was like This is pretty cool." },
      { role: "interviewer", text: "Ohok." },
      { role: "cue", text: "Yeah, because I like to feel free. So for now, I’d say shorts." },
      { role: "interviewer", text: "Ok. Tall or short women?" },
      { role: "cue", text: "I’d have to say short because I like petite women." },
      { role: "interviewer", text: "You like petite women?" },
      { role: "cue", text: "Yeah! I dunno why." },
      { role: "interviewer", text: "Hahaha…" },
      { role: "cue", text: "Just in trying to think of the women I’ve been with, I realise I like short women. But truthfully, I don’t look at that as a thing first. Yeeaaah." },
      { role: "interviewer", text: "Ok. Music video or audio?" },
      { role: "cue", text: "To consume?" },
      { role: "interviewer", text: "Yeah!" },
      { role: "cue", text: "Music video. It’s the best of both worlds. You hear the audio, and you also get to see it acted out. I grew up on video tapes of MTV and BET recordings. You got the culture in full. You heard the music, but also saw the fashion and…" },
      { role: "interviewer", text: "What went with it…" },
      { role: "cue", text: "Yeah. Everything." },
      { role: "interviewer", text: "Nice. Club or Orijin?" },
      { role: "cue", text: "Club! Ah, that’s not even a question. Ah! That’s not a question at all." },
      { role: "interviewer", text: "Haha. Ok. All black or all white?" },
      { role: "cue", text: "All black!" },
      { role: "interviewer", text: "Ok. Golden Tree or Niche?" },
      { role: "cue", text: "What’s Niche?" },
      { role: "interviewer", text: "Ohok. It’s a chocolate brand which some private people started. It’s been around for a while." },
      { role: "cue", text: "In Ghana?" },
      { role: "interviewer", text: "Yeah! In Ghana. They’re doing really well." },
      { role: "cue", text: "Ohok. I’d have to check it out then." },
      { role: "interviewer", text: "Yeah, you should check it out." },
      { role: "cue", text: "Ok. So, because I haven’t tried it yet, I’d say Golden Tree." },
      { role: "interviewer", text: "Ok. Hip-Hop or R&B?" },
      { role: "cue", text: "Hip-Hop." },
      { role: "interviewer", text: "Hip-Hop? Ok." },
      { role: "cue", text: "The tougher one would have been Hip-Hop or Highlife?" },
      { role: "interviewer", text: "Ok. Beach front or lake front?" },
      { role: "cue", text: "Beach [front]. The sand." },
      { role: "interviewer", text: "Oh, you love the sand eh?" },
      { role: "cue", text: "Yeah, I love the beach sand." },
      { role: "interviewer", text: "Ok. Android or iOS?" },
      { role: "cue", text: "I really don’t care about which of them it is, to be honest. Because, for a long time, I only used Android, and then I switched to...  No, I think I used a Blackberry, then I switched to an iPhone. Then I switched from an iPhone to a Samsung. And now, I’m back to an iPhone." },
      { role: "interviewer", text: "Ohok." },
      { role: "cue", text: "Apart from the Blackberry switch, everything else feels very close for me. So I don’t mind." },
      { role: "interviewer", text: "Ok. Would you go for kenkey or fufu?" },
      { role: "cue", text: "Ah! Fufu!" },
      { role: "interviewer", text: "Hahaha… Kumasi boy eh?" },
      { role: "cue", text: "Yeah. Fufu." },
      { role: "interviewer", text: "Haha. Oseikrom in the building!" },
      { role: "cue", text: "Easy money!" },
      { role: "interviewer", text: "Ok. The last two; drink and drive or smoke and fly?" },
      { role: "cue", text: "Smoke and fly as in you’re not the pilot, right?" },
      { role: "interviewer", text: "Naah. You’re the pilot." },
      { role: "cue", text: "Oh really. Well, I no really smoke fly before so I don’t know." },
      { role: "interviewer", text: "Haha. But smoke and fly means you can smoke and still go about your movements." },
      { role: "cue", text: "Driving?" },
      { role: "interviewer", text: "Yeah!" },
      { role: "cue", text: "Ohok! That’s what it means. Would you rather drink and drive or smoke and drive?" },
      { role: "interviewer", text: "Yeaaah!" },
      { role: "cue", text: "Chale, probably smoke and drive. So yeah, smoke and fly." },
      { role: "interviewer", text: "The last one. FIFA or UNO?" },
      { role: "cue", text: "FIFA. I love UNO tho, but FIFA." },
      { role: "interviewer", text: "I think for most of us, it’d be FIFA." },
      { role: "cue", text: "Yeah. FIFA also because you can’t play UNO by yourself. You need company." },
      { role: "interviewer", text: "Yeah. That’s true. So have you got any upcoming stuff that the fans should look out for?" },
      { role: "cue", text: "At least, at the time we’re having this interview, ermmm… I’ve been gone for a while. But I’m back, and I’m putting out an EP called I’m Back just to celebrate my return. We just put out the first single from the tape called ‘Free Throw’ featuring Joey B. It’s currently available on all the digital streaming platforms. And the EP will be dropping at the end of October. After that, we want to do the For My Brothers concert, at the end of November. It will take place at either the forecourt of 3 Music’s offices or at Nubuke Foundation in East Legon." },
      { role: "interviewer", text: "Ok Ko-Jo. Nice. Thank you very much for taking some time to take to me. I really enjoyed the conversation and appreciate this." },
      { role: "cue", text: "You’re always welcome chale." },
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
      { text: "FULL LYRICS", icon: fullLyricsIcon, link: "/location/16/comingsoon" },
      { text: "CUE LIVE SESSION", icon: visualizerIcon, link: "/location/16/comingsoon" },
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
    WrittenReflection: `There’s always that one song that seems to summon itself—like it existed long before I ever reached for it. Every time I work on a project, one track insists on being born without my guidance. It starts as a fragment in my mind, an idea so certain in feeling yet shapeless in sound. Usually, I can already hear the production breathing beneath the words, but with these songs, I know nothing. I just wait—helpless, hopeful—for the moment when sound finds form.
It’s strange how these songs, the ones that come uninvited, end up becoming the spine of everything. A Ghetto Story did that on The Shining. Rich Dad did the same on FMB. And now Gold Dust has followed that pattern—appearing first as an absence that wouldn’t leave me alone.
I remember the night clearly. I was at Paapa Versa’s album listening. He’s someone I’ve long wanted to create with, though the timing never seemed to align. Before one of the opening acts, a singer named Tsiee, began his set, he mentioned he’d written a song for a friend who ended up rejecting it. Then he began to sing the hook—and in that instant, I recognized it. Not as something new, but as something I had been waiting to hear.
I reached out to him, got the song, and brought it to Evans and Paapa. And like that—through the quiet machinery of coincidence—the universe handed me what I was missing. Gold Dust took its time, argued with us, resisted completion. But in the end, it allowed itself to be finished.
Some songs you make. Others choose you. This one felt like it already existed somewhere, waiting for me to catch up.
`,
    buttons: [
      { text: "WRITTEN STORY", icon: quillPenIcon, link: "/location/17/reflection" },
      { text: "FULL LYRICS", icon: fullLyricsIcon, link: "/location/17/comingsoon" },
    ],

  },
];

export default locationPins;