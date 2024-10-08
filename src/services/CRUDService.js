const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("SELECT *FROM Users");
  return results;
};

const getUserById = async (UserId) => {
  const [results, fields] = await connection.query(
    "SELECT *FROM Users where id = ? ",
    [UserId]
  );
  const user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserById = async (email, name, city, userId) => {
  let [results, fields] = await connection.execute(
    `
    UPDATE Users
    SET email = ?, name = ? , city= ?
    WHERE id = ?;
    `,
    [email, name, city, userId]
  );
};

const deleteUserById = async (userId) => {
  let [results, fields] = await connection.execute(
    `DELETE FROM Users WHERE id = ? `,
    [userId]
  );
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
