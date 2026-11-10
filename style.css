
/* =========================================
   NERO NEMESIS FC
   SCRIPT PRINCIPAL
========================================= */


/* =========================================
   1. CONFIGURATION SUPABASE
========================================= */

const SUPABASE_URL =
    "https://cmriqcbobrxfelbrctgu.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_xIZ6Ucr5t_T00tFpgndfSg_Qb1kPr6V";

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

let joueurs = [];
let estAdministrateur = false;


/* =========================================
   2. OUTILS GÉNÉRAUX
========================================= */

function afficherErreur(message, erreur) {
    console.error(message, erreur);

    const zone = document.getElementById("message-admin");

    if (zone) {
        zone.textContent = message;
        zone.style.color = "#ff6b6b";
    }
}


function afficherMessageAdmin(message, succes = true) {
    const zone = document.getElementById("message-admin");

    if (!zone) return;

    zone.textContent = message;
    zone.style.color = succes ? "#20c76a" : "#ff6b6b";
}


function echapperHTML(texte) {
    return String(texte ?? "").replace(/[&<>"']/g, caractere => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[caractere]);
}


function normaliserNote(valeur) {
    const nombre = Number(valeur);

    if (!Number.isFinite(nombre)) return 0;

    return Math.min(100, Math.max(0, nombre));
}


function calculerGeneral(joueur) {
    const notes = [
        joueur.vitesse,
        joueur.tir,
        joueur.passe,
        joueur.dribble,
        joueur.defense,
        joueur.physique
    ].map(normaliserNote);

    return Math.round(
        notes.reduce((total, note) => total + note, 0) / 6
    );
}


function initiales(nom) {
    return String(nom || "?")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(mot => mot.charAt(0).toUpperCase())
        .join("");
}


function formaterDate(date) {
    if (!date) return "Date inconnue";

    // Si Supabase renvoie une date au format YYYY-MM-DD
    const valeur = String(date).trim();

    let dateObj;

    if (/^\d{4}-\d{2}-\d{2}$/.test(valeur)) {
        const [annee, mois, jour] = valeur.split("-").map(Number);
        dateObj = new Date(Date.UTC(annee, mois - 1, jour));
    } else {
        dateObj = new Date(valeur);
    }

    if (isNaN(dateObj.getTime())) {
        return "Date invalide";
    }

    return new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    }).format(dateObj);
}

/* =========================================
   3. MATCHS TERMINÉS
========================================= */

async function chargerIdsMatchsTermines() {
    const { data, error } = await db
        .from("matchs")
        .select("id")
        .eq("statut", "termine");

    if (error) throw error;

    return (data || []).map(match => match.id);
}


async function chargerButsDesMatchsTermines() {
    const idsMatchs = await chargerIdsMatchsTermines();

    if (idsMatchs.length === 0) {
        return [];
    }

    const { data, error } = await db
        .from("buts")
        .select("joueur_id")
        .eq("type_but", "joueur")
        .in("match_id", idsMatchs);

    if (error) throw error;

    return data || [];
}


/* =========================================
   4. CHARGEMENT DES JOUEURS
========================================= */

async function chargerJoueurs() {
    const { data, error } = await db
        .from("joueurs")
        .select("*")
        .eq("actif", true)
        .order("nom");

    if (error) {
        afficherErreur("Erreur chargement joueurs :", error);
        return;
    }

    joueurs = data || [];

    afficherJoueurs();
    afficherSelectionParticipants();
}


/* =========================================
   5. EFFECTIF — CARTES NERO ELITE
========================================= */

