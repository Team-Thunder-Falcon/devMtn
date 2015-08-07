angular.module("groupProject",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(t,e){var r=function(t,e){return t.getSessionUser().then(function(r){return t.currentUser()||e.go("login"),r})};e.otherwise("/login"),t.state("login",{url:"/login",templateUrl:"app/Login/LoginTmpl.html",controller:"LoginCtrl",resolve:{sessionLogin:function(t,e){t.getSessionUser().then(function(r){return t.currentUser()&&e.go("home"),r})}}}).state("home",{url:"/home",templateUrl:"app/home/homeTmpl.html",controller:"homeCtrl",resolve:{currentUser:r,getPosts:function(t){return t.getPosts().then(function(t){return t})}}}).state("cat",{url:"/home/:cat",templateUrl:"app/home/homeTmpl.html",controller:"contentCategoriesCtrl",resolve:{currentUser:r,getCategoryPosts:function(t,e){return t.getCategoryPosts(e.cat).then(function(t){return t})}}}).state("tag",{url:"/home/:cat/:tag",templateUrl:"app/home/homeTmpl.html",controller:"contentTagsCtrl",resolve:{currentUser:r,getCategoryPostsByTag:function(t,e){return t.getCategoryPostsByTag(e.cat,e.tag).then(function(t){return t})}}}).state("profile",{url:"/profile",templateUrl:"app/userProfile/userProfileTmpl.html",controller:"userProfileCtrl",resolve:{getUser:function(t,e,r){return t.getSessionUser().then(function(){return t.currentUser()?e.getUser(t.currentUser()._id).then(function(t){return e.user=t.data,t.data}):void r.go("login")})}}}).state("admin",{url:"/admin",templateUrl:"app/admin/adminTmpl.html",controller:"adminCtrl",resolve:{currentUser:r,getPosts:function(t){return t.getPosts().then(function(t){return t})}}}).state("bounty",{url:"/bounties",templateUrl:"app/bounty/bountyTmpl.html",controller:"bountyCtrl",resolve:{currentUser:r,bounties:function(t){return t.getBounties().then(function(t){return t})}}}).state("bountyId",{url:"/bounties/:_id",templateUrl:"app/bounty/bountyIdTmpl.html",controller:"bountyIdCtrl",resolve:{currentUser:r,getBountyId:function(t,e){return t.getBountyId(e._id).then(function(t){return t})}}})}]);