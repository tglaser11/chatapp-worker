var config = {
  redisPort: 6379,
  redisHost: 'localhost-redis',
	redisUrl: 'redis://localhost-redis',


  rabbitMQ: {
        host: 'localhost-rabbitmq',
        port: '5672',
        exchange: 'packtchat.log'
  }
};

module.exports = config;
