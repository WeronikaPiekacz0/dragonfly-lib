import { Pipe } from '@angular/core';
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
export { TruncatePipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: TruncatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'truncate'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3Rlc3QtbGliL3NyYy9saWIvdHJ1bmNhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFFcEQ7Ozs7Ozs7O0dBUUc7QUFFSCxNQUdhLFlBQVk7SUFDckIsU0FBUyxDQUFDLEtBQWEsRUFBRSxNQUFlLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxRQUFRLEdBQUcsS0FBSztRQUNuRSxNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDNUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsRUFBRTtZQUNqRSxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sQ0FDSCxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FDbkksQ0FBQztJQUNOLENBQUM7OEdBVFEsWUFBWTs0R0FBWixZQUFZOztTQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFIeEIsSUFBSTttQkFBQztvQkFDRixJQUFJLEVBQUUsVUFBVTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogdHJ1bmNhdGUgdGV4dFxuICpcbiAqICMjIFVzc2FnZVxuICpcbiAqIHt7IHN0ciB8IHRydW5jYXRlOjIwIH19IC8vIG9yXG4gKiB7eyBzdHIgfCB0cnVuY2F0ZToyMCA6ICcuLi4nIH19XG4gKlxuICovXG5cbkBQaXBlKHtcbiAgICBuYW1lOiAndHJ1bmNhdGUnXG59KVxuZXhwb3J0IGNsYXNzIFRydW5jYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIsIHN1ZmZpeCA9ICcnLCBwcmVzZXJ2ZSA9IGZhbHNlKSB7XG4gICAgICAgIGxlbmd0aCA9IHR5cGVvZiBsZW5ndGggPT09ICdudW1iZXInID8gbGVuZ3RoIDogdmFsdWUubGVuZ3RoO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCAobGVuZ3RoICYmIHZhbHVlLmxlbmd0aCA8PSBsZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHZhbHVlLnN1YnN0cmluZygwLCBwcmVzZXJ2ZSA/ICh2YWx1ZS5pbmRleE9mKCcgJywgbGVuZ3RoKSA9PT0gLTEgPyB2YWx1ZS5sZW5ndGggOiB2YWx1ZS5pbmRleE9mKCcgJywgbGVuZ3RoKSkgOiBsZW5ndGgpICsgc3VmZml4XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19