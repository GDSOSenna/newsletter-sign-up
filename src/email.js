const mail = localStorage.getItem('useremail')
document.getElementById('strong').innerText = mail

function dismiss(){
  localStorage.removeItem("useremail")

  window.location.href = '../index.html'
}