import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { getHello } from "@/lib/hello";

export default async function Home() {
  const { message } = await getHello();

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1">
        Room Booking System
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 2 }}>
        {message}
      </Typography>
    </Container>
  );
}
