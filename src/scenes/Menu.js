class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){

    }

    create() {
        //text format
        let gameText = {
            fontFamily: 'Impact',
            fontSize: '28px',
            color: '#000000',
            backgroundColor: '#F3B141',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/2, game.config.height/2, 'Menu Scene', gameText).setOrigin(0.5);
    }

    update(){
        this.scene.start('playScene');
    }
}