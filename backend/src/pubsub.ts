// import { PubSub } from "apollo-server";
// export const pubsub = new PubSub();

import { EventEmitter } from "events";

export type PUBSUB_EVENTS = "TIMER" | "USER_CHANGE";

class PubSub {
  emitter: EventEmitter;
  constructor() {
    this.emitter = new EventEmitter();
  }

  async subscribe(topic: PUBSUB_EVENTS, queue: any) {
    const listener = (value) => {
      queue.push(value);
    };

    const close = () => {
      this.emitter.removeListener(topic, listener);
    };

    this.emitter.on(topic, listener);
    queue.close = close;
  }

  publish(
    event: { topic: PUBSUB_EVENTS; payload: any },
    callback?: () => void
  ) {
    this.emitter.emit(event.topic, event.payload);
    callback && callback();
  }
}

export const pubsub = new PubSub();

setInterval(() => {
  pubsub.publish({
    topic: "TIMER",
    payload: { timer: Math.round(Date.now() / 1000) },
  });
}, 1000);
