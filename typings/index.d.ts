export function suscribe(topic: string, callback: Function): void;
export function suscribe(topic: string, context: any, callback: Function, priority?: number): void;
export function suscribe(topic: string, callback: Function, priority?: number): void;
export function publish(topic: string, ...args: any[]): boolean;