function afficherJoueurs() {
    const conteneur = document.getElementById("liste-joueurs");

    if (!conteneur) return;

    if (joueurs.length === 0) {
        conteneur.innerHTML = "<p>Aucun joueur disponible.</p>";
        return;
    }

    const attributs = [
        ["VIT", "vitesse"],
        ["TIR", "tir"],
        ["PAS", "passe"],
        ["DRI", "dribble"],
        ["DEF", "defense"],
        ["PHY", "physique"]
    ];

    conteneur.innerHTML = joueurs.map(joueur => {
        const general = calculerGeneral(joueur);

        const notesHTML = attributs.map(([label, champ]) => {
            const note = Math.min(
                100,
                Math.max(0, Number(joueur[champ]) || 0)
            );

            return `
                <div class="elite-stat">
                    <span>${label}</span>
                    <strong>${note}</strong>
                </div>
            `;
        }).join("");

        return `
            <article
                class="player-card elite-card"
                data-joueur-id="${echapperHTML(joueur.id)}"
                tabindex="0"
                role="button"
                aria-label="Voir le profil de ${echapperHTML(joueur.nom)}"
            >

                <div class="elite-card-background"></div>

                <div class="elite-top">

                    <div class="elite-overall">
                        <strong>${general}</strong>
                        <span>GEN</span>
                    </div>

                    <div class="elite-position">
                        ${echapperHTML(joueur.poste || "À définir")}
                    </div>

                </div>

                <div class="elite-monogram">
                    <div class="elite-monogram-inner">
                        ${echapperHTML(initiales(joueur.nom))}
                    </div>
                </div>

                <div class="elite-player-info">

                    <div class="elite-club-name">
                        NERO NEMESIS FC
                    </div>

                    <h3>${echapperHTML(joueur.nom)}</h3>

                    <div class="elite-gold-line"></div>

                </div>

                <div class="elite-attributes">
                    ${notesHTML}
                </div>

                <div class="elite-bottom">
                    <span>PLAYER CARD</span>
                    <span>VOIR LE PROFIL ↗</span>
                </div>

            </article>
        `;
    }).join("");

    conteneur.querySelectorAll(".elite-card").forEach(carte => {
        const ouvrir = () => {
            ouvrirProfilJoueur(carte.dataset.joueurId);
        };

        carte.addEventListener("click", ouvrir);

        carte.addEventListener("keydown", evenement => {
            if (
                evenement.key === "Enter" ||
                evenement.key === " "
            ) {
                evenement.preventDefault();
                ouvrir();
            }
        });
    });
}


/* =========================================
   6. PROFIL D'UN JOUEUR
========================================= */

async function ouvrirProfilJoueur(id) {
    const joueur = joueurs.find(j => j.id === id);

    if (!joueur) return;

    const modal = document.getElementById("profil-joueur-modal");
    const contenu = document.getElementById("contenu-profil-joueur");

    if (!modal || !contenu) return;

    modal.hidden = false;
    contenu.dataset.joueurId = id;

    const general = calculerGeneral(joueur);

    contenu.innerHTML = `
        <div class="profile-header">

            <div class="player-avatar">
                ${echapperHTML(initiales(joueur.nom))}
            </div>

            <h2>${echapperHTML(joueur.nom)}</h2>

            <p>${echapperHTML(joueur.poste || "À définir")}</p>

            <div class="player-overall">
                ${general} GEN
            </div>

        </div>

        <div class="profile-attributes">

            ${creerBarreNote("Vitesse", joueur.vitesse)}
            ${creerBarreNote("Tir", joueur.tir)}
            ${creerBarreNote("Passe", joueur.passe)}
            ${creerBarreNote("Dribble", joueur.dribble)}
            ${creerBarreNote("Défense", joueur.defense)}
            ${creerBarreNote("Physique", joueur.physique)}

        </div>

        <div id="statistiques-profil">
            Chargement des statistiques...
        </div>

        ${estAdministrateur ? creerFormulaireProfil(joueur) : ""}
    `;

    await chargerStatistiquesJoueur(joueur.id);

    if (estAdministrateur) {
        connecterFormulaireProfil(joueur.id);
    }
}


function creerBarreNote(nom, valeur) {
    const note = normaliserNote(valeur);

    return `
        <div class="attribute">

            <div class="attribute-header">
                <span>${nom}</span>
                <strong>${note}</strong>
            </div>

            <div class="attribute-track">
                <div
                    class="attribute-fill"
                    style="width: ${note}%"
                ></div>
            </div>

        </div>
    `;
}


