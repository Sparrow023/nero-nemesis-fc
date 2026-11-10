
/* =========================================
   NERO NEMESIS FC
   DESIGN PROFESSIONNEL
   VERSION 2.0
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

button, input, select {
    font: inherit;
}

button, a {
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
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1px;
    white-space: nowrap;
    color: var(--green);
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
    gap: 20px;
}

.stat-card {
    min-width: 0;
    min-height: 145px;
    padding: 25px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;
    overflow: hidden;

    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: linear-gradient(145deg,#14251a,#0b120e);

    transition: var(--transition);
}

.stat-card::after {
    content: "";
    position: absolute;
    width: 110px;
    height: 110px;
    right: -40px;
    bottom: -45px;

    border: 1px solid rgba(36,209,123,.12);
    border-radius: 50%;
}

.stat-card:hover {
    transform: translateY(-5px);
    border-color: rgba(36,209,123,.45);
}

.stat-label {
    color: var(--gray);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1px;
}

.stat-card strong {
    color: var(--green);
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 43px;
    font-weight: 800;
    overflow-wrap: anywhere;
}

#meilleur-buteur {
    font-size: 25px;
}

/* 7. EFFECTIF */
.players-grid {
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap: 22px;
}

.player-card {
    min-width: 0;
    min-height: 230px;
    padding: 25px 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

    text-align: center;
    border: 1px solid var(--border);
    border-radius: var(--radius);

    background: linear-gradient(145deg,#14251a,#0a120d);
    transition: var(--transition);
    cursor: pointer;
}

.player-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 15%;
    width: 70%;
    height: 2px;
    background: linear-gradient(90deg,transparent,var(--green),var(--gold),transparent);
}

.player-card:hover {
    transform: translateY(-7px);
    border-color: rgba(36,209,123,.45);
    background: var(--card-hover);
}

