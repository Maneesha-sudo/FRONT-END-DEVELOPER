const rateLimitMap = new Map(); // Stores request timestamps per IP

const rateLimiterMiddleware = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const timestamps = rateLimitMap.get(ip);

  // Remove timestamps older than 1 minute (60,000 ms)
  const filtered = timestamps.filter(time => currentTime - time < 60000);
  filtered.push(currentTime);
  rateLimitMap.set(ip, filtered);

  if (filtered.length > 15) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  next();
};

module.exports = rateLimiterMiddleware;
