const {Router} = require("express")

const router = Router();


router.route('/SignUpPage').post((req,res) => res.json('register route'));










export default router;