
function ajaxFilm(search){
  $.ajax({url: "https://api.themoviedb.org/3/search/movie?api_key=2949182a20ec9f3c52a5bedc673809f5&query=" + search,
    method: "GET",
    success: function (data) {
      var results = data.results;
      for (var i = 0; i < results.length; i++) {
        var dati = {
          original_title : results[i].original_title,
          title : results[i].title,
          original_language : results[i].original_language,
          poster_path : results[i].poster_path,
          vote_average : Math.ceil(results[i].vote_average)
        }
        var template = $('#template-film').html();
        var compiled = Handlebars.compile(template);
        var target = $('#risultati');
        var filmHtml = compiled(dati);
        target.append(filmHtml);
      }
  },
    error: function(err) {
      console.log('err', err);
    }
  });
}

function ajaxSerie(search){
  $.ajax({url: "https://api.themoviedb.org/3/search/tv?api_key=2949182a20ec9f3c52a5bedc673809f5&query=" + search,
    method: "GET",
    success: function (data) {
      var results = data.results;
      for (var i = 0; i < results.length; i++) {
        var dati = {
          original_name : results[i].original_name,
          name : results[i].name,
          original_language : results[i].original_language,
          poster_path : results[i].poster_path,
          vote_average : Math.ceil(results[i].vote_average)
        }
        var template = $('#template-serie').html();
        var compiled = Handlebars.compile(template);
        var target = $('#risultati');
        var filmHtml = compiled(dati);
        target.append(filmHtml);
      }
  },
    error: function(err) {
      console.log('err', err);
    }
  });
}

function pressInvioMsg (){
  if (event.which == 13) {
    search()
  }
}

function info(){
  $('.infoFilm,.infoSerie').hide();
  $('.img').show();
  $(this).hide();
  $(this).siblings('.infoFilm,.infoSerie').show();
}

function copertina(){
  $(this).hide();
  $(this).siblings('.img').show();
}

function search(){
  $('#risultati div').remove();
  var search = $('#ricerca').val();
  var filmOSerie = $('#selectSerieFilm').val();
  console.log(filmOSerie);
  if (filmOSerie == 'Film' ) {
    ajaxFilm(search);
  } else if (filmOSerie == 'SerieTv') {
    ajaxSerie();
  } else {
    ajaxFilm(search);
    ajaxSerie(search);
  }

}


function init() {
$('#lenteRicerca').click(search);
$('#ricerca').keyup(pressInvioMsg);
$('#risultati').on('click','.img',info);
$('#risultati').on('click','.infoFilm,.infoSerie',copertina);
}
$(document).ready(init);
