angular.module("groupProject").directive("modalDialog",function(){return{restrict:"E",replace:!0,transclude:!0,link:function(t,e,l){t.dialogStyle={},l.width&&(t.dialogStyle.width=l.width),l.height&&(t.dialogStyle.height=l.height)},templateUrl:"app/addContent/addContentTmpl.html",controller:"addContentCtrl"}});