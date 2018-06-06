angular.module('helloWorld')
 .controller("helloWorldsController", ['helloWorldService',function(hello) {
    this.string = ''

    this.world = function(){
      this.string = hello.helloWorld
      }

  }]);