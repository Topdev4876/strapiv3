module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'ec2-54-156-110-139.compute-1.amazonaws.com',
      port: 5432,
      database: 'd57ltl76enjqb3',
      user: 'qvrkwjeeabhaea',
      password: '166190007d1191cb4fa4d05b2fe8f5ebc07892e44a025e35498061223b71e624',
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
 