// Déclarattion de la fonction alternateTexts qui va permettre l'affichage alternatif des textes
const alternateTexts = () => {
  // Récupération de la span contenant les textes alternatifs
  const span = document.querySelector("[data-alternate-texts]");
  //console.log(span);
  if (!span) return;
  // Stockages des textes alternatifs dans la constante data
  const data = span.dataset.texts.split(",");
  // console.log(data);

  // Stockage du delay dans la constante delay
  const delay = span.dataset.timer;
  // console.log(delay);

  // Création de la variable i (compteur réglé à zéro)
  let i = 0;

  // La méthode setInterval() appelle à plusieurs reprises une fonction ou exécute un extrait de code, avec un délai fixe entre chaque appel.
  setInterval(() => {
    if (i < data.length - 1) {
      // Incrémentation du compteur
      i++;
      // console.log(i);
    } else {
      i = 0;
      // console.log(i);
    }
    // Affichage du texte
    span.textContent = data[i];
  }, delay);
};

// Appel de la fonction alternateTexts
alternateTexts();

// Déclarattion de la fonction alternateImages qui va permettre l'affichage alternatif des images
const alternateImages = () => {
  // Récupération de l'élément HTML <img>
  const image = document.querySelector("[data-alternate-images]");
  if (!image) return;

  // Stockages des images alternatives dans la constante data
  const data = image.dataset.images.split(",");
  // console.log(data);

  // Stockage du delay dans la constante delay
  const delay = image.dataset.timer;
  // console.log(delay);

  // Création de la variable i (compteur réglé à zéro)
  let i = 0;

  // La méthode setInterval() appelle à plusieurs reprises une fonction ou exécute un extrait de code, avec un délai fixe entre chaque appel.
  setInterval(() => {
    if (i < data.length - 1) {
      // Incrémentation du compteur
      i++;
      // console.log(i);
    } else {
      i = 0;
      // console.log(i);
    }
    // Affichage de l'image
    image.src = data[i];
  }, delay);
};

// Appel de la fonction alternateImages
alternateImages();
