/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Item from '../api/item/item.model';
import Fine from '../api/fine/fine.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });


  // add the following at the bottom of the file
Item.find({}).remove()
.then(() => {
  return Item.create(
    {
      title: 'Arc de Triumph',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Paris, France. 11x14 in.',
      imageFile: 'art/arc_de_triumph_2.jpg'
    },
    {
      title: 'Bastille Day',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Bastille Day 11x14 in.',
      imageFile: 'art/bastille_day_1.jpg'
    },
    {
      title: 'Saint Chapelle',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Saint Chapelle 11x14 in.',
      imageFile: 'art/saint_chapelle_2.jpg'
    },
    {
      title: 'Luxembourg Gardens',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Luxembourg Gardens 11x14 in.',
      imageFile: 'art/luxembourg_gardens.jpg'
    },
    {
      title: 'Bastille Day',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Bastille Day 11x14 in.',
      imageFile: 'art/bastille_day_2.jpg'
    },
    {
      title: 'Eiffel Tower',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Eiffel Tower 11x14 in.',
      imageFile: 'art/eiffel_tower_close.jpg'
    },
    {
      title: 'Turtle',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Turtle 11x14 in.',
      imageFile: 'art/turtle.jpg'
    },
    {
      title: 'Montmartre',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Monmartre 11x14 in.',
      imageFile: 'art/montmartre.jpg'
    },
    {
      title: 'China River',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'River in China. 11x14 in.',
      imageFile: 'art/beijing_china_lake.jpg'
    }
 )
})
.then(() => {
  return Item.find({});
})
.then((items) => {
  console.log('Finished populating ' + items.length + ' items.');
})
.catch((err) => {
  console.log('ERROR:', err);
});

Fine.find({}).remove()
.then(() => {
  return Fine.create(
    {
      title: 'Arc de Triumph',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Paris, France. 11x14 in.',
      imageFile: 'art/arc_de_triumph_2.jpg'
    },
    {
      title: 'Bastille Day',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Bastille Day 11x14 in.',
      imageFile: 'art/bastille_day_1.jpg'
    },
    {
      title: 'Saint Chapelle',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Saint Chapelle 11x14 in.',
      imageFile: 'art/saint_chapelle_2.jpg'
    },
    {
      title: 'Luxembourg Gardens',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Luxembourg Gardens 11x14 in.',
      imageFile: 'art/luxembourg_gardens.jpg'
    },
    {
      title: 'Bastille Day',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Bastille Day 11x14 in.',
      imageFile: 'art/bastille_day_2.jpg'
    },
    {
      title: 'Eiffel Tower',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Eiffel Tower 11x14 in.',
      imageFile: 'art/eiffel_tower_close.jpg'
    },
    {
      title: 'Turtle',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Turtle 11x14 in.',
      imageFile: 'art/turtle.jpg'
    },
    {
      title: 'Montmartre',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'Monmartre 11x14 in.',
      imageFile: 'art/montmartre.jpg'
    },
    {
      title: 'China River',
      category: 'photography',
      price: 35.00,
      qty: 100,
      description: 'River in China. 11x14 in.',
      imageFile: 'art/beijing_china_lake.jpg'
    }
 )
})
.then(() => {
  return Fine.find({});
})
.then((fines) => {
  console.log('Finished populating ' + fines.length + ' items.');
})
.catch((err) => {
  console.log('ERROR:', err);
});


