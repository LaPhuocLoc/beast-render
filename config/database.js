// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'store'),
//       user: env('DATABASE_USERNAME', 'root'),
//       password: env('DATABASE_PASSWORD', 'admin'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-ceve6g94reb4eatdnfg0-a.singapore-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "store_q82h"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "jI5tS91sDaMmKHWtX5tjkODxT4vRqkkC"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: env('DATABASE_SSL', false)
    },
    debug: false,
  },
});
