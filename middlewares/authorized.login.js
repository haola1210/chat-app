let User = require("../models/users.model");
module.exports.checkAuth = (req, res, next) => {
	if(!(req.signedCookies.user_id && req.cookies.user) 
		|| req.signedCookies.user_id !== req.cookies.user){
		res.redirect("/")
		return;
	}
	User.findOne({_id : req.signedCookies.user_id})
	.then(() => {
		next()
	})
	.catch(() => {
		res.redirect("/")
		return;
	})
}