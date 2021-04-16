import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getTimeDuration(): any {
    const maxTime = 180;
    let startTime: number | null = null;
    let stopTime: number | null = null;
    let running: boolean = false;
    let timeSettings: any = {
      message: "",
      timeDuration: "",
      running,
    };

    function getStartTime(): void {
      const startClock = Math.round(Date.now() / 1000);
      running = true;
      startTime = startClock;
    }

    function getStopTime(): void {
      const stopClock = Math.round(Date.now() / 1000);
      running = false;
      stopTime = stopClock;
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
        timeDuration: 180,
        running: false,
      };
    }
  }
}
