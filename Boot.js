var Alphab = {};
Alphab.Boot = function(game){};
Alphab.Boot.prototype = {
	preload: function(){
		// preload the loading indicator first before anything else
		this.load.image('preloaderBar', 'img/loading-bar.png');
	},
	create: function(){
		// set scale options
		this.input.maxPointers = 1;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.scale.setScreenSize(true);
        //physics system for movement
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
		// start the Preloader state
		this.state.start('Preloader');
	}
};