import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { ObservableRESTClient } from "../../../../config/clients/observable.RESTClient";
import { MissionLoader } from "../../../usecases/loaders/mission.loader";
import { Mission } from "../../../domain/entity/mission";
import { ISearchMissions } from "../../../usecases/ISearchMissions";
import { MongoMissionLoader } from "../../secondaries/real/mongoMission.loader";
import MissionCard from "../mission-card/mission-card";
import { MissionDIFactory } from "../../../configuration/missionDI.factory";

export default function Missions() {
  const missionsSouce: MissionLoader = MissionDIFactory.missionLoader();
  const iSearchMissions = new ISearchMissions(missionsSouce);
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    iSearchMissions.execute().subscribe((missions: Mission[]) => {
      setMissions(missions);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {missions.map((mission: Mission) => (
          <MissionCard mission={mission} />
        ))}
      </Grid>
    </Box>
  );
}