/* =========================================
   7. STATISTIQUES INDIVIDUELLES
========================================= */


async function chargerStatistiquesJoueur(joueurId) {
    const conteneur = document.getElementById("statistiques-profil");

    if (!conteneur) return;

    try {
        const idsMatchsTermines = await chargerIdsMatchsTermines();

        if (
            document.getElementById("contenu-profil-joueur")
                ?.dataset.joueurId !== joueurId
        ) {
            return;
        }

        let totalButs = 0;

        if (idsMatchsTermines.length > 0) {
            const { data: buts, error } = await db
                .from("buts")
                .select("id")
                .eq("joueur_id", joueurId)
                .eq("type_but", "joueur")
                .in("match_id", idsMatchsTermines);

            if (error) throw error;

            totalButs = (buts || []).length;
        }

        if (
            document.getElementById("contenu-profil-joueur")
                ?.dataset.joueurId !== joueurId
        ) {
            return;
        }

        conteneur.innerHTML = `
            <div class="profile-stats">
                <div>
                    <strong>${totalButs}</strong>
                    <span>Buts marqués</span>
                </div>
            </div>
        `;

    } catch (erreur) {
        console.error("Erreur statistiques joueur :", erreur);

        if (
            document.getElementById("contenu-profil-joueur")
                ?.dataset.joueurId === joueurId
        ) {
            conteneur.textContent =
                "Impossible de charger les statistiques.";
        }
    }
}

/* =========================================
   8. FORMULAIRE DE MODIFICATION DU JOUEUR
========================================= */

function creerFormulaireProfil(joueur) {
    const notes = [
        ["vitesse", "Vitesse"],
        ["tir", "Tir"],
        ["passe", "Passe"],
        ["dribble", "Dribble"],
        ["defense", "Défense"],
        ["physique", "Physique"]
    ];

    const postes = [
        "À définir",
        "Gardien",
        "Défenseur",
        "Milieu",
        "Attaquant"
    ];

    return `
        <div class="edit-player">

            <h3>Modifier le joueur</h3>

            <form id="form-profil-joueur">

                <label for="poste-joueur">Poste</label>

                <select id="poste-joueur" required>
                    ${postes.map(poste => `
                        <option
                            value="${echapperHTML(poste)}"
                            ${joueur.poste === poste ? "selected" : ""}
                        >
                            ${echapperHTML(poste)}
                        </option>
                    `).join("")}
                </select>

                ${notes.map(([champ, nom]) => `
                    <label for="note-${champ}">
                        ${nom} / 100
                    </label>

                    <input
                        type="number"
                        id="note-${champ}"
                        min="0"
                        max="100"
                        step="1"
                        value="${normaliserNote(joueur[champ])}"
                        required
                    >
                `).join("")}

                <button type="submit" class="admin-button">
                    ENREGISTRER LES MODIFICATIONS
                </button>

            </form>

            <p id="message-profil"></p>

        </div>
    `;
}


function connecterFormulaireProfil(joueurId) {
    const formulaire = document.getElementById("form-profil-joueur");

    if (!formulaire) return;

    formulaire.addEventListener("submit", async evenement => {
        evenement.preventDefault();

        if (!estAdministrateur) return;

        const champs = [
            "vitesse",
            "tir",
            "passe",
            "dribble",
            "defense",
            "physique"
        ];

        const modifications = {
            poste: document.getElementById("poste-joueur").value
        };

        for (const champ of champs) {
            const valeur = Number(
                document.getElementById(`note-${champ}`).value
            );

            if (
                !Number.isInteger(valeur) ||
                valeur < 0 ||
                valeur > 100
            ) {
                document.getElementById("message-profil").textContent =
                    "Toutes les notes doivent être comprises entre 0 et 100.";

                return;
            }

            modifications[champ] = valeur;
        }

        const bouton = formulaire.querySelector("button");

        bouton.disabled = true;
        bouton.textContent = "ENREGISTREMENT...";

        const { error } = await db
            .from("joueurs")
            .update(modifications)
            .eq("id", joueurId);

        bouton.disabled = false;
        bouton.textContent = "ENREGISTRER LES MODIFICATIONS";

        if (error) {
            console.error(error);

            document.getElementById("message-profil").textContent =
                "Erreur : modification impossible.";

            return;
        }

        document.getElementById("message-profil").textContent =
            "Modifications enregistrées !";

        await chargerJoueurs();

        ouvrirProfilJoueur(joueurId);
    });
}


