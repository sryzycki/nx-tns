Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let AppenderPipe = class AppenderPipe {
    transform(value, args) {
        return value + ' (appended!)';
    }
};
AppenderPipe = __decorate([
    core_1.Pipe({
        name: 'appender'
    })
], AppenderPipe);
exports.AppenderPipe = AppenderPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZW5kZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcGVuZGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdDQUFvRDtBQUtwRCxJQUFhLFlBQVksR0FBekI7SUFFRSxTQUFTLENBQUMsS0FBVSxFQUFFLElBQVU7UUFDOUIsTUFBTSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7SUFDaEMsQ0FBQztDQUVGLENBQUE7QUFOWSxZQUFZO0lBSHhCLFdBQUksQ0FBQztRQUNKLElBQUksRUFBRSxVQUFVO0tBQ2pCLENBQUM7R0FDVyxZQUFZLENBTXhCO0FBTlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2FwcGVuZGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBlbmRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZhbHVlICsgJyAoYXBwZW5kZWQhKSc7XG4gIH1cblxufVxuIl19