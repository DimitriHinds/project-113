function preload()
{

}

function setup()
{
    canvas = createCanvas(500, 400);
    canvas.position(70, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,100,80,300,250);
    stroke(139, 0, 0);
    fill(255, 127, 80);

    circle(40,40,52);
    circle(460,40,52);
    circle(40,360,52);
    circle(460,360,52);

    stroke(32, 178, 170);
    fill(0, 255, 255);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
}

function take_snapshot()
{
    save('student_name.png');
}