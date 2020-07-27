
function chiamataApi(){
  $('#risultati div').remove();
  var search = $('#ricerca').val();
  var filmOSerie = $('#selectSerieFilm').val();
  console.log(filmOSerie);

  if (filmOSerie == 'Film' ) {
    $.ajax({url: "https://api.themoviedb.org/3/search/movie?api_key=2949182a20ec9f3c52a5bedc673809f5&query=" + search,
      method: "GET",
      success: function (data) {
        var results = data['results'];
        console.log(data);
        for (var i = 0; i < results.length; i++) {
          /*var titolo = results[i].title;
          var titoloOriginale = results[i].original_title;
          var lingua = results[i].original_language;
          var voto = parseInt(results[i].vote_average);*/
          var template = $('#template-film').html();
          var compiled = Handlebars.compile(template);
          var target = $('#risultati');
          var filmHtml = compiled(results[i]);
          target.append(filmHtml);
        }
    },
      error: function(err) {
        console.log('err', err);
      }
    });
  } else if (filmOSerie == 'SerieTv') {
    $.ajax({url: "https://api.themoviedb.org/3/search/tv?api_key=2949182a20ec9f3c52a5bedc673809f5&query=" + search,
      method: "GET",
      success: function (data) {
        var results = data['results'];
        console.log(data);
        for (var i = 0; i < results.length; i++) {
          /*var titolo = results[i].title;
          var titoloOriginale = results[i].original_title;
          var lingua = results[i].original_language;
          var voto = parseInt(results[i].vote_average);*/
          var template = $('#template-serie').html();
          var compiled = Handlebars.compile(template);
          var target = $('#risultati');
          var filmHtml = compiled(results[i]);
          target.append(filmHtml);
        }
    },
      error: function(err) {
        console.log('err', err);
      }
    });
  } else {
    $.ajax({url: "https://api.themoviedb.org/3/search/movie?api_key=2949182a20ec9f3c52a5bedc673809f5&query=" + search,
      method: "GET",
      success: function (data) {
        var results = data['results'];
        console.log(data);
        for (var i = 0; i < results.length; i++) {
          /*var titolo = results[i].title;
          var titoloOriginale = results[i].original_title;
          var lingua = results[i].original_language;
          var voto = parseInt(results[i].vote_average);*/
          var template = $('#template-film').html();
          var compiled = Handlebars.compile(template);
          var target = $('#risultati');
          var filmHtml = compiled(results[i]);
          target.append(filmHtml);
        }
    },
      error: function(err) {
        console.log('err', err);
      }
    });
    $.ajax({url: "https://api.themoviedb.org/3/search/tv?api_key=2949182a20ec9f3c52a5bedc673809f5&query=" + search,
      method: "GET",
      success: function (data) {
        var results = data['results'];
        console.log(data);
        for (var i = 0; i < results.length; i++) {
          /*var titolo = results[i].title;
          var titoloOriginale = results[i].original_title;
          var lingua = results[i].original_language;
          var voto = parseInt(results[i].vote_average);*/
          var template = $('#template-serie').html();
          var compiled = Handlebars.compile(template);
          var target = $('#risultati');
          var filmHtml = compiled(results[i]);
          target.append(filmHtml);
        }
    },
      error: function(err) {
        console.log('err', err);
      }
    });
  }

}


function init() {
$('#lenteRicerca').click(chiamataApi);
}
$(document).ready(init);
