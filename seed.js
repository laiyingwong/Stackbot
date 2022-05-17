const { green, red } = require('chalk');
const { db, Project, Robot } = require('./server/db');

const robots = [
  {
    name: 'Hope',
    fuelType: 'gas',
    fuelLevel: 50,
    imageUrl: 'https://images.unsplash.com/photo-1585422168344-4d9e7a8c91ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhcyUyMHJvYm90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    name: 'WALL-E',
    fuelType: 'diesel',
    fuelLevel: 60,
    imageUrl: 'https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cm9ib3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  },
  {
    name: 'Rock',
    fuelType: 'electric',
    fuelLevel: 70,
    imageUrl: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  },
]

const projects = [
  { id: 1, title: 'Build barn', description: 'Lorem Ipsum' },
  { id: 2, title: 'Discover love', completed: true},
  { id: 3, title: 'Open the pod bay doors', priority: 10 },
];


const seed = async () => {
  try {
    await db.sync({ force: true });
    // seed your database here!
    await Promise.all(robots.map(robot => {
      return Robot.create(robot);
    }));

    await Promise.all(projects.map(project => {
      return Project.create(project);
    }));

    const project1 = await Project.findByPk(1);
    const project2 = await Project.findByPk(2);

    const robot1 = await Robot.findByPk(1);
    const robot2 = await Robot.findByPk(2);

    // at least one robot that has several projects
    // at least one project that has several robots
    await robot1.addProject(project1);
    await robot1.addProject(project2);
    await robot2.addProject(project2);

  } catch (err) {
    console.log(red(err));
  }
};



module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
