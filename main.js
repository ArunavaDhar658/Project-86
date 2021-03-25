var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function player_update()
{
    fabric.Image.fromURL("https://th.bing.com/th/id/R9f6b918ac1e7d35c1d09d4f019a51419?rik=PIh15IDoCnynng&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Qt3VjBXu6EU%2fUHrR9CcUJrI%2fAAAAAAAAAmQ%2fQXFFuyI1xNg%2fs1600%2fSuperman-Cartoon-Superhero.jpg&ehk=KLb1gjVJl6tKKK%2bqIrGuv88iN8cXS7cvlwojxvTAD0M%3d&risl=&pid=ImgRaw",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set
       (
           {
               top:player_y,
               left:player_x  
           }
       );
       canvas.add(player_object);
        }
    );
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_image_object= Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set
        (
            {
              top:player_y,
              left:player_x
            }
        );
        canvas.add(block_image_object);
    }
    );
}