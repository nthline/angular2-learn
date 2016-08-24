"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var science_component_1 = require('./science.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'science',
        component: science_component_1.ScienceComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map