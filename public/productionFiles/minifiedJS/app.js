angular.module("groupProject",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(t,e){e.otherwise("/login"),t.state("login",{url:"/login",templateUrl:"app/Login/LoginTmpl.html",controller:"LoginCtrl"}).state("home",{url:"/home",templateUrl:"app/contentLanding/contentLandingTmpl.html",controller:"contentLandingCtrl",resolve:{getPosts:function(t){return t.getPosts().then(function(t){return t})}}}).state("cat",{url:"/home/:cat",templateUrl:"app/contentLanding/contentLandingTmpl.html",controller:"contentCategoriesCtrl",resolve:{getCategoryPosts:function(t,e){return t.getCategoryPosts(e.cat).then(function(t){return t})}}}).state("profile",{url:"/profile",templateUrl:"app/userProfile/userProfileTmpl.html",controller:"userProfileCtrl",resolve:{getPosts:function(t){return t.getPosts().then(function(t){return t})},getUser:function(t){return t.getUser().then(function(t){return t})}}}).state("admin",{url:"/admin",templateUrl:"app/admin/adminTmpl.html",controller:"adminCtrl",resolve:{getPosts:function(t){return t.getPosts().then(function(t){return t})}}}).state("category",{url:"/category"}).state("bounty",{url:"/bounty"})}]);