import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { env } from "@/env/server";
import { type Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = this.extractToken(request);

    if (!token) throw new UnauthorizedException();

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: env.JWT_SECRET,
      });

      request["user"] = payload;
    } catch (_) {
      throw new UnauthorizedException();
    }

    console.log();

    return true;
  }

  private extractToken(request: Request): string | undefined {
    const [type, token] = request.headers.authorization.split(" ") ?? [];

    console.log(type, token);

    return type === "Bearer" ? token : undefined;
  }
}
