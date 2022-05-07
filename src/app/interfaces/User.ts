import { MissionAffectation } from "./MissionAffectation";
import { Mission } from "./Mission";

export interface User {
    id: number;
    imageUrl: String;
    firstName: string;
    lastName: string;
    email: string;
    adress: string;
    phoneNumber: string;
    invitationDate: Date;
    invitationStatus: string;
    missionAffectations: MissionAffectation[];
    missions: Mission[];
  }