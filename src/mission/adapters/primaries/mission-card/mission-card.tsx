import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import { Mission } from "../../../domain/entity/mission";

export default function MissionCard({ mission }: { mission: Mission }) {
  return (
    <Card
      sx={{
        maxWidth: 280,
        margin: "0 auto",
        padding: "1em",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Chip
          sx={{ marginLeft: 1 }}
          label={`#${mission.snapshot().status}`}
          color="primary"
          variant="outlined"
        />
        <div></div>
      </Stack>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {mission.snapshot().name}
        </Typography>
      </CardContent>
    </Card>
  );
}
