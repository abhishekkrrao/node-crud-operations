import user from "../models/Users"
export default class basicController {
    static async getData(req, res) {
        const data = await user.find();
        res.json(data).send();
    }

    static async getUser(req, res) {
        const data = await user.find({ email: req.query.email });
        (data && data.length > 0) && res.send("email already exist !!!");
        const userAdded = await user.create({ name: req.query.name, email: req.query.email, password: req.query.password });
        res.send(userAdded);
    }
    static async updateUser(req, res) {
        try {
            const [data] = await user.find({ email: req.body.email });
            (data) && await data.updateOne({ name: req.body.name, email: req.body.email, password: req.body.password });
            const userAdded = await user.create({ name: req.body.name, email: req.body.email, password: req.body.password });
            res.send(userAdded);
        } catch (error) {
            console.log(error)
        }
    }
}