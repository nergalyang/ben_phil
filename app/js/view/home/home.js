var template = require('../../template/home/home.hbs');
var Model = require('../../model/home/homeModel');
//import Model from '../../model/home/homeModel';
var HomeView = Marionette.View.extend({
  el: '#app',
  template: template,
  initialize : function () {
    
  },
  attachElContent: function(html) {
    //渲染本身
    this.$el.html(html);
    return this;
  },
  onRender : function () {
    var that = this;
    window.onload = function(){
      //canvas init
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      
      //canvas dimensions
      var W = window.innerWidth;
      var H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      
      //snowflake particles
      var mp = 75; //max particles
      var particles = [];
      for(var i = 0; i < mp; i++)
      {
        particles.push({
          x: Math.random()*W, //x-coordinate
          y: Math.random()*H, //y-coordinate
          r: Math.random()*4+10, //radius
          d: Math.random()*mp //density
        });
      }

      //Lets draw the flakes
      function draw()
      {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.beginPath();

        for(var i = 0; i < mp; i++)
        {
          var p = particles[i];
          // ctx.moveTo(p.x, p.y);
          // ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
          var img = new Image();
          img.src = '/images/xuehua.png';
          ctx.drawImage(img,p.x,p.y,p.r,p.r);
        }
        //ctx.fill();
        update();
      }
      
      //Function to move the snowflakes
      //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
      var angle = 0;
      function update()
      {
        angle += 0.01;
        for(var i = 0; i < mp; i++)
        {
          var p = particles[i];
          //Updating X and Y coordinates
          //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
          //Every particle has its own density which can be used to make the downward movement different for each flake
          //Lets make it more random by adding in the radius
          p.y += (Math.cos(angle+p.d) + 1 + p.r/2)/10;
          p.x += Math.sin(angle) * 2;
          
          //Sending flakes back from the top when it exits
          //Lets make it a bit more organic and let flakes enter from the left and right also.
          if(p.x > W+5 || p.x < -5 || p.y > H)
          {
            if(i%3 > 0) //66.67% of the flakes
            {
              particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
            }
            else
            {
              //If the flake is exitting from the right
              if(Math.sin(angle) > 0)
              {
                //Enter from the left
                particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
              }
              else
              {
                //Enter from the right
                particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
              }
            }
          }
        }
      }
      //animation loop
      that.int =setInterval(draw, 13);
    };
  },
  onBeforeDestroy : function () {
    //清除这个view 的setinterval
    clearInterval(this.int);
  }

});

module.exports = HomeView;

