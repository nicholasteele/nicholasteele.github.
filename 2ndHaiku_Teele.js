(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2ndHaiku_Teele_atlas_1", frames: [[0,0,1521,1272],[0,1274,1973,771]]},
		{name:"2ndHaiku_Teele_atlas_2", frames: [[0,0,1702,549],[0,1098,1702,532],[0,551,1702,545]]},
		{name:"2ndHaiku_Teele_atlas_3", frames: [[0,0,1702,529],[0,1543,1702,449],[0,1062,1702,479],[0,531,1702,529]]},
		{name:"2ndHaiku_Teele_atlas_4", frames: [[0,383,1702,306],[0,0,1702,381],[0,691,288,108]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_21 = function() {
	this.initialize(ss["2ndHaiku_Teele_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["2ndHaiku_Teele_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["2ndHaiku_Teele_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["2ndHaiku_Teele_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["2ndHaiku_Teele_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["2ndHaiku_Teele_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["2ndHaiku_Teele_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["2ndHaiku_Teele_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["2ndHaiku_Teele_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["2ndHaiku_Teele_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2073,771);


(lib.CachedBmp_10 = function() {
	this.initialize(img.CachedBmp_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2089,700);


(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2073,771);


(lib.CachedBmp_8 = function() {
	this.initialize(img.CachedBmp_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2089,700);


(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2073,771);


(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2089,700);


(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2073,771);


(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2089,700);


(lib.CachedBmp_3 = function() {
	this.initialize(ss["2ndHaiku_Teele_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2089,700);


(lib.CachedBmp_1 = function() {
	this.initialize(ss["2ndHaiku_Teele_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TreeMusicNote = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(-327.85,-501.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TreeMusicNote, new cjs.Rectangle(-327.8,-501.4,760.5,636), null);


(lib.Sunset = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-394.45,-243.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_13();
	this.instance_1.setTransform(-394.45,-251.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_14();
	this.instance_2.setTransform(-394.45,-244.2,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_15();
	this.instance_3.setTransform(-394.45,-253.1,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_16();
	this.instance_4.setTransform(-394.45,-217.8,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_17();
	this.instance_5.setTransform(-394.45,-202.8,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_18();
	this.instance_6.setTransform(-394.45,-169.1,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_19();
	this.instance_7.setTransform(-394.45,-131.55,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(35,1,1).p("AqAAAIcRAAMAtfAAAEg/vAAAId9AAIE6AAISYAA");
	this.shape.setTransform(31.025,4.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AaCgjQgEBPgNBOA08BRQgIg6gDg6QgBgeAAgeQAAhIk5CE");
	this.shape_1.setTransform(-18.6875,7.6945);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00008D").s().p("AJuCJQgWAAgTgKIgIAAIgGgBIgGgBIgGgCIgGgEIgDgCIgDAAIgEAAIgEAAIgDAAIgFAAIgCAAIgCAAIgCAAIgCgBIgCgBIgCgBIgBgBIgBgBIgBgCIgBgBIgBgCIgBgBIgBgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIABgCIABgCIAAgBIACgCIABgCIABgBIABgCIABgBIACgBIACgCIACgBIACAAIABgBIADgBIACAAIADAAIADAAIAFAAIADAAIAFAAIABAAIAHABIAFACIAGADIAFAEIAGAAIACAAIAKABIAGADIAHACIADADIABAAIABABQAcAEAcgCQA4gDA5AAIA7ABIACABIABABIACAAIABABIACACIACABIABABIAAACIABABIABACIAAACIABABIAAACIAAACIAAACIAAACIAAACIgBACIAAABIgBACIgBACIAAACIgBABIgBACIgCABIgCACIgBABIgCABIgBABIgCABIgCABIgDAAIhMABIghAAIhkgBgAJeBbIABAAIgBgBgAnsBrIgWgCIgXgDIgXgCIgWgDIgFAAIgEAAIgDAAIgEAAIgDgBIgEgBIgDgCIgDgCIgDgCIgEgCIgDAAIgEgBIgDgBIgDgBIgEgBIgCgBIgEgCIgDgDIgCAAIgEgBIgDgBIgDgBIgDgBIgDgCIgCgBIgEgCIgNgBIgMAAIgGAAQgFAAgFgBQgFgCgDgDIgGgEIgIAAIgIAAIgIAAIgIAAIgIAAIgEAAIgBAAIgBAAIgDAAIgEgBIgDgBIgCgBIgEgBIgCgCIgDgCIgCgCIgEAAIgDgBIgDgCIgDgBIgCgCIgDgCIgDgCIgDAAIgEAAIgEAAIgDAAIgEAAIgCAAIgCAAIgCAAIgDgBIgBgBIgCgBIgBgBIgBgBIgBgCIgCgBIgBgCIAAgBIgBgCIAAgCIgBgCIAAgBIAAgCIAAgCIABgCIAAgCIABgCIAAgCIABgBIACgCIABgCIABgBIABgBIABgBIACgBIABgCIADgBIABAAIACgBIACgBIAFAAIAIAAIAGABIAHAAIAGACIAFACIAGACIADACIAEABIADABIADABIADACIACABIACACIADACIALgBIAKAAIALAAIAKABIAKACIAJADIAJAFIALAAIALAAIAKACIAKACIALAFIADACIAEAAIADABIAEABIACABIADABIADACIACABIADACIAEABIADABIAEABIAEABIACABIAEACIADABIATADIAXACIAWADIAXACIAWADIACABIACABIACABIACABIABABIABACIABABIABACIABACIABABIABACIAAACIAAACIAAACIAAACIAAACIAAACIgBACIAAACIgBABIgBACIgBACIgCABIgBACIgBABIgBABIgCABIgCABIgCABIgCAAIgCAAIgDABIgDgBgACUAbIgCAAIgDgBIgDAAIgCgBIgCgCIgCgBIgDgCIgBgDIgBgCIgBgDIAAgEIAAgDIAAgDIAAgCIAAgDIABgDIABgCIACgCIACgCIABgCIACgCIACgBIACgCIADgBIACgBIADgBIADgBIABgDIADgCIABgCQADgIAEgHQADgIAHgGIAMgJIALgHIACgCIABAAIABgDIACgDIADgCIACgDIABgDIACgCIACgDIADgCIACgCIACgCIADgCIADgDIACgCIAFgDIAGgDIAGgCIACgCIADgCIADgBIACgDIABgCIACgBIADgCIACgCIACgBIADgBIADgBIADgBIACgBIADAAIACAAIACAAIACABIADAAIABABIABABIACABIABACIABABIACACIABACIABABIAAACIABACIAAACIAAACIAAACIAAACIAAADIAAACIgBACIgBACIgBABIgBACIgCACIgBACIgCABIgBABIgCACIgCACIgDACIgBACIgDACIgDACIgCACIgDACIgDACIgGADIgHACIgCACIgEADIgCACIgBADIgCACIgDADIgFAIIgHAGIgHAFIgIAFIgEADIgCACIgEADIgCAGIgBAGIgCAGIgEAEIgDAEIgCADIgCACIgCACIgCACIgCACIgEACIgCABIgHACIgCADIgCACIgDACIgDABIgDABIgDABIgEAAgAjHARIgDAAIgDAAIgEAAIgDAAIgBAAIgHgBIgGgCIgFgDIgHgDIgDgBIgDAAIgDgBIgDgBIgCgBIgDgBIgCgCIgCgBIgCgBIgCgCIgBgCIgCgDIgBgCIgBgDIgEgBIgDgCIgCgCIgDgCIgDgCIgHgCIgDgBIgCgCIgDgBIgDgCIgCgCIgDgBIgDgBIgCgBIgCgBIgDgCIgEgDIgCgCIgCgCIgDgCIgBgDIgBgBIABACIgCgDIgCgDIgDgDIgDgDIgCgCIgGgDIgEgDIgFgFIgDgFIgCgFIgBgDIgBgCIAAgCIABgDIABgCIAAgCIABgCIABgCIABgCIABgBIACgCIABgBIADgBIACgBIABgBIACgBIACgBIADAAIABAAIACgBIACABIADAAIACAAIABABIACABIACABIACACIACABIABACIAIAFIAIAIIAHAIIAEAFIACADIAGACIADABIADABIACACIACACIACACIAHABIACABIAEACIACABIACACIACACIADACIAGACIAFADIAFAEIAEAFIACAFIAHACIADACIAEABIACACIADACIAFAAIAEAAIAFAAIACAAIACAAIACABIACABIACAAIABABIACACIABABIABABIABACIABABIABACIABACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIgBAAIgBACIAAACIgBACIgCABIgBACIgBABIgCACIgBABIgCABIgCABIgCABIgCABIgCAAIgCAAg");
	this.shape_2.setTransform(-7,-38.4187);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("AIGAhQhhgBg2ALIg1AOQgiAKgTADQgnAIgxABQggABg5gCIkBgIICah7IhlgDQgJAAgFgDQgCgCgBgEQgBgEACgCQhPgKhVgEIcRAAQgEBRgNBMIgsAAQicAAjcANIgDABQkRgxkWgEgAxZAlQiSgFg+gBQhhgBhPACQgIg5gDg8ISYAAIgLACQgQAEgaAUIiSB0g");
	this.shape_3.setTransform(-3,12.6125);

	this.instance_8 = new lib.CachedBmp_20();
	this.instance_8.setTransform(-394.45,-243.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.instance_8}]},5).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-394.4,-253.1,851,274.9);


(lib.circlebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(10,1,1).p("ANBAAQAAFZj0D0Qj0D0lZAAQlYAAj0j0Qj0j0AAlZQAAlYD0j0QD0j0FYAAQFZAAD0D0QD0D0AAFYg");
	this.shape.setTransform(0.25,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ApMJMQj0jzABlZQgBlYD0j0QD0jzFYgBQFZABD0DzQD0D0AAFYQAAFZj0DzQj0D0lZAAQlYAAj0j0g");
	this.shape_1.setTransform(0.25,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ApMJMQj0jzABlZQgBlYD0j0QD0jzFYgBQFZABD0DzQD0D0AAFYQAAFZj0DzQj0D0lZAAQlYAAj0j0g");
	this.shape_2.setTransform(0.25,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0066FF").ss(10,1,1).p("AOoAAQAAF4kSEKQkSEKmEAAQmDAAkSkKQkSkKAAl4QAAl4ESkKQESkJGDAAQGEAAESEJQESEKAAF4g");
	this.shape_3.setTransform(0.275,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AqVKCQkSkKAAl4QAAl4ESkKQESkJGDAAQGEAAESEJQESEKAAF4QAAF4kSEKQkSEKmEAAQmDAAkSkKg");
	this.shape_4.setTransform(0.275,-1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ApMJNQjzj0gBlZQABlYDzj0QD0jzFYgBQFZABD0DzQD0D0AAFYQAAFZj0D0Qj0D0lZAAQlYAAj0j0g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:0.25,y:-1.7}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{x:0.25,y:-1.7}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{x:0,y:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.3,-97.5,197.2,191.6);


(lib.Breeze = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// breeze
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-541.15,-174.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(-541.15,-209.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(-541.15,-174.25,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(-541.15,-192.65,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(-541.15,-174.25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_7();
	this.instance_5.setTransform(-521.15,-192.65,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_8();
	this.instance_6.setTransform(-541.15,-174.25,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_9();
	this.instance_7.setTransform(-520.65,-192.65,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_10();
	this.instance_8.setTransform(-541.15,-174.25,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_11();
	this.instance_9.setTransform(-520.65,-192.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.instance_9}]},5).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-541.1,-209.8,1057,402.70000000000005);


// stage content:
(lib._2ndHaiku_Teele = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		stage.enableMouseOver();
		
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1");
			root.line01_txt.text = line01;
		}
		
		var line01 = "whispering breeze sighs";
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		function changeLine02(){
			console.log("will change line 2");
			root.line02_txt.text = line02;
		}
		
		var line02 = "the sunset hues paint the sky";
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine03(){
			console.log("will change line 3");
			root.line03_txt.text = line03;
		}
		
		var line03 = "nature's lullaby";
		this.stop();
		var root = this;
		stage.enableMouseOver();
		
		this.toFrame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2");
			root.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// buttons
	this.toFrame02_btn = new lib.circlebutton();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(480.75,455.6);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.toFrame02_btn).to({_off:true},1).wait(1));

	// sunset
	this.instance = new lib.Sunset();
	this.instance.setTransform(407.95,518.75,1,1,0,0,0,31,-110.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// tree
	this.instance_1 = new lib.TreeMusicNote();
	this.instance_1.setTransform(766.55,500.95,0.3534,0.3901,0,0,0,52.5,-183.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// breeze
	this.instance_2 = new lib.Breeze();
	this.instance_2.setTransform(492,406.95,1,1,0,0,0,-19,0.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// text
	this.line03_txt = new cjs.Text("Line three", "45px 'Times New Roman'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 52;
	this.line03_txt.lineWidth = 893;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(481.5,302.85);

	this.line02_txt = new cjs.Text("Line two", "45px 'Times New Roman'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 52;
	this.line02_txt.lineWidth = 894;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(481,227.85);

	this.line01_txt = new cjs.Text("Line one", "45px 'Times New Roman'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 52;
	this.line01_txt.lineWidth = 889;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(481.5,158.75);

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(399.7,57.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt}]}).to({state:[]},1).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("EhMMgzGMCYZAAAMAAABmNMiYZAAAg");
	this.shape.setTransform(480.65,321.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEFFFF").s().p("EhMMAzHMAAAhmNMCYZAAAMAAABmNg");
	this.shape_1.setTransform(480.65,321.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(10,1,1).p("EhNNgzgMCabAAAMAAABnBMiabAAAg");
	this.shape_2.setTransform(476.85,321.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33FFFF").s().p("EhNNAzhMAAAhnBMCabAAAMAAABnBg");
	this.shape_3.setTransform(476.85,321.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(449.9,306.4,564.5,349.4);
// library properties:
lib.properties = {
	id: '7EA236F78B2E4C4B80077EC3537AA6A5',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_11.png", id:"CachedBmp_11"},
		{src:"images/CachedBmp_10.png", id:"CachedBmp_10"},
		{src:"images/CachedBmp_9.png", id:"CachedBmp_9"},
		{src:"images/CachedBmp_8.png", id:"CachedBmp_8"},
		{src:"images/CachedBmp_7.png", id:"CachedBmp_7"},
		{src:"images/CachedBmp_6.png", id:"CachedBmp_6"},
		{src:"images/CachedBmp_5.png", id:"CachedBmp_5"},
		{src:"images/CachedBmp_4.png", id:"CachedBmp_4"},
		{src:"images/CachedBmp_2.png", id:"CachedBmp_2"},
		{src:"images/2ndHaiku_Teele_atlas_1.png", id:"2ndHaiku_Teele_atlas_1"},
		{src:"images/2ndHaiku_Teele_atlas_2.png", id:"2ndHaiku_Teele_atlas_2"},
		{src:"images/2ndHaiku_Teele_atlas_3.png", id:"2ndHaiku_Teele_atlas_3"},
		{src:"images/2ndHaiku_Teele_atlas_4.png", id:"2ndHaiku_Teele_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7EA236F78B2E4C4B80077EC3537AA6A5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;