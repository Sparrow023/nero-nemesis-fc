
/* =========================================
   NERO NEMESIS FC
   DESIGN PROFESSIONNEL — CSS NETTOYÉ
========================================= */

/* 1. VARIABLES */

:root {
    --background: #070b09;
    --background-light: #0d1711;
    --card: #111f16;
    --card-hover: #17291d;

    --green: #24d17b;
    --green-dark: #08783d;
    --gold: #d8b967;

    --white: #f5f7f5;
    --gray: #a0aaa3;
    --border: rgba(255,255,255,.08);

    --radius: 16px;
    --transition: .25s ease;
}

/* 2. RESET */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}

body {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background: var(--background);
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    line-height: 1.6;
}

button,
input,
select {
    font: inherit;
}

button,
a {
    -webkit-tap-highlight-color: transparent;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    cursor: pointer;
}

[hidden] {
    display: none !important;
}

/* 3. HEADER */

.header {
    width: 100%;
    min-height: 85px;
    padding: 15px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    position: sticky;
    top: 0;
    z-index: 100;

    background: rgba(7,11,9,.96);
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(15px);
}

.logo {
    display: flex;
    align-items: center;
    gap: 13px;
    flex-shrink: 0;
}

.logo-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 13px;

    background: linear-gradient(145deg,#205b39,#0b2113);
    border: 1px solid rgba(36,209,123,.3);

    color: var(--green);
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 25px;
    font-weight: 900;
}

.logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1.15;
}

.logo-text strong {
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 23px;
    letter-spacing: 1px;
}

.logo-text span {
    color: var(--gold);
    font-size: 9px;
    letter-spacing: 2px;
}

.navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
}

.navigation a {
    color: var(--gray);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .5px;
    transition: var(--transition);
}

.navigation a:hover {
    color: var(--green);
}

.header-status {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--green);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1px;
    white-space: nowrap;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 12px var(--green);
}

/* 4. ACCUEIL */

.hero {
    min-height: 650px;
    padding: 110px 10%;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    background:
        radial-gradient(ellipse at 75% 45%,rgba(36,209,123,.15),transparent 40%),
        linear-gradient(115deg,#07100b,#102018 55%,#080d0b);
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 850px;
}

.hero-label {
    display: inline-block;
    padding: 8px 16px;
    margin-bottom: 25px;
    border: 1px solid rgba(36,209,123,.35);
    border-radius: 30px;
    background: rgba(36,209,123,.08);

    color: var(--green);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 2px;
}

.hero h1 {
    display: flex;
    flex-direction: column;
    font-family: 'Barlow Condensed',sans-serif;
    font-size: clamp(85px,12vw,155px);
    font-weight: 900;
    line-height: .83;
    letter-spacing: -2px;
}

.hero h1 span {
    color: var(--green);
}

.hero-description {
    margin-top: 30px;
    color: var(--gold);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 5px;
}

.hero-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 53px;
    padding: 0 30px;
    margin-top: 35px;
    border-radius: 9px;

    background: var(--green);
    color: #06110a;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 1px;
    transition: var(--transition);
}

.hero-button:hover {
    background: #8af0b6;
    transform: translateY(-3px);
}

.hero-decoration {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Barlow Condensed',sans-serif;
    font-size: clamp(180px,28vw,390px);
    font-weight: 900;
    color: rgba(36,209,123,.045);
    pointer-events: none;
}

.hero::before {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    right: 8%;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid rgba(36,209,123,.13);
    border-radius: 50%;
    box-shadow: 0 0 0 45px rgba(36,209,123,.02);
    pointer-events: none;
}

/* 5. SECTIONS */

.section {
    width: 100%;
    max-width: 1600px;
    margin: auto;
    padding: 100px 7%;
}

.section-heading {
    margin-bottom: 45px;
}

.section-tag {
    display: inline-block;
    margin-bottom: 10px;
    color: var(--green);
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 3px;
}

.section-heading h2 {
    font-family: 'Barlow Condensed',sans-serif;
    font-size: clamp(35px,5vw,55px);
    font-weight: 800;
    line-height: 1.1;
}

.section-heading p {
    margin-top: 12px;
    color: var(--gray);
    font-size: 13px;
}

/* 6. TABLEAU DE BORD */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap: 22px;
}

.stat-card {
    min-width: 0;
    min-height: 170px;
    padding: 25px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;
    overflow: hidden;

    border: 1px solid rgba(255,255,255,.07);
    border-radius: 18px;

    background:
        radial-gradient(circle at 100% 0%,rgba(36,209,123,.13),transparent 48%),
        linear-gradient(145deg,#15271c,#0a110d);

    box-shadow: 0 10px 30px rgba(0,0,0,.18);
    transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
}

.stat-card::before {
    position: absolute;
    top: 20px;
    right: 22px;
    font-size: 27px;
    opacity: .75;
    filter: drop-shadow(0 0 8px rgba(36,209,123,.35));
}

.stat-card:nth-child(1)::before { content: "⚽"; }
.stat-card:nth-child(2)::before { content: "🏆"; }
.stat-card:nth-child(3)::before { content: "📉"; }
.stat-card:nth-child(4)::before { content: "🤝"; }
.stat-card:nth-child(5)::before { content: "🥅"; }
.stat-card:nth-child(6)::before { content: "🧤"; }
.stat-card:nth-child(7)::before { content: "📊"; }
.stat-card:nth-child(8)::before { content: "👑"; }

.stat-card::after {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    right: -65px;
    bottom: -85px;
    border: 1px solid rgba(36,209,123,.18);
    border-radius: 50%;
    box-shadow: 0 0 35px rgba(36,209,123,.08);
}

.stat-label {
    position: relative;
    z-index: 1;
    color: #aab8ae;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

.stat-card strong {
    position: relative;
    z-index: 1;
    margin-top: 12px;
    color: #35e58c;
    font-family: 'Barlow Condensed',sans-serif;
    font-size: clamp(43px,4vw,55px);
    font-weight: 900;
    line-height: 1;
    overflow-wrap: anywhere;
    text-shadow: 0 0 18px rgba(36,209,123,.16);
}

.stat-card:nth-child(2) strong {
    color: var(--gold);
    text-shadow: 0 0 18px rgba(216,185,103,.2);
}

.stat-card:nth-child(3) strong {
    color: #ff7777;
}

.stat-card:nth-child(4) strong {
    color: #b8c6bd;
}

#meilleur-buteur {
    max-width: 100%;
    font-size: clamp(20px,2.5vw,29px);
    overflow-wrap: anywhere;
}

.stat-card:hover {
    transform: translateY(-7px);
    border-color: rgba(36,209,123,.5);
    box-shadow: 0 15px 35px rgba(0,0,0,.3), 0 0 22px rgba(36,209,123,.09);
}

.stat-card:nth-child(2):hover,
.stat-card:nth-child(8):hover {
    border-color: rgba(216,185,103,.55);
}

/* 7. EFFECTIF */

.players-grid {
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap: 25px;
    align-items: stretch;
}

/* Ancien format de carte joueur */

.player-card {
    min-width: 0;
    min-height: 285px;
    padding: 25px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    isolation: isolate;
    overflow: hidden;

    text-align: center;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 20px;

    background:
        radial-gradient(circle at 50% 0%,rgba(36,209,123,.16),transparent 55%),
        linear-gradient(145deg,#17291d,#080e0a);

    box-shadow: 0 12px 30px rgba(0,0,0,.2);
    transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
    cursor: pointer;
}

.player-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 12%;
    width: 76%;
    height: 3px;
    background: linear-gradient(90deg,transparent,var(--green),var(--gold),transparent);
    opacity: .8;
}

.player-card::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 180px;
    height: 180px;
    top: -90px;
    right: -75px;
    border-radius: 50%;
    background: rgba(36,209,123,.07);
    filter: blur(25px);
}

