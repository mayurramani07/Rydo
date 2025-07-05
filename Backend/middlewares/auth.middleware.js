const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const blackListTokenModel = require('../models/blacklistTokenSchema.model'); 
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlackListed = await blackListTokenModel.findOne({ token: token });
    if (isBlackListed) {
        return res.status(401).json({ message: 'Token is blacklisted' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id).select('-password');
        
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
}

module.exports.authCaptain = async(req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token) {
        return res.status(401).json({message : 'Unauthorized'});
    }

    const isBlackListed = await blackListTokenModel.findOne({token : token});

    if(isBlackListed) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;

        return next()
    }
    catch(err) {
        res.status(401).json({message : 'Unauthorized'})
    }
}
