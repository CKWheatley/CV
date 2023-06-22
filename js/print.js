window.onbeforeprint = function(){
    function actionPrint(fader){
        fader.fadeIn(0)
    }
    actionPrint($("#experience"));
    actionPrint($("#profile"));
  }; // move this to a seperate print module for ease of use.