.player-avatar {
    width: 88px;
    height: 88px;
    margin-bottom: 17px;
    display: grid;
    place-items: center;

    border: 1px solid rgba(36,209,123,.35);
    border-radius: 24px;
    background: linear-gradient(145deg,#245e3b,#0a1a10);

    color: #53eca0;
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 35px;
    font-weight: 900;

    box-shadow: 0 0 25px rgba(36,209,123,.12), inset 0 0 15px rgba(36,209,123,.08);
    transition: transform .35s ease;
}

.player-card h3 {
    position: relative;
    z-index: 1;
    max-width: 100%;
    margin-bottom: 5px;
    overflow-wrap: anywhere;

    color: var(--white);
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: .5px;
}

.player-card p {
    color: #aab8ae;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.player-card .player-overall {
    min-width: 65px;
    min-height: 65px;
    margin-top: 17px;
    padding: 5px;
    display: grid;
    place-items: center;

    border: 1px solid rgba(216,185,103,.45);
    border-radius: 17px;
    background: rgba(216,185,103,.07);

    color: var(--gold);
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 36px;
    font-weight: 900;
    text-shadow: 0 0 15px rgba(216,185,103,.2);
}

.player-card:hover {
    transform: translateY(-9px);
    border-color: rgba(36,209,123,.55);
    box-shadow: 0 20px 40px rgba(0,0,0,.35), 0 0 25px rgba(36,209,123,.1);
}

.player-card:hover .player-avatar {
    transform: scale(1.07);
}

/* Nouveau format premium de carte joueur */

.elite-card {
    min-width: 0;
    min-height: 420px;
    padding: 22px 19px 16px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;

    position: relative;
    isolation: isolate;
    overflow: hidden;

    border: 1px solid rgba(216,185,103,.25);
    border-radius: 18px;

    background: linear-gradient(145deg,rgba(28,48,34,.98),rgba(7,13,9,.99) 65%);
    box-shadow: 0 15px 35px rgba(0,0,0,.35), inset 0 0 25px rgba(36,209,123,.025);

    text-align: left;
    transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
}

.elite-card-background {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background:
        radial-gradient(ellipse at 50% 35%,rgba(36,209,123,.15),transparent 55%),
        linear-gradient(180deg,rgba(216,185,103,.035),transparent 35%);
}

.elite-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg,transparent,#20c76a,#e2c477,#20c76a,transparent);
}

.elite-card::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    right: -100px;
    top: 100px;
    z-index: -1;
    border-radius: 50%;
    background: rgba(36,209,123,.09);
    filter: blur(45px);
}

.elite-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
}

.elite-overall {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gold);
    line-height: 1;
}

.elite-overall strong {
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 55px;
    font-weight: 900;
    text-shadow: 0 0 18px rgba(216,185,103,.25);
}

.elite-overall span {
    margin-top: 5px;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 3px;
}

.elite-position {
    padding: 7px 11px;
    border: 1px solid rgba(36,209,123,.3);
    border-radius: 5px;
    background: rgba(36,209,123,.07);
    color: var(--green);
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.elite-monogram {
    width: 120px;
    height: 120px;
    margin: 8px auto 12px;
    display: grid;
    place-items: center;

    border: 1px solid rgba(216,185,103,.55);
    border-radius: 50%;
    background: radial-gradient(circle,rgba(36,209,123,.2),rgba(9,22,13,.95) 70%);

    box-shadow: 0 0 0 7px rgba(216,185,103,.035), 0 0 30px rgba(36,209,123,.12), inset 0 0 25px rgba(36,209,123,.1);
}

.elite-monogram-inner {
    width: 94px;
    height: 94px;
    display: grid;
    place-items: center;

    border: 1px solid rgba(36,209,123,.35);
    border-radius: 50%;
    color: #f1d58d;

    font-family: 'Barlow Condensed',sans-serif;
    font-size: 43px;
    font-weight: 900;
    text-shadow: 0 0 18px rgba(216,185,103,.3);
}

.elite-player-info {
    text-align: center;
}

.elite-club-name {
    margin-bottom: 3px;
    color: var(--green);
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 3px;
}

.elite-player-info h3 {
    max-width: 100%;
    overflow-wrap: anywhere;
    color: #fff;
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 27px;
    font-weight: 900;
    letter-spacing: .8px;
    text-transform: uppercase;
}

.elite-gold-line {
    width: 65px;
    height: 2px;
    margin: 9px auto 14px;
    background: linear-gradient(90deg,transparent,var(--gold),transparent);
}

.elite-attributes {
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    gap: 12px 8px;
    padding: 13px 5px;
    border-top: 1px solid rgba(216,185,103,.18);
    border-bottom: 1px solid rgba(216,185,103,.18);
}

.elite-stat {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
}

.elite-stat span {
    color: #aab8ae;
    font-size: 10px;
    font-weight: 800;
}

.elite-stat strong {
    color: #f0d58d;
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 18px;
    font-weight: 900;
}

.elite-bottom {
    margin-top: auto;
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
}

.elite-bottom span:first-child {
    color: rgba(216,185,103,.65);
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
}

.elite-bottom span:last-child {
    color: var(--green);
    font-size: 8px;
    font-weight: 900;
    letter-spacing: .7px;
}

.elite-card:hover {
    transform: translateY(-9px);
    border-color: rgba(216,185,103,.65);
    box-shadow: 0 22px 45px rgba(0,0,0,.45), 0 0 25px rgba(36,209,123,.12);
}

.elite-card:hover .elite-monogram {
    box-shadow: 0 0 0 7px rgba(216,185,103,.07), 0 0 40px rgba(36,209,123,.2), inset 0 0 25px rgba(36,209,123,.15);
}

.elite-card:hover .elite-monogram-inner {
    color: #fff0b8;
}

/* 8. CLASSEMENT */

.table-container {
    width: 100%;
    overflow-x: auto;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--card);
}

table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

th {
    padding: 20px;
    background: rgba(36,209,123,.08);
    color: var(--green);
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 1px;
}

td {
    padding: 19px 20px;
    border-top: 1px solid var(--border);
    color: var(--white);
    font-size: 13px;
}

tbody tr {
    transition: var(--transition);
}

tbody tr:hover {
    background: rgba(36,209,123,.05);
}

td strong {
    color: var(--gold);
    font-size: 18px;
}

/* Classement des buteurs */

