const filtering = (name, cards) => {
  cards.forEach((card) => {
    const absence = card.dataset.filterCard != name
    const showAll = name.toLowerCase() === 'all'

    if (absence && !showAll) {
      card.classList.add('d-none')
    } else {
      card.classList.remove('d-none')
      card.classList.add('filter-show')

      setTimeout(() => card.classList.remove('filter-show'), 300)
    }
  })
}

const init = () => {
  const filters = document.querySelectorAll('*[data-filter]')

  filters.forEach((filter) => {

    if (!filter) return

    const categories = filter.querySelectorAll('*[data-filter-category]')
    const cards = filter.querySelectorAll('*[data-filter-card]')

    const currentCard = (category) => {
      const name = String(category.dataset.filterCategory)

      filtering(name, cards)
    }

    categories.forEach((category) => {
      category.addEventListener('click', () => {
        currentCard(category)
      })
    })
  })
}

export default { init }