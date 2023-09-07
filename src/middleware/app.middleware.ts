import { type NestMiddleware } from "@nestjs/common";

import type { Request, Response } from "express";

export class AppMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    console.log(req.body, res);
    next();
  }
}
