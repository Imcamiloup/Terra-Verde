import server from "./src/server.js";
import sequelize from "./src/config/db.js";


const { PORT } = process.env;

sequelize
  .sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log("Database connection succesful!");
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("There was an error:", error);
  });

export default sequelize;
