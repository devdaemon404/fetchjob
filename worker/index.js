const CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github')

new CronJob('* * * * *', function() {
  fetchGithub();
}, null, true, 'America/Los_Angeles');