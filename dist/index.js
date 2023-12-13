"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIranianIdentityCard = void 0;
const class_validator_1 = require("class-validator");
function IsIranianIdentityCard(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isIranianIdentityCard',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    if (!/^\d{10}$/.test(value))
                        return false;
                    const check = +value[9];
                    const sum = value.split('').slice(0, 9).reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
                    return sum < 2 ? check === sum : check + sum === 11;
                },
            },
        });
    };
}
exports.IsIranianIdentityCard = IsIranianIdentityCard;
//# sourceMappingURL=index.js.map