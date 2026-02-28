// ============================= //
// ⚙️ ROOM CONFIG — EDIT HERE    //
// ============================= //

var ROOM_CONFIG = {
    title: '🥔 Potatoship Is Magick Club 🥔',
    profileImage: 'https://i.ibb.co/bjzy07J5/Greta-Cabbage-Profile-002-cabbage-patch-faces.webp',
    backgroundImage: 'https://i.ibb.co/gMfXtqRj/potato-background-003-tall2x.webp',
    bannerSlides: [
        {
            image: 'https://i.ibb.co/JR2JQhqd/Greta-Frendship-Is-Magick-Club-banner-003-16x9-transparency.png',
            caption: '🥔 Potatoship Is Magick Club 🥔'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg',
            caption: '✌️ Potatoship Through Unity ✌️'
        }
    ],
    bannerWatermark: '',
    links: [
        { label: 'Email',    href: 'mailto:andylsixx@proton.me',         icon: 'envelope'              },
        { label: 'Tumblr',   href: 'https://www.tumblr.com/andylsixx',   icon: 'pencil',    newTab: true },
        { label: 'Mastodon', href: 'https://mastodon.social/@andylsixx', icon: 'bullhorn',  newTab: true },
        { label: 'Twitch',   href: 'https://twitch.tv/andyl_sixx',       icon: 'facetime-video', newTab: true },
        { label: 'MySpace',  href: 'https://myspace.com/andylsixx',      icon: 'music',     newTab: true },
        { label: 'TikTok',   href: 'https://www.tiktok.com/@andylsixx',  icon: 'film',      newTab: true }
    ],
    colors: {
        green:     '#00853F',
        greenDark: '#1B6B2F',
        gold:      '#F5C800',
        red:       '#ED1B24',
        blue:      '#5BB8E8',
        blueDark:  '#3a9fd4',
        white:     '#FFFDF7'
    },
    encoding: {
        enabled:       true,
        dictionaryUrl: 'https://cdn.jsdelivr.net/gh/aolcyberchat-gpu/cytube-dictionary-assets@main/espdic.txt',
        plainPrefix:   '/e'
    }
};

// ============================= //
// 💉 INJECT ALL STYLES VIA JS   //
// ============================= //

