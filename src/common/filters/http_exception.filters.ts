import { ArgumentsHost, Catch, HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class HttpExceptionFilter {
    catch(exception: any, host: ArgumentsHost){
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const status = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;

        const exceptionResponse = exception instanceof HttpException ? exception.getResponse(): null;

        let message = 'Internal Server Error';
        let errors = undefined;

        if(exceptionResponse) {
            if(typeof exceptionResponse === "string"){
                message = exceptionResponse;
            } else if(typeof exceptionResponse === "object"){
                message = (exceptionResponse as any).message || message;
                errors = (exceptionResponse as any).message;
            } else if(exception instanceof Error){
                message = exception.message;
            }
        }
        console.error(`[Error] ${status} - ${request.method} ${request.url}: `, exception);

        response.status(status).json({
            success: false,
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: Array.isArray(errors) ? 'Validation Failed': message,
            errors: Array.isArray(errors) ? errors: undefined,

        })
        
    }
}