/* =========================================
   9. FERMETURE DU PROFIL
========================================= */

function fermerProfilJoueur() {
    const modal = document.getElementById("profil-joueur-modal");

    if (modal) {
        modal.hidden = true;
    }
}


/* =========================================
   10. STATISTIQUES DU CLUB
========================================= */

async function chargerStatistiques() {
    const { data: matchs, error } = await db
        .from("matchs")
        .select("buts_nemesis, buts_adversaire")
        .eq("statut", "termine");

    if (error) {
        afficherErreur("Erreur statistiques :", error);
        return;
    }

    const liste = matchs || [];

    let butsMarques = 0;
    let butsEncaisses = 0;
    let victoires = 0;
    let defaites = 0;
    let nuls = 0;

    liste.forEach(match => {
        const nous = Number(match.buts_nemesis) || 0;
        const adversaire = Number(match.buts_adversaire) || 0;

        butsMarques += nous;
        butsEncaisses += adversaire;

        if (nous > adversaire) {
            victoires++;
        } else if (nous < adversaire) {
            defaites++;
        } else {
            nuls++;
        }
    });

    const totalMatchs = liste.length;

    const tauxVictoires = totalMatchs > 0
        ? Math.round((victoires / totalMatchs) * 100)
        : 0;

    const elements = {
        "total-matchs": totalMatchs,
        "total-buts": butsMarques,
        "total-buts-encaisses": butsEncaisses,
        "total-victoires": victoires,
        "total-defaites": defaites,
        "total-nuls": nuls,
        "taux-victoires": tauxVictoires + "%"
    };

    Object.entries(elements).forEach(([id, valeur]) => {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = valeur;
        }
    });

    await chargerMeilleurButeur();
}


/* =========================================
   11. MEILLEUR BUTEUR
========================================= */

async function chargerMeilleurButeur() {
    const conteneur = document.getElementById("meilleur-buteur");

    if (!conteneur) return;

    try {
        const buts = await chargerButsDesMatchsTermines();

        const compteurs = {};

        buts.forEach(but => {
            if (but.joueur_id) {
                compteurs[but.joueur_id] =
                    (compteurs[but.joueur_id] || 0) + 1;
            }
        });

        const classement = joueurs
            .map(joueur => ({
                id: joueur.id,
                nom: joueur.nom,
                buts: compteurs[joueur.id] || 0
            }))
            .sort((a, b) => {
                return b.buts - a.buts ||
                    a.nom.localeCompare(b.nom, "fr");
            });

        if (
            classement.length === 0 ||
            classement[0].buts === 0
        ) {
            conteneur.textContent = "—";
            return;
        }

        const meilleur = classement[0];

        conteneur.textContent =
            `${meilleur.nom} (${meilleur.buts})`;

    } catch (erreur) {
        afficherErreur("Erreur meilleur buteur :", erreur);
    }
}


/* =========================================
   12. CLASSEMENT DES BUTEURS — NERO ELITE
========================================= */

