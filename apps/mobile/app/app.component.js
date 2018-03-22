Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
// app
const app_service_1 = require("./modules/core/services/app.service");
let AppComponent = class AppComponent {
    constructor(
        // ensure singleton construction on app boot)
        _appService) {
        this._appService = _appService;
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'ns-app',
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdDQUEwQztBQUUxQyxNQUFNO0FBQ04scUVBQWlFO0FBTWpFLElBQWEsWUFBWSxHQUF6QjtJQUNFO1FBQ0UsNkNBQTZDO1FBQ3JDLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBQzlCLENBQUM7Q0FDTCxDQUFBO0FBTFksWUFBWTtJQUp4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtLQUNsQyxDQUFDO3FDQUl1Qix3QkFBVTtHQUh0QixZQUFZLENBS3hCO0FBTFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gYXBwXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUvc2VydmljZXMvYXBwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hcHAnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgLy8gZW5zdXJlIHNpbmdsZXRvbiBjb25zdHJ1Y3Rpb24gb24gYXBwIGJvb3QpXG4gICAgcHJpdmF0ZSBfYXBwU2VydmljZTogQXBwU2VydmljZVxuICApIHt9XG59XG4iXX0=