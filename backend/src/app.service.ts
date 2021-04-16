import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTimeDuration(): object {
    const maxTime = 180000;
    let startTime = null;
    let stopTime = null;
    let running = false;

    function getStartTime(): void {
      const startClock = new Date();
      startTime = startClock.getTime();
    }

    function getStopTime(): void {
      const stopClock = new Date();
      stopTime = stopClock.getTime();
    }

    function timeDuration(): number {
      getStartTime();
      getStopTime();
      const time = this.stopTime - this.startTime;

      return time;
    }

    if (stopTime < maxTime) {
      return {
        message: `Answerd in: ${timeDuration()} s`,
      };
    }

    if (stopTime >= maxTime) {
      return {
        message: 'Sorry your time is up',
      };
    }
  }
}
