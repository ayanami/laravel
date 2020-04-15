const message = '必須項目です。';

export const required = value => value || typeof value === 'number' ? undefined : message;