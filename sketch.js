//declarations of sprites, functions, and some atributes
let ball, floor, wall1, wall2, ceiling, goal, timed, fScore, scoreSprite, scoreChange, endScreen, eScreen;
let bText = "seamus";
let score = 0;
let speedY=10;
let speedX=10;
let speed2Y=10;
let speed2X=10;
let recta1, recta2, recta3, recta4, recta5, recta6, recta7, recta8, recta9, recta10, recta11, recta12, recta13, recta14, recta15, recta16;

//setup and sprite creation
function setup() {
	//defines canvas and custom colours
	new Canvas(500, 500);
	displayMode('centered');
	let iOrange = color(255, 79, 0);
	let iOrangeInverse = color(0, 176, 255);
	allSprites.layer = 0;
	

	//makes floor sprite
	floor = new Sprite(250, 498.5, 500, 5, 'static');
	floor.bounciness = 0.5;

	//makes wall1 sprite
	wall1 = new Sprite(2.5, 250, 500, 5, 'static');
	wall1.rotation = 90;
	wall1.bounciness = 0.5;

	//makes wall2 sprite
	wall2 = new Sprite(498.5, 250, 500, 5, 'static');
	wall2.rotation = 90;
	wall2.bounciness = 0.5;

	//makes ceiling sprite
	ceiling = new Sprite(250, 2.5, 500, 5, 'static');
	ceiling.bounciness = 0.5;

	//makes goal sprite
	goal = new Sprite(250, 2.5, 100, 5, 'static')

	//makes ball/player sprite
	ball = new Sprite(100, 100, 45, 45,);
	ball.collision = 'k';
	ball.rotation = 45;
	ball.stroke = iOrange;
	ball.color = iOrangeInverse;
	ball.strokeWeight = 5;
	ball.textSize = 10;
	ball.text = bText;
	ball.textColor = iOrange;
	

	//makes recta sprites
	recta1= new Sprite(175, 175, 50, 50, 'dynamic');
	recta2= new Sprite(175, 225, 50, 50, 'dynamic');
	recta3= new Sprite(175, 275, 50, 50, 'dynamic');
	recta4= new Sprite(175, 325, 50, 50, 'dynamic');
	recta5= new Sprite(225, 175, 50, 50, 'dynamic');
	recta6= new Sprite(225, 225, 50, 50, 'dynamic');
	recta7= new Sprite(225, 275, 50, 50, 'dynamic');
	recta8= new Sprite(225, 325, 50, 50, 'dynamic');
	recta9= new Sprite(275, 175, 50, 50, 'dynamic');
	recta10= new Sprite(275, 225, 50, 50, 'dynamic');
	recta11= new Sprite(275, 275, 50, 50, 'dynamic');
	recta12= new Sprite(275, 325, 50, 50, 'dynamic');
	recta13= new Sprite(325, 175, 50, 50, 'dynamic');
	recta14= new Sprite(325, 225, 50, 50, 'dynamic');
	recta15= new Sprite(325, 275, 50, 50, 'dynamic');
	recta16= new Sprite(325, 325, 50, 50, 'dynamic');

	//defines recta sprites colours
	recta1.color = 'red';
	recta2.color = 'orange';
	recta3.color = 'yellow';
	recta4.color = 'green';
	recta5.color = 'blue';
	recta6.color = 'purple';
	recta7.color = 'red';
	recta8.color = 'orange';
	recta9.color = 'yellow';
	recta10.color = 'green';
	recta11.color = 'blue';
	recta12.color = 'purple';
	recta13.color = 'yellow';
	recta14.color = 'white';
	recta15.color = 'purple';
	recta16.color = 'black';

	//makes scoresprite
	scoreSprite = new Sprite(30, 30, 1, 1, 'none');
	scoreSprite.color = 'skyblue'
	scoreSprite.textSize = 40;
	scoreSprite.layer = 1;
	scoreSprite.stroke = 'skyblue'

	//makes timersprite
	timerSprite = new Sprite(440, 30, 1, 1, 'none');
	timerSprite.color = 'skyblue'
	timerSprite.textSize = 40;
	timerSprite.layer = 1;
	timerSprite.stroke = 'skyblue'

}

//draw function, functionss and supporting material, game mechanics
function draw() {
	background('skyblue');

	// cant be moved from draw as it updates the timer
	//defines timer text
	timed = round(world.realTime, [1]);

	// cant be moved from draw as it updates the score
	//updates score
	function scoreChange(){
		score+=1;
	}

	// cant be moved from draw as it relies on values updated with in draw
	//dislpays endscreen and calculates score
	function endScreen(){
		eScreen = new Sprite(250, 250, 1, 1, 'none');
		eScreen.color = 'skyblue';
		fScore = "SCORE="+round(score/timed*100, [2]);
		eScreen.textSize = 40;
		eScreen.text = fScore;
	}

	//movment of player
	if (mouse.presses()) {
		ball.speed = 10;
		ball.moveTowards(mouse, 0.15);
		}
	
		//collision with goal triggering box removal and score change
	if (recta1.collides(goal)){
		recta1.remove();
		scoreChange();
		}
	if (recta2.collides(goal)){
		recta2.remove();
		scoreChange();
		}
	if (recta3.collides(goal)){
		recta3.remove();
		scoreChange();
		}
	if (recta4.collides(goal)){
		recta4.remove();
		scoreChange();
		}
	if (recta5.collides(goal)){
		recta5.remove();
		scoreChange();
		}
	if (recta6.collides(goal)){
		recta6.remove();
		scoreChange();
		}
	if (recta7.collides(goal)){
		recta7.remove();
		scoreChange();
		}
	if (recta8.collides(goal)){
		recta8.remove();
		scoreChange();
		}
	if (recta9.collides(goal)){
		recta9.remove();
		scoreChange();
		}
	if (recta10.collides(goal)){
		recta10.remove();
		scoreChange();
		}
	if (recta11.collides(goal)){
		recta11.remove();
		scoreChange();
		}
	if (recta12.collides(goal)){
		recta12.remove();
		scoreChange();
		}
	if (recta13.collides(goal)){
		recta13.remove();
		scoreChange();
	}
	if (recta14.collides(goal)){
		recta14.remove();
		scoreChange();
		}
	if (recta15.collides(goal)){
		recta15.remove();
		scoreChange();
		}
	if (recta16.collides(goal)){
		recta16.remove();
		scoreChange();
		}

		//defines scoresprite text
		scoreSprite.text = score;
		//defines timersprite text
		timerSprite.text = timed;

		//triggers endscreen and stops game
	if (score == 16){
		endScreen();
		noLoop();
		}

}