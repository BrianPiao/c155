AFRAME.registerComponent("game-play", {
     schema: {
          elementId: { type: "string", default: "#ring1" },
        },
        update: function () {
          this.isCollided(this.data.elementId);
        }, 
        isCollided:function(eid){
        const ele = document.querySelector(eid)
        ele.addEventListener("collide" , (e) => {
          if (eid.includes("#ring")){
               console.log(elementId + " collision");
          }
          else if( eid.includes("#hurdle"){
               console.log("bird collision"); 
          }
        
          
        })
         
      }
})
