import { ValidationOptions } from '../ValidationOptions';
import { buildMessage, ValidateBy } from '../common/ValidateBy';
import { getText } from '../get-text';

export const MIN = 'min';

/**
 * Checks if the first number is greater than or equal to the second.
 */
export function min(num: unknown, min: number): boolean {
  return typeof num === 'number' && typeof min === 'number' && num >= min;
}

/**
 * Checks if the first number is greater than or equal to the second.
 */
export function Min(minValue: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: MIN,
      constraints: [minValue],
      validator: {
        validate: (value, args): boolean => min(value, args.constraints[0]),
        defaultMessage: buildMessage(
          eachPrefix => eachPrefix + getText('$property must not be less than $constraint1'),
          validationOptions
        ),
      },
    },
    validationOptions
  );
}
