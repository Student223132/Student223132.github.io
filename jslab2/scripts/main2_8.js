
/**
* Добавляет свойство "blackSpot" к объекту, используя уникальный символ
* @param {object} obj объект, к которому нужно добавить свойство
* @return Исходный объект с добавленным свойством "blackSpot"
*/
function addBlackSpot(obj) {
    if (typeof obj !== 'object' || obj === null) {
        throw new Error('obj должен быть объектом');
    }

    if (!obj.hasOwnProperty(Symbol.for('blackSpot'))) {
        obj[Symbol.for('blackSpot')] = true;
    }

    return obj;
}


