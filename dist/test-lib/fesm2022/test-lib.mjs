import * as i0 from '@angular/core';
import { Injectable, Component, Pipe, NgModule } from '@angular/core';

class TestLibService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class TestLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.0", type: TestLibComponent, selector: "lib-test-lib", ngImport: i0, template: `
    <p>
      test-lib works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-test-lib', template: `
    <p>
      test-lib works!
    </p>
  ` }]
        }] });

/**
 * truncate text
 *
 * ## Ussage
 *
 * {{ str | truncate:20 }} // or
 * {{ str | truncate:20 : '...' }}
 *
 */
class TruncatePipe {
    transform(value, length, suffix = '', preserve = false) {
        length = typeof length === 'number' ? length : value.length;
        if (typeof value !== 'string' || (length && value.length <= length)) {
            return value;
        }
        return (value.substring(0, preserve ? (value.indexOf(' ', length) === -1 ? value.length : value.indexOf(' ', length)) : length) + suffix);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TruncatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.0", ngImport: i0, type: TruncatePipe, name: "truncate" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TruncatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'truncate'
                }]
        }] });

class TestLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.0", ngImport: i0, type: TestLibModule, declarations: [TestLibComponent, TruncatePipe], exports: [TestLibComponent, TruncatePipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TestLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TestLibComponent, TruncatePipe],
                    imports: [],
                    exports: [TestLibComponent, TruncatePipe],
                }]
        }] });

/*
 * Public API Surface of test-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TestLibComponent, TestLibModule, TestLibService, TruncatePipe };
//# sourceMappingURL=test-lib.mjs.map
