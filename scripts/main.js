const characters = [
  {
    id: 1,
    name: 'KoTiell',
    subTitle: 'Heroic Fighter',
    image: 'images/characters/paladin.png',
    description: '<p>This is some description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum tellus in nisi blandit, in efficitur ante interdum. Fusce ut consectetur velit. Phasellus vel ligula laoreet, egestas justo at, suscipit mi. Proin pharetra est leo, eu fringilla turpis pulvinar eu. Curabitur egestas lectus ac fringilla efficitur. Mauris risus quam, maximus sit amet tempor sit amet, auctor at lacus. Mauris fringilla tincidunt leo id </p><p>Aliquet. Quisque nisi leo, interdum at malesuada eget, pulvinar nec arcu. Curabitur sit amet tempor metus, sed aliquet ipsum. Fusce fringilla risus in felis dignissim molestie. Cras et dolor id diam sollicitudin aliquet eget bibendum neque. Cras vel vehicula dolor, id aliquet leo. Suspendisse at auctor tellus. Ut maximus commodo pulvinar.</p>'
  },
  {
    id: 2,
    name: 'Theodore',
    subTitle: 'Young Wizard',
    image: 'images/characters/wizard.png',
    description: '<p>This is some description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum tellus in nisi blandit, in efficitur ante interdum. Fusce ut consectetur velit. Phasellus vel ligula laoreet, egestas justo at, suscipit mi. Proin pharetra est leo, eu fringilla turpis pulvinar eu. Curabitur egestas lectus ac fringilla efficitur. Mauris risus quam, maximus sit amet tempor sit amet, auctor at lacus. Mauris fringilla tincidunt leo id </p><p>Aliquet. Quisque nisi leo, interdum at malesuada eget, pulvinar nec arcu. Curabitur sit amet tempor metus, sed aliquet ipsum. Fusce fringilla risus in felis dignissim molestie. Cras et dolor id diam sollicitudin aliquet eget bibendum neque. Cras vel vehicula dolor, id aliquet leo. Suspendisse at auctor tellus. Ut maximus commodo pulvinar.</p>'
  },
]

characters.forEach((char) => {
  const characterNameEle = document.createElement('div');
  characterNameEle.className = "character-select-button-text";
  characterNameEle.textContent = char.name;

  const characterEle = document.createElement('div');
  characterEle.append(characterNameEle);
  characterEle.className = "character-select-button";
  characterEle.setAttribute('style', `background-image:url(${char.image})`);
  characterEle.setAttribute('data-char-id', char.id)

  document.querySelector('#character-choices').append(characterEle);
});


// Displays the selected character at the top of the page
const characterSelect = (characterId) => {
  const char = characters.find((character) => {
    return character.id === characterId;
  })
  document.querySelector('#character-image-container').setAttribute('style', `background-image:url(${char.image})`);
  document.querySelector('#selected-character-name').textContent = char.name;
  document.querySelector('#selected-character-sub-title').textContent = char.subTitle;
  DOMPurify(document.querySelector('#selected-character-description').innerHTML = char.description);

}

document.querySelectorAll('.character-select-button').forEach((characterChoice) => {
  characterChoice.addEventListener('click', (e) => {
    // the parseInt is to convert the data to a number, otherwise the characterSelect function does not work
    characterSelect(parseInt(e.target.getAttribute('data-char-id')),10)
  });
});


// calls the function for the first time
characterSelect(1)
