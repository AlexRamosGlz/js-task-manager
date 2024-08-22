import mysql from 'mysql2';

let pool;

const POOL_OPTIONS = {
    HOST: 'localHost',
    USER: 'root',
    DATABASE: 'test',
    CONNECTION_LIMIT: 10,
    PASSWORD: 'pass'
}

/**
 * Generates pool
 */
export const init = async () => {

    try {
        pool = mysql.createPool({
            host: POOL_OPTIONS.HOST,
            user: POOL_OPTIONS.USER,
            database: POOL_OPTIONS.DATABASE,
            password: POOL_OPTIONS.PASSWORD,
            connectionLimit: POOL_OPTIONS.CONNECTION_LIMIT
        })
    }catch(error) {
        console.error(error);
        throw new Error("Error al crear pool");
    }

}

/**
 * Executes SQL queries in MySQL db
 *
 * @param {string} query - Provide a valid SQL query
 * @param {string[] | Object} params - Provide the parameterized values used
 * in the query
 */
export const execute = (query, params) => {
    const subBaselog = `[execute]`;
  
    try {
      if (!pool)
        init();
  
      console.log(`${subBaselog} query`, query);
      console.log(`${subBaselog} params`, params);
  
      return new Promise((resolve, reject) => {
        pool.query(query, params, (e, results) => {
          if (e) reject(e);
          else resolve(results);
        });
      });
  
    } catch (e) {
      console.error(`${subBaselog} ### ERROR: ${e}`);
      throw new Error('Failed to execute MySQL query');
    }
  };
  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::