async function chargerClassementButeurs() {
    const conteneur = document.getElementById("classement-buteurs");
    const podium = document.getElementById("classement-podium");

    if (!conteneur) return;

    try {
        const buts = await chargerButsDesMatchsTermines();

        const compteurs = {};

        buts.forEach(but => {
            if (but.joueur_id) {
                compteurs[but.joueur_id] =
                    (compteurs[but.joueur_id] || 0) + 1;
            }
        });

        const classement = joueurs
            .map(joueur => ({
                id: joueur.id,
                nom: joueur.nom,
                buts: compteurs[joueur.id] || 0
            }))
            .sort((a, b) =>
                b.buts - a.buts ||
                a.nom.localeCompare(b.nom, "fr")
            );

        if (classement.length === 0) {
            conteneur.innerHTML = `
                <tr>
                    <td colspan="3">Aucun joueur disponible.</td>
                </tr>
            `;

            if (podium) {
                podium.innerHTML = "";
            }

            return;
        }

        if (podium) {
            const medailles = ["🥇", "🥈", "🥉"];

            podium.innerHTML = classement
                .slice(0, 3)
                .map((joueur, index) => `
                    <div class="scorer-podium-card position-${index + 1}">
                        <div class="scorer-medal">
                            ${medailles[index]}
                        </div>

                        <div class="scorer-rank">
                            ${index + 1}
                        </div>

                        <h3>${echapperHTML(joueur.nom)}</h3>

                        <div class="scorer-goals">
                            <strong>${joueur.buts}</strong>
                            <span>${joueur.buts > 1 ? "BUTS" : "BUT"}</span>
                        </div>
                    </div>
                `)
                .join("");
        }

        conteneur.innerHTML = classement
            .map((joueur, index) => `
                <tr class="${index === 0 && joueur.buts > 0 ? "top-scorer-row" : ""}">
                    <td>
                        <span class="scorer-position">
                            ${index + 1}
                        </span>
                    </td>

                    <td>
                        <strong>${echapperHTML(joueur.nom)}</strong>
                        ${index === 0 && joueur.buts > 0
                            ? '<span class="top-scorer-label">MEILLEUR BUTEUR</span>'
                            : ""}
                    </td>

                    <td>
                        <strong class="scorer-goal-count">
                            ${joueur.buts}
                        </strong>
                    </td>
                </tr>
            `)
            .join("");

    } catch (erreur) {
        afficherErreur("Erreur classement :", erreur);
    }
}


/* =========================================
   13. HISTORIQUE DES MATCHS — NERO ELITE
========================================= */

async function chargerHistoriqueMatchs() {
    const conteneur = document.getElementById("historique-matchs");

    if (!conteneur) return;

    try {
        const { data, error } = await db
            .from("matchs")
            .select("*")
            .eq("statut", "termine")
            .order("date_match", { ascending: false });

        if (error) throw error;

        if (!data || data.length === 0) {
            conteneur.innerHTML = `
                <div class="match-empty">
                    <span>⚽</span>
                    <h3>AUCUN MATCH</h3>
                    <p>Les prochaines rencontres apparaîtront ici.</p>
                </div>
            `;
            return;
        }

        conteneur.innerHTML = data.map(match => {
            const butsNemesis = Number(match.buts_nemesis) || 0;
            const butsAdversaire = Number(match.buts_adversaire) || 0;

            let resultat;
            let classe;

            if (butsNemesis > butsAdversaire) {
                resultat = "VICTOIRE";
                classe = "win";
            } else if (butsNemesis < butsAdversaire) {
                resultat = "DÉFAITE";
                classe = "loss";
            } else {
                resultat = "NUL";
                classe = "draw";
            }

            // Correction de la date
            let dateAffichee = "Date non renseignée";

            if (match.date_match) {
                const date = new Date(match.date_match);

                if (!isNaN(date.getTime())) {
                    dateAffichee = new Intl.DateTimeFormat("fr-FR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        timeZone: "UTC"
                    }).format(date);
                }
            }

            return `
                <article class="match-card elite-match-card">

                    <div class="match-card-top">
                        <span class="match-date">
                            ${echapperHTML(dateAffichee)}
                        </span>

                        <span class="match-result ${classe}">
                            ${resultat}
                        </span>
                    </div>

                    <div class="match-card-content">

                        <div class="match-team">
                            <div class="match-team-logo">NN</div>
                            <h3>NERO NEMESIS</h3>
                        </div>

                        <div class="match-score">
                            <span>${butsNemesis}</span>
                            <small>:</small>
                            <span>${butsAdversaire}</span>
                        </div>

                        <div class="match-team opponent">
                            <div class="match-team-logo opponent-logo">OP</div>
                            <h3>ADVERSAIRE</h3>
                        </div>

                    </div>

                    ${estAdministrateur ? `
                        <div class="match-card-bottom">
                            <button
                                type="button"
                                class="match-delete-button"
                                data-supprimer-match="${echapperHTML(match.id)}"
                            >
                                SUPPRIMER
                            </button>
                        </div>
                    ` : ""}

                </article>
            `;
        }).join("");

        conteneur.querySelectorAll("[data-supprimer-match]").forEach(bouton => {
            bouton.addEventListener("click", () => {
                supprimerMatch(bouton.dataset.supprimerMatch);
            });
        });

    } catch (erreur) {
        afficherErreur("Erreur historique :", erreur);
        conteneur.innerHTML = `
            <p>Impossible de charger l'historique des matchs.</p>
        `;
    }
}

