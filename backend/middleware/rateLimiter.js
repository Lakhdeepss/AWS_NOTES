const { rateLimit } = require("../config/upstash.js");

const ratelimiter = async (req, res, next) => {
    try {
        const { success } = await rateLimit.limit("my-limit-key");
        if (!success) {
            return res.status(429).json({ message: "Too many requests" });
        }
        next();
    } catch (error) {
        console.error("Rate limiter error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = ratelimiter;
