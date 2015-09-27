angular.module('supeer.services')
    .factory('CategoriesService', function() {
      // Might use a resource here that returns a JSON array

      // Some fake testing data
      var categories = [
        {
          id : 1,
          name : 'All',
          image : 'http://desertsand.com.au/wp-content/uploads/2014/08/hotel.jpg'
        },
        {
          id : 2,
          name : 'HouseKeeper',
          image : 'http://desertsand.com.au/wp-content/uploads/2014/08/hotel.jpg'
        },
        {
          id : 3,
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
    });