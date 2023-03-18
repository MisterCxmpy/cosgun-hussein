let github = "https://github.com/mistercxmpy/";
let linkedIn = "https://www.linkedin.com/in/cosgun-hussein-618b71244/"

about = [
  "<br>",
  "Hi, I'm Cosgun Hussein (can be pronouced as Josh), an aspiring software engineer with a passion for",
  "front-end development. I have experience working with Python and JavaScript, and have used many",
  "different languges to a basic level. I enjoy creating visually appealing and user-friendly interfaces",
  "and am always learning new technologies to improve my skills.",
  "<br>"
];

social = [
  "<br>",
  'github         <a href="' + github + '" target="_blank">github/mistercxmpy' + "</a>",
  'linkedin       <a href="' + linkedIn + '" target="_blank">linkedIn.com/cosgun-hussein' + "</a>",
  'email          <a href="mailto:cosgunhussein@gmail.com" target="_blank">email/cosgun-hussein' + "</a>",
  'discord        <a href="https://discordapp.com/users/242001354468491274" target="_blank">discord/cosgun-hussein' + "</a>",
  "<br>"
];

projects = [
  "<br>",
  "⚠ PROJECT SECTION IS CURRENTLY UNDER DEVELOPMENT ⚠",
  "All projects are visable on my <a href='https://github.com/mistercxmpy/' target='_blank'>GitHub",
  "<br>",
  "Type the name of the language to views its projects:",
  "<br>",
  '<span class="command">Python</span>',
  '<span class="command">RoR</span>',
  "<br>"
];

help = [
  "<br>",
  '<span class="command">about</span>          Who am I?',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           Display list of commands',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">themes</span>         Change the theme',
  "<br>",
];

const generateSessionID = () => {
  const hexChars = '0123456789abcdef';
  let result = '';
  
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      result += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }
    if (i < 3) {
      result += ' ';
    }
  }
  
  result += ' : ';
  
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
      result += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }
    if (i < 1) {
      result += ' : ';
    }
  }
  
  return result;
}

banner = [
    '<span class="color2">Welcome to CosShell v2002.09.</span>',
    `<span class="color2">Session ID: ${generateSessionID()}</span>`,
    `<span class="color2">Type</span> <span class="command">'help'</span><span class="color2"> to see list of available commands.</span>`,
    `<span class="color2">All Commands are case insensitive.</span>`,
];

themes = [
    '<br>',
    `<a href="#!" onclick=changeStyle("default");>default</a>`,
    `<a href="#!" onclick=changeStyle("80s_after_dark");>80s after dark</a>`,
    `<a href="#!" onclick=changeStyle("8008");>8008</a>`,
    `<a href="#!" onclick=changeStyle("9009");>9009</a>`,
    `<a href="#!" onclick=changeStyle("aether");>aether</a>`,
    `<a href="#!" onclick=changeStyle("alduin");>alduin</a>`,
    `<a href="#!" onclick=changeStyle("arch");>arch</a>`,
    `<a href="#!" onclick=changeStyle("aurora");>aurora</a>`,
    `<a href="#!" onclick=changeStyle("beach");>beach</a>`,
    `<a href="#!" onclick=changeStyle("bento");>bento</a>`,
    '<br>',
    `---- type "themes 2" for more themes ---- `,
    '<br>',
]

themes_2 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("bingsu");>bingsu</a>`,
  `<a href="#!" onclick=changeStyle("bliss");>bliss</a>`,
  `<a href="#!" onclick=changeStyle("blue_dolphin");>blue dolphin</a>`,
  `<a href="#!" onclick=changeStyle("blueberry_dark");>blueberry dark</a>`,
  `<a href="#!" onclick=changeStyle("blueberry_light");>blueberry light</a>`,
  `<a href="#!" onclick=changeStyle("botanical");>botanical</a>`,
  `<a href="#!" onclick=changeStyle("bushido");>bushido</a>`,
  `<a href="#!" onclick=changeStyle("cafe");>cafe</a>`,
  `<a href="#!" onclick=changeStyle("camping");>camping</a>`,
  `<a href="#!" onclick=changeStyle("carbon");>carbon</a>`,
  '<br>',
  `---- type "themes 3" for more themes ---- `,
  '<br>',
]

themes_3 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("catppuccin");>catppuccin</a>`,
  `<a href="#!" onclick=changeStyle("chaos_theory");>chaos theory</a>`,
  `<a href="#!" onclick=changeStyle("cheesecake");>cheesecake</a>`,
  `<a href="#!" onclick=changeStyle("comfy");>comfy</a>`,
  `<a href="#!" onclick=changeStyle("copper");>copper</a>`,
  `<a href="#!" onclick=changeStyle("creamside");>creamside</a>`,
  `<a href="#!" onclick=changeStyle("cyberspace");>cyberspace</a>`,
  `<a href="#!" onclick=changeStyle("dark_magic_girl");>dark magic girl</a>`,
  `<a href="#!" onclick=changeStyle("dark");>dark</a>`,
  `<a href="#!" onclick=changeStyle("darling");>darling</a>`,
  '<br>',
  `---- type "themes 4" for more themes ---- `,
  '<br>',
]

