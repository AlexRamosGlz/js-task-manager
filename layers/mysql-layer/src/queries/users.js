const USERS_TABLE = "users";

export const getById = `SELECT * FROM ${USERS_TABLE} WHERE id = ?`;

export const list = `SELECT * FROM ${USERS_TABLE}`;

export const add = `INSERT INTO ${USERS_TABLE} ( id, username, password, createdAt, updatedAt ) VALUES (?, ?, ?, ?, ?)`;

export const remove = `DELETE FROM ${USERS_TABLE} WHERE id = ?`;

