const SemanticUIColors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown'
]

function initTags() {
  $('.dream-tags')
    .children()
    .map(function(index) {
      $(this).addClass(SemanticUIColors[index % SemanticUIColors.length])
    })
}

function initAccordion() {
  $('.dream-categories .ui.accordion').accordion({
    selector: {
      trigger: '.title .icon'
    },
    exclusive: false
  })
}
