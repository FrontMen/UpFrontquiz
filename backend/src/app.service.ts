import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getTimeDuration(): any {
    const maxTime = 180000;
    let startTime: number | null = null;
    let stopTime: number | null = null;
    let running: boolean = false;
    let timeSettings: any = {
      message: "",
      timeDuration: "",
      running,
    };

    function getStartTime(): void {
      const startClock = new Date();
      running = true;
      startTime = startClock.getTime();
    }

    function getStopTime(): void {
      const stopClock = new Date();
      running = false;
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
      timeSettings = {
        message: `Answered in ${timeDuration()}`,
        timeDuration: timeDuration(),
        running,
      };
    }

    if (timeDuration() >= maxTime) {
      timeSettings = {
        message: "Sorry your time is up",
        timeDuration: 180000,
        running: false,
      };
    }
  }
}
