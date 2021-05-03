player_update();

var canvas=new fabric.Canvas("myCanvas");
console.log("working or nots");

player_x=200;
player_y=200;

var player_object="";
var block_object="";

block_width=30;
block_height=30;

function player_update() {
   fabric.Image.fromURL("player.png",function(Img) {
   player_object=Img;
   player_object.scaleToWidth(300);
   player_object.scaleToHeight(300);
   console.log("working or nots");
   player_object.set({
     top:player_y,
     left:player_x
   });
   canvas.add(player_object);
   });

}

function new_block(get_image) {
   fabric.Image.fromURL(get_image,function(Img) {
   block_object=Img;
   block_object.scaleToWidth(100);
   block_object.scaleToHeight(100);
   console.log("working or nots");
   block_object.set({
     top:player_y,
     left:player_x
   });
   canvas.add(block_object);
   });
}
function falling() {
  setTimeout(1000);
  player_y=player_y+10;
  new_block();
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
  keyPressed=e.keyCode;
  console.log(keyPressed)
  
  if (keyPressed=='38') {
      up();
      console.log("up");
  }

  if (keyPressed=='40') {
      down();
      console.log("down");
  }

  if (keyPressed=='37') {
      left();
      console.log("left");
  }

  if (keyPressed=='39') {
      right();
      console.log("right");
  }

  if (keyPressed=='70') {
    new_block('ironman_face.png')
  }
  if (keyPressed=='66') {
    new_block('spiderman_body.png')
  }
  if (keyPressed=='72') {
    new_block('captain_america_left_hand.png')
  }
  if (keyPressed=='76') {
    new_block('hulk_legs.png')
  }
  if (keyPressed=='82') {
    new_block('thor_right_hand.png')
  }
}

function up() {

 if (player_y>0) {
     player_y=player_y-10;
     canvas.remove(player_object);
     player_update();
 }
}
 
function down() {

  if (player_y<500) {
      player_y=player_y+10;
      canvas.remove(player_object);
      player_update();
  }

}

function left() {

  if (player_x>0) {
      player_x=player_x-10;
      canvas.remove(player_object);
      player_update();
  }

}

function right() {

  if (player_x<700) {
      player_x=player_x+10;
      canvas.remove(player_object);
      player_update();
  }

}