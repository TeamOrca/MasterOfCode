angular.module('supeer.services', [])

    .factory('Categories', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var categories = [
        {
          id : 1,
          name : 'HouseKeeper',
          image : 'http://desertsand.com.au/wp-content/uploads/2014/08/hotel.jpg'
        },
        {
          id : 2,
          name : 'Plumber',
          image : 'http://ccdci.org/wp-content/uploads/2015/03/plumber-tips.jpg'
        }
      ]

      return {
        all: function() {
          return categories;
        },
        remove: function(chat) {
          categories.splice(categories.indexOf(chat), 1);
        },
        get: function(chatId) {
          for (var i = 0; i < categories.length; i++) {
            if (categories[i].id === parseInt(chatId)) {
              return categories[i];
            }
          }
          return null;
        }
      };
    })
    .factory('Services', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var services = [
        {
          id : 1,
          name : 'HouseKeeper inc.',
          category : 'Heusekeeper',
          description : 'So clean!',
          rate : 18,
          thumb : 'img/housekeeper_square.jpg',
          image : 'img/housekeeper.jpg',
          face : 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
          upvotes : 17,
          position : {
            latitude: 45.514324,
            longitude : -73.568876
          }
        },
        {
          id : 2,
          name : 'Plumber inc.',
          category : 'Plumber',
          image : 'plumber.png',
          description : 'Magic plumbering service!',
          rate : 15,
          thumb : 'img/plumber_square.jpg',
          image : 'img/plumber.jpg',
          face : 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
          upvotes : 24,
          position : {
            latitude : 45.512778,
            longitude : -73.558404
          }
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