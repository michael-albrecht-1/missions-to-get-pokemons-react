import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { ObservableRESTClient } from "../../../../config/clients/observable.RESTClient";
import { MissionLoader } from "../../../usecases/loaders/mission.loader";
import { Mission } from "../../../domain/entity/mission";
import { ISearchMissions } from "../../../usecases/ISearchMissions";
import { MongoMissionLoader } from "../../secondaries/real/mongoMission.loader";

export default function Missions() {
  const missionsSouce: MissionLoader = new MongoMissionLoader(
    new ObservableRESTClient()
  );
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
        {missions.map((m: Mission) => (
          <Grid key={m.snapshot().uuid} xs={12} sm={6} md={4} lg={3} xl={2}>
            <div>{m.snapshot().name + " : " + m.snapshot().description}</div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