#buteurs .table-container {
    overflow-x: auto;
    border: 1px solid var(--border);
    border-radius: 14px;
    background: var(--card);
}

#buteurs table {
    width: 100%;
    border-collapse: collapse;
}

#buteurs thead {
    background: #10251a;
}

#buteurs th {
    padding: 18px 20px;
    color: var(--gold);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-align: left;
}

#buteurs td {
    padding: 17px 20px;
    color: var(--white);
    border-top: 1px solid var(--border);
}

#buteurs tbody tr:hover {
    background: rgba(32,199,106,.07);
}

.scorer-position {
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    background: #17291e;
    color: var(--gold);
    font-weight: 800;
}

.top-scorer-row {
    background: rgba(214,180,92,.07);
}

.top-scorer-label {
    display: inline-block;
    margin-left: 9px;
    padding: 4px 7px;
    border-radius: 5px;
    background: rgba(214,180,92,.12);
    color: var(--gold);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1px;
}

.scorer-goal-count {
    color: var(--green);
    font-size: 19px;
    font-weight: 900;
}

/* Podium des buteurs */

.scorers-podium {
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    align-items: end;
    gap: 18px;
    margin: 35px 0;
}

.scorer-podium-card {
    position: relative;
    overflow: hidden;
    padding: 28px 12px;
    text-align: center;
    background: linear-gradient(145deg,#14251a,#09130d);
    border: 1px solid rgba(214,180,92,.2);
    border-radius: 16px;
    transition: transform .3s ease,border-color .3s ease;
}

.scorer-podium-card:hover {
    transform: translateY(-6px);
    border-color: var(--gold);
}

.scorer-podium-card.position-1 {
    padding-top: 40px;
    padding-bottom: 40px;
    border-color: var(--gold);
    background: linear-gradient(145deg,#26351d,#101b12);
}

.scorer-podium-card.position-2 {
    border-color: #9da7a1;
}

.scorer-podium-card.position-3 {
    border-color: #a96d45;
}

.scorer-medal {
    margin-bottom: 12px;
    font-size: 30px;
}

.scorer-rank {
    color: var(--gold);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 2px;
}

.scorer-podium-card h3 {
    margin: 12px 0;
    color: var(--white);
    font-size: 19px;
    overflow-wrap: anywhere;
}

.scorer-goals {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
}

.scorer-goals strong {
    color: var(--gold);
    font-size: 35px;
    font-weight: 900;
}

.scorer-goals span {
    color: var(--gray);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 2px;
}

/* 9. HISTORIQUE DES MATCHS */

.match-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.match-card {
    min-width: 0;
    min-height: 90px;
    padding: 22px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: linear-gradient(110deg,#14251a,#0b130e);
    transition: var(--transition);
}

.match-card:hover {
    transform: translateY(-3px);
    border-color: rgba(36,209,123,.4);
}

.match-card h3 {
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 22px;
}

.match-card p {
    color: var(--gray);
    font-size: 11px;
}

/* Carte de match premium */

.elite-match-card {
    width: 100%;
    min-width: 0;
    padding: 13px 18px;
    background: linear-gradient(110deg,#14251a,#0b130e);
    border: 1px solid #244a32;
    border-radius: 12px;
    transition: border-color .2s ease,transform .2s ease;
}

.elite-match-card:hover {
    border-color: var(--green);
    transform: translateY(-2px);
}

.match-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
}

.match-date {
    color: #c1ccc4;
    font-size: 13px;
    font-weight: 700;
}

.match-result {
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1px;
}

.match-result.win {
    color: var(--green);
    background: rgba(36,209,123,.12);
}

.match-result.loss {
    color: #ff6464;
    background: rgba(255,100,100,.12);
}

.match-result.draw {
    color: var(--gold);
    background: rgba(216,185,103,.12);
}

.match-card-content {
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    text-align: center;
}

.match-team {
    min-width: 0;
    flex: 0 1 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.match-team-logo {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: linear-gradient(145deg,#173d28,#0b1c12);
    border: 1px solid #27c879;
    color: #35e58b;
    font-size: 14px;
    font-weight: 900;
    box-shadow: 0 4px 15px rgba(32,199,106,.15);
}

.opponent-logo {
    color: var(--gold);
    border-color: #66542c;
    background: rgba(216,185,103,.10);
}

.match-team h3 {
    margin: 0;
    color: var(--white);
    font-size: 10px;
    font-weight: 800;
}

.match-score {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    color: var(--green);
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 25px;
    font-weight: 900;
    white-space: nowrap;
}

.match-score small {
    color: #68766c;
    font-size: 18px;
}

.match-card-bottom {
    display: flex;
    justify-content: flex-end;
    margin-top: 9px;
}

.match-delete-button {
    padding: 5px 10px;
    border: 1px solid rgba(255,100,100,.3);
    border-radius: 6px;
    background: rgba(255,100,100,.08);
    color: #ff7777;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
    transition: .2s;
}

.match-delete-button:hover {
    background: #a52e2e;
    color: white;
}

/* 10. ADMINISTRATION */

.admin-section {
    max-width: 1100px;
}

.admin-panel {
    width: 100%;
    padding: 35px;
    border: 1px solid var(--border);
    border-radius: 20px;
    background: linear-gradient(145deg,#14251a,#0b120e);
}

.admin-panel form {
    display: flex;
    flex-direction: column;
    gap: 13px;
}

.admin-panel h3 {
    margin: 10px 0;
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 25px;
}

.admin-panel label {
    color: var(--gray);
    font-size: 12px;
    font-weight: 700;
}

.admin-panel input,
.admin-panel select {
    width: 100%;
    min-height: 48px;
    padding: 12px 15px;
    border: 1px solid var(--border);
    border-radius: 9px;
    outline: none;
    background: #080f0b;
    color: var(--white);
}

.admin-panel input:focus,
.admin-panel select:focus {
    border-color: var(--green);
}

.admin-button {
    min-height: 50px;
    padding: 12px 22px;
    margin-top: 10px;
    border: none;
    border-radius: 9px;
    background: var(--green);
    color: #06110a;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 1px;
    transition: var(--transition);
}

.admin-button:hover {
    background: #8af0b6;
    transform: translateY(-2px);
}

#message-admin {
    margin-top: 15px;
    font-size: 13px;
}

/* Formulaire de match */

.score-inputs {
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 20px;
}

.score-inputs > div {
    min-width: 0;
}

#selection-participants,
#selection-buteurs {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.participant-option,
.goal-input-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    padding: 12px;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: rgba(0,0,0,.15);
}

/* 11. PROFIL JOUEUR */

.player-modal {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    overflow-y: auto;
    background: rgba(0,0,0,.82);
    backdrop-filter: blur(8px);
}

.player-modal-content {
    position: relative;
    width: min(100%,760px);
    max-height: 90vh;
    overflow-y: auto;
    padding: 35px;
    border: 1px solid rgba(36,209,123,.2);
    border-radius: 22px;
    background: linear-gradient(145deg,#14251a,#080e0a);
}

.close-modal {
    position: absolute;
    top: 15px;
    right: 18px;
    width: 38px;
    height: 38px;
    border: 1px solid var(--border);
    border-radius: 50%;
    background: #17271d;
    color: var(--white);
    font-size: 25px;
}

.profile-header {
    padding-bottom: 25px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.profile-header h2 {
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 38px;
}

.profile-header .player-avatar {
    width: 95px;
    height: 95px;
}

.profile-header .player-overall {
    width: 75px;
    height: 75px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(216,185,103,.4);
    border-radius: 18px;
    color: var(--gold);
    font-size: 35px;
}

.profile-attributes {
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 22px;
    padding: 25px 0;
}

.attribute {
    min-width: 0;
}

.attribute-header {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 8px;
}

.attribute-header strong {
    color: var(--green);
    font-size: 22px;
}

.attribute-track {
    height: 9px;
    overflow: hidden;
    border-radius: 20px;
    background: #29392e;
}

.attribute-fill {
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg,var(--green-dark),var(--green));
}

.profile-stats {
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 12px;
}

.profile-stats > div {
    padding: 18px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: rgba(0,0,0,.15);
}

.profile-stats strong {
    display: block;
    color: var(--gold);
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 30px;
}

/* 12. FOOTER */

.footer {
    padding: 55px 20px;
    text-align: center;
    border-top: 1px solid var(--border);
    background: #050907;
}

.footer-logo {
    color: var(--green);
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 2px;
}

.footer p {
    margin: 8px 0 20px;
    color: var(--gold);
    font-size: 11px;
    letter-spacing: 3px;
}

.footer span {
    color: var(--gray);
    font-size: 10px;
}

/* 13. ACCESSIBILITÉ */

button:focus-visible,
a:focus-visible,
.player-card:focus-visible,
.elite-card:focus-visible {
    outline: 2px solid var(--green);
    outline-offset: 4px;
}

/* 14. ANIMATIONS */

@keyframes dashboardEntry {
    from {
        opacity: 0;
        transform: translateY(15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (prefers-reduced-motion: no-preference) {
    .stat-card {
        animation: dashboardEntry .55s ease both;
    }

    .stat-card:nth-child(2) { animation-delay: .06s; }
    .stat-card:nth-child(3) { animation-delay: .12s; }
    .stat-card:nth-child(4) { animation-delay: .18s; }
    .stat-card:nth-child(5) { animation-delay: .24s; }
    .stat-card:nth-child(6) { animation-delay: .30s; }
    .stat-card:nth-child(7) { animation-delay: .36s; }
    .stat-card:nth-child(8) { animation-delay: .42s; }
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
    }
}

/* 15. TABLETTES */

@media (max-width: 1050px) {
    .header {
        padding-left: 4%;
        padding-right: 4%;
        flex-wrap: wrap;
    }

    .navigation {
        gap: 15px;
    }

    .stats-grid {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }

    .players-grid {
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap: 20px;
    }

    .section {
        padding: 80px 5%;
    }
}

/* 16. MOBILES */

@media (max-width: 700px) {
    .header {
        position: relative;
        justify-content: space-between;
        gap: 12px;
    }

    .logo-icon {
        width: 42px;
        height: 42px;
    }

    .logo-text strong {
        font-size: 19px;
    }

    .header-status {
        font-size: 8px;
    }

    .navigation {
        width: 100%;
        order: 3;
        justify-content: flex-start;
        overflow-x: auto;
        padding: 10px 0;
        flex-wrap: nowrap;
    }

    .navigation a {
        flex-shrink: 0;
        white-space: nowrap;
    }

    .hero {
        min-height: 500px;
        padding: 75px 6%;
    }

    .hero h1 {
        font-size: clamp(65px,15vw,105px);
    }

    .hero-description {
        letter-spacing: 3px;
    }

    .hero-decoration {
        right: -15%;
        opacity: .7;
    }

    .hero::before {
        width: 300px;
        height: 300px;
        right: -100px;
    }

    .section {
        padding: 70px 5%;
    }

    .section-heading {
        margin-bottom: 32px;
    }

    .stats-grid {
        gap: 13px;
    }

    .stat-card {
        min-height: 140px;
        padding: 17px;
        border-radius: 14px;
    }

    .stat-card::before {
        top: 13px;
        right: 13px;
        font-size: 21px;
    }

    .stat-card strong {
        font-size: 37px;
    }

    .players-grid {
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap: 13px;
    }

    .player-card {
        min-height: 250px;
        padding: 20px 10px;
        border-radius: 16px;
    }

    .player-avatar {
        width: 70px;
        height: 70px;
        border-radius: 19px;
        font-size: 29px;
    }

    .player-card h3 {
        font-size: 21px;
    }

    .player-card .player-overall {
        min-width: 55px;
        min-height: 55px;
        font-size: 31px;
    }

    .elite-card {
        min-height: 390px;
        padding: 17px 11px 13px;
        border-radius: 14px;
    }

    .elite-overall strong {
        font-size: 44px;
    }

    .elite-position {
        padding: 6px 7px;
        font-size: 8px;
    }

    .elite-monogram {
        width: 95px;
        height: 95px;
        margin-top: 12px;
    }

    .elite-monogram-inner {
        width: 75px;
        height: 75px;
        font-size: 34px;
    }

    .elite-player-info h3 {
        font-size: 21px;
    }

    .elite-attributes {
        gap: 11px 4px;
        padding: 12px 0;
    }

    .elite-stat {
        gap: 4px;
    }

    .elite-stat span {
        font-size: 9px;
    }

    .elite-stat strong {
        font-size: 16px;
    }

    .elite-bottom span {
        font-size: 7px !important;
    }

    .scorers-podium {
        gap: 8px;
        margin: 25px 0;
    }

    .scorer-podium-card {
        padding: 20px 6px;
        border-radius: 11px;
    }

    .scorer-podium-card.position-1 {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .scorer-medal {
        font-size: 23px;
    }

    .scorer-podium-card h3 {
        font-size: 13px;
    }

    .scorer-goals strong {
        font-size: 27px;
    }

    #buteurs th,
    #buteurs td {
        padding: 13px 10px;
        font-size: 12px;
    }

    .top-scorer-label {
        display: block;
        width: fit-content;
        margin: 5px 0 0;
    }

    .match-card {
        padding: 17px;
        gap: 10px;
    }

    .match-card h3 {
        font-size: 19px;
    }

    .elite-match-card {
        padding: 12px;
    }

    .match-card-top {
        margin-bottom: 10px;
    }

    .match-card-content {
        gap: 10px;
    }

    .match-team {
        flex-basis: 100px;
    }

    .match-team h3 {
        font-size: 9px;
    }

    .match-team-logo {
        width: 27px;
        height: 27px;
    }

    .match-score {
        font-size: 22px;
        gap: 5px;
    }

    .match-date {
        font-size: 11px;
    }

    .match-result {
        font-size: 9px;
        padding: 4px 9px;
    }

    .admin-panel {
        padding: 22px 16px;
    }

    .player-modal-content {
        padding: 30px 18px;
    }
}

/* 17. PETITS MOBILES */

@media (max-width: 400px) {
    .section {
        padding-left: 4%;
        padding-right: 4%;
    }

    .stat-card {
        padding: 13px;
    }

    .stat-card strong {
        font-size: 31px;
    }

    .stat-label {
        font-size: 8px;
    }

    .player-card h3 {
        font-size: 17px;
    }

    .profile-attributes,
    .profile-stats,
    .score-inputs {
        grid-template-columns: 1fr;
    }
}

/* 18. TRÈS PETITS ÉCRANS */

@media (max-width: 350px) {
    .players-grid {
        grid-template-columns: 1fr;
    }

    .elite-card {
        min-height: 410px;
    }
}

/* =========================================
   NERO NEMESIS FC
   PREMIUM VISUAL UPGRADE
========================================= */

/* IDENTITÉ */

:root {
    --green: #35dc88;
    --green-dark: #126c40;
    --gold: #d7b76b;
    --gold-light: #f0d99c;
    --background: #050907;
    --card: #101b14;
}

/* FOND */

body {
    background:
        radial-gradient(ellipse at 50% 0%, rgba(35, 150, 85, .13), transparent 45%),
        #050907;
}

/* NAVIGATION */

.header {
    min-height: 82px;
    background: rgba(5, 9, 7, .92);
    border-bottom: 1px solid rgba(215, 183, 107, .25);
    box-shadow: 0 8px 30px rgba(0, 0, 0, .25);
    backdrop-filter: blur(20px);
}

.logo-icon {
    border: 1px solid rgba(215, 183, 107, .5);
    background: linear-gradient(145deg, #1c5133, #08150d);
    box-shadow: 0 0 20px rgba(53, 220, 136, .15);
}

.logo-text strong {
    letter-spacing: 2px;
}

.navigation a {
    color: #c0c9c2;
    transition: color .25s ease;
}

.navigation a:hover {
    color: var(--gold-light);
}

/* HERO */

.hero {
    min-height: 730px;
    background:
        linear-gradient(90deg, rgba(3, 8, 5, .96), rgba(5, 18, 10, .65)),
        radial-gradient(circle at 78% 45%, rgba(53, 220, 136, .25), transparent 38%),
        #07110b;
    border-bottom: 1px solid rgba(215, 183, 107, .25);
}

.hero::before {
    width: 580px;
    height: 580px;
    border-color: rgba(215, 183, 107, .2);
    box-shadow:
        0 0 0 35px rgba(53, 220, 136, .025),
        0 0 0 80px rgba(215, 183, 107, .025);
}

.hero-label {
    color: var(--gold-light);
    border-color: rgba(215, 183, 107, .45);
    background: rgba(215, 183, 107, .07);
}

.hero h1 {
    font-size: clamp(90px, 13vw, 175px);
    letter-spacing: -3px;
}

.hero h1 span {
    color: var(--gold-light);
    text-shadow: 0 0 35px rgba(215, 183, 107, .15);
}

.hero-description {
    color: #d7c28d;
}

.hero-button {
    background: linear-gradient(110deg, #1cb96c, #54e79b);
    border: 1px solid rgba(255,255,255,.15);
    box-shadow: 0 10px 30px rgba(53, 220, 136, .18);
}

.hero-button:hover {
    background: linear-gradient(110deg, #42df8d, #9af2bd);
    box-shadow: 0 12px 35px rgba(53, 220, 136, .3);
}

/* SECTIONS */

.section {
    padding-top: 105px;
    padding-bottom: 105px;
}

.section + .section {
    border-top: 1px solid rgba(215, 183, 107, .08);
}

.section-tag {
    color: var(--gold);
    border-left: 3px solid var(--green);
    padding-left: 12px;
}

.section-heading h2 {
    font-size: clamp(42px, 5vw, 64px);
    letter-spacing: 1px;
    text-transform: uppercase;
}

.section-heading p {
    color: #a7b2aa;
}

/* STATISTIQUES */

.stat-card {
    min-height: 185px;
    border: 1px solid rgba(215, 183, 107, .18);
    border-radius: 12px;
    background:
        radial-gradient(circle at 100% 0%, rgba(53, 220, 136, .12), transparent 48%),
        linear-gradient(145deg, #17271c, #080e0a);
    box-shadow: 0 15px 35px rgba(0, 0, 0, .28);
}

.stat-card strong {
    color: var(--green);
}

.stat-card:nth-child(2) strong,
.stat-card:nth-child(8) strong {
    color: var(--gold-light);
}

.stat-card:hover {
    transform: translateY(-7px);
    border-color: rgba(215, 183, 107, .65);
    box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
}

/* JOUEURS */

.player-card,
.elite-card {
    border: 1px solid rgba(215, 183, 107, .22);
    border-radius: 14px;
    background:
        radial-gradient(ellipse at 50% 0%, rgba(53, 220, 136, .15), transparent 55%),
        linear-gradient(145deg, #17291d, #070d09);
    box-shadow: 0 18px 40px rgba(0, 0, 0, .32);
}

.player-card:hover,
.elite-card:hover {
    transform: translateY(-8px);
    border-color: var(--gold);
    box-shadow: 0 24px 50px rgba(0, 0, 0, .45);
}

.player-avatar,
.elite-monogram {
    border-color: rgba(215, 183, 107, .55);
}

.elite-monogram {
    box-shadow:
        0 0 0 7px rgba(215, 183, 107, .05),
        0 0 35px rgba(53, 220, 136, .15);
}

.elite-overall strong,
.elite-stat strong {
    color: var(--gold-light);
}

.elite-player-info h3 {
    color: #fff;
    letter-spacing: 1px;
}

/* CLASSEMENT */

#buteurs .table-container {
    border: 1px solid rgba(215, 183, 107, .2);
    border-radius: 12px;
    background: #0b1510;
}

#buteurs thead {
    background: linear-gradient(90deg, #172b1d, #0b160f);
}

#buteurs th {
    color: var(--gold-light);
    letter-spacing: 1.5px;
}

#buteurs td {
    border-color: rgba(255,255,255,.06);
}

#buteurs tbody tr:hover {
    background: rgba(53, 220, 136, .07);
}

.scorer-position {
    border: 1px solid rgba(215, 183, 107, .3);
    background: rgba(215, 183, 107, .08);
    color: var(--gold-light);
}

.scorer-goal-count {
    color: var(--green);
}

/* PODIUM */

.scorer-podium-card {
    border: 1px solid rgba(215, 183, 107, .2);
    border-radius: 12px;
    background:
        radial-gradient(circle at 50% 0%, rgba(215, 183, 107, .1), transparent 60%),
        linear-gradient(145deg, #17271c, #080e0a);
}

.scorer-podium-card.position-1 {
    border-color: var(--gold);
    box-shadow: 0 15px 40px rgba(215, 183, 107, .1);
}

/* MATCHS */

.elite-match-card,
.match-card {
    border: 1px solid rgba(215, 183, 107, .15);
    border-radius: 12px;
    background: linear-gradient(110deg, #16271b, #080e0a);
    box-shadow: 0 12px 30px rgba(0, 0, 0, .25);
}

.elite-match-card:hover,
.match-card:hover {
    border-color: rgba(53, 220, 136, .5);
    transform: translateY(-4px);
}

.match-score {
    color: var(--gold-light);
}

/* ADMINISTRATION */

.admin-panel {
    border: 1px solid rgba(215, 183, 107, .2);
    border-radius: 14px;
    background:
        radial-gradient(ellipse at 100% 0%, rgba(53, 220, 136, .1), transparent 45%),
        linear-gradient(145deg, #14251a, #080e0a);
    box-shadow: 0 20px 45px rgba(0, 0, 0, .3);
}

.admin-panel input,
.admin-panel select {
    border: 1px solid rgba(215, 183, 107, .18);
}

.admin-panel input:focus,
.admin-panel select:focus {
    border-color: var(--green);
    box-shadow: 0 0 0 3px rgba(53, 220, 136, .1);
}

.admin-button {
    background: linear-gradient(110deg, #1cb96c, #54e79b);
}

/* MODAL */

.player-modal {
    background: rgba(0, 0, 0, .88);
    backdrop-filter: blur(14px);
}

.player-modal-content {
    border: 1px solid rgba(215, 183, 107, .35);
    border-radius: 16px;
    background: linear-gradient(145deg, #17291d, #070d09);
    box-shadow: 0 30px 100px rgba(0, 0, 0, .55);
}

/* FOOTER */

.footer {
    border-top: 1px solid rgba(215, 183, 107, .2);
    background:
        radial-gradient(ellipse at 50% 0%, rgba(53, 220, 136, .08), transparent 60%),
        #040705;
}

.footer-logo {
    color: var(--gold-light);
}

/* INTERACTIONS */

button,
a,
.stat-card,
.player-card,
.elite-card,
.elite-match-card {
    transition: all .3s ease;
}

::selection {
    background: rgba(53, 220, 136, .3);
    color: white;
}

/* RESPONSIVE */

@media (max-width: 700px) {
    .hero {
        min-height: 540px;
    }

    .hero h1 {
        font-size: clamp(65px, 15vw, 105px);
        letter-spacing: -2px;
    }

    .section {
        padding-top: 75px;
        padding-bottom: 75px;
    }

    .section-heading h2 {
        font-size: 38px;
    }

    .stat-card {
        min-height: 145px;
        padding: 16px;
    }

    .elite-card {
        min-height: 390px;
    }
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        transition-duration: .01ms !important;
        animation-duration: .01ms !important;
    }
}

/* =========================================
   NERO NEMESIS FC
   01 — EFFECTIF PREMIUM
========================================= */

/* Grille des joueurs */

#liste-joueurs,
.players-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
    gap: 24px;
    align-items: stretch;
}

/* Carte principale */

.elite-card {
    position: relative;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    min-height: 390px;
    padding: 22px;
    overflow: hidden;
    cursor: pointer;

    background:
        radial-gradient(
            circle at 50% 35%,
            rgba(32, 199, 106, 0.13),
            transparent 48%
        ),
        linear-gradient(145deg, #14251b, #08120c 65%, #050906);

    border: 1px solid rgba(214, 180, 92, 0.25);
    border-radius: 18px;

    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}

/* Lumière décorative */

.elite-card-background {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;

    background:
        linear-gradient(
            120deg,
            transparent 30%,
            rgba(32, 199, 106, 0.07),
            transparent 70%
        );

    opacity: 0.7;
}

/* Animation au survol */

.elite-card:hover {
    transform: translateY(-7px);
    border-color: rgba(214, 180, 92, 0.75);

    box-shadow:
        0 18px 40px rgba(0, 0, 0, 0.4),
        0 0 22px rgba(32, 199, 106, 0.09);
}

.elite-card:focus-visible {
    outline: 2px solid #d6b45c;
    outline-offset: 4px;
}

/* Partie supérieure */

.elite-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
}

.elite-overall {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #d6b45c;
}

.elite-overall strong {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 42px;
    line-height: 1;
    font-weight: 800;
}

.elite-overall span {
    margin-top: 4px;
    font-size: 10px;
    letter-spacing: 2px;
    font-weight: 800;
}

.elite-position {
    padding: 7px 12px;
    border: 1px solid rgba(214, 180, 92, 0.35);
    border-radius: 30px;

    background: rgba(214, 180, 92, 0.08);
    color: #e1c77f;

    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* Monogramme du joueur */

.elite-monogram {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    min-height: 120px;
    padding: 18px 0;
}

.elite-monogram-inner {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 112px;
    height: 112px;

    border: 1px solid rgba(214, 180, 92, 0.55);
    border-radius: 50%;

    background:
        radial-gradient(circle, #1c3927, #09140d 75%);

    color: #e1c77f;

    font-family: "Barlow Condensed", sans-serif;
    font-size: 43px;
    font-weight: 800;

    box-shadow:
        0 0 0 8px rgba(214, 180, 92, 0.035),
        0 0 35px rgba(32, 199, 106, 0.15);
}

/* Identité du joueur */

.elite-player-info {
    text-align: center;
}

.elite-club-name {
    color: #d6b45c;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 3px;
}

.elite-player-info h3 {
    margin: 7px 0;
    color: #ffffff;

    font-family: "Barlow Condensed", sans-serif;
    font-size: 27px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.elite-gold-line {
    width: 45px;
    height: 2px;
    margin: 10px auto 16px;

    background: linear-gradient(
        90deg,
        transparent,
        #d6b45c,
        transparent
    );
}

/* Notes techniques */

.elite-attributes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
    padding: 13px;

    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;

    background: rgba(0, 0, 0, 0.22);
}

.elite-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
}

.elite-stat span {
    color: #91a397;
    font-size: 10px;
    font-weight: 700;
}

.elite-stat strong {
    color: #f4f5ed;
    font-size: 13px;
    font-weight: 800;
}

/* Bas de carte */

.elite-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    margin-top: 17px;
    padding-top: 13px;

    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.elite-bottom span {
    color: #84978b;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 1px;
}

.elite-bottom span:last-child {
    color: #d6b45c;
}

/* Adaptation mobile */

@media (max-width: 600px) {
    #liste-joueurs,
    .players-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .elite-card {
        min-height: 350px;
        padding: 13px;
        border-radius: 14px;
    }

    .elite-overall strong {
        font-size: 34px;
    }

    .elite-monogram {
        min-height: 95px;
    }

    .elite-monogram-inner {
        width: 82px;
        height: 82px;
        font-size: 32px;
    }

    .elite-player-info h3 {
        font-size: 20px;
    }

    .elite-attributes {
        gap: 7px;
        padding: 9px;
    }

    .elite-stat span {
        font-size: 9px;
    }

    .elite-stat strong {
        font-size: 11px;
    }

    .elite-bottom span {
        font-size: 7px;
        letter-spacing: 0.5px;
    }
}

@media (max-width: 350px) {
    #liste-joueurs,
    .players-grid {
        grid-template-columns: 1fr;
    }
}

@media (prefers-reduced-motion: reduce) {
    .elite-card {
        transition: none;
    }
}

/* =========================================
   NERO NEMESIS FC
   02 — PODIUM PREMIUM
========================================= */

.scorers-podium {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: end;
    gap: 18px;
    margin: 35px 0;
}

.scorer-podium-card {
    position: relative;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 0;
    min-height: 210px;
    padding: 24px 14px;
    overflow: hidden;

    background: linear-gradient(145deg, #14251b, #08120c);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 18px;

    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);

    transition: transform 0.3s ease, border-color 0.3s ease;
}

.scorer-podium-card:hover {
    transform: translateY(-6px);
    border-color: rgba(214, 180, 92, 0.5);
}

/* Première place */

.scorer-podium-card.position-1 {
    min-height: 250px;
    background:
        radial-gradient(circle at 50% 0%, rgba(214, 180, 92, 0.2), transparent 65%),
        linear-gradient(145deg, #26331e, #101b11);
    border-color: rgba(214, 180, 92, 0.55);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
}

.scorer-medal {
    margin-bottom: 10px;
    font-size: 31px;
}

.scorer-rank {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    margin-bottom: 12px;

    border: 1px solid rgba(214, 180, 92, 0.4);
    border-radius: 50%;

    color: #e4c979;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 17px;
    font-weight: 800;
}

.scorer-podium-card h3 {
    max-width: 100%;
    margin: 0 0 15px;
    overflow-wrap: anywhere;
    text-align: center;

    color: #ffffff;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 21px;
    font-weight: 800;
    text-transform: uppercase;
}

.scorer-goals {
    display: flex;
    align-items: baseline;
    gap: 7px;
}

.scorer-goals strong {
    color: #d6b45c;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 39px;
    font-weight: 800;
    line-height: 1;
}

.scorer-goals span {
    color: #a4b4a8;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1.5px;
}

/* Première place plus imposante */

.position-1 .scorer-goals strong {
    font-size: 48px;
}

.position-1 .scorer-rank {
    background: rgba(214, 180, 92, 0.12);
}

/* Adaptation mobile */

@media (max-width: 600px) {
    .scorers-podium {
        gap: 9px;
        margin: 25px 0;
    }

    .scorer-podium-card {
        min-height: 175px;
        padding: 16px 7px;
        border-radius: 13px;
    }

    .scorer-podium-card.position-1 {
        min-height: 205px;
    }

    .scorer-medal {
        font-size: 24px;
    }

    .scorer-podium-card h3 {
        font-size: 15px;
    }

    .scorer-goals strong {
        font-size: 29px;
    }

    .position-1 .scorer-goals strong {
        font-size: 36px;
    }

    .scorer-goals span {
        font-size: 8px;
        letter-spacing: 0.5px;
    }
}

@media (max-width: 350px) {
    .scorers-podium {
        gap: 5px;
    }

    .scorer-podium-card {
        padding: 12px 4px;
    }

    .scorer-podium-card h3 {
        font-size: 12px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .scorer-podium-card {
        transition: none;
    }
}

/* =========================================
   NERO NEMESIS FC
   03 — CLASSEMENT DES BUTEURS
========================================= */

.table-container {
    width: 100%;
    overflow-x: auto;
    border: 1px solid rgba(214, 180, 92, 0.16);
    border-radius: 16px;
    background: #0b150e;
}

#classement-buteurs {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

#classement-buteurs th {
    padding: 17px 20px;
    background: #14251b;
    color: #d6b45c;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    white-space: nowrap;
}

#classement-buteurs td {
    padding: 17px 20px;
    color: #e9eee9;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    font-size: 14px;
}

#classement-buteurs tbody tr {
    transition: background 0.2s ease;
}

#classement-buteurs tbody tr:hover {
    background: rgba(32, 199, 106, 0.07);
}

#classement-buteurs td strong {
    color: #f5f5f0;
}

/* Position */

.scorer-position {
    display: inline-grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid rgba(214, 180, 92, 0.25);
    border-radius: 50%;
    color: #d6b45c;
    font-weight: 800;
    font-size: 12px;
}

/* Nombre de buts */

#classement-buteurs .scorer-goal-count {
    color: #d6b45c;
    font-size: 19px;
    font-weight: 800;
}

/* Meilleur buteur */

#classement-buteurs tr.top-scorer-row {
    background: rgba(214, 180, 92, 0.07);
}

#classement-buteurs tr.top-scorer-row .scorer-position {
    background: rgba(214, 180, 92, 0.15);
    border-color: #d6b45c;
}

.top-scorer-label {
    display: inline-block;
    margin-left: 9px;
    padding: 4px 7px;
    border: 1px solid rgba(214, 180, 92, 0.3);
    border-radius: 4px;
    color: #d6b45c;
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.7px;
    vertical-align: middle;
}

/* Mobile */

@media (max-width: 600px) {
    #classement-buteurs th,
    #classement-buteurs td {
        padding: 13px 10px;
        font-size: 12px;
    }

    .top-scorer-label {
        display: block;
        width: fit-content;
        margin: 5px 0 0;
    }

    .scorer-position {
        width: 26px;
        height: 26px;
    }
}

@media (prefers-reduced-motion: reduce) {
    #classement-buteurs tbody tr {
        transition: none;
    }
}

/* =========================================
   NERO NEMESIS FC
   04 — HISTORIQUE DES MATCHS
========================================= */

#historique-matchs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

/* Carte du match */

.elite-match-card {
    position: relative;
    overflow: hidden;
    padding: 20px;

    background:
        radial-gradient(circle at 50% 50%, rgba(32, 199, 106, 0.08), transparent 65%),
        linear-gradient(145deg, #14251b, #08120c);

    border: 1px solid rgba(214, 180, 92, 0.18);
    border-radius: 16px;

    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);

    transition: transform 0.25s ease, border-color 0.25s ease;
}

.elite-match-card:hover {
    transform: translateY(-4px);
    border-color: rgba(214, 180, 92, 0.5);
}

/* En-tête */

.match-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
}

.match-date {
    color: #91a397;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.6px;
}

.match-result {
    padding: 6px 10px;
    border-radius: 30px;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 1px;
}

.match-result.win {
    color: #43e58b;
    background: rgba(32, 199, 106, 0.13);
    border: 1px solid rgba(32, 199, 106, 0.25);
}

.match-result.loss {
    color: #ff8585;
    background: rgba(255, 80, 80, 0.1);
    border: 1px solid rgba(255, 80, 80, 0.22);
}

.match-result.draw {
    color: #e1c77f;
    background: rgba(214, 180, 92, 0.1);
    border: 1px solid rgba(214, 180, 92, 0.22);
}

/* Équipes et score */

.match-card-content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    align-items: center;
    gap: 10px;
}

.match-team {
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.match-team-logo {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    margin-bottom: 10px;

    border: 1px solid rgba(214, 180, 92, 0.5);
    border-radius: 50%;

    background: linear-gradient(145deg, #1d3c28, #09140d);
    color: #e1c77f;

    font-family: "Barlow Condensed", sans-serif;
    font-size: 17px;
    font-weight: 900;
}

.match-team h3 {
    margin: 0;
    color: #f1f5f1;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.5px;
    overflow-wrap: anywhere;
}

.opponent-logo {
    border-color: rgba(255, 255, 255, 0.16);
    background: #18211b;
    color: #aab7ad;
}

/* Score central */

.match-score {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #ffffff;

    font-family: "Barlow Condensed", sans-serif;
    font-size: 38px;
    font-weight: 900;
}

.match-score small {
    color: #d6b45c;
    font-size: 24px;
}

/* Suppression admin */

.match-card-bottom {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    padding-top: 13px;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.match-delete-button {
    padding: 8px 12px;
    border: 1px solid rgba(255, 100, 100, 0.25);
    border-radius: 7px;
    background: rgba(255, 80, 80, 0.08);
    color: #ff8585;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background 0.2s ease;
}

.match-delete-button:hover {
    background: rgba(255, 80, 80, 0.18);
}

/* Historique vide */

.match-empty {
    grid-column: 1 / -1;
    padding: 45px 20px;
    text-align: center;
    background: #0b150e;
    border: 1px solid rgba(214, 180, 92, 0.15);
    border-radius: 16px;
}

.match-empty > span {
    font-size: 35px;
}

.match-empty h3 {
    color: #d6b45c;
    letter-spacing: 2px;
}

.match-empty p {
    color: #91a397;
}

/* Mobile */

@media (max-width: 600px) {
    #historique-matchs {
        grid-template-columns: 1fr;
        gap: 14px;
    }

    .elite-match-card {
        padding: 16px;
    }

    .match-score {
        font-size: 33px;
    }

    .match-team-logo {
        width: 42px;
        height: 42px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .elite-match-card,
    .match-delete-button {
        transition: none;
    }
}


/* =========================================
   NERO NEMESIS FC
   06 — PROFIL INDIVIDUEL DES JOUEURS
========================================= */

#profil-joueur-modal {
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.82);
}

.player-modal-content {
    position: relative;
    width: min(92%, 550px);
    max-height: 90vh;
    overflow-y: auto;
    padding: 30px;

    background: linear-gradient(145deg, #14251b, #07110b);
    border: 1px solid rgba(214, 180, 92, 0.3);
    border-radius: 20px;

    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.55);
}

/* Fermeture */

.close-modal {
    color: #d6b45c;
    transition: transform 0.2s ease, color 0.2s ease;
}

.close-modal:hover {
    color: #ffffff;
    transform: rotate(90deg);
}

/* En-tête du profil */

.profile-header {
    text-align: center;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(214, 180, 92, 0.2);
}

.player-avatar {
    display: grid;
    place-items: center;
    width: 100px;
    height: 100px;
    margin: 0 auto 15px;

    border: 2px solid #d6b45c;
    border-radius: 50%;

    background: linear-gradient(145deg, #205331, #08130c);
    color: #f1d78e;

    font-family: "Barlow Condensed", sans-serif;
    font-size: 35px;
    font-weight: 900;

    box-shadow: 0 0 30px rgba(32, 199, 106, 0.15);
}

.profile-header h2,
.profile-header h3 {
    color: #ffffff;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    letter-spacing: 1px;
}

.player-overall {
    color: #e1c77f;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 48px;
    font-weight: 900;
}

/* Caractéristiques */

.profile-attributes {
    display: grid;
    gap: 18px;
    margin-top: 25px;
}

.attribute {
    display: grid;
    gap: 8px;
}

.attribute-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    color: #e8eee9;
    font-size: 12px;
    font-weight: 700;
}

.attribute-track {
    width: 100%;
    height: 8px;
    overflow: hidden;
    background: #26352b;
    border-radius: 20px;
}

.attribute-fill {
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #08783d, #20c76a, #d6b45c);
}

/* Modification du joueur */

.edit-player {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    padding: 12px 22px;

    border: 1px solid rgba(214, 180, 92, 0.5);
    border-radius: 8px;

    background: rgba(214, 180, 92, 0.1);
    color: #e1c77f;

    font-size: 11px;
    font-weight: 900;
    letter-spacing: 1px;

    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
}

.edit-player:hover {
    background: #d6b45c;
    color: #07110b;
}

/* Mobile */

@media (max-width: 600px) {
    .player-modal-content {
        padding: 22px 18px;
        border-radius: 16px;
    }

    .player-avatar {
        width: 85px;
        height: 85px;
        font-size: 30px;
    }

    .player-overall {
        font-size: 40px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .close-modal,
    .edit-player {
        transition: none;
    }
}

/* =========================================
   NERO NEMESIS FC
   08 — HEADER, ACCUEIL ET FOOTER
========================================= */

/* HEADER */

.header {
    background: rgba(5, 13, 8, 0.94);
    border-bottom: 1px solid rgba(214, 180, 92, 0.2);
    backdrop-filter: blur(14px);
}

.logo-text {
    color: #f5f5f0;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 900;
    letter-spacing: 2px;
}

.logo-icon {
    border: 1px solid rgba(214, 180, 92, 0.5);
    box-shadow: 0 0 18px rgba(32, 199, 106, 0.15);
}

.navigation a {
    color: #b8c5bc;
    transition: color 0.2s ease;
}

.navigation a:hover,
.navigation a.active {
    color: #e1c77f;
}

.header-status {
    color: #b8c5bc;
}

.status-dot {
    box-shadow: 0 0 10px #20c76a;
}

/* ACCUEIL */

.hero {
    position: relative;
    overflow: hidden;
    background:
        radial-gradient(ellipse at 75% 45%, rgba(32, 199, 106, 0.13), transparent 45%),
        linear-gradient(135deg, #07110b, #102619 60%, #07110b);
}

.hero-content {
    position: relative;
    z-index: 2;
}

.hero-label {
    color: #e1c77f;
    letter-spacing: 3px;
    font-weight: 800;
}

.hero h1 {
    color: #f5f5f0;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 900;
    letter-spacing: 1px;
}

.hero h1 span {
    color: #d6b45c;
    text-shadow: 0 0 25px rgba(214, 180, 92, 0.15);
}

.hero-description {
    color: #aab9ae;
    line-height: 1.8;
}

.hero-button {
    border: 1px solid rgba(214, 180, 92, 0.55);
    background: linear-gradient(135deg, #d6b45c, #b8943f);
    color: #08120c;
    font-weight: 900;
    transition: transform 0.25s ease, filter 0.25s ease;
}

.hero-button:hover {
    transform: translateY(-3px);
    filter: brightness(1.1);
}

.hero-decoration {
    opacity: 0.55;
}

/* TITRES DES SECTIONS */

.section-heading h2 {
    color: #f5f5f0;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 900;
    letter-spacing: 1.5px;
}

.section-heading h2 span {
    color: #d6b45c;
}

/* FOOTER */

.footer {
    background: #050b07;
    border-top: 1px solid rgba(214, 180, 92, 0.2);
}

.footer-logo {
    color: #e1c77f;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 900;
    letter-spacing: 2px;
}

.footer p,
.footer a {
    color: #91a397;
}

.footer a:hover {
    color: #d6b45c;
}

/* MOBILE */

@media (max-width: 600px) {
    .hero h1 {
        font-size: clamp(38px, 10vw, 58px);
    }

    .hero-description {
        font-size: 13px;
    }

    .section-heading h2 {
        font-size: 27px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .navigation a,
    .hero-button {
        transition: none;
    }
}
