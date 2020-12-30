function setToken(token, user) {
  let date = new Date().getTime();
  localStorage.setItem('rpg', token + '::' + user + '::' + date)
}

function getToken() {
  
  let key = localStorage.getItem('rpg')

  if (key) {
    let timestamp = key.split('::')[2]
    let now = new Date().getTime();
    let validity = parseInt(timestamp) + 86400000

    if (validity > now) {

      return {
        token: key.split('::')[0],
        user: key.split('::')[1]
      }

    }else{
      return false
    }
  }

  // 86400000 ms == 1 dia
}