(function injectStyles() {
    var c = ROOM_CONFIG.colors;
    var style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
        body {
            background-image: url("` + ROOM_CONFIG.backgroundImage + `");
            background-repeat: repeat-y;
            background-size: 100% auto;
            background-attachment: fixed;
            font-family: 'Fredoka One', sans-serif;
        }
        .navbar, .navbar-inverse {
            background-color: rgba(245, 200, 0, 0.65) !important;
            background-image: none !important;
            filter: none !important;
            box-shadow: none !important;
            border-color: rgba(245, 200, 0, 0.8) !important;
            border-bottom: 3px solid ` + c.blue + ` !important;
        }
        .navbar a, .navbar .navbar-brand, .navbar span,
        .navbar-inverse .navbar-nav > li > a,
        .navbar-inverse .navbar-brand,
        .navbar-inverse .navbar-text {
            color: ` + c.white + ` !important;
            text-shadow: -1px -1px 0 ` + c.red + `, 1px -1px 0 ` + c.red + `,
                         -1px  1px 0 ` + c.red + `,  1px  1px 0 ` + c.red + `;
        }
        #contact-heading {
            display: block; width: 90%;
            margin: 20px auto 6px auto;
            padding: 0 0 0 195px;
            box-sizing: border-box;
            background: transparent; border: none;
            font-size: 28px; font-weight: bold;
            font-family: 'Fredoka One', Impact, sans-serif;
            color: ` + c.white + `;
            text-shadow: -1px -1px 0 ` + c.greenDark + `, 1px -1px 0 ` + c.greenDark + `,
                         -1px  1px 0 ` + c.greenDark + `, 1px  1px 0 ` + c.greenDark + `,
                         0 0 10px ` + c.red + `, 0 0 20px ` + c.red + `;
            transition: opacity 0.4s ease;
        }
        #profile-section {
            position: relative;
            margin: 0 auto 20px auto;
            border: 4px solid ` + c.green + `;
            border-radius: 8px; overflow: visible;
            box-shadow: inset 0 0 0 2px ` + c.white + `;
            background-size: 100% auto, contain;
            background-repeat: no-repeat, no-repeat;
            background-position: bottom center, center center;
            background-color: rgba(0, 133, 63, 0.8);
            aspect-ratio: 16 / 9; max-width: 90%;
        }
        #banner-fade {
            position: absolute; inset: 0; border-radius: 6px;
            background-color: rgba(0, 133, 63, 0.8);
            opacity: 0; pointer-events: none;
            transition: opacity 0.4s ease; z-index: 5;
        }
        #banner-fade.fading { opacity: 1; }
        #profile-image {
            position: absolute; top: 25px; left: 25px;
            width: 150px; height: auto; border-radius: 8px;
            border: 3px solid ` + c.green + `;
            box-shadow: 0 0 0 3px ` + c.white + `, 0 0 15px ` + c.green + `;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            z-index: 10;
        }
        #profile-image:hover {
            transform: scale(1.05);
            box-shadow: 0 0 0 3px ` + c.white + `, 0 0 25px ` + c.green + `;
        }
        #slide-dots {
            position: absolute; top: 10px; right: 15px;
            display: flex; gap: 6px; z-index: 10;
        }
        .slide-dot {
            width: 10px; height: 10px; border-radius: 50%;
            background-color: rgba(255, 253, 247, 0.4);
            border: 1px solid ` + c.white + `;
            cursor: pointer; transition: background-color 0.3s ease;
        }
        .slide-dot.active { background-color: ` + c.white + `; }
        #contact-links {
            position: absolute; bottom: 10px; left: 30px;
            display: flex; flex-wrap: wrap; gap: 20px; z-index: 10;
        }
        .contact-link {
            background-color: ` + c.green + `;
            border: 1px solid ` + c.white + `;
            padding: 5px 10px; border-radius: 5px;
            color: ` + c.white + `; text-decoration: none;
            font-size: 16px; text-shadow: 0 0 8px #000;
            display: inline-block;
        }
        .contact-link:hover { color: ` + c.gold + `; }
        #chatwrap, #videowrap { background-color: transparent; border: none; }
        #chatline {
            background-color: ` + c.blue + ` !important;
            border: 2px solid ` + c.white + ` !important;
            color: ` + c.white + ` !important;
        }
        #chatline::placeholder { color: rgba(255,253,247,0.6) !important; }
        #messagebuffer {
            color: #BADA55;
            font-family: 'Fredoka One', Arial, sans-serif;
            font-size: 16px;
            text-shadow: 0 0 5px ` + c.red + `;
        }
        #videowrap { background-color: transparent; border: none; color: ` + c.white + `; }
        .server-msg-reconnect, .server-msg-disconnect {
            color: ` + c.green + `; background-color: ` + c.white + `;
        }
        .btn-default, .btn-default.btn-sm, .btn.btn-sm,
        #leftcontrols .btn, #rightcontrols .btn,
        #plcontrol .btn, #videocontrols .btn {
            background-color: ` + c.blue + ` !important;
            background-image: none !important;
            border: 1px solid ` + c.white + ` !important;
            color: ` + c.white + ` !important;
            text-shadow: none !important;
        }
        .btn-default:hover, .btn-default.btn-sm:hover, .btn.btn-sm:hover,
        #leftcontrols .btn:hover, #rightcontrols .btn:hover,
        #plcontrol .btn:hover, #videocontrols .btn:hover {
            background-color: ` + c.blueDark + ` !important;
            color: ` + c.gold + ` !important;
            border: 1px solid ` + c.white + ` !important;
        }
        #qlockbtn {
            background-color: ` + c.blue + ` !important;
            background-image: none !important;
            border: 1px solid ` + c.white + ` !important;
        }
        #qlockbtn .glyphicon-lock { color: ` + c.red + ` !important; }
        #encode-status {
            font-size: 11px; color: ` + c.gold + `;
            text-align: right; padding: 2px 6px; opacity: 0.8;
            font-family: 'Fredoka One', sans-serif;
        }
        .decoded-msg { color: #BADA55; }
    `;
    document.head.appendChild(style);
})();

// ============================= //
// 🥔 POTATO / GRETA EMOJIS      //
// ============================= //

var emoEmojis = [
    '🥔','🌍','🌱','🚂','🪧','✊', '🌿','🍃','🐟','🫛',
    '🧅','🌊','⛵','🎒','🌲','🌾','🦋','🐝','🌸','🌻',
    '🍟','🫙','🧈','🥗','🧉','☕','🫖','🥾','📢','🗣️',
    '❄️','💨','☀️','🌡️','🌬️','💧','🌵','🌋','🏔️','🌤️',
    '🇸🇪','💙','😤','👁️','🔬','📋','✍️','📣','🫱','🤝',
    '🌏','🌎','♻️','⚡','🌓','🍂','🪸','🐋','🦅','🚂'
];

// ============================= //
// 🀄 CHINESE TIME LOOKUP        //
// 12 Earthly Branches for hours //
// Chinese numerals for min/sec  //
// ============================= //

var TEMPORAL = {
    hours: {
        0:'子', 1:'丑', 2:'丑', 3:'寅', 4:'寅', 5:'卯',
        6:'卯', 7:'辰', 8:'辰', 9:'巳',10:'巳',11:'午',
       12:'午',13:'未',14:'未',15:'申',16:'申',17:'酉',
       18:'酉',19:'戌',20:'戌',21:'亥',22:'亥',23:'子'
    },
    nums: [
        '零','一','二','三','四','五','六','七','八','九',
        '十','十一','十二','十三','十四','十五','十六','十七','十八','十九',
        '二十','二十一','二十二','二十三','二十四','二十五','二十六','二十七','二十八','二十九',
        '三十','三十一','三十二','三十三','三十四','三十五','三十六','三十七','三十八','三十九',
        '四十','四十一','四十二','四十三','四十四','四十五','四十六','四十七','四十八','四十九',
        '五十','五十一','五十二','五十三','五十四','五十五','五十六','五十七','五十八','五十九'
    ]
};

function getTimeChars(hh, mm, ss) {
    return TEMPORAL.hours[hh] + TEMPORAL.nums[mm] + TEMPORAL.nums[ss];
}

// ============================= //
// 🔀 DETERMINISTIC SCRAMBLER    //
// seed derived from SHA256 of   //
// 'potato' — first 8 hex chars  //
// e91c254a = fixed forever      //
// ============================= //

var SHUFFLE_SEED = 0xe91c254a;

function seededShuffle(arr) {
    var seed = SHUFFLE_SEED;
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
        seed = (seed * 1664525 + 1013904223) & 0xffffffff;
        var j = Math.abs(seed) % (i + 1);
        var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
}

function seededUnshuffle(arr) {
    var swaps = [];
    var s = SHUFFLE_SEED;
    for (var i = arr.length - 1; i > 0; i--) {
        s = (s * 1664525 + 1013904223) & 0xffffffff;
        swaps.push([i, Math.abs(s) % (i + 1)]);
    }
    var a = arr.slice();
    // Reverse the swap sequence to invert the shuffle
    for (var k = swaps.length - 1; k >= 0; k--) {
        var tmp = a[swaps[k][0]];
        a[swaps[k][0]] = a[swaps[k][1]];
        a[swaps[k][1]] = tmp;
    }
    return a;
}

// ============================= //
// 📖 DICTIONARY ENGINE          //
// fetch → parse → flip → ready  //
// ============================= //

var DICT = {
    encode: {},   // english  → esperanto
    decode: {},   // esperanto → english
    loaded: false,
    statusEl: null
};

function loadDictionary() {
    fetch(ROOM_CONFIG.encoding.dictionaryUrl)
        .then(function(r) { return r.text(); })
        .then(function(text) {
            var lines = text.split('\n');
            lines.forEach(function(line) {
                line = line.trim();
                if (!line || line.charAt(0) === '#') return;
                var colon = line.indexOf(' : ');
                if (colon === -1) return;
                var esWord = line.substring(0, colon).trim().toLowerCase();
                var enPart = line.substring(colon + 3).trim();
                var enWords = enPart.split(',');
                var firstEn = '';
                enWords.forEach(function(raw, idx) {
                    var en = raw.trim().toLowerCase()
                               .replace(/\(.*?\)/g, '').trim();
                    if (en.substring(0, 3) === 'to ') en = en.substring(3).trim();
                    // Only single words — no multi-word phrases as keys
                    if (!en || en.indexOf(' ') !== -1) return;
                    if (idx === 0) firstEn = en;
                    if (!DICT.encode[en]) DICT.encode[en] = esWord;
                });
                if (firstEn && !DICT.decode[esWord]) DICT.decode[esWord] = firstEn;
            });
            DICT.loaded = true;
            var count = Object.keys(DICT.encode).length;
            if (DICT.statusEl) DICT.statusEl.textContent = '🥔 encode active — /e for plain';
            var cl = document.getElementById('chatline');
            if (cl) cl.placeholder = '🥔 encoding active — type /e to send plain';
            console.log('🥔 ESPDIC loaded:', count, 'english entries');
        })
        .catch(function(err) {
            if (DICT.statusEl) DICT.statusEl.textContent = '⚠️ dictionary offline — sending plain';
            console.warn('🥔 Dictionary failed:', err);
        });
}

// ============================= //
// 🔐 ENCODER                    //
// plain english → 「X|Y|Z」     //
// X = time chars  (shuffled)    //
// Y = esperanto text (shuffled) //
// Z = emoji        (shuffled)   //
// ============================= //

var OPEN  = '「';
var CLOSE = '」';
var PIPE  = '|';

function encodeMessage(text, hh, mm, ss) {
    var words = text.split(/\s+/);
    var translated = words.map(function(word) {
        var m = word.match(/^([a-zA-Z''-]+)([^a-zA-Z]*)$/);
        if (!m) return word;
        var es = DICT.encode[m[1].toLowerCase()];
        return (es || m[1]) + m[2];
    });
    var esText   = translated.join(' ');
    var timeStr  = getTimeChars(hh, mm, ss);
    var emoji    = emoEmojis[ss % emoEmojis.length];
    var shuffled = seededShuffle([timeStr, esText, emoji]);
    var encoded  = OPEN + shuffled.join(PIPE) + CLOSE;

    // Trim if over 320 chars
    if (encoded.length > 320) {
        var overhead = OPEN.length + CLOSE.length + timeStr.length + emoji.length + 2;
        esText   = esText.substring(0, 320 - overhead);
        shuffled = seededShuffle([timeStr, esText, emoji]);
        encoded  = OPEN + shuffled.join(PIPE) + CLOSE;
    }
    return encoded;
}

// ============================= //
// 🔓 DECODER                    //
// 「X|Y|Z」 → plain english     //
// ============================= //

function decodeMessage(raw) {
    if (raw.charAt(0) !== OPEN || raw.charAt(raw.length - 1) !== CLOSE) return null;
    var parts = raw.slice(1, -1).split(PIPE);
    if (parts.length !== 3) return null;
    var restored = seededUnshuffle(parts);
    // restored order: [timeStr, esText, emoji]
    var esWords = restored[1].split(/\s+/);
    var emoji   = restored[2];
    var decoded = esWords.map(function(word) {
        var m = word.match(/^([a-zA-ZĉĝĥĵŝŭĈĜĤĴŜŬ''-]+)([^a-zA-Z]*)$/);
        if (!m) return word;
        var en = DICT.decode[m[1].toLowerCase()];
        return (en || m[1]) + m[2];
    }).join(' ');
    return decoded + ' ' + emoji;
}

// ============================= //
// 🎞 SLIDESHOW ENGINE            //
// ============================= //

var currentSlide = 0;

function applySlide(index, profileSection, contactHeading, dots) {
    var slide = ROOM_CONFIG.bannerSlides[index];
    var wm    = ROOM_CONFIG.bannerWatermark;
    var bg    = wm
        ? 'url("' + slide.image + '"), url("' + wm + '")'
        : 'url("' + slide.image + '")';
    var fadeEl = document.getElementById('banner-fade');
    fadeEl.classList.add('fading');
    setTimeout(function() {
        profileSection.style.backgroundImage = bg;
        if (slide.caption) contactHeading.innerText = slide.caption;
        dots.forEach(function(dot, i) { dot.classList.toggle('active', i === index); });
        fadeEl.classList.remove('fading');
    }, 400);
}

function nextSlide(profileSection, contactHeading, dots) {
    currentSlide = (currentSlide + 1) % ROOM_CONFIG.bannerSlides.length;
    applySlide(currentSlide, profileSection, contactHeading, dots);
}

// ============================= //
// 🏗 BUILD BANNER + CHAT        //
// ============================= //

function initChatEnhancements() {

    // Heading
    var contactHeading = document.createElement('div');
    contactHeading.id = 'contact-heading';
    contactHeading.innerText = ROOM_CONFIG.title;

    // Banner
    var profileSection = document.createElement('div');
    profileSection.id = 'profile-section';
    var wm = ROOM_CONFIG.bannerWatermark;
    profileSection.style.backgroundImage    = wm
        ? 'url("' + ROOM_CONFIG.bannerSlides[0].image + '"), url("' + wm + '")'
        : 'url("' + ROOM_CONFIG.bannerSlides[0].image + '")';
    profileSection.style.backgroundSize     = '100% auto';
    profileSection.style.backgroundRepeat   = 'no-repeat';
    profileSection.style.backgroundPosition = 'bottom center';

    var fadeEl = document.createElement('div');
    fadeEl.id = 'banner-fade';
    profileSection.appendChild(fadeEl);

    // Profile image — click cycles banner
    var profileImage = document.createElement('img');
    profileImage.id    = 'profile-image';
    profileImage.src   = ROOM_CONFIG.profileImage;
    profileImage.title = '/our potato/';
    profileImage.addEventListener('click', function() {
        nextSlide(profileSection, contactHeading, dots);
    });
    profileSection.appendChild(profileImage);

    // Slide dots
    var slideDots = document.createElement('div');
    slideDots.id = 'slide-dots';
    var dots = [];
    ROOM_CONFIG.bannerSlides.forEach(function(slide, i) {
        var dot = document.createElement('div');
        dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
        dot.title = slide.caption || '';
        dot.addEventListener('click', function() {
            currentSlide = i;
            applySlide(currentSlide, profileSection, contactHeading, dots);
        });
        slideDots.appendChild(dot);
        dots.push(dot);
    });
    profileSection.appendChild(slideDots);

    // Social links
    var contactLinks = document.createElement('div');
    contactLinks.id = 'contact-links';
    ROOM_CONFIG.links.forEach(function(link) {
        var a = document.createElement('a');
        a.href = link.href;
        a.className = 'contact-link';
        if (link.newTab) a.target = '_blank';
        a.innerHTML = '<span class="glyphicon glyphicon-' + link.icon + '"></span> ' + link.label;
        contactLinks.appendChild(a);
    });
    profileSection.appendChild(contactLinks);

    // Insert banner into page
    var chatwrap = document.getElementById('chatwrap');
    if (chatwrap && chatwrap.parentNode) {
        chatwrap.parentNode.insertBefore(contactHeading, chatwrap);
        chatwrap.parentNode.insertBefore(profileSection, chatwrap);
    } else {
        document.body.appendChild(contactHeading);
        document.body.appendChild(profileSection);
    }

    // Encode status indicator — appended inside #chatwrap after the form
    if (ROOM_CONFIG.encoding.enabled && chatwrap) {
        var statusEl = document.createElement('div');
        statusEl.id = 'encode-status';
        statusEl.textContent = '⏳ loading dictionary...';
        chatwrap.appendChild(statusEl);
        DICT.statusEl = statusEl;
        loadDictionary();
    }

    // Chatline keydown intercept — fires BEFORE CyTube's jQuery handler
    var chatline = document.getElementById('chatline');
    if (chatline && ROOM_CONFIG.encoding.enabled) {
        chatline.addEventListener('keydown', function(e) {
            if (e.key !== 'Enter' && e.keyCode !== 13) return;
            var text = chatline.value;
            if (!text || !text.trim()) return;

            // /e prefix → strip it and send plain
            var prefix = ROOM_CONFIG.encoding.plainPrefix + ' ';
            if (text.indexOf(prefix) === 0) {
                chatline.value = text.substring(prefix.length);
                return; // let CyTube send plain
            }

            // Dictionary not ready → send plain
            if (!DICT.loaded) return;

            // Encode and let CyTube send the encoded string
            var now = new Date();
            chatline.value = encodeMessage(
                text.trim(),
                now.getHours(),
                now.getMinutes(),
                now.getSeconds()
            );
        }, true); // capture phase — beats CyTube's bubble-phase jQuery listener
    }

    // MutationObserver — decode incoming encoded messages, emoji on plain ones
    var messageBuffer = document.getElementById('messagebuffer');
    if (messageBuffer) {
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (!mutation.addedNodes.length) return;
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeName !== 'DIV' || !node.className.startsWith('chat-msg-')) return;
                    if (node.querySelector('.emoji-span')) return; // already processed

                    // Find the message text span — last span with no class
                    var spans = node.querySelectorAll('span');
                    var msgSpan = null;
                    for (var s = spans.length - 1; s >= 0; s--) {
                        if (!spans[s].className) { msgSpan = spans[s]; break; }
                    }

                    // Attempt decode if dict is loaded
                    if (msgSpan && DICT.loaded) {
                        var raw = msgSpan.textContent.trim();
                        if (raw.charAt(0) === OPEN && raw.charAt(raw.length - 1) === CLOSE) {
                            var decoded = decodeMessage(raw);
                            if (decoded) {
                                msgSpan.textContent = decoded;
                                msgSpan.className   = 'decoded-msg';
                                // Add marker to prevent re-processing
                                var marker = document.createElement('span');
                                marker.className = 'emoji-span';
                                node.appendChild(marker);
                                return;
                            }
                        }
                    }

                    // Plain message — append emoji from timestamp
                    var seconds = new Date().getSeconds();
                    var tsEl = node.querySelector('.timestamp');
                    if (tsEl) {
                        var m = tsEl.innerText.match(/:(\d{2})\]/);
                        if (m) seconds = parseInt(m[1], 10);
                    }
                    appendEmojiToMessage(node, emoEmojis[seconds % emoEmojis.length]);
                });
            });
        });
        observer.observe(messageBuffer, { childList: true });
    }
}

function appendEmojiToMessage(node, emoji) {
    var span = document.createElement('span');
    span.className        = 'emoji-span';
    span.innerHTML        = ' ' + emoji;
    span.style.fontSize   = '16px';
    span.style.marginLeft = '5px';
    node.appendChild(span);
}

function waitForElements() {
    if (document.body && document.getElementById('chatwrap') && document.getElementById('messagebuffer')) {
        initChatEnhancements();
    } else {
        setTimeout(waitForElements, 500);
    }
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    waitForElements();
} else {
    document.addEventListener('DOMContentLoaded', waitForElements);
  }
