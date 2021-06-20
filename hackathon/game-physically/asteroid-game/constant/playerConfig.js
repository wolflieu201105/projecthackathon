const PLAYER_WIDTH = Number(localStorage.getItem("playerSize"));
const PLAYER_HEIGHT = Number(localStorage.getItem("playerSize"));
const PLAYER_INIT_MOVING_SPEED = Number(localStorage.getItem("playerSpeed"));
const PLAYER_MAX_MOVING_SPEED = 8;
const PLAYER_COLOR = '#AA0000'
const PLAYER_BULLET_SIZE = 10;
const PLAYER_BULLET_SPEED = 15;
const PLAYER_BULLET_COLOR = '#0000AA';
const NUMBER_PLAYER = Number(localStorage.getItem("numberPlayer"));
// Player 1
const KEY_UP1 = localStorage.getItem("keyup1");
const KEY_DOWN1 = localStorage.getItem("keydown1");
const KEY_LEFT1 = localStorage.getItem("keyleft1");
const KEY_RIGHT1 = localStorage.getItem("keyright1");
const KEY_FIRE1 = localStorage.getItem("fire1");
const KEY_DASH1 = localStorage.getItem("dash1");
// Player 2
const KEY_UP2 = localStorage.getItem("keyup2");
const KEY_DOWN2 = localStorage.getItem("keydown2");
const KEY_LEFT2 = localStorage.getItem("keyleft2");
const KEY_RIGHT2 = localStorage.getItem("keyright2");
const KEY_FIRE2 = localStorage.getItem("fire2");
const KEY_DASH2 = localStorage.getItem("dash2");