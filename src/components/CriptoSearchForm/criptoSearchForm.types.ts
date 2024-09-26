import { z } from "zod";
import { PairSchema } from "../../schemas/crypto-schema";

export type IPairState = z.infer<typeof PairSchema>