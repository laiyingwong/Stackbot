const { green, red } = require('chalk');
const { db, Project, Robot } = require('./server/db');

const robots = [
  {
    name: 'Flash',
    fuelType: 'Gas',
    fuelLevel: 50,
    imageUrl: '/Flash.png'
  },
  {
    name: 'Lovey-Dovey',
    fuelType: 'Diesel',
    fuelLevel: 60,
    imageUrl: '/Lovey-Dovey.png'
  },
  {
    name: 'OmnOmn',
    fuelType: 'Electric',
    fuelLevel: 70,
    imageUrl: '/OmnOmn.png'
  },
]

const projects = [
  { id: 1, title: 'Mow the lawn', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deserunt debitis aperiam laborum. Suscipit ex saepe asperiores? Nesciunt vel dolor deserunt blanditiis corporis quo. Itaque facilis molestias nulla. Doloremque, quibusdam.', priority: 10 },
  { id: 2, title: 'Discover love', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deserunt debitis aperiam laborum. Suscipit ex saepe asperiores? Nesciunt vel dolor deserunt blanditiis corporis quo. Itaque facilis molestias nulla. Doloremque, quibusdam.', priority: 10},
  { id: 3, title: 'Cook dinner', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deserunt debitis aperiam laborum. Suscipit ex saepe asperiores? Nesciunt vel dolor deserunt blanditiis corporis quo. Itaque facilis molestias nulla. Doloremque, quibusdam.', priority: 10 },
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
    await robot1.addProject([project1, project2],{through: 'Project_Robot'});
    await robot2.addProject(project2, {through: 'Project_Robot'});


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
