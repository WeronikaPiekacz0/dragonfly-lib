import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * truncate text
 *
 * ## Ussage
 *
 * {{ str | truncate:20 }} // or
 * {{ str | truncate:20 : '...' }}
 *
 */
export declare class TruncatePipe implements PipeTransform {
    transform(value: string, length?: number, suffix?: string, preserve?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TruncatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TruncatePipe, "truncate", false>;
}
