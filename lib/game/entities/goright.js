
ig.module(
	'game.entities.goright'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
EntityGoright = ig.Entity.extend({
	  _wmDrawBox: true,
       _wmBoxColor: 'rgba(255,100,100,0.5)',
       _wmScalable: true,
       
        checkAgainst: ig.Entity.TYPE.B,
	
	size: {x: 30, y: 60},
	text: null,
	triggeredBy: function( entity, trigger ) {	
	},
    update: function(){
    		
    },

    check: function (other)
    {
	 	this.move='right'
    	this.vel.x=1200
	 	for(i=0;i<ig.game.getEntitiesByType(EntityUfo).length;i++){
            ig.game.getEntitiesByType(EntityUfo )[i].move='right'
            ig.game.getEntitiesByType(EntityUfo)[i].vel.x=ig.game.globalSpeed
         }     

    }
	
	
});

});