.player-avatar {
    width: 75px;
    height: 75px;
    margin-bottom: 15px;

    display: grid;
    place-items: center;

    border-radius: 20px;
    background: linear-gradient(145deg,#205b39,#0b2113);

    color: var(--green);
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 28px;
    font-weight: 900;
}

.player-card h3 {
    max-width: 100%;
    overflow-wrap: anywhere;

    font-family: 'Barlow Condensed',sans-serif;
    font-size: 23px;
}

.player-card p {
    color: var(--gray);
    font-size: 11px;
}

.player-card .player-overall {
    margin-top: 10px;
    color: var(--gold);
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 35px;
    font-weight: 900;
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

/* 9. HISTORIQUE DES MATCHS */
.match-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
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

.match-score {
    flex-shrink: 0;
    color: var(--green);
    font-family: 'Barlow Condensed',sans-serif;
    font-size: 32px;
    font-weight: 900;
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

/* FORMULAIRE DE MATCH */
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
    gap: 12px;
    flex-wrap: wrap;
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
a:focus-visible {
    outline: 2px solid var(--green);
    outline-offset: 4px;
}

/* 14. TABLETTES */
@media (max-width: 1050px) {
    .header {
        padding-left: 4%;
        padding-right: 4%;
        flex-wrap: wrap;
    }

    .navigation {
        gap: 15px;
    }

    .stats-grid,
    .players-grid {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }

    .section {
        padding: 80px 5%;
    }
}

/* 15. MOBILES */
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
        gap: 12px;
    }

    .stat-card {
        min-height: 125px;
        padding: 17px;
    }

    .stat-card strong {
        font-size: 36px;
    }

    .players-grid {
        gap: 12px;
    }

    .player-card {
        min-height: 210px;
        padding: 20px 10px;
    }

    .player-card h3 {
        font-size: 20px;
    }

    .match-card {
        padding: 17px;
        gap: 10px;
    }

    .match-card h3 {
        font-size: 19px;
    }

    .match-score {
        font-size: 26px;
    }

    .admin-panel {
        padding: 22px 16px;
    }

    .player-modal-content {
        padding: 30px 18px;
    }
}

/* 16. PETITS MOBILES */
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

/* =========================================
   NERO NEMESIS FC
   TABLEAU DE BORD — PREMIUM UPGRADE
========================================= */

.stats-grid {
    gap: 22px;
}

.stat-card {
    min-height: 170px;
    padding: 25px 24px;

    border: 1px solid rgba(255,255,255,.07);
    border-radius: 18px;

    background:
        radial-gradient(
            circle at 100% 0%,
            rgba(36,209,123,.13),
            transparent 48%
        ),
        linear-gradient(145deg,#15271c,#0a110d);

    box-shadow: 0 10px 30px rgba(0,0,0,.18);

    transition:
        transform .3s ease,
        border-color .3s ease,
        box-shadow .3s ease;
}

/* Icônes décoratives */

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

/* Lumière décorative */

.stat-card::after {
    width: 150px;
    height: 150px;
    right: -65px;
    bottom: -85px;

    border: 1px solid rgba(36,209,123,.18);
    box-shadow: 0 0 35px rgba(36,209,123,.08);
}

/* Libellés */

.stat-label {
    position: relative;
    z-index: 1;

    color: #aab8ae;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

/* Chiffres */

.stat-card strong {
    position: relative;
    z-index: 1;

    margin-top: 12px;

    color: #35e58c;
    font-family: 'Barlow Condensed',sans-serif;
    font-size: clamp(43px,4vw,55px);
    font-weight: 900;
    line-height: 1;

    text-shadow: 0 0 18px rgba(36,209,123,.16);
}

/* Couleurs spécifiques */

.stat-card:nth-child(2) strong {
    color: #d8b967;
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

/* Survol premium */

.stat-card:hover {
    transform: translateY(-7px);

    border-color: rgba(36,209,123,.5);

    box-shadow:
        0 15px 35px rgba(0,0,0,.3),
        0 0 22px rgba(36,209,123,.09);
}

.stat-card:nth-child(2):hover,
.stat-card:nth-child(8):hover {
    border-color: rgba(216,185,103,.55);
}

/* Animation d'apparition */

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

/* Adaptation mobile */

@media (max-width: 700px) {
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
}

/* =========================================
   NERO NEMESIS FC
   EFFECTIF — ELITE PLAYER CARDS
========================================= */

.players-grid {
    gap: 24px;
}

/* CARTE JOUEUR */

.player-card {
    min-height: 285px;
    padding: 25px 18px;

    position: relative;
    isolation: isolate;

    border: 1px solid rgba(255,255,255,.08);
    border-radius: 20px;

    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(36,209,123,.16),
            transparent 55%
        ),
        linear-gradient(145deg,#17291d,#080e0a);

    box-shadow: 0 12px 30px rgba(0,0,0,.2);

    transition:
        transform .35s ease,
        border-color .35s ease,
        box-shadow .35s ease;
}

/* Ligne supérieure */

.player-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 12%;
    width: 76%;
    height: 3px;

    background: linear-gradient(
        90deg,
        transparent,
        var(--green),
        var(--gold),
        transparent
    );

    opacity: .8;
}

/* Lumière arrière */

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

/* AVATAR */

.player-avatar {
    width: 88px;
    height: 88px;
    margin-bottom: 17px;

    border: 1px solid rgba(36,209,123,.35);
    border-radius: 24px;

    background: linear-gradient(145deg,#245e3b,#0a1a10);

    color: #53eca0;

    font-family: 'Barlow Condensed',sans-serif;
    font-size: 35px;
    font-weight: 900;

    box-shadow:
        0 0 25px rgba(36,209,123,.12),
        inset 0 0 15px rgba(36,209,123,.08);

    transition: transform .35s ease;
}

/* NOM DU JOUEUR */

.player-card h3 {
    position: relative;
    z-index: 1;

    margin-bottom: 5px;

    color: var(--white);

    font-family: 'Barlow Condensed',sans-serif;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: .5px;
}

/* POSTE */

.player-card p {
    color: #aab8ae;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* NOTE GÉNÉRALE */

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

/* SURVOL */

.player-card:hover {
    transform: translateY(-9px);

    border-color: rgba(36,209,123,.55);

    box-shadow:
        0 20px 40px rgba(0,0,0,.35),
        0 0 25px rgba(36,209,123,.1);
}

.player-card:hover .player-avatar {
    transform: scale(1.07);
}

/* FOCUS CLAVIER */

.player-card:focus-visible {
    outline: 2px solid var(--green);
    outline-offset: 4px;
}

/* MOBILE */

@media (max-width: 700px) {
    .players-grid {
        gap: 14px;
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
}

@media (prefers-reduced-motion: reduce) {
    .player-card,
    .player-avatar {
        transition: none;
    }
}

/* =========================================
   NERO NEMESIS FC
   ELITE PLAYER CARDS — DESIGN EXCLUSIF
========================================= */

/* GRILLE */

.players-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 25px;
    align-items: stretch;
}

/* CARTE PRINCIPALE */

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

    background:
        linear-gradient(145deg,
            rgba(28,48,34,.98),
            rgba(7,13,9,.99) 65%);

    box-shadow:
        0 15px 35px rgba(0,0,0,.35),
        inset 0 0 25px rgba(36,209,123,.025);

    text-align: left;

    transition:
        transform .35s ease,
        border-color .35s ease,
        box-shadow .35s ease;
}

/* REFLET VERT */

.elite-card-background {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;

    background:
        radial-gradient(
            ellipse at 50% 35%,
            rgba(36,209,123,.15),
            transparent 55%
        ),
        linear-gradient(
            180deg,
            rgba(216,185,103,.035),
            transparent 35%
        );
}

/* LIGNE DORÉE */

.elite-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;

    background: linear-gradient(
        90deg,
        transparent,
        #20c76a,
        #e2c477,
        #20c76a,
        transparent
    );
}

/* DÉCORATION LUMINEUSE */

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

/* HAUT DE CARTE */

.elite-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
}

/* NOTE GÉNÉRALE */

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

/* POSTE */

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

/* MÉDAILLON CENTRAL */

.elite-monogram {
    width: 120px;
    height: 120px;
    margin: 8px auto 12px;

    display: grid;
    place-items: center;

    border: 1px solid rgba(216,185,103,.55);
    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(36,209,123,.2),
            rgba(9,22,13,.95) 70%
        );

    box-shadow:
        0 0 0 7px rgba(216,185,103,.035),
        0 0 30px rgba(36,209,123,.12),
        inset 0 0 25px rgba(36,209,123,.1);
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

/* IDENTITÉ DU JOUEUR */

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

    background: linear-gradient(
        90deg,
        transparent,
        var(--gold),
        transparent
    );
}

/* SIX ATTRIBUTS */

.elite-attributes {
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
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

/* BAS DE CARTE */

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

/* SURVOL */

.elite-card:hover {
    transform: translateY(-9px);

    border-color: rgba(216,185,103,.65);

    box-shadow:
        0 22px 45px rgba(0,0,0,.45),
        0 0 25px rgba(36,209,123,.12);
}

.elite-card:hover .elite-monogram {
    box-shadow:
        0 0 0 7px rgba(216,185,103,.07),
        0 0 40px rgba(36,209,123,.2),
        inset 0 0 25px rgba(36,209,123,.15);
}

.elite-card:hover .elite-monogram-inner {
    color: #fff0b8;
}

/* CLAVIER */

.elite-card:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 4px;
}

/* TABLETTES */

@media (max-width: 1050px) {
    .players-grid {
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap: 20px;
    }
}

/* MOBILES */

@media (max-width: 700px) {
    .players-grid {
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap: 13px;
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
}

/* TRÈS PETITS ÉCRANS */

@media (max-width: 350px) {
    .players-grid {
        grid-template-columns: 1fr;
    }

    .elite-card {
        min-height: 410px;
    }
}

/* ANIMATIONS ACCESSIBLES */

@media (prefers-reduced-motion: reduce) {
    .elite-card,
    .elite-monogram,
    .elite-monogram-inner {
        transition: none;
    }
}

/* =========================================
   NERO NEMESIS — TOP SCORERS PREMIUM
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
    overflow: hidden;
    text-align: center;
    padding: 28px 12px;
    background: linear-gradient(145deg, #14251a, #09130d);
    border: 1px solid rgba(214, 180, 92, 0.2);
    border-radius: 16px;
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.scorer-podium-card:hover {
    transform: translateY(-6px);
    border-color: var(--gold);
}

.scorer-podium-card.position-1 {
    padding-top: 40px;
    padding-bottom: 40px;
    border-color: var(--gold);
    background: linear-gradient(145deg, #26351d, #101b12);
}

.scorer-podium-card.position-2 {
    border-color: #9da7a1;
}

.scorer-podium-card.position-3 {
    border-color: #a96d45;
}

.scorer-medal {
    font-size: 30px;
    margin-bottom: 12px;
}

.scorer-rank {
    font-size: 13px;
    color: var(--gold);
    font-weight: 800;
    letter-spacing: 2px;
}

.scorer-podium-card h3 {
    color: var(--white);
    font-size: 19px;
    margin: 12px 0;
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

/* TABLEAU */

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

#buteurs tbody tr {
    transition: background 0.25s ease;
}

#buteurs tbody tr:hover {
    background: rgba(32, 199, 106, 0.07);
}

