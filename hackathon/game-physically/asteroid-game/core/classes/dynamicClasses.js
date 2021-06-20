const classesMap = {
    Player1,
    Player2,
    Enemy,
    // Points,
    PlayerBullet,
    EnemySummoner,
}
class DynamicClass {
    constructor(className, parameters = []) {
        return new classesMap[className](...parameters);
    }
}