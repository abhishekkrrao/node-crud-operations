import user from '../../models/Users'
import utils from "../../utils/apputil";
export default class authController {
    static async getUser(req, res) {
        const authHeader = req.headers['Authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        console.log(authHeader)
     
        // if (token == null) return res.sendStatus(401);
        console.log(req.token)
        // console.log("*********")
     
        const data = await user.find();
        console.log(data);
        res.json({ data: data, statusCode: utils.sucess.statusCode, message: utils.sucess.recordFound }).send();
        
        if (req.token === token) {
            const data = await user.find();
            console.log(data);
            res.json({ data: data, statusCode: utils.sucess.statusCode, message: utils.sucess.recordFound }).send();
        } else {
            res.send({ message: "please check auth value", statusCode: 411 });
        }
    }
    static async login(req, res) {
        const data = await user.find({ email: req.body.email });
        (data && data.length > 0) ? res.send({ data, token: req.token }) : res.send({ message: utils.failure.noUser, statuscode: utils.failure.statusCode });
    }
    static async register(req, res) {
        const data = await user.find({ email: req.body.email });
        if (data && data.length == 0) {
            const usr = await user.create({ name: req.body.name, email: req.body.email, password: req.body.password, token: req.token });
            res.send(usr);
        } else {
            res.send({ message: utils.failure.alreadyUserExist, statuscode: utils.sucess.statusCode });
        }
    }
}