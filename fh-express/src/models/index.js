const config = require('../config');
const { Sequelize, DataTypes } = require('sequelize');
const categoryModel = require('./category');
const diaryModel = require('./diary');
const exerciseModel = require('./exercise');
const postModel = require('./post');
const programModel = require('./program');
const userModel = require('./user');

function syncDatabase() {
  // create sequelize instance 
  const sequelize = new Sequelize(
    config.db.database,
    config.db.username, 
    config.db.password, 
    {
        host: config.db.host,
        port: config.db.port,
        dialect: config.db.dialect
    }
  );
  // connect to database
  sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
  }).catch((error) => {
  console.error('Unable to connect to the database: ', error);
  });

  // create models
  const Category = categoryModel(sequelize, DataTypes);
  const Diary = diaryModel(sequelize, DataTypes);
  const Exercise = exerciseModel(sequelize, DataTypes);
  const Post = postModel(sequelize, DataTypes);
  const Program = programModel(sequelize, DataTypes);
  const User = userModel(sequelize, DataTypes);

  // define relationship
  Category.belongsToMany(Exercise, { through: 'CategoryExercises' });
  Exercise.belongsToMany(Category, { through: 'CategoryExercises' });
  Program.hasMany(Diary);
  Diary.belongsTo(Program);
  Exercise.hasMany(Diary);
  Diary.belongsTo(Exercise);
  User.hasMany(Diary);
  Diary.belongsTo(User);
  Exercise.belongsToMany(Program, { through: 'ExercisePrograms' });
  Program.belongsToMany(Exercise, { through: 'ExercisePrograms' });
  User.hasMany(Post);
  Post.belongsTo(User);
  User.hasMany(Program);
  Program.belongsTo(User);

  // synchronize sequlize with the database
  sequelize.sync()
  .then(() => {
    console.log('Synchronized model definitions with the structure of the database!');
  })
  .catch(err => {
    console.error('The model definitions cannot be synchronized with the database structure:', err);
  });
}

module.exports = syncDatabase;