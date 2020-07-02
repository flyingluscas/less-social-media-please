const storage = window.localStorage

storage.setItem('blockTwitter', storage.getItem('blockTwitter') || 'false')
storage.setItem('blockInstagram', storage.getItem('blockInstagram') || 'false')

const twitterButton = document.getElementById('toggleTwitter')

twitterButton.innerText = 'Bloquear'

if (storage.getItem('blockTwitter') === 'true') {
  twitterButton.innerText = 'Desbloquear'
}

twitterButton.addEventListener('click', () => {
  if (storage.getItem('blockTwitter') === 'true') {
    storage.setItem('blockTwitter', false)
    twitterButton.innerText = 'Bloquear'
  } else {
    storage.setItem('blockTwitter', true)
    twitterButton.innerText = 'Desbloquear'
  }
})

const instagramButton = document.getElementById('toggleInstagram')

instagramButton.innerText = 'Bloquear'

if (storage.getItem('blockInstagram') === 'true') {
  instagramButton.innerText = 'Desbloquear'
}

instagramButton.addEventListener('click', () => {
  if (storage.getItem('blockInstagram') === 'true') {
    storage.setItem('blockInstagram', false)
    instagramButton.innerText = 'Bloquear'
  } else {
    storage.setItem('blockInstagram', true)
    instagramButton.innerText = 'Desbloquear'
  }
})
