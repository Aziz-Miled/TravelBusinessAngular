import { MissionAffectation } from "./MissionAffectation";
import { User } from "./User";
import { TravelProgram } from "./TravelProgram";


export interface Mission {
    id: number;
    destination: string;
    startDate: Date;
    endDate: Date;
    missionObject: string;
    missionStatus: string;
    missionAffectations: MissionAffectation[];
    company: User;
    travelProgram: TravelProgram;
  }