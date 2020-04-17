import { messages } from './messages';
import { log } from '../utils/log.utils';

export const required = value => value || typeof value === 'number' ? undefined : messages.required;
export const max = max => value => value && value.length > max ? messages.max.replace(':max', max) : undefined;