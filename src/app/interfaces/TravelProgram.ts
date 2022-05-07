import { Mission } from "./Mission";

export interface TravelProgram {
    id: number;
    destination: string;
    startingPoint: string;
    startDate: Date;
    endDate: Date;
    travelProgramStatus: string;
    missions: Mission[];
  }