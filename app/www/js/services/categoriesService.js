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
                ratingAverage : 4,
                distance : 0.1
            },
            {
                id : 1,
                name : 'Housekeepa',
                category : 'Heusekeeper',
                description : "So clean! You know how to disappear. We can teach you to become truly invisible. Bruce... it's okay. Don't be afraid.Let me get this straight. You think that your client, one of the wealthiest, most powerful men in the world is secretly a vigilante who spends his nights beating criminals to a pulp with his bare hands and your plan is to blackmail this person? Good luck.",
                rate : 9,
                thumb : 'img/housekeeper_square.jpg',
                images : [
                    'img/housekeeper.jpg',
                    'img/housekeeper2.jpg',
                    'img/housekeeper3.jpg'
                ],
                face : 'img/cleaning_2.png',
                upvotes : 17,
                position : {
                    latitude: 45.500724,
                    longitude : -73.557702
                },
                ratings : [],
                ratingAverage : 3,
                distance : 2.3
            },
            {
                id : 2,
                name : 'Good Housekeeping',
                category : 'Heusekeeper',
                description : "Aenean euismod lectus quis nibh commodo, in maximus libero viverra. Praesent ac maximus turpis, sed feugiat nisi. In hac habitasse platea dictumst. Proin elementum sem ut ante convallis ultrices.",
                rate : 12,
                thumb : 'img/housekeeper_square.jpg',
                images : [
                    'img/housekeeper.jpg',
                    'img/housekeeper2.jpg',
                    'img/housekeeper3.jpg'
                ],
                face : 'img/cleaning_2.png',
                upvotes : 9,
                position : {
                    latitude: 45.13324,
                    longitude : -73.668876
                },
                ratings : [
                    {
                        user : 'Wei Huang',
                        comments : "Great service!!",
                        rating : 5
                    }
                ],
                ratingAverage : 5,
                distance : 0.7
            },
            {
                id : 3,
                name : 'Plumber inc.',
                category : 'Plumber',
                image : 'plumber.png',
                description : "Magic plumbering service! My name is Merely Ducard but I speak for Ra's al Ghul... a man greatly feared by the criminal underworld. A mon who can offer you a path. Someone like you is only here by choice. You have been exploring the criminal fraternity. The path of a man who shares his hatred of evil and wishes to serve true justice.",
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
                    latitude : 45.502269,
                    longitude : -73.611308
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
                ratingAverage : 4,
                distance : 0.4
            },
            {
                id : 4,
                name : 'Go Plumber',
                category : 'Plumber',
                image : 'plumber.png',
                description : "The best Plumping services in Montreal",
                rate : 23,
                thumb : 'img/plumber_square.jpg',
                images : [
                    'img/plumber.jpg',
                    'img/plumber2.jpg',
                    'img/plumber3.jpg',
                ],
                face : 'img/logo_pre.png',
                upvotes : 10,
                position : {
                    latitude : 45.452206,
                    longitude : -73.717070
                },
                ratings : [
                    {
                        user : 'Adam E. Roberts',
                        comments : 'Nulla facilisi. Cras ultricies mauris nec nisi semper dictum. ',
                        rating : 3
                    },
                    {
                        user : 'Anthony T. Harrison',
                        comments : 'Praesent ultrices sollicitudin metus, vel vehicula massa fringilla facilisis. Nulla gravida, lectus sit amet convallis eleifend',
                        rating : 2
                    }
                ],
                ratingAverage : 2,
                distance : 0.5
            },
            {
                id : 5,
                name : 'Hurry Plumber',
                category : 'Plumber',
                image : 'plumber.png',
                description : "Highly skilled and certified Plumber in Montreal 514-566-8227",
                rate : 20,
                thumb : 'img/plumber_square.jpg',
                images : [
                    'img/plumber.jpg',
                    'img/plumber2.jpg',
                    'img/plumber3.jpg',
                ],
                face : 'img/logo_pre.png',
                upvotes : 12,
                position : {
                    latitude : 45.521078,
                    longitude : -73.547546
                },
                ratings : [
                    {
                        user : 'Adam E. Roberts',
                        comments : 'Consectetur adipiscing elit. Integer in.',
                        rating : 3
                    },
                    {
                        user : 'Anthony T. Harrison',
                        comments : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis.',
                        rating : 3
                    }
                ],
                ratingAverage : 3,
                distance : 0.7
            },
            {
                id : 6,
                name : 'Galaxy Plumbing',
                category : 'Plumber',
                image : 'plumber.png',
                description : "Cheap & Quick fix for your plumbing needs.",
                rate : 18.50,
                thumb : 'img/plumber_square.jpg',
                images : [
                    'img/plumber.jpg',
                    'img/plumber2.jpg',
                    'img/plumber3.jpg',
                ],
                face : 'img/logo_pre.png',
                upvotes : 12,
                position : {
                    latitude : 45.514703,
                    longitude : -73.537504
                },
                ratings : [
                    {
                        user : 'Robert M. Coney',
                        comments : 'Consectetur adipiscing elit. Integer in.',
                        rating : 3
                    },
                    {
                        user : 'Renae W. Alexander',
                        comments : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis.',
                        rating : 3
                    }
                ],
                ratingAverage : 3,
                distance : 0.9
            },
            {
                id : 7,
                name : 'Plumberz',
                category : 'Plumber',
                image : 'plumber.png',
                description : "Cheap & Quick fix for your plumbing needs.",
                rate : 18.50,
                thumb : 'img/plumber_square.jpg',
                images : [
                    'img/plumber.jpg',
                    'img/plumber2.jpg',
                    'img/plumber3.jpg',
                ],
                face : 'img/logo_pre.png',
                upvotes : 1,
                position : {
                    latitude : 45.522577,
                    longitude : -73.600571
                },
                ratings : [
                    {
                        user : 'Robert M. Coney',
                        comments : 'Consectetur adipiscing elit. Integer in.',
                        rating : 3
                    },
                    {
                        user : 'Renae W. Alexander',
                        comments : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis.',
                        rating : 3
                    }
                ],
                ratingAverage : 3,
                distance : 1.5
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