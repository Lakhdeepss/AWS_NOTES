const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");
require("dotenv").config();

// Create Redis instance using env vars
const redis = Redis.fromEnv();

const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, "10 s"),
});

module.exports = { redis, rateLimit };