themes_4 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("deku");>deku</a>`,
  `<a href="#!" onclick=changeStyle("desert_oasis");>desert oasis</a>`,
  `<a href="#!" onclick=changeStyle("dev");>dev</a>`,
  `<a href="#!" onclick=changeStyle("diner");>diner</a>`,
  `<a href="#!" onclick=changeStyle("dino");>dino</a>`,
  `<a href="#!" onclick=changeStyle("dmg");>dmg</a>`,
  `<a href="#!" onclick=changeStyle("dollar");>dollar</a>`,
  `<a href="#!" onclick=changeStyle("dots");>dots</a>`,
  `<a href="#!" onclick=changeStyle("dracula");>dracula</a>`,
  `<a href="#!" onclick=changeStyle("drowning");>drowning</a>`,
  '<br>',
  `---- type "themes 5" for more themes ---- `,
  '<br>',
]

themes_5 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("dualshot");>dualshot</a>`,
  `<a href="#!" onclick=changeStyle("evil_eye");>evil eye</a>`,
  `<a href="#!" onclick=changeStyle("ez_mode");>ez mode</a>`,
  `<a href="#!" onclick=changeStyle("fire");>fire</a>`,
  `<a href="#!" onclick=changeStyle("fledging");>fledging</a>`,
  `<a href="#!" onclick=changeStyle("fleuriste");>fleuriste</a>`,
  `<a href="#!" onclick=changeStyle("froyo");>froyo</a>`,
  `<a href="#!" onclick=changeStyle("frozen_llama");>frozen llama</a>`,
  `<a href="#!" onclick=changeStyle("fundamentals");>fundamentals</a>`,
  `<a href="#!" onclick=changeStyle("future_funk");>future funk</a>`,
  '<br>',
  `---- type "themes 6" for more themes ---- `,
  '<br>',
]

themes_6 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("godspeed");>godspeed</a>`,
  `<a href="#!" onclick=changeStyle("graen");>graen</a>`,
  `<a href="#!" onclick=changeStyle("grand_prix");>grand prix</a>`,
  `<a href="#!" onclick=changeStyle("gruvbox_dark");>gruvbox dark</a>`,
  `<a href="#!" onclick=changeStyle("gruvbox_light");>gruvbox light</a>`,
  `<a href="#!" onclick=changeStyle("hammerhead");>hammerhead</a>`,
  `<a href="#!" onclick=changeStyle("hanok");>hanok</a>`,
  `<a href="#!" onclick=changeStyle("hedge");>hedge</a>`,
  `<a href="#!" onclick=changeStyle("honey");>honey</a>`,
  `<a href="#!" onclick=changeStyle("horizon");>horizon</a>`,
  '<br>',
  `---- type "themes 7" for more themes ---- `,
  '<br>',
]

themes_7 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("husqy");>husqy</a>`,
  `<a href="#!" onclick=changeStyle("iceberg_dark");>iceberg dark</a>`,
  `<a href="#!" onclick=changeStyle("iceberg_light");>iceberg light</a>`,
  `<a href="#!" onclick=changeStyle("ishtar");>ishtar</a>`,
  `<a href="#!" onclick=changeStyle("iv_clover");>iv clover</a>`,
  `<a href="#!" onclick=changeStyle("iv_spade");>iv spade</a>`,
  `<a href="#!" onclick=changeStyle("joker");>joker</a>`,
  `<a href="#!" onclick=changeStyle("laser");>laser</a>`,
  `<a href="#!" onclick=changeStyle("lavender");>lavender</a>`,
  `<a href="#!" onclick=changeStyle("leather");>leather</a>`,
  '<br>',
  `---- type "themes 8" for more themes ---- `,
  '<br>',
]

