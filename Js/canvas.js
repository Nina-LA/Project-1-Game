
var canvas = document.getElementById("streetfighters");
var ctx = canvas.getContext("2d");

// function updateCanvas() {
//     ctx.clearRect(Ryu.x, Ryu.y, 100, 100);
// }
var imgRyu = new Image();
imgRyu.src = "images/ryu.png";
var imgChun = new Image();
imgChun.src = "images/chun.png";
var imgHadouken = new Image();
imgHadouken.src = "images/hadouken-2.png";

function Hadouken(x, y, vx, ctx){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.ctx = ctx;

    this.init= function(x, y) {
        this.x = x;
        this.y = y;
    }
    this.update = function() {
    this.x += vx;
    };
};

var hadouken = new Hadouken(300, 500, 3, ctx);

function draw (){

    ctx.clearRect(0, 0, 1300, 800);
    ctx.drawImage(imgRyu, Ryu.x, Ryu.y-Ryu.jump, 100, 100);
    ctx.drawImage(imgChun, Chun.x, Chun.y-Chun.jump, 100, 100);
    ctx.drawImage(imgHadouken, hadouken.x, hadouken.y, 40, 40);
    Chun.sautillement();
    Ryu.sautillement();
    hadouken.update();

}
    //var Hadouken = {
    //   x : 100,
    //    y : 400,
    //    hadoukenForward : function() { 
    //        imgHadouken.src = "images/hadouken-2.png";
     //       this.x += 2; }
    // }
    // Hadouken.hadoukenForward();
     var hurricaneRyu = [
         "ryu_and_the_hurricane_kick-0.png",
         "ryu_and_the_hurricane_kick-1.png",
         "ryu_and_the_hurricane_kick-2.png",
         "ryu_and_the_hurricane_kick-3.png",
         "ryu_and_the_hurricane_kick-4.png",
         "ryu_and_the_hurricane_kick-5.png",
         "ryu_and_the_hurricane_kick-6.png",
         "ryu_and_the_hurricane_kick-7.png",
         "ryu_and_the_hurricane_kick-8.png",
         "ryu_and_the_hurricane_kick-9.png",
         "ryu_and_the_hurricane_kick-10.png",
         "ryu_and_the_hurricane_kick-11.png",
         "ryu_and_the_hurricane_kick-12.png",
         "ryu_and_the_hurricane_kick-13.png",
         "ryu_and_the_hurricane_kick-14.png",
         "ryu_and_the_hurricane_kick-15.png",
         "ryu_and_the_hurricane_kick-16.png",
         "ryu_and_the_hurricane_kick-17.png",
         "ryu.png"
     ]   
    

    var Ryu = {
        x: 30,
        y: 300,
        jump: 0,
        direction: 1,
        life: 100,
        kickass: function() {
            imgRyu.src = "images/ryu-jump-kick-6.png";
            setTimeout(function(){
                imgRyu.src = "images/ryu.png";
            }, 500)
            if(Math.abs(Ryu.x-Chun.x) < 100) {
                // Vérification du fonctionnement du calcul
                console.log(Chun.life);
                Chun.life--
        
                var scoreChun = document.getElementById("lifeChun")
                scoreChun.innerHTML = Chun.life;
            }
        }, 
        moveUp:    function() { this.y -= 25 ;},
        moveDown:  function() { this.y += 25 },
        moveForward:  function() { this.x -= 25 },
        moveBackward: function() { this.x += 25 },
        sautillement: function(){
            this.jump+=this.direction*1
            if(this.jump==20){
                this.direction = -1
            }
            if(this.jump==0){
                this.direction = 1
            }
        },
        throwHadouken: function() {
            imgRyu.src = "images/ryu-throwing-hadouken.png";
            hadouken.init(Ryu.x + 80, Ryu.y + 20);
            setTimeout(function(){
                imgRyu.src = "images/ryu.png";
            }, 500)
            if(hadouken.x-Chun.x < 100) {
                console.log(Chun.life)
                Chun.life--
                // var scoreChun = document.getElementById("#lifeChun")
                // scoreChun.innerHTML = Chun.life;
            }
        },
        hurricane: function() {
                for(var i=0; i<hurricaneRyu.length; i++){
                    setTimeout(function(){
                        imgRyu.src = "images/" + hurricaneRyu[this.i];
                    }.bind({i: i}), 100*i);
                }
                if(Math.abs(Ryu.x-Chun.x) < 100) {
                    Chun.life--
                    var scoreChun = document.getElementById("#lifeChun")
                    scoreChun.innerHTML = Chun.life;
                }
            }
    }
    var imagesChun =
        ["Chun Li Kicks-0.png",
         "Chun Li Kicks-1.png",
         "Chun Li Kicks-2.png",
         "Chun Li Kicks-3.png",
         "Chun Li Kicks-4.png",
         "Chun Li Kicks-5.png",
         "Chun Li Kicks-6.png",
         "Chun Li Kicks-7.png",
         "Chun Li Kicks-8.png",
         "Chun Li Kicks-10.png",
         "Chun Li Kicks-11.png",
         "Chun Li Kicks-12.png",
         "Chun Li Kicks-13.png",
         "Chun Li Kicks-14.png",
         "Chun Li Kicks-15.png",
         "Chun Li Kicks-16.png",
         "Chun Li Kicks-17.png",
         "Chun Li Kicks-18.png",
         "Chun Li Kicks-19.png",
         "Chun Li Kicks-20.png",
         "Chun Li Kicks-21.png",
         "Chun Li Kicks-22.png",
         "Chun Li Kicks-23.png",
         "Chun Li Kicks-24.png",
         "Chun Li Kicks-25.png",
         "Chun Li Kicks-26.png",
         "Chun Li Kicks-27.png",
         "Chun Li Kicks-28.png",
         "Chun Li Kicks-29.png",
         "Chun Li Kicks-30.png",
         "Chun Li Kicks-31.png",
         "Chun Li Kicks-32.png",
         "Chun Li Kicks-33.png",
         "Chun Li Kicks-0.png"]
