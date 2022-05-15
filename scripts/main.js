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
  characterNameEle.className="character-select-button-text";
  characterNameEle.textContent = char.name;

  const characterEle = document.createElement('div');
  characterEle.append(characterNameEle);
  characterEle.className="character-select-button";
  characterEle.setAttribute('style',`background-image:url(${char.image})`);
  characterEle.setAttribute('data-char-id',char.id)

  document.querySelector('#character-choices').append(characterEle);
});

const characterSelect = (char)=>{
  document.querySelector('.character-image').src = char.image;
  document.querySelector('#selected-character-name').textContent = char.name;
  document.querySelector('#selected-character-sub-title').textContent = char.subTitle;
  DOMPurify(document.querySelector('#selected-character-description').innerHTML = char.description);
}


// calls the function for the first time
characterSelect(characters[0])
