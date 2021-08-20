const express = require('express')
const router = express.Router()
const utilizationController = require('../../controllers/utilizationController')
const {authorization, authentication} = require('../middleware/authMiddleware')
const {roles} = require('../../config/constants/roles')

//--Route security
router.use(authentication.protect)
router.use(authorization.restrictTo(roles.ADMIN, roles.USER))

//Only for admin
router
    .route('/')
    .get(utilizationController.getLast24hourData)


module.exports = router