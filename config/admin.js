module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6ecc80132f8afe5c3ce3c94aa13b4708'),
  },
});