.scorer-position {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 9px;
    background: #17291e;
    color: var(--gold);
    font-weight: 800;
}

.top-scorer-row {
    background: rgba(214, 180, 92, 0.07);
}

.top-scorer-label {
    display: inline-block;
    margin-left: 9px;
    padding: 4px 7px;
    border-radius: 5px;
    background: rgba(214, 180, 92, 0.12);
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

/* MOBILE */

@media (max-width: 600px) {
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
}

@media (prefers-reduced-motion: reduce) {
    .scorer-podium-card,
    #buteurs tbody tr {
        transition: none;
    }
}

/* =========================================
   NERO NEMESIS - HISTORIQUE PREMIUM COMPACT
========================================= */

.match-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.elite-match-card {
    width: 100%;
    min-width: 0;
    padding: 13px 18px;
    background: linear-gradient(110deg, #14251a, #0b130e);
    border: 1px solid #244a32;
    border-radius: 12px;
    transition: border-color 0.2s ease, transform 0.2s ease;
}

.elite-match-card:hover {
    border-color: #24d17b;
    transform: translateY(-2px);
}

.match-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.match-date {
    color: #a0aaa3;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.match-result {
    padding: 4px 9px;
    border-radius: 20px;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.7px;
}

.match-result.win {
    color: #24d17b;
    background: rgba(36, 209, 123, 0.12);
}

.match-result.loss {
    color: #ff6464;
    background: rgba(255, 100, 100, 0.12);
}

.match-result.draw {
    color: #d8b967;
    background: rgba(216, 185, 103, 0.12);
}


/* =========================================
   NERO NEMESIS - MATCH CENTER PREMIUM
========================================= */

.match-card-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
}

