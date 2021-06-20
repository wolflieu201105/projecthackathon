let lastvelocity2 = {
  x: PLAYER_INIT_MOVING_SPEED,
  y: 0
};
let bulletPosition2 = {
  x: '',
  y: ''
}
class Player2 extends GameObject {
  constructor() {
    super();
    // Add  object to specific layer (for render) and setup renderer
    GameObject.midLayer.push(this);
    this.renderer = new SingleImageRenderer(PLAYER_WIDTH, PLAYER_HEIGHT, PLAYER_COLOR);


    // Setup moving props
    this.position = new Vector2D(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    this.velocity = new Vector2D(0, 0);

    // Setup counters
    this.fireCounter = new FrameCounter(10);
    this.dashCounter = new FrameCounter(100);
    // Setup box colider (for physics handle)
    this.boxColider = new BoxColider(this, PLAYER_WIDTH, PLAYER_HEIGHT);
  }
  run() {
    if (NUMBER_PLAYER == 2) {
      super.run();
      this.move();
      this.fire();
      this.dash();
      this.limitPosition();
    }
    else if(NUMBER_PLAYER == 1) {
      this.deactivate();
    }
  }
  move() {
    if (keysPressing.includes(KEY_UP2)) this.velocity.y = -PLAYER_INIT_MOVING_SPEED;
    else if (keysPressing.includes(KEY_DOWN2)) this.velocity.y = PLAYER_INIT_MOVING_SPEED;
    else this.velocity.y = 0;
    if (keysPressing.includes(KEY_LEFT2)) this.velocity.x = -PLAYER_INIT_MOVING_SPEED;
    else if (keysPressing.includes(KEY_RIGHT2)) this.velocity.x = PLAYER_INIT_MOVING_SPEED;
    else this.velocity.x = 0;
    if (this.velocity.x !== 0 && this.velocity.y !== 0)
      this.velocity = this.velocity.setLength(PLAYER_INIT_MOVING_SPEED);
    if (this.velocity.x !== 0 || this.velocity.y !== 0) {
      lastvelocity2.x = this.velocity.x;
      lastvelocity2.y = this.velocity.y;
    }
  }
  dash() {
    if (this.dashCounter.run() && keysPressing.includes(KEY_DASH2)) {
      this.position.x += lastvelocity1.x * 20;
      this.position.y += lastvelocity1.y * 20;
      this.dashCounter.reset();
    }
  }
  fire() {
    if (this.fireCounter.run() && keysPressing.includes(KEY_FIRE2)) {
      const newBullet = GameObject.recycle('PlayerBullet');
      bulletPosition2.x = this.position.x + PLAYER_WIDTH / 2 - PLAYER_BULLET_SIZE / 2;
      bulletPosition2.y = this.position.y + PLAYER_HEIGHT / 2 - PLAYER_BULLET_SIZE / 2;
      newBullet.position.set(bulletPosition2);
      newBullet.velocity.set(lastvelocity2);
      newBullet.velocity.setLength(PLAYER_BULLET_SPEED);
      this.fireCounter.reset();
    }
  }
  limitPosition() {
    if (this.position.x > CANVAS_WIDTH - PLAYER_WIDTH) this.position.x = CANVAS_WIDTH - PLAYER_WIDTH;
    else if (this.position.x < 0) this.position.x = 0;
    if (this.position.y < 0) this.position.y = 0;
    else if (this.position.y > CANVAS_HEIGHT - PLAYER_HEIGHT) this.position.y = CANVAS_HEIGHT - PLAYER_HEIGHT;
  }
}
