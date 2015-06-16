//Sublime snippets used in the video: https://gist.github.com/johnlindquist/252f29e087219be7e11a
function Clicker(){
  this.clickCounter = 0;
  this.x = 0;
  this.y = 0;
  this.customCounter = 0;

  this.onClick = function onClick(){
    this.clickCounter++;
  };

  this.onMouseMove = function onMouseMove(event){
    this.x = event.x;
    this.y = event.y;
  };

  this.onCustom = function() {
    this.customCounter++;
  };

  var button = document.querySelector("#button");
  setInterval(function() {

    button.dispatchEvent(new Event("custom"));

  }, 1000);

}
Clicker.annotations = [
  new angular.ComponentAnnotation({
    selector: "clicker"
  }),
  new angular.ViewAnnotation({
    template: '<div>\
          <button id="button" (mousemove)="onMouseMove($event)" (custom)="onCustom()" (click)="onClick()">{{clickCounter}}</button>\
          {{x}}, {{y}}\
          {{customCounter}}\
        </div>'
  })
];



function App(){}
App.annotations = [
  new angular.ComponentAnnotation({
    selector: "app"
  }),
  new angular.ViewAnnotation({
    directives: [Clicker],
    template: '<div>\
          <h1>App</h1>\
          <clicker></clicker><br/>  \
        </div>'
  })
];

document.addEventListener("DOMContentLoaded", function(){
  angular.bootstrap(App);
});