const characters = [
  {
    name: 'Justin',
    subTitle: 'Heroic Fighter',
    image: 'images/characters/paladin.png',
    description: '<p>This is some description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum tellus in nisi blandit, in efficitur ante interdum. Fusce ut consectetur velit. Phasellus vel ligula laoreet, egestas justo at, suscipit mi. Proin pharetra est leo, eu fringilla turpis pulvinar eu. Curabitur egestas lectus ac fringilla efficitur. Mauris risus quam, maximus sit amet tempor sit amet, auctor at lacus. Mauris fringilla tincidunt leo id </p><p>Aliquet. Quisque nisi leo, interdum at malesuada eget, pulvinar nec arcu. Curabitur sit amet tempor metus, sed aliquet ipsum. Fusce fringilla risus in felis dignissim molestie. Cras et dolor id diam sollicitudin aliquet eget bibendum neque. Cras vel vehicula dolor, id aliquet leo. Suspendisse at auctor tellus. Ut maximus commodo pulvinar.</p>'
  },
]

characters.forEach((char) => {
  document.querySelector('.character-image').src= char.image;
 // DOMPurify(document.querySelector('.character-info').innerHTML = item.description);
})