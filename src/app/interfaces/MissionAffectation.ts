import { Mission } from "./Mission";
import { MissionAffectationPK } from "./MissionAffectationPK";
import { User } from "./User";

export interface MissionAffectation {
    id: MissionAffectationPK;
    affectationDate: Date;
    missionAffectationStatus: string;
    employee: User;
    miss: Mission;
}