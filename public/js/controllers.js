angular.module('app.controllers', [])
  
.controller('todosCtrl', ['$scope', '$stateParams', 'Todos', '$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Todos, $ionicModal) {

   $scope.items = Todos.items;
   
   $scope.data = {
       'title': ''
   }
   
   $scope.modal = $ionicModal.fromTemplate("<ion-modal-view>" +
        "<ion-header-bar class='bar-balanaced'>" +
            "<h1 class='title'>Add item</h1>" +
            "<button class='button button-clear' ng-click='closeModal()'>Close</button>" +
        "</ion-header-bar>" +
        "<ion-content class='padding'>" +
            "<label class='item item-input'><input type='text' placeholder='Title' ng-model='data.title' /></label>" +
            "<button class='button button-balanced button-block' ng-click='addItem()'>Submit</button>" +
        "</ion-content>" +
        "</ion-modal-view>", {
            scope:$scope,
            animation: 'slide-in-up'
        })
     
    $scope.showModal = function() {
        $scope.modal.show();
    }
    
    $scope.closeModal = function() {
         $scope.data.title = '';
        $scope.modal.hide();
    }
    
    $scope.addItem = function() {
        Todos.addItem($scope.data.title);
        $scope.closeModal();
    }
}])
   
.controller('finishedCtrl', ['$scope', '$stateParams', 'Todos', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Todos) {

  $scope.items = Todos.items;

}])
      
.controller('todoItemCtrl', ['$scope', '$stateParams', 'Todos', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Todos) {

  //  $scope.itemid = $stateParams.item;
  
  $scope.item = Todos.items[Todos.items.$indexFor($stateParams.item)];
  
  $scope.toggleFinished = function() {
      if ($scope.item.finished) {
          Todos.setFinished($scope.item, false);
      } else {
          Todos.setFinished($scope.item, true);
      }
  }
  
}])
 