themes_8 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("lil_dragon");>lil dragon</a>`,
  `<a href="#!" onclick=changeStyle("line");>line</a>`,
  `<a href="#!" onclick=changeStyle("luna");>luna</a>`,
  `<a href="#!" onclick=changeStyle("magic_girl");>magicgirl</a>`,
  `<a href="#!" onclick=changeStyle("mashu");>mashu</a>`,
  `<a href="#!" onclick=changeStyle("matcha_moccha");>matcha moccha</a>`,
  `<a href="#!" onclick=changeStyle("material");>material</a>`,
  `<a href="#!" onclick=changeStyle("matrix");>matrix</a>`,
  `<a href="#!" onclick=changeStyle("menthol");>menthol</a>`,
  `<a href="#!" onclick=changeStyle("metaverse");>metaverse</a>`,
  '<br>',
  `---- type "themes 9" for more themes ---- `,
  '<br>',
]

themes_9 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("metropolis");>metropolis</a>`,
  `<a href="#!" onclick=changeStyle("mexican");>mexican</a>`,
  `<a href="#!" onclick=changeStyle("miami_nights");>miami nights</a>`,
  `<a href="#!" onclick=changeStyle("miami");>miami</a>`,
  `<a href="#!" onclick=changeStyle("midnight");>midnight</a>`,
  `<a href="#!" onclick=changeStyle("milkshake");>milkshake</a>`,
  `<a href="#!" onclick=changeStyle("mint");>mint</a>`,
  `<a href="#!" onclick=changeStyle("mizu");>mizu</a>`,
  `<a href="#!" onclick=changeStyle("modern_dolch_light");>modern dolch light</a>`,
  `<a href="#!" onclick=changeStyle("modern_dolch");>modern dolch</a>`,
  '<br>',
  `---- type "themes 10" for more themes ---- `,
  '<br>',
]

themes_10 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("modern_ink");>modern ink</a>`,
  `<a href="#!" onclick=changeStyle("monokai");>monokai</a>`,
  `<a href="#!" onclick=changeStyle("moonlight");>moonlight</a>`,
  `<a href="#!" onclick=changeStyle("mountain");>mountain</a>`,
  `<a href="#!" onclick=changeStyle("mr_sleeves");>mr sleeves</a>`,
  `<a href="#!" onclick=changeStyle("ms_cupcakes");>ms cupcakes</a>`,
  `<a href="#!" onclick=changeStyle("muted");>muted</a>`,
  `<a href="#!" onclick=changeStyle("nausea");>nausea</a>`,
  `<a href="#!" onclick=changeStyle("nautilus");>nautilus</a>`,
  `<a href="#!" onclick=changeStyle("nebula");>nebula</a>`,
  '<br>',
  `---- type "themes 11" for more themes ---- `,
  '<br>',
]

themes_11 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("night_runner");>night runner</a>`,
  `<a href="#!" onclick=changeStyle("nord");>nord</a>`,
  `<a href="#!" onclick=changeStyle("norse");>norse</a>`,
  `<a href="#!" onclick=changeStyle("oblivion");>oblivion</a>`,
  `<a href="#!" onclick=changeStyle("olive");>olive</a>`,
  `<a href="#!" onclick=changeStyle("onedark");>onedark</a>`,
  `<a href="#!" onclick=changeStyle("paper");>paper</a>`,
  `<a href="#!" onclick=changeStyle("passion_fruit");>passion fruit</a>`,
  `<a href="#!" onclick=changeStyle("peaches");>peaches</a>`,
  `<a href="#!" onclick=changeStyle("pink_lemonade");>pink lemonade</a>`,
  '<br>',
  `---- type "themes 12" for more themes ---- `,
  '<br>',
]