.match-team {
    min-width: 115px;
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
    background: linear-gradient(145deg, #173d28, #0b1c12);
    border: 1px solid #27c879;
    color: #35e58b;
    font-size: 14px;
    font-weight: 900;
    box-shadow: 0 4px 15px rgba(32, 199, 106, 0.15);
}

.opponent-logo {
    color: #e2c477;
    border-color: #806b38;
    background: linear-gradient(145deg, #3b3019, #19150c);
}

.match-team h3 {
    margin: 0;
    color: #f5f7f5;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0.6px;
}

.match-score {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: #35e58b;
    font-size: 36px;
    font-weight: 900;
    letter-spacing: 2px;
    white-space: nowrap;
    text-shadow: 0 0 15px rgba(32, 199, 106, 0.2);
}

.match-score small {
    color: #d6b45c;
    font-size: 25px;
}

.match-date {
    font-size: 13px;
    font-weight: 700;
    color: #c1ccc4;
}

.match-result {
    font-size: 11px;
    padding: 6px 12px;
    letter-spacing: 1px;
}

.match-card-top {
    margin-bottom: 16px;
}

.match-card-bottom {
    margin-top: 12px;
}

.match-delete-button {
    font-size: 11px;
    padding: 7px 12px;
}

@media (max-width: 600px) {
    .match-card-content {
        gap: 12px;
    }

    .match-team {
        min-width: 85px;
    }

    .match-team h3 {
        font-size: 11px;
    }

    .match-team-logo {
        width: 36px;
        height: 36px;
    }

    .match-score {
        font-size: 29px;
        gap: 8px;
    }

    .match-date {
        font-size: 11px;
    }
}

.opponent-logo {
    color: #d8b967;
    border-color: #66542c;
    background: rgba(216, 185, 103, 0.10);
}

.match-team h3 {
    margin: 0;
    color: #f5f7f5;
    font-size: 11px;
    font-weight: 800;
}

.match-score {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #24d17b;
    font-size: 29px;
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
    border: 1px solid rgba(255, 100, 100, 0.3);
    border-radius: 6px;
    background: rgba(255, 100, 100, 0.08);
    color: #ff7777;
    font-size: 9px;
    font-weight: 800;
    cursor: pointer;
    transition: 0.2s;
}

.match-delete-button:hover {
    background: #a52e2e;
    color: white;
}

/* VERSION MOBILE */

@media (max-width: 600px) {
    .elite-match-card {
        padding: 12px;
    }

    .match-card-content {
        gap: 5px;
    }

    .match-team h3 {
        font-size: 9px;
    }

    .match-score {
        font-size: 25px;
        gap: 7px;
    }

    .match-team-logo {
        width: 27px;
        height: 27px;
    }
}

/* HISTORIQUE : RÉDUIRE L'ESPACE AU CENTRE */

.match-card-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
}

.match-team {
    flex: 0 1 130px;
}

.match-score {
    flex: 0 0 auto;
    gap: 7px;
    font-size: 25px;
}

.match-team h3 {
    font-size: 10px;
}

@media (max-width: 600px) {
    .match-card-content {
        gap: 10px;
    }

    .match-team {
        flex-basis: 100px;
    }

    .match-score {
        font-size: 22px;
        gap: 5px;
    }
}

