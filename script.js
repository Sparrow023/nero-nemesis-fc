
/* =====================================
   NERO NEMESIS FC
   SCRIPT JAVASCRIPT
===================================== */


/* =====================================
   1. CONFIGURATION DE SUPABASE
===================================== */

const SUPABASE_URL = "https://cmriqcbobrxfelbrctgu.supabase.co";

const SUPABASE_KEY = "sb_publishable_xIZ6Ucr5t_T00tFpgndfSg_Qb1kPr6V";

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY,
    {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    }
);


/* =====================================
   2. VARIABLES GLOBALES
===================================== */

let joueurs = [];
let estAdministrateur = false;


/* =====================================
   3. OUTILS D'AFFICHAGE
===================================== */

function afficherErreur(message, erreur) {
    console.error(message, erreur);
}

function afficherMessageAdmin(message) {
    const element = document.getElementById("message-admin");

    if (element) {
        element.textContent = message;
    }
}

function echapperHTML(valeur) {
    return String(valeur ?? "").replace(/[&<>"']/g, caractere => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[caractere]);
}


/* =====================================
   4. CHARGEMENT DES JOUEURS
===================================== */

async function chargerJoueurs() {

    const { data, error } = await db
        .from("joueurs")
        .select("*")
        .eq("actif", true)
        .order("nom");

    if (error) {
        afficherErreur("Erreur chargement joueurs :", error);

        document.getElementById("liste-joueurs").textContent =
            "Impossible de charger les joueurs.";

        return;
    }

    joueurs = data || [];

    afficherJoueurs();
    afficherSelectionParticipants();
}


/* =====================================
   5. AFFICHAGE DE L'EFFECTIF
===================================== */

function afficherJoueurs() {

    const conteneur = document.getElementById("liste-joueurs");

    if (!conteneur) return;

    if (joueurs.length === 0) {
        conteneur.textContent = "Aucun joueur disponible.";
        return;
    }

    conteneur.innerHTML = joueurs.map(joueur => {

        const nom = echapperHTML(joueur.nom);

        return `
            <article class="player-card">

                <div class="player-avatar">
                    ${nom.charAt(0).toUpperCase()}
                </div>

                <h3>${nom}</h3>

                <p>NERO NEMESIS</p>

            </article>
        `;

    }).join("");
}


/* =====================================
   6. SÉLECTION DES PARTICIPANTS
===================================== */

function afficherSelectionParticipants() {

    const conteneur = document.getElementById(
        "selection-participants"
    );

    if (!conteneur) return;

    if (joueurs.length === 0) {
        conteneur.textContent = "Aucun joueur disponible.";
        return;
    }

    conteneur.innerHTML = joueurs.map(joueur => {

        return `
            <div class="participant-item">

                <label for="participant-${joueur.id}">
                    ${echapperHTML(joueur.nom)}
                </label>

                <input
                    type="checkbox"
                    class="checkbox-participant"
                    id="participant-${joueur.id}"
                    value="${joueur.id}"
                    onchange="afficherChampsButs()"
                >

            </div>
        `;

    }).join("");
}


/* =====================================
   7. CHAMPS DE SAISIE DES BUTS
===================================== */

function afficherChampsButs() {

    const conteneur = document.getElementById(
        "selection-buteurs"
    );

    if (!conteneur) return;

    const participants = [
        ...document.querySelectorAll(
            ".checkbox-participant:checked"
        )
    ];

    if (participants.length === 0) {
        conteneur.textContent =
            "Sélectionne les joueurs présents pour saisir leurs buts.";

        return;
    }

    conteneur.innerHTML = participants.map(checkbox => {

        const joueur = joueurs.find(
            j => j.id === checkbox.value
        );

        if (!joueur) return "";

        return `
            <div class="scorer-item">

                <label for="buts-${joueur.id}">
                    ${echapperHTML(joueur.nom)}
                </label>

                <input
                    type="number"
                    id="buts-${joueur.id}"
                    class="champ-but"
                    data-joueur-id="${joueur.id}"
                    min="0"
                    max="150"
                    value="0"
                >

            </div>
        `;

    }).join("");
}


/* =====================================
   8. STATISTIQUES DU CLUB
===================================== */

async function chargerStatistiques() {

    const { data: matchs, error } = await db
        .from("matchs")
        .select("buts_nemesis, buts_adversaire, statut")
        .eq("statut", "termine");

    if (error) {
        afficherErreur("Erreur statistiques :", error);
        return;
    }

    const liste = matchs || [];

    let totalButs = 0;
    let totalEncaisses = 0;
    let victoires = 0;
    let defaites = 0;
    let nuls = 0;

    liste.forEach(match => {

        const butsPour = Number(match.buts_nemesis);
        const butsContre = Number(match.buts_adversaire);

        totalButs += butsPour;
        totalEncaisses += butsContre;

        if (butsPour > butsContre) {
            victoires++;
        } else if (butsPour < butsContre) {
            defaites++;
        } else {
            nuls++;
        }

    });

    document.getElementById("total-buts").textContent =
        totalButs;

    document.getElementById("total-buts-encaisses").textContent =
        totalEncaisses;

    document.getElementById("total-matchs").textContent =
        liste.length;

    document.getElementById("total-victoires").textContent =
        victoires;

    document.getElementById("total-defaites").textContent =
        defaites;

    document.getElementById("total-nuls").textContent =
        nuls;
}


/* =====================================
   9. CLASSEMENT DES BUTEURS
===================================== */


async function chargerClassementButeurs() {

    const conteneur = document.getElementById(
        "classement-buteurs"
    );

    const { data, error } = await db
        .from("buts")
        .select("joueur_id")
        .eq("type_but", "joueur");

    if (error) {
        afficherErreur("Erreur classement :", error);

        conteneur.innerHTML = `
            <tr>
                <td colspan="3">Erreur de chargement.</td>
            </tr>
        `;

        return;
    }

    const classement = {};

    joueurs.forEach(joueur => {
        classement[joueur.id] = {
            nom: joueur.nom,
            buts: 0
        };
    });

    (data || []).forEach(but => {

        if (classement[but.joueur_id]) {
            classement[but.joueur_id].buts++;
        }

    });

    const resultat = Object.values(classement)
        .sort((a, b) => b.buts - a.buts);

    conteneur.innerHTML = resultat.map((joueur, index) => {

        return `
            <tr>
                <td>${index + 1}</td>
                <td>${echapperHTML(joueur.nom)}</td>
                <td>${joueur.buts}</td>
            </tr>
        `;

    }).join("");
}


/* =====================================
   10. HISTORIQUE DES MATCHS
===================================== */

async function chargerHistoriqueMatchs() {

    const conteneur = document.getElementById(
        "historique-matchs"
    );

    const { data, error } = await db
        .from("matchs")
        .select("id, date_match, buts_nemesis, buts_adversaire, statut")
        .eq("statut", "termine")
        .order("date_match", { ascending: false });

    if (error) {
        afficherErreur("Erreur historique :", error);
        conteneur.textContent =
            "Impossible de charger les matchs.";
        return;
    }

    if (!data || data.length === 0) {
        conteneur.innerHTML =
            "<p>Aucun match enregistré pour le moment.</p>";

        return;
    }

    conteneur.innerHTML = data.map(match => {

        const date = new Date(match.date_match);

        const dateFormatee = date.toLocaleDateString(
            "fr-FR",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );

        const butsPour = Number(match.buts_nemesis);
        const butsContre = Number(match.buts_adversaire);

        let resultat = "NUL";
        let classe = "result-nul";

        if (butsPour > butsContre) {
            resultat = "VICTOIRE";
            classe = "result-victoire";
        } else if (butsPour < butsContre) {
            resultat = "DÉFAITE";
            classe = "result-defaite";
        }

        const boutonSuppression = estAdministrateur
            ? `
                <button
                    class="btn-supprimer-match"
                    onclick="supprimerMatch('${match.id}')"
                    type="button"
                >
                    SUPPRIMER
                </button>
            `
            : "";

        return `
            <article class="match-card">

                <div class="match-info">

                    <span class="match-date">
                        ${dateFormatee}
                    </span>

                    <strong class="match-score">
                        NERO NEMESIS
                        <span>${butsPour} - ${butsContre}</span>
                        ADVERSAIRE
                    </strong>

                    <span class="match-result ${classe}">
                        ${resultat}
                    </span>

                </div>

                ${boutonSuppression}

            </article>
        `;

    }).join("");
}


/* =====================================
   11. VÉRIFICATION ADMINISTRATEUR
===================================== */

async function verifierAdmin(user) {

    if (!user) return false;

    const { data, error } = await db
        .from("admin_users")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();

    if (error) {
        afficherErreur("Erreur vérification admin :", error);
        return false;
    }

    return !!data;
}


/* =====================================
   12. AFFICHAGE ESPACE ADMIN
===================================== */

function afficherEspaceAdmin(estAdmin) {

    estAdministrateur = estAdmin;

    const formulaireConnexion = document.querySelector(
        ".admin-login"
    );

    const espaceAdmin = document.getElementById(
        "ajouter-match"
    );

    const boutonDeconnexion = document.getElementById(
        "btn-deconnexion"
    );

    const espaceConnecte = document.querySelector(
        ".admin-connected"
    );

    if (formulaireConnexion) {
        formulaireConnexion.hidden = estAdmin;
    }

    if (espaceAdmin) {
        espaceAdmin.hidden = !estAdmin;
    }

    if (boutonDeconnexion) {
        boutonDeconnexion.hidden = !estAdmin;
    }

    if (espaceConnecte) {
        espaceConnecte.hidden = !estAdmin;
    }

    chargerHistoriqueMatchs();
}


/* =====================================
   13. CONNEXION ADMINISTRATEUR
===================================== */

async function connecterAdmin(event) {

    event.preventDefault();

    const email = document.getElementById(
        "email-admin"
    ).value.trim();

    const password = document.getElementById(
        "motdepasse-admin"
    ).value;

    afficherMessageAdmin("Connexion en cours...");

    const { data, error } = await db.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        console.error("ERREUR CONNEXION :", error);
        afficherMessageAdmin(error.message);
        return;
    }

    console.log("UTILISATEUR CONNECTÉ :", data.user);
    console.log("SESSION RETOURNÉE :", data.session);

    const estAdmin = await verifierAdmin(data.user);

    if (!estAdmin) {

        await db.auth.signOut();

        afficherEspaceAdmin(false);

        afficherMessageAdmin(
            "Accès refusé : ce compte n'est pas administrateur."
        );

        return;
    }

    afficherEspaceAdmin(true);

    afficherMessageAdmin(
        "Connexion administrateur réussie !"
    );

    document.getElementById("form-connexion").reset();
}


/* =====================================
   14. DÉCONNEXION ADMINISTRATEUR
===================================== */

async function deconnecterAdmin() {

    const { error } = await db.auth.signOut();

    if (error) {
        afficherErreur("Erreur déconnexion :", error);
        afficherMessageAdmin(error.message);
        return;
    }

    afficherEspaceAdmin(false);

    afficherMessageAdmin(
        "Déconnexion réussie."
    );
}


/* =====================================
   15. VÉRIFIER LA SESSION
===================================== */

async function verifierSessionAdmin() {

    const { data, error } = await db.auth.getSession();

    if (error) {
        afficherErreur("Erreur session :", error);
        afficherEspaceAdmin(false);
        return;
    }

    const session = data.session;

    if (!session) {
        afficherEspaceAdmin(false);
        return;
    }

    const estAdmin = await verifierAdmin(session.user);

    if (estAdmin) {
        afficherEspaceAdmin(true);
        afficherMessageAdmin("Session administrateur active.");
    } else {
        await db.auth.signOut();
        afficherEspaceAdmin(false);
    }
}


/* =====================================
   16. ENREGISTRER UN MATCH
===================================== */

async function enregistrerMatch(event) {

    event.preventDefault();

    if (!estAdministrateur) {
        alert("Tu dois être connecté comme administrateur.");
        return;
    }

    const date = document.getElementById(
        "date-match"
    ).value;

    const butsNemesis = Number(
        document.getElementById("buts-nemesis").value
    );

    const butsAdversaire = Number(
        document.getElementById("buts-adversaire").value
    );

    const participants = [
        ...document.querySelectorAll(
            ".checkbox-participant:checked"
        )
    ].map(element => element.value);

    if (!date) {
        alert("Choisis la date du match.");
        return;
    }

    if (
        !Number.isInteger(butsNemesis) ||
        !Number.isInteger(butsAdversaire) ||
        butsNemesis < 0 ||
        butsAdversaire < 0
    ) {
        alert("Les scores doivent être des nombres entiers positifs.");
        return;
    }

    if (participants.length === 0) {
        alert("Sélectionne au moins un joueur présent.");
        return;
    }

    const champsButs = [
        ...document.querySelectorAll(".champ-but")
    ];

    const buteurs = champsButs.map(champ => ({
        joueur_id: champ.dataset.joueurId,
        nombre: Number(champ.value)
    }));

    if (buteurs.some(b => !Number.isInteger(b.nombre) || b.nombre < 0)) {
        alert("Les nombres de buts doivent être des entiers positifs.");
        return;
    }

    const totalButsJoueurs = buteurs.reduce(
        (total, buteur) => total + buteur.nombre,
        0
    );

    if (totalButsJoueurs > butsNemesis) {
        alert(
            "Le total des buts des joueurs ne peut pas dépasser le score de NERO NEMESIS."
        );
        return;
    }

    const bouton = document.querySelector(".submit-match");

    bouton.disabled = true;
    bouton.textContent = "ENREGISTREMENT...";

    try {

        // Création du match

        const { data: match, error: erreurMatch } = await db
            .from("matchs")
            .insert({
                date_match: new Date(
                    `${date}T12:00:00`
                ).toISOString(),
                buts_nemesis: butsNemesis,
                buts_adversaire: butsAdversaire,
                statut: "termine"
            })
            .select()
            .single();

        if (erreurMatch) throw erreurMatch;


        // Enregistrement des participants

        const lignesParticipants = participants.map(id => ({
            match_id: match.id,
            joueur_id: id
        }));

        const { error: erreurParticipants } = await db
            .from("participants")
            .insert(lignesParticipants);

        if (erreurParticipants) throw erreurParticipants;


        // Enregistrement des buteurs

        const lignesButs = [];

        buteurs.forEach(buteur => {

            for (let i = 0; i < buteur.nombre; i++) {

                lignesButs.push({
                    match_id: match.id,
                    joueur_id: buteur.joueur_id,
                    type_but: "joueur"
                });

            }

        });

        // Les buts contre son camp sont enregistrés
        // séparément pour ne pas les attribuer à un joueur.

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


        // Actualisation des données

        document.getElementById("form-match").reset();

        afficherChampsButs();

        await chargerStatistiques();
        await chargerClassementButeurs();
        await chargerHistoriqueMatchs();

        alert("Match enregistré avec succès !");

    } catch (erreur) {

        afficherErreur("Erreur enregistrement match :", erreur);

        alert(
            "Une erreur est survenue pendant l'enregistrement : " +
            erreur.message
        );

    } finally {

        bouton.disabled = false;
        bouton.textContent = "ENREGISTRER LE MATCH ↗";

    }
}


/* =====================================
   17. SUPPRIMER UN MATCH
===================================== */

async function supprimerMatch(id) {

    if (!estAdministrateur) {
        alert("Accès refusé.");
        return;
    }

    const confirmation = confirm(
        "Veux-tu vraiment supprimer ce match ? Les buts et participants associés seront également supprimés."
    );

    if (!confirmation) return;

    const { data, error } = await db
        .from("matchs")
        .delete()
        .eq("id", id)
        .select("id");

    if (error) {
        afficherErreur("Erreur suppression :", error);
        alert("Impossible de supprimer le match : " + error.message);
        return;
    }

    if (!data || data.length === 0) {
        alert(
            "Aucun match supprimé. Vérifie ta connexion administrateur et les règles de sécurité."
        );
        return;
    }

    await chargerStatistiques();
    await chargerClassementButeurs();
    await chargerHistoriqueMatchs();

    alert("Match supprimé avec succès !");
}


/* =====================================
   18. INITIALISATION DU SITE
===================================== */

async function initialiserSite() {

    console.log("Initialisation de NERO NEMESIS FC...");

    await chargerJoueurs();

    await Promise.all([
        chargerStatistiques(),
        chargerClassementButeurs(),
        chargerHistoriqueMatchs()
    ]);

    await verifierSessionAdmin();

    // Événement de connexion

    const formulaireConnexion = document.getElementById(
        "form-connexion"
    );

    formulaireConnexion.addEventListener(
        "submit",
        connecterAdmin
    );

    // Événement de déconnexion

    document.getElementById(
        "btn-deconnexion"
    ).addEventListener(
        "click",
        deconnecterAdmin
    );

    // Événement d'enregistrement du match

    document.getElementById(
        "form-match"
    ).addEventListener(
        "submit",
        enregistrerMatch
    );

    console.log("NERO NEMESIS FC est prêt !");
}


/* =====================================
   19. LANCEMENT AUTOMATIQUE
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    initialiserSite().catch(erreur => {

        afficherErreur(
            "Erreur au démarrage du site :",
            erreur
        );

        alert(
            "Le site a rencontré un problème au démarrage. Consulte la console (F12)."
        );

    });

});
