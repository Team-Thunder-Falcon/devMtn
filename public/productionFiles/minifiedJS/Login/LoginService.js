angular.module("groupProject").service("LoginService",["$http","$q",function(e,r){var t=null;this.currentUser=function(){return t},this.getSessionUser=function(){var n=r.defer();return e.get("/api/user/").success(function(e){t=e,n.resolve(e)}).error(function(e){n.reject(e)}),n.promise},this.createUser=function(t,n,o,s){var a=r.defer();return e({method:"POST",url:"/auth/local/signup",data:{firstName:t,lastName:n,email:o,password:s}}).then(function(e){console.log("new user from the service",e),a.resolve(e.data)}),a.promise},this.loginUser=function(n,o){var s=r.defer();return e({method:"POST",url:"/auth/local/login",data:{email:n,password:o}}).then(function(e){t=e.data,s.resolve(e.data)},function(e){s.reject(e)}),s.promise}}]);