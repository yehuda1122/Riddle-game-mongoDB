import jwt from "jsonwebtoken";


export function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log("token:", token);

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }


    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: "Invalid token" });
        }
        req.user = decoded;
        next();
    });
}

export function checkAdminRolr(req, res, next) {
    if (req.user.role !== "admin") {
        res.status(401).json({ error: "Unauthorized" })
    }
    else next();
}
