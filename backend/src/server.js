import app from "./app.js";
import { PORT } from "./config/env.js";

app.listen(PORT, () => {
  console.log(`ARSCCOM backend running on port ${PORT}`);
});
