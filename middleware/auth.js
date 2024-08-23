// middleware/auth.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
    if (token) {
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Forbidden" });
            }
            req.user = decoded; 
            next();
        });
    } else {
        return res.status(401).json({ message: "No token found, please login first" });
    }
};

module.exports = { auth };
