const linksSocialMedia = {
  github: 'cribif',
  youtube: '',
  facebook: '',
  instagram: 'bibizokaa',
  twitter: ''
}

function changeSocialMediaLinks() {

  var socialList = document.getElementById('socialLinks');
  console.log(socialList.children)
  for (let li of socialList.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGithubProfileInfos()