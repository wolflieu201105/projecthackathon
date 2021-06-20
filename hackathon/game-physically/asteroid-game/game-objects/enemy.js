class Enemy extends GameObject {
  constructor() {
    super();
    // Add  object to specific layer (for render) and setup renderer
    GameObject.midLayer.push(this);
    this.renderer = new SingleImageRenderer(
      ENEMY_WIDTH,
      ENEMY_HEIGHT,
      generateRandomHexColor()
    );
    // Setup moving props
    this.position = new Vector2D(50, 50);
    this.velocity = new Vector2D(4, 4);

    // Setup box colider (for physics handle)
    this.boxColider = new BoxColider(this, ENEMY_WIDTH, ENEMY_HEIGHT);

  }
  run() {
    super.run();
    this.chasePlayer();
    this.hitPlayer();
  }
  chasePlayer() {
    if (NUMBER_PLAYER == 1) {
      this.velocity.x = 4 * (GameObject.findObjectOfClass('Player1')[0].position.x - this.position.x) / Math.sqrt((GameObject.findObjectOfClass('Player1')[0].position.x - this.position.x) * (GameObject.findObjectOfClass('Player1')[0].position.x - this.position.x) + (GameObject.findObjectOfClass('Player1')[0].position.y - this.position.y) * (GameObject.findObjectOfClass('Player1')[0].position.y - this.position.y))
      this.velocity.y = 4 * (GameObject.findObjectOfClass('Player1')[0].position.y - this.position.y) / Math.sqrt((GameObject.findObjectOfClass('Player1')[0].position.x - this.position.x) * (GameObject.findObjectOfClass('Player1')[0].position.x - this.position.x) + (GameObject.findObjectOfClass('Player1')[0].position.y - this.position.y) * (GameObject.findObjectOfClass('Player1')[0].position.y - this.position.y))
    }
    else if (NUMBER_PLAYER == 2) {
      if (this.playerChasing == 0) {
        this.velocity.x = 4 * (GameObject.findObjectOfClass('Player1')[0].position.x - this.position.x) / Math.sqrt((GameObject.findObjectOfClass('Player1')[0].position.x - this.position.x) * (GameObject.findObjectOfClass('Player1')[0].position.x - this.position.x) + (GameObject.findObjectOfClass('Player1')[0].position.y - this.position.y) * (GameObject.findObjectOfClass('Player1')[0].position.y - this.position.y))
        this.velocity.y = 4 * (GameObject.findObjectOfClass('Player1')[0].position.y - this.position.y) / Math.sqrt((GameObject.findObjectOfClass('Player1')[0].position.x - this.position.x) * (GameObject.findObjectOfClass('Player1')[0].position.x - this.position.x) + (GameObject.findObjectOfClass('Player1')[0].position.y - this.position.y) * (GameObject.findObjectOfClass('Player1')[0].position.y - this.position.y))
      }
      else if (this.playerChasing == 1) {
        this.velocity.x = 4 * (GameObject.findObjectOfClass('Player2')[0].position.x - this.position.x) / Math.sqrt((GameObject.findObjectOfClass('Player2')[0].position.x - this.position.x) * (GameObject.findObjectOfClass('Player2')[0].position.x - this.position.x) + (GameObject.findObjectOfClass('Player2')[0].position.y - this.position.y) * (GameObject.findObjectOfClass('Player2')[0].position.y - this.position.y))
        this.velocity.y = 4 * (GameObject.findObjectOfClass('Player2')[0].position.y - this.position.y) / Math.sqrt((GameObject.findObjectOfClass('Player2')[0].position.x - this.position.x) * (GameObject.findObjectOfClass('Player2')[0].position.x - this.position.x) + (GameObject.findObjectOfClass('Player2')[0].position.y - this.position.y) * (GameObject.findObjectOfClass('Player2')[0].position.y - this.position.y))
      }
    }
  }
  hitPlayer() {
    const hittedPlayer1 = GameObject.findIntersected("Player1", this);
    const hittedPlayer2 = GameObject.findIntersected("Player2", this);
    if (hittedPlayer1.length > 0) {
      this.deactivate();
      GameObject.deactiveSelected(hittedPlayer1);
      if(GameObject.findObjectOfClass('Player1').active == false && GameObject.findObjectOfClass('Player2').active == false){
        console.log('endgame');
      }
    }
    if (hittedPlayer2.length > 0) {
      this.deactivate();
      GameObject.deactiveSelected(hittedPlayer2);
    }
  }
}
