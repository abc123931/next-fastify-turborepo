import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

export const responseSchema = Type.Object({
  message: Type.String(),
});
export const paramsSchema = Type.Object({
  name: Type.String(),
});

export type Response = Static<typeof responseSchema>;
export type Params = Static<typeof paramsSchema>;