/* =========================================
   14. SÉLECTION DES PARTICIPANTS
========================================= */

function afficherSelectionParticipants() {
    const conteneur = document.getElementById("selection-participants");

    if (!conteneur) return;

    if (joueurs.length === 0) {
        conteneur.innerHTML = "<p>Aucun joueur disponible.</p>";
        return;
    }

    conteneur.innerHTML = joueurs.map(joueur => `
        <label class="participant-option">

            <input
                type="checkbox"
                class="participant-checkbox"
                value="${echapperHTML(joueur.id)}"
            >

            ${echapperHTML(joueur.nom)}

        </label>
    `).join("");

    conteneur.querySelectorAll(".participant-checkbox").forEach(checkbox => {
        checkbox.addEventListener("change", afficherSelectionButeurs);
    });

    afficherSelectionButeurs();
}


/* =========================================
   15. SÉLECTION DES BUTEURS
========================================= */

function afficherSelectionButeurs() {
    const conteneur = document.getElementById("selection-buteurs");

    if (!conteneur) return;

    const selection = [
        ...document.querySelectorAll(".participant-checkbox:checked")
    ];

    if (selection.length === 0) {
        conteneur.innerHTML = "<p>Sélectionnez les joueurs présents.</p>";
        return;
    }

    conteneur.innerHTML = selection.map(checkbox => {
        const joueur = joueurs.find(j => j.id === checkbox.value);

        if (!joueur) return "";

        return `
            <div class="goal-input-row">

                <label for="buts-joueur-${echapperHTML(joueur.id)}">
                    ${echapperHTML(joueur.nom)}
                </label>

                <input
                    type="number"
                    id="buts-joueur-${echapperHTML(joueur.id)}"
                    data-buteur-id="${echapperHTML(joueur.id)}"
                    min="0"
                    step="1"
                    value="0"
                    required
                >

            </div>
        `;
    }).join("");
}


/* =========================================
   16. ENREGISTREMENT D'UN MATCH
========================================= */

