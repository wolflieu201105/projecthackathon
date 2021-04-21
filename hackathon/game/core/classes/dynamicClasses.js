const classesMap = {
    Player,
    Enemy,
    EnemySummoner,
    BulletSummoner
}
class DynamicClass {
    constructor(className, parameters = []) {
        return new classesMap[className](...parameters);
    }
}