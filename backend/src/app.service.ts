import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getTimeDuration(): object {
    const maxTime = 180000;
    let startTime: number | null = null;
    let stopTime: number | null = null;
    let running = false;

    function getStartTime(): void {
      const startClock = new Date();
      startTime = startClock.getTime();
    }

    function getStopTime(): void {
      const stopClock = new Date();
      stopTime = stopClock.getTime();
    }

    function timeDuration() {
      let timeDuration = 0;
      getStartTime();
      getStopTime();

      if (stopTime !== null && startTime !== null) {
        timeDuration = stopTime - startTime;
      }
      return timeDuration;
    }

    if (timeDuration() < maxTime) {
      return {
        message: `Answerd in: ${timeDuration()} s`,
      };
    }

    if (timeDuration() >= maxTime) {
      return {
        message: "Sorry your time is up",
      };
    }
  }
}