async function enregistrerMatch(evenement) {
    evenement.preventDefault();

    if (!estAdministrateur) {
        afficherMessageAdmin(
            "Accès administrateur nécessaire.",
            false
        );

        return;
    }

    const date = document.getElementById("date-match").value;

    const butsNemesis = Number(
        document.getElementById("buts-nemesis").value
    );

    const butsAdversaire = Number(
        document.getElementById("buts-adversaire").value
    );

    if (
        !date ||
        !Number.isInteger(butsNemesis) ||
        !Number.isInteger(butsAdversaire) ||
        butsNemesis < 0 ||
        butsAdversaire < 0
    ) {
        afficherMessageAdmin(
            "Vérifie la date et les scores.",
            false
        );

        return;
    }

    const participants = [
        ...document.querySelectorAll(".participant-checkbox:checked")
    ].map(checkbox => checkbox.value);

    if (participants.length === 0) {
        afficherMessageAdmin(
            "Sélectionne au moins un participant.",
            false
        );

        return;
    }

    const butsJoueurs = [];

    let totalButsJoueurs = 0;

    for (const id of participants) {
        const champ = document.getElementById(`buts-joueur-${id}`);

        const nombre = champ ? Number(champ.value) : 0;

        if (
            !Number.isInteger(nombre) ||
            nombre < 0
        ) {
            afficherMessageAdmin(
                "Vérifie les nombres de buts.",
                false
            );

            return;
        }

        totalButsJoueurs += nombre;

        for (let i = 0; i < nombre; i++) {
            butsJoueurs.push({
                joueur_id: id,
                type_but: "joueur"
            });
        }
    }

    if (totalButsJoueurs > butsNemesis) {
        afficherMessageAdmin(
            "Le nombre de buts individuels dépasse le score du club.",
            false
        );

        return;
    }

    const bouton = document.querySelector(
        "#form-match button[type='submit']"
    );

    if (bouton) {
        bouton.disabled = true;
        bouton.textContent = "ENREGISTREMENT...";
    }

    try {
        // 1. Créer le match.

        const { data: match, error: erreurMatch } = await db
            .from("matchs")
            .insert({
                date_match: date,
                buts_nemesis: butsNemesis,
                buts_adversaire: butsAdversaire,
                statut: "termine"
            })
            .select()
            .single();

        if (erreurMatch) throw erreurMatch;


        // 2. Enregistrer les participants.

        const lignesParticipants = participants.map(id => ({
            match_id: match.id,
            joueur_id: id
        }));

        const { error: erreurParticipants } = await db
            .from("participants")
            .insert(lignesParticipants);

        if (erreurParticipants) throw erreurParticipants;


        // 3. Enregistrer les buts des joueurs.

        const lignesButs = butsJoueurs.map(but => ({
            match_id: match.id,
            joueur_id: but.joueur_id,
            type_but: "joueur"
        }));


        // 4. Enregistrer les buts non attribués.

        const butsContreSonCamp =
            butsNemesis - totalButsJoueurs;

        for (let i = 0; i < butsContreSonCamp; i++) {
            lignesButs.push({
                match_id: match.id,
                joueur_id: null,
                type_but: "contre_son_camp"
            });
        }

        if (lignesButs.length > 0) {
            const { error: erreurButs } = await db
                .from("buts")
                .insert(lignesButs);

            if (erreurButs) throw erreurButs;
        }

        afficherMessageAdmin("Match enregistré avec succès !");

        document.getElementById("form-match").reset();

        afficherSelectionParticipants();

        await Promise.all([
            chargerStatistiques(),
            chargerClassementButeurs(),
            chargerHistoriqueMatchs()
        ]);

    } catch (erreur) {
        afficherErreur(
            "Erreur lors de l'enregistrement :",
            erreur
        );

        afficherMessageAdmin(
            "Une erreur est survenue. Vérifie les données du match.",
            false
        );

    } finally {
        if (bouton) {
            bouton.disabled = false;
            bouton.textContent = "ENREGISTRER LE MATCH";
        }
    }
}


/* =========================================
   17. SUPPRESSION D'UN MATCH
========================================= */

async function supprimerMatch(id) {
    if (!estAdministrateur) return;

    const confirmation = confirm(
        "Veux-tu vraiment supprimer ce match ?"
    );

    if (!confirmation) return;

    const { error } = await db
        .from("matchs")
        .delete()
        .eq("id", id);

    if (error) {
        afficherErreur("Erreur suppression match :", error);
        return;
    }

    await Promise.all([
        chargerStatistiques(),
        chargerClassementButeurs(),
        chargerHistoriqueMatchs()
    ]);
}


/* =========================================
   18. VÉRIFICATION ADMINISTRATEUR
========================================= */

async function verifierAdmin(user) {
    if (!user) return false;

    const { data, error } = await db
        .from("admin_users")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();

    if (error) {
        console.error("Erreur vérification admin :", error);
        return false;
    }

    return !!data;
}


/* =========================================
   19. AFFICHAGE ESPACE ADMIN
========================================= */