// Functions for Chun
      var Chun = {
        x: 400,
        y: 300,
        jump: 0,
        direction: 1,
        life: 100,
        kick: function() {
            imgChun.src = "images/Chun Li Kicks-13.png";
            setTimeout(function(){
                imgChun.src = "images/chun.png";
            }, 500)
            if(Math.abs(Chun.x-Ryu.x) < 100) {
                console.log("after Kick" + Ryu.life)
                Ryu.life--
                // var scoreRyu = document.getElementById("#lifeRyu")
                // scoreRyu.innerHTML = Ryu.life;
            }
        },
        retourne: function(){
            for(var i=0; i<imagesChun.length; i++){
                setTimeout(function(){
                    imgChun.src = "images/" + imagesChun[this.i];
                }.bind({i: i}), 100*i);
            }
            console.log("After Retourne" + Ryu.life)
            return Ryu.life--

            // var scoreRyu = document.getElementById("#lifeRyu")
            // scoreRyu.innerHTML = Ryu.life;
        },
        moveUp:    function() { this.y -= 25 },
        moveDown:  function() { this.y += 25 },
        moveForward:  function() { this.x -= 25 },
        moveBackward: function() { this.x += 25 },
        sautillement: function(){
            this.jump+=this.direction*1
            if(this.jump==20){
                this.direction = -1
            }
            if(this.jump==0){
                this.direction = 1
            }
        }
      }

      
    
      document.onkeydown = function(e) {
        switch (e.keyCode) {
          case 65: Ryu.moveUp(); break;
          case 69: Ryu.moveDown(); break;
          case 81: Ryu.moveForward(); break;
          case 68: Ryu.moveBackward(); break;
          case 87: Ryu.kickass(); break;
          case 85: Chun.moveUp(); break;
          case 80: Chun.moveDown(); break;
          case 74: Chun.moveForward(); break;
          case 77: Chun.moveBackward(); break;
          case 78: Chun.kick(); break;
          case 66: Chun.retourne(); break;
          case 86: Ryu.throwHadouken(); break;
          case 83: Ryu.hurricane(); break;
        }
      }
  
     
      setInterval(function(){ draw(); }, 8);
    //   updateCanvas();
