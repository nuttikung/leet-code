type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  emitter: Record<string, Array<Callback>> = {};

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!(eventName in this.emitter)) {
      this.emitter[eventName] = [];
    }
    this.emitter[eventName]?.push(callback);
    return {
      unsubscribe: () => {
        if (!this.emitter[eventName]) return;
        this.emitter[eventName]?.splice(
          this.emitter[eventName].indexOf(callback),
          1,
        );
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (eventName in this.emitter) {
      const handlers = this.emitter[eventName];
      const result = handlers.map((callback) => callback(...args));
      return result;
    }
    return [];
  }
}

// Test Case 1
// const emitter = new EventEmitter();
// function onClickCallback() {
//   return 99;
// }
// const sub = emitter.subscribe("onClick", onClickCallback);
// console.log(emitter.emit("onClick"));
// sub.unsubscribe();
// console.log(emitter.emit("onClick"));

// Test Case 2
// const emitter = new EventEmitter();
// const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
// const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
// sub1.unsubscribe();
// console.log(emitter.emit("firstEvent", [5]));

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

export { EventEmitter };
