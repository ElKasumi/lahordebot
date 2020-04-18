const link = [
  "angle", "armoire", "banc", "bureau", "cabinet", "carreau", "chaise", "classe", "clef", "coin", "couloir", "dossier", "eau", "ecole", "ecriture", "entre", "escalier", "etagere", "etude", "exterieur", "fenetre", "interieur", "lavabo", "lecture", "lit", "marche", "matelas", "maternelle", "meuble", "mousse", "mur", "peluche", "placard", "plafond", "porte", "portemanteau", "poubelle", "radiateur", "rampe", "recreation", "rentre", "rideau", "robinet", "salle", "savon", "serrure", "serviette", "siege", "sieste", "silence", "sol", "sommeil","sonnette", "sortie", "table", "tableau", "tabouret", "tapis", "tiroir", "toilette", "vitre",
  "crayon", "stylo", "feutre", "pointe", "mine", "gomme", "dessin", "coloriage", "rayure", "peinture", "pinceau", "couleur", "craie", "papier", "feuille", "cahier", "carnet", "carton", "ciseaux", "decoupage", "pliage", "pli", "colle", "affaire", "boîte", "casier", "caisse", "trousse", "cartable", "jouet", "jeu", "pion", "domino", "puzzle", "cube", "perle", "chose", "forme", "carre", "rond", "modeler", "tampon", "livre", "histoire", "bibliotheque", "image", "album", "titre", "conte", "dictionnaire", "magazine", "catalogue", "page", "ligne", "mot", "enveloppe", "etiquette", "affiche", "alphabet", "appareil", "camescope", "cassette", "cede", "cederom", "chaîne", "chanson", "chiffre", "contraire", "difference", "doigt", "ecran", "ecriture", "film", "fois", "idee", "instrument", "intrus", "lettre", "liste", "magnetoscope", "main", "micro", "modele", "musique", "nom", "nombre", "orchestre", "ordinateur", "photo", "point", "poster", "pouce", "prenom", "question", "radio", "sens", "tambour", "telecommande", "telephone", "television", "trait", "trompette", "voix", "xylophone", "zero",
  "ami", "attention", "camarade", "colere", "copain", "coquin", "dame", "directeur", "directrice", "droit", "effort", "eleve", "enfant", "fatigue", "faute", "fille", "garçon", "gardien", "madame", "maître", "maîtresse", "mensonge", "ordre", "personne", "retard", "sourire", "travail",
  "arrosoir", "assiette", "balle", "bateau", "boîte", "bouchon", "bouteille", "bulles", "canard", "casserole", "cuillere", "cuvette", "douche", "entonnoir", "gouttes", "litre", "moulin", "pluie", "poisson", "pont", "pot", "roue", "saladier", "seau", "tablier", "tasse", "trous", "verre",
  "anorak", "arc", "bagage", "baguette", "barbe", "bonnet", "botte", "bouton", "bretelle", "cagoule", "casque", "casquette", "ceinture", "chapeau", "chaussette", "chausson", "chaussure", "chemise", "cigarette", "col", "collant", "couronne", "cravate", "culotte", "echarpe", "epee", "fee", "feche", "fusil", "gant", "habit", "jean", "jupe", "lacet", "laine", "linge", "lunettes", "magicien", "magie", "maillot", "manche", "manteau", "mouchoir", "moufle", "nœud", "paire", "pantalon", "pied", "poche", "prince", "pyjama", "reine", "robe", "roi", "ruban", "semelle", "soldat", "sorciere", "tache", "taille", "talon", "tissu", "tricot", "uniforme", "valise", "veste", "vetement",
  "baleine", "bouee", "île", "jumelles", "marin", "mer", "mouette", "navire", "pecheur", "plage", "poisson", "port", "sardine", "serviette", "vague", "voile",
  "arête", "frite", "gobelet", "jambon", "os", "poulet", "puree", "radis", "restaurant", "sole",
  "glaçon", "jus", "kiwi", "lame", "mûre", "noyau", "paille", "pamplemousse", "râpe",
  "bassine", "cocotte", "epluchure", "legume", "rondelle", "soupe", "consomme", "potage",
  "abricot", "ail", "aliment", "ananas", "banane", "bifteck", "café", "carotte", "cerise", "chocolat", "chou", "citron", "citrouille", "clementine", "concombre", "coquillage", "corbeille", "crabe", "crevette", "endive", "farine", "fraise", "framboise","fromage", "fruit", "gâteau", "haricot", "huile", "marchand", "melon", "monnaie", "navet", "noisette", "noix", "nourriture", "oignon", "orange", "panier", "pâtes", "peche", "persil", "poire", "poireau", "pomme", "prix", "prune", "queue", "raisin", "riz", "salade", "sucre", "the", "tomate", "viande", "vin",
  "adresse", "appartement", "ascenseur", "balcon", "boucherie", "boulanger", "boulangerie", "boutique", "bus", "caniveau", "caravane", "carrefour", "cave", "charcuterie", "cinema", "cirque", "cloche", "clocher", "clown", "coiffeur", "courrier", "croix", "eglise", "embouteillage", "endroit", "enveloppe", "essence", "facteur", "fleuriste", "foire", "hôpital", "hôtel", "immeuble", "incendie", "laisse", "magasin", "manrge", "medicament", "moineau", "monde", "monument", "ouvrier", "palais", "panneau", "paquet", "parc", "passage", "pharmacie", "pharmacien", "piscine", "place", "police", "policier", "pompier", "poste", "promenade", "quartier", "square", "timbre", "travaux", "usine", "village", "ville", "voisin", "volet",
  "aiguille", "ampoule", "avion", "bois", "bout", "bricolage", "bruit", "cabane", "carton", "clou", "colle", "crochet", "elastique", "ficelle", "fil", "marionnette", "marteau", "metal", "metre", "morceau", "moteur", "objet", "outil", "peinture", "pinceau", "planche", "plâtre", "scie", "tournevis", "vis", "voiture", "vehicule",
  "accident", "aeroport", "auto", "camion", "engin", "feu", "frein", "fusee", "garage", "gare", "grue", "helicoptère", "moto", "panne", "parking", "pilote", "pneu", "quai", "train", "virage", "vitesse", "voyage", "wagon", "zigzag",
  "bagarre", "balançoire", "ballon", "bande", "bicyclette", "bille", "cadenas", "château", "coup", "cour", "course", "echasse", "flaque", "paix", "pardon", "partie", "pedale", "pelle", "pompe", "preau", "raquette", "rayon", "recreation", "sable", "sifflet", "signe", "tas", "tricycle", "tuyau", "velo", "filet"
]
const generator = require('generate-password');
const Discord = require('discord.js');
require('colors')
const Client = new Discord.Client();

Client.on('ready', function(){
  Client.user.setGame('Vanity Link Generator (By REPOSTY)')
  if(!Client.user.bot){
    console.log(`${Client.user.username} n'est pas un bot!`.bgGreen)
  }else console.log(`${Client.user.username} est un robot`.bgRed)
})

Client.on('ready', function(){
  setInterval(() => {
      Client.channels.get("701133259496620162").send("discord.gg/" + link[Math.floor(Math.random() * link.length)]);
  }, 1000);
  setInterval(() => {
  var i = 0;
  while (i<1) {
  var password = generator.generate({
  length: 16,
  numbers: true
  });
  Client.channels.get("701153577170763896").send("https://discord.gift/" + password);
  i++;
  }
  }, 1000);
})

Client.login('TOKEN')
