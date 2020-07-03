var app = angular.module('myTodoApp',[]);

app.controller('myTodoCtrl',function($scope){

    $scope.todoList = [
        {
            id : 0,    
            task : 'Wash my Car',
            done : false,
            trash : false,
            star : false
        }, {
            id : 1,    
            task : 'Book ticket',
            done : true,
            trash : false,
            star : false
        },
        {
            id : 2,    
            task : 'Order food',
            done : false,
            trash : false,
            star : false
        }
    ];

    $scope.addTodo = function(){
        $scope.todoList.push({
            id : $scope.todo.length+1,
            task : $scope.enterToDo,
            done : false,
            trash : false,
            star : false
        });
        $scope.enterToDo="";
    };

    $scope.completeToDo = function(index){
        index.done = !index.done
        index = index.done
        $scope.todoList[index.id] = index;      
    }

    $scope.bookmarkToDo = function(index){
        index.star = !index.star
        index = index.star
        $scope.todoList[index.id] = index;   
    }

    $scope.deleteToDo = function(index){
         index.trash = !index.trash
         index = index.trash
         $scope.todoList[index.id] = index;  
    }


});