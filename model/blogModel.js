module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("blog", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull : false
      },
      imageurl: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      description :{
        type : DataTypes.STRING,
        allowNull : true

      }
      
    
    });
    return Blog;
  };