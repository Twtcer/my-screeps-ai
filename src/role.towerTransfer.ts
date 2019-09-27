const defaultBodys: BodyPartConstant[] = [ WORK, CARRY, MOVE ]

/**
 * tower 填充者配置生成器
 * source: 从指定矿中挖矿
 * target: 将能量填充到 tower 中
 * 
 * @param sourceId 要挖的矿 id
 * @param spawnName 出生点名称
 * @param bodys 身体部件 (可选)
 */
export default (sourceId: string, spawnName: string, bodys: BodyPartConstant[] = defaultBodys): ICreepConfig => ({
    source: creep => creep.getEngryFrom(Game.getObjectById(sourceId), 'harvest'),
    target: creep => creep.fillTower(),
    switch: creep => creep.updateState('🍚 填充 tower'),
    spawn: spawnName,
    bodys
})