class EnemySummoner extends GameObject {
    constructor() {
        super();
        // Add  object to specific layer (for render) and setup renderer
        GameObject.midLayer.push(this);
        this.renderer = new SingleImageRenderer(0, 0, '#ffffff');

        // Setup moving props
        this.position = new Vector2D(50, 50);
        this.summonerCounter = new FrameCounter(10)
    }
    run() {
        super.run();
        this.summonEnemy()
    }
    summonEnemy() {
        if (this.summonerCounter.run()) {
            const newEnemy = GameObject.recycle("Enemy");
            let side = randomInRange(1, 4);
            if (side == 1) {
                //left
                this.position.x = randomInRange(-ENEMY_WIDTH, 0);
                this.position.y = randomInRange(0, CANVAS_HEIGHT);
                newEnemy.velocity.x = 5;
                newEnemy.velocity.y = 0;
            }
            else if (side == 2) {
                //right
                this.position.x = randomInRange(CANVAS_WIDTH, CANVAS_WIDTH + ENEMY_WIDTH);
                this.position.y = randomInRange(0, CANVAS_HEIGHT);
                newEnemy.velocity.x = -5;
                newEnemy.velocity.y = 0;
            }
            else if (side == 3) {
                //up
                this.position.x = randomInRange(0, CANVAS_WIDTH);
                this.position.y = randomInRange(-ENEMY_HEIGHT, 0);
                newEnemy.velocity.x = 0;
                newEnemy.velocity.y = 5;
            }
            else if (side == 4) {
                //down
                this.position.x = randomInRange(0, CANVAS_WIDTH);
                this.position.y = randomInRange(CANVAS_HEIGHT, CANVAS_HEIGHT+ENEMY_HEIGHT);
                newEnemy.velocity.x = 0;
                newEnemy.velocity.y = -5;
            }
            newEnemy.position.set(this.position);
            this.summonerCounter.reset();
        }
    }
}
