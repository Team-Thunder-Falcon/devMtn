angular.module("groupProject").directive("modalDialog",function(){return{restrict:"E",scope:{show:"="},replace:!0,transclude:!0,link:function(i,t,l){i.dialogStyle={},l.width&&(i.dialogStyle.width=l.width),l.height&&(i.dialogStyle.height=l.height),i.hideModal=function(){i.show=!1}},templateUrl:"app/Login/loginModalDialog.html"}});