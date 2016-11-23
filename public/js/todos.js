/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('todos', ['firebase'])

.run(function() {
      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAsRL2R6PDgmh9rAEOI25-knTH8Hp77PlU",
    authDomain: "todos-a75f5.firebaseapp.com",
    databaseURL: "https://todos-a75f5.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "52780417196"
  };
  firebase.initializeApp(config);
})

.service('Todos', ['$firebaseArray', function($firebaseArray){
    // var items = [
    //         {
    //             "title":"testing 1",
    //             "finished": false,
    //             "$id": 1
    //         }
    //     ];
    var ref = firebase.database().ref().child('todos');
    var items = $firebaseArray(ref);

    var todos = {
        "items": items,
        addItem: function(title) {
            items.$add({
                'title': title,
                'finished':false
            });
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    
//   console.log("todos:", JSON.stringify(todos));
    
    return todos;
}]);

