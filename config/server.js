module.exports = ({ env }) => ({
  host: env('HOST', '192.168.43.253'),
  port: env.int('PORT', 8080),

  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'fca71fe8319a24fc6affe21a964013d3'),
    },
  },
});
