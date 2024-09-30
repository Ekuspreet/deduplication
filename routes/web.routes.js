// Controller imports. These controllers are responsible for rendering the views.
const landingPageController = require('../controllers/web/landing.controller');

module.exports = function(app) {
    // Landing Page
    app.use('/', landingPageController);

}