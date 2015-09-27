angular.module('supeer.services')
    .factory('ServicesService', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var services = [
        {
          id : 1,
          name : 'HouseKeeper inc.',
          category : 'Heusekeeper',
          description : "So clean! You know how to disappear. We can teach you to become truly invisible. Bruce... it's okay. Don't be afraid.Let me get this straight. You think that your client, one of the wealthiest, most powerful men in the world is secretly a vigilante who spends his nights beating criminals to a pulp with his bare hands and your plan is to blackmail this person? Good luck.",
          rate : 18,
          thumb : 'img/housekeeper_square.jpg',
          images : [
            'img/housekeeper.jpg',
            'img/housekeeper2.jpg',
            'img/housekeeper3.jpg'
          ],
          face : 'img/cleaning_2.png',
          upvotes : 17,
          position : {
            latitude: 45.514324,
            longitude : -73.568876
          },
          ratings : [
            {
              user : 'A dude',
              comments : "Amazing!! Now we know what they mean by 'advanced' tactical training. I'll be sure to note that in my log. Maybe we better talk out here; the observation lounge has turned into a swamp. Travel time to the nearest starbase? For an android with no feelings, he sure managed to evoke them in others. This is not about revenge. This is about justice. Mr. Worf, you do remember how to fire phasers?",
              rating : 5
            },
            {
              user : 'A Bott',
              comments : 'Sooooo cleannn! Damage report! Yes, absolutely, I do indeed concur, wholeheartedly!',
              rating : 4
            }
          ],
          ratingAverage : 4
        },
        {
          id : 2,
          name : 'Plumber inc.',
          category : 'Plumber',
          image : 'plumber.png',
          description : "Magic plumbering service! My name is Merely Ducard but I speak for Ra's al Ghul... a man greatly feared by the criminal underworld. A mon who can offer you a path. Someone like you is only here by choice. You have been exploring the criminal fraternity but whatever your original intentions you have to become truly lost. The path of a man who shares his hatred of evil and wishes to serve true justice. The path of the League of Shadows.",
          rate : 15,
          thumb : 'img/plumber_square.jpg',
          images : [
            'img/plumber.jpg',
            'img/plumber2.jpg',
            'img/plumber3.jpg',
          ],
          face : 'img/logo_pre.png',
          upvotes : 24,
          position : {
            latitude : 45.512778,
            longitude : -73.558404
          },
          ratings : [
            {
              user : 'Zacky boy',
              comments : 'Fast !!',
              rating : 5
            },
            {
              user : 'Mister x',
              comments : 'Sooooo plubmed!',
              rating : 4
            }
          ],
          ratingAverage : 4
        }
      ]

      return {
        all: function() {
          return services;
        },
        remove: function(chat) {
          services.splice(services.indexOf(chat), 1);
        },
        get: function(chatId) {
          for (var i = 0; i < services.length; i++) {
            if (services[i].id === parseInt(chatId)) {
              return services[i];
            }
          }
          return null;
        }
      };
    });