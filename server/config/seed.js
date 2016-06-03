/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Item from '../api/item/item.model';   // add this near the top of the file

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
      price: 15.00,
      qty: 100,
      description: 'Paris, France. 8x10 in.',
      imageFile: 'art/arc_de_triumph.jpg'
    },
    {
      title: 'China River',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'River in China. 8x10 in.',
      imageFile: 'art/china_river_2.jpg'
    },
    {
      title: 'China River',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'River in China. 8x10 in.',
      imageFile: 'art/china_river.jpg'
    },
    {
      title: 'Bastille Day',
      category: 'photography',
      price: 30.00,
      qty: 100,
      description: 'Bastille Day in Paris, France 8x10 in.',
      imageFile: 'art/eiffel_4.jpg'
    },
    {
      title: 'Bastille Day',
      category: 'photography',
      price: 30.00,
      qty: 100,
      description: 'Bastille Day in Paris, France 8x10 in.',
      imageFile: 'art/eiffel_5.jpg'
    },
    {
      title: 'Bastille Day',
      category: 'photography',
      price: 30.00,
      qty: 100,
      description: 'Bastille Day in Paris, France 8x10 in.',
      imageFile: 'art/eiffel_6.jpg'
    },
    {
      title: 'Bastille Day',
      category: 'photography',
      price: 30.00,
      qty: 100,
      description: 'Bastille Day in Paris, France 8x10 in.',
      imageFile: 'art/eiffel_7.jpg'
    },
    {
      title: 'Eiffel Tower',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'Eiffel Tower in Paris, France 8x10 in.',
      imageFile: 'art/eiffel_bw_5.jpg'
    },
    {
      title: 'Eiffel Tower',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'Eiffel Tower in Paris, France 8x10 in.',
      imageFile: 'art/eiffel_bw_1.jpg'
    },
    {
      title: 'Eiffel Tower',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'Eiffel Tower in Paris, France 8x10 in.',
      imageFile: 'art/eiffel_2.jpg'
    },
    {
      title: 'Eiffel Tower',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'Eiffel Tower in Paris, France 8x10 in.',
      imageFile: 'art/eiffel_3.jpg'
    },
    {
      title: 'Eiffel Tower',
      category: 'photography',
      price: 20.00,
      qty: 100,
      description: 'Eiffel Tower in Paris, France 8x10 in.',
      imageFile: 'art/eiffel_8.jpg'
    },
    {
      title: 'Giraffe',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'Giraffe 8x10 in.',
      imageFile: 'art/giraffe.jpg'
    },
    {
      title: 'Great Wall of China',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'Geat Wall of China 8x10 in.',
      imageFile: 'art/great_wall_1.jpg'
    },
    {
      title: 'Great Wall of China',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'Geat Wall of China 8x10 in.',
      imageFile: 'art/great_wall_2.jpg'
    },
    {
      title: 'Great Wall of China',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'Geat Wall of China 8x10 in.',
      imageFile: 'art/great_wall_3.jpg'
    },
    {
      title: 'Great Wall of China',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'Geat Wall of China 8x10 in.',
      imageFile: 'art/great_wall_5.jpg'
    },
    {
      title: 'Great Wall of China',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'Geat Wall of China 8x10 in.',
      imageFile: 'art/great_wall_6.jpg'
    },
    {
      title: 'Great Wall of China',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'Geat Wall of China 8x10 in.',
      imageFile: 'art/great_wall_7.jpg'
    },
    {
      title: 'Kangaroo',
      category: 'photography',
      price: 15.00,
      qty: 100,
      description: 'Kangaroo 8x10 in.',
      imageFile: 'art/kangaroo.jpg'
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