function afficherEspaceAdmin(estAdmin) {
    estAdministrateur = estAdmin;

    const formulaireConnexion =
        document.getElementById("form-connexion");

    const boutonDeconnexion =
        document.getElementById("btn-deconnexion");

    const espaceMatch =
        document.getElementById("ajouter-match");

    if (formulaireConnexion) {
        formulaireConnexion.hidden = estAdmin;
    }

    if (boutonDeconnexion) {
        boutonDeconnexion.hidden = !estAdmin;
    }

    if (espaceMatch) {
        espaceMatch.hidden = !estAdmin;
    }

    chargerHistoriqueMatchs();

    if (estAdmin) {
        afficherMessageAdmin(
            "Connexion administrateur réussie !"
        );
    }
}


/* =========================================
   20. CONNEXION ADMINISTRATEUR
========================================= */

async function connecterAdmin(evenement) {
    evenement.preventDefault();

    const email = document.getElementById("email-admin").value;

    const motdepasse =
        document.getElementById("motdepasse-admin").value;

    afficherMessageAdmin("Connexion en cours...");

    const { data, error } = await db.auth.signInWithPassword({
        email,
        password: motdepasse
    });

    if (error) {
        afficherMessageAdmin(
            "Identifiants incorrects.",
            false
        );

        console.error(error);
        return;
    }

    const estAdmin = await verifierAdmin(data.user);

    if (!estAdmin) {
        await db.auth.signOut();

        afficherMessageAdmin(
            "Ce compte ne possède pas les droits administrateur.",
            false
        );

        return;
    }

    afficherEspaceAdmin(true);

    await chargerHistoriqueMatchs();
}


/* =========================================
   21. DÉCONNEXION
========================================= */

async function deconnecterAdmin() {
    const { error } = await db.auth.signOut();

    if (error) {
        afficherErreur("Erreur déconnexion :", error);
        return;
    }

    afficherEspaceAdmin(false);

    afficherMessageAdmin("Déconnexion réussie.");
}


/* =========================================
   22. VÉRIFIER SESSION EXISTANTE
========================================= */

async function verifierSessionAdmin() {
    const { data, error } = await db.auth.getSession();

    if (error) {
        console.error(error);

        afficherEspaceAdmin(false);
        return;
    }

    const user = data.session?.user;

    if (!user) {
        afficherEspaceAdmin(false);
        return;
    }

    const estAdmin = await verifierAdmin(user);

    if (!estAdmin) {
        await db.auth.signOut();

        afficherEspaceAdmin(false);
        return;
    }

    afficherEspaceAdmin(true);
}


/* =========================================
   23. INITIALISATION DU SITE
========================================= */

async function initialiserSite() {
    const formulaireConnexion =
        document.getElementById("form-connexion");

    const boutonDeconnexion =
        document.getElementById("btn-deconnexion");

    const formulaireMatch =
        document.getElementById("form-match");

    const boutonFermerProfil =
        document.getElementById("fermer-profil-joueur");

    const modalProfil =
        document.getElementById("profil-joueur-modal");


    if (formulaireConnexion) {
        formulaireConnexion.addEventListener(
            "submit",
            connecterAdmin
        );
    }

    if (boutonDeconnexion) {
        boutonDeconnexion.addEventListener(
            "click",
            deconnecterAdmin
        );
    }

    if (formulaireMatch) {
        formulaireMatch.addEventListener(
            "submit",
            enregistrerMatch
        );
    }

    if (boutonFermerProfil) {
        boutonFermerProfil.addEventListener(
            "click",
            fermerProfilJoueur
        );
    }

    if (modalProfil) {
        modalProfil.addEventListener("click", evenement => {
            if (evenement.target.id === "profil-joueur-modal") {
                fermerProfilJoueur();
            }
        });
    }

    document.addEventListener("keydown", evenement => {
        if (evenement.key === "Escape") {
            fermerProfilJoueur();
        }
    });


    // Chargement des données.

    await chargerJoueurs();

    await Promise.all([
        chargerStatistiques(),
        chargerClassementButeurs(),
        chargerHistoriqueMatchs()
    ]);

    await verifierSessionAdmin();
}


/* =========================================
   24. LANCEMENT DU SITE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    initialiserSite
);
