angular.module("groupProject").service("bountyService",["$http","$q",function(t,o){this.getBounties=function(){var e=o.defer();return t({method:"GET",url:"http://localhost:8080/api/bounties"}).then(function(t){e.resolve(t)}),e.promise},this.getBountyId=function(o){return t({method:"GET",url:"http://localhost:8080/api/bounties/"+o})},this.closeBounty=function(o){return t({method:"PUT",url:"http://localhost:8080/api/bounties/"+o,data:{isOpen:!1}})}}]);