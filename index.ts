import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsIranianIdentityCard(property: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isIranianIdentityCard',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (!/^\d{10}$/.test(value)) return false;
                    const check = +value[9];
                    const sum = value.split('').slice(0, 9).reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
                    return sum < 2 ? check === sum : check + sum === 11;
                },
            },
        });
    };
}