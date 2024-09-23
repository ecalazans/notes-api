module.exports = {
  apps : [{
    name   : "app1",
    script : "./src/server.js",
    instances: "max",
    env: {
       NODE_ENV: "development"
    },
    env_production: {
       NODE_ENV: "production"
    },
  }]
}