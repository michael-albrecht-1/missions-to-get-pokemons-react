import { map, Observable } from "rxjs";
import { ObservableRESTClient } from "../../../../config/clients/observable.RESTClient";
import { Mission } from "../../../domain/entity/mission";
import { MissionLoader } from "../../../usecases/loaders/mission.loader";
import { MongoMissionMapper } from "./mission.mapper";
import { MongoMissionDTO } from "./mongoMission.DTO";

enum mongoURL {
  mongoLocal = "http://localhost:5500",
  mongoVercel = "https://missions-to-get-pokemons-backend-wxop.vercel.app",
}

export class MongoMissionLoader implements MissionLoader {
  #baseUrl: string = mongoURL.mongoVercel;

  constructor(private http: ObservableRESTClient) {}

  post(mission: Mission): Observable<Mission> {
    const missionDTO = MongoMissionMapper.mapToMissionDTO(mission);

    return this.http
      .post<MongoMissionDTO>(`${this.#baseUrl}/missions`, missionDTO)
      .pipe(map<MongoMissionDTO, Mission>(MongoMissionMapper.mapToMission));
  }

  search(): Observable<Mission[]> {
    return this.http
      .get<MongoMissionDTO[]>(`${this.#baseUrl}/missions`)
      .pipe(
        map<MongoMissionDTO[], Mission[]>((missionsDTO) =>
          missionsDTO.map(MongoMissionMapper.mapToMission)
        )
      );
  }

  complete(mission: Mission): Observable<Mission> {
    return this.http
      .patch<MongoMissionDTO>(
        `${this.#baseUrl}/missions/complete/${mission.snapshot().uuid}`,
        mission
      )
      .pipe(map<MongoMissionDTO, Mission>(MongoMissionMapper.mapToMission));
  }
}
