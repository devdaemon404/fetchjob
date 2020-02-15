# fetchjob

>An React app fetches job lists from github using Node,Redis and a worker using cron-job!!

## Usage

Install dependencies

```bash
npm install
npm client-install
```

### Redis Setup

Install redis in your machine. Check https://redis.io/topics/quickstart  

### Run Server

```bash
npm run dev     # Express & React & Worker & Redis 
npm run server  # Express API Only :3001
npm run client  # React Client Only :3000
npm run redis   # Runs redis server
npm run worker  # Runs cron-job worker