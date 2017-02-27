

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('app is routing!')
		Backbone.history.start()
  },
    routes: {
      '' : 'showAllSessions',
       'state/:st' : 'showByState',
      'gender/:gendr' : 'showGender',
      'party/:prty/gender/:gen' : 'showStateGender',
      '*default' : 'showErrorPage'
    },

    showAllSessions: function(){
      console.log('Show Congress Persons')
      document.querySelector('#app-container').innerHTML =
      `<div class="profile-card">
      	<img src="http://flathash.com/«bioguide_id»">
      	<h5>
      		«first name»</br>
      		<small>«state»</small>
      	</h5>
      </div>`

      $.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?')
        .then(function(serverRes){
          congress.log(serverRes)
          let congresspersonList = serverRes.results

          let congressPeopleHtml = congresspersonList.map(function(legislatorObj){

              return `<p>$(legislatorObj.first_name)</p>`




          })

        })

        console.log(congressPeopleHtml)




    }


})



const myApp = new AppRouter()
