const fetch = require('node-fetch');
const redis = require("redis"),
    client = redis.createClient();

const { promisify } = require('util');

const setAsync = promisify(client.set).bind(client);


const baseURL = "https://jobs.github.com/positions.json"

async function fetchGithub() {

    let resultCount = 1, onPage = 0;
    const allJobs = [];

    while (resultCount > 0) {
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();
        console.log("got", jobs.length, 'jobs')
        allJobs.push(...jobs);
        onPage++;
        resultCount = jobs.length;
    }
    console.log("got", allJobs.length, 'jobs');
    const jrJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();
        if (jobTitle.includes('senior') || jobTitle.includes('manager') || jobTitle.includes('sr.') || jobTitle.includes('architect')) {
            return false;
        }
        return true;
    })

    console.log("got", jrJobs.length, 'filtered Junior SoftDEV jobs');
    const success = await setAsync('github', JSON.stringify(jrJobs));
    console.log({ success });
}

module.exports = fetchGithub;