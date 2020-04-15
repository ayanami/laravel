const message = ':attribute は入力必須です。';

export const required = value => value || typeof value === 'number' ? undefined : message;