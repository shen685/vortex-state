export type Listener = () => void;
export class Store<T extends object> {
  private state: T;
  private listeners = new Set<Listener>();
  constructor(initialState: T) {
    this.state = new Proxy(initialState, {
      set: (target, prop, value) => {
        (target as any)[prop] = value;
        this.notify();
        return true;
      }
    });
  }
  getState() { return this.state; }
  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  private notify() { this.listeners.forEach(l => l()); }
}
