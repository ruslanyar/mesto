require('dotenv').config({ path: './.env.deploy'});

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_REF,
  DEPLOY_PATH,
} = process.env;

module.exports = {
  apps : [{
    name: 'app-frontend',
  }],

  deploy : {
    production : {
      user : DEPLOY_USER,
      host : DEPLOY_HOST,
      ref  : DEPLOY_REF,
      repo : 'git@github.com:ruslanyar/web-plus-pm2-deploy.git',
      path : DEPLOY_PATH,
      'pre-deploy-local': `scp ./.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/source/frontend`,
      'post-deploy' : 'cd ../source/frontend && npm i && npm run build && pm2 reload ecosystem.config.js',
    }
  }
};
