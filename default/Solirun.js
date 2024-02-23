let variable1 = 0;
let variable2 = 0;
let variable4 = 0;


function increment(equipe)
{
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'Solirun.php?plus='+equipe, true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // La requête a réussi
      var responseData = JSON.parse(xhr.responseText);
      document.getElementById('resultatPlaceholder').innerHTML = responseData.resultat;
    } else {
      // La requête a échoué
      console.error('La requête a échoué avec le statut : ' + xhr.status);
    }
  };
  xhr.onerror = function () {
    console.error('Erreur réseau lors de la requête.');
  };

  // Envoyer la requête
  xhr.send();
};







let timer;
let remainingSeconds = 0;

function startCourse() {
  remainingSeconds = document.getElementById('secondsInput').value;
  if (remainingSeconds <= 0) {
    alert("Entrer un nombre de secondes valide.");
    return;
  }

  document.getElementById('startButton').disabled = true;

  timer = setInterval(function () {
    displayCourse();
    if (remainingSeconds <= 0) {
      clearInterval(timer);
      document.getElementById('startButton').disabled = false;
    } else {
      remainingSeconds--;
    }
  }, 1000);
}

function stopCourse() {
  clearInterval(timer);
  document.getElementById('startButton').disabled = false;
}

function resetCourse() {
  clearInterval(timer);
  remainingSeconds = 0;
  displayCourse();
  document.getElementById('startButton').disabled = false;
}

function displayCourse() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  document.getElementById('countdownDisplay').innerText = minutes + ':' + (seconds < 10 ? '0' : '') + seconds + 'min';
}