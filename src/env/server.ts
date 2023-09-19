import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string().min(1),
    JWT_REFRESH_TOKEN: z.string().min(1),
  },
  runtimeEnvStrict: process.env,
});
