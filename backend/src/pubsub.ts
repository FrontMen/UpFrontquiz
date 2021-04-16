import * as mq from "mqemitter";

export const emitter: mq.MQEmitter = (mq as any)({});

setInterval(() => {
  emitter.emit({
    topic: "TIMER",
    payload: { timer: Math.round(Date.now() / 1000) },
  });
}, 1000);
