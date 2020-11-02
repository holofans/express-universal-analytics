/**
 * Created by championswimmer on 05/01/17.
 */
import { Request, RequestHandler } from 'express';
import ua from 'universal-analytics';
import './express';
export interface ReqToUserId {
    (req: Request): string;
}
interface ExpressGAParams {
    uaCode: string;
    cookieName?: string;
    reqToUserId?: ReqToUserId;
    autoTrackPages?: boolean;
    uaOptions?: ua.MiddlewareOptions;
}
declare function ExpressGA(uaCode: string): Array<RequestHandler>;
declare function ExpressGA(params: ExpressGAParams): Array<RequestHandler>;
export default ExpressGA;
