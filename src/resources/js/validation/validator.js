import { messages } from './messages';

export const required = value => value || typeof value === 'number' ? undefined : messages.required;
export const maxLength = maxLength => value => value && value.length > maxLength ? messages.maxLength.replace(':maxLength', maxLength) : undefined;
export const regex = regex => value => value && !regex.test(value) ? messages.reqex : undefined;