themes_12 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("pulse");>pulse</a>`,
  `<a href="#!" onclick=changeStyle("red_dragon");>red dragon</a>`,
  `<a href="#!" onclick=changeStyle("red_samurai");>red samurai</a>`,
  `<a href="#!" onclick=changeStyle("retro");>retro</a>`,
  `<a href="#!" onclick=changeStyle("retrocast");>retrocast</a>`,
  `<a href="#!" onclick=changeStyle("rgb");>rgb</a>`,
  `<a href="#!" onclick=changeStyle("rose_pine_dawn");>rose pine dawn</a>`,
  `<a href="#!" onclick=changeStyle("rose_pine_moon");>rose pine moon</a>`,
  `<a href="#!" onclick=changeStyle("rose_pine");>rose pine</a>`,
  `<a href="#!" onclick=changeStyle("rudy");>rudy</a>`,
  '<br>',
  `---- type "themes 13" for more themes ---- `,
  '<br>',
]

themes_13 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("ryujinscales");>ryujinscales</a>`,
  `<a href="#!" onclick=changeStyle("serika_dark");>serika dark</a>`,
  `<a href="#!" onclick=changeStyle("serika");>serika</a>`,
  `<a href="#!" onclick=changeStyle("sewing_tin_light");>sewing tin light</a>`,
  `<a href="#!" onclick=changeStyle("sewing_tin");>sewing tin</a>`,
  `<a href="#!" onclick=changeStyle("snes");>snes</a>`,
  `<a href="#!" onclick=changeStyle("soaring_skies");>soaring skies</a>`,
  `<a href="#!" onclick=changeStyle("solarized_dark");>solarized dark</a>`,
  `<a href="#!" onclick=changeStyle("solarized_light");>solarized light</a>`,
  `<a href="#!" onclick=changeStyle("sonokai");>sonokai</a>`,
  '<br>',
  `---- type "themes 14" for more themes ---- `,
  '<br>',
]

themes_14 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("stealth");>stealth</a>`,
  `<a href="#!" onclick=changeStyle("strawberry");>strawberry</a>`,
  `<a href="#!" onclick=changeStyle("striker");>striker</a>`,
  `<a href="#!" onclick=changeStyle("sweden");>sweden</a>`,
  `<a href="#!" onclick=changeStyle("taro");>taro</a>`,
  `<a href="#!" onclick=changeStyle("terminal");>terminal</a>`,
  `<a href="#!" onclick=changeStyle("terra");>terra</a>`,
  `<a href="#!" onclick=changeStyle("terror_below");>terror below</a>`,
  `<a href="#!" onclick=changeStyle("tiramisu");>tiramisu</a>`,
  `<a href="#!" onclick=changeStyle("trackday");>trackday</a>`,
  '<br>',
  `---- type "themes 15" for more themes ---- `,
  '<br>',
]

themes_15 = [
  '<br>',
  `<a href="#!" onclick=changeStyle("tron_orange");>tron orange</a>`,
  `<a href="#!" onclick=changeStyle("vaporwave");>vaporwave</a>`,
  `<a href="#!" onclick=changeStyle("viridescent");>viridescent</a>`,
  `<a href="#!" onclick=changeStyle("voc");>voc</a>`,
  `<a href="#!" onclick=changeStyle("vscode");>vscode</a>`,
  `<a href="#!" onclick=changeStyle("watermelon");>watermelon</a>`,
  `<a href="#!" onclick=changeStyle("wavez");>wavez</a>`,
  `<a href="#!" onclick=changeStyle("witch_girl");>witch girl</a>`,
  '<br>',
]

python = [
  '<br>',
  'Python projects<br>',
  '<br>',
  '<a href="https://github.com/MisterCxmpy/Python-Snipping-Tool" target="_blank">python snipping tool' + "</a>",
  '<a href="https://github.com/MisterCxmpy/Python-Drawing-Tool" target="_blank">python drawing tool' + "</a>",
  '<a href="https://github.com/MisterCxmpy/Python-YouTube-MP3-Downloader" target="_blank">python youtube to mp3' + "</a>",
  '<br>',
]

ror = [
  '<br>',
  'Rails projects',
  '<br>',
  '<a href="https://cosgun-hussein-blog.herokuapp.com/" target="_blank">rails blog' + "</a>",
  '<a href="https://github.com/MisterCxmpy/rails-message-board" target="_blank">rails messaging board' + "</a>",
  '<a href="https://github.com/MisterCxmpy/rails-finance-tracker" target="_blank">rails finance tracker' + "</a>",
  '<br>',
]
