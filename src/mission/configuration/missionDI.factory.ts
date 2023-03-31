import { MissionSnapshot } from "../domain/entity/mission.snapshot";
import { MissionLoader } from "../usecases/loaders/mission.loader";
import { InMemoryMissionLoader } from "../adapters/secondaries/inmemory/inmemoryMission.loader";
import { MongoMissionLoader } from "../adapters/secondaries/real/mongoMission.loader";
import { MissionStub } from "../tests/mission.stub";
import { Mission } from "../domain/entity/mission";
import { ObservableRESTClient } from "../../config/clients/observable.RESTClient";
import { missionSources } from "./missionSources";
import { LoaderSource } from "../../sources";

export class MissionDIFactory {
  static missionLoader(): MissionLoader {
    switch (missionSources.missionLoader) {
      case LoaderSource.mongo:
        return new MongoMissionLoader(new ObservableRESTClient());
      default:
        const mission1: Mission = new MissionStub()
          .withName("Faire des cookies !")
          .withRewards([{ name: "Snorlax", number: "143" }])
          .build();
        const mission2: Mission = new MissionStub()
          .withName("Faire une pizza !")
          .withRewards([{ name: "Mewtwo", number: "150" }])
          .build();
        return new InMemoryMissionLoader([mission1, mission2]);
    }
  }
}
