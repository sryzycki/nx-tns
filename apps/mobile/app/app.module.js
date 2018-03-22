Object.defineProperty(exports, "__esModule", { value: true });
// angular
const core_1 = require("@angular/core");
// nativescript
const nativescript_module_1 = require("nativescript-angular/nativescript.module");
const http_client_1 = require("nativescript-angular/http-client");
// app
const core_module_1 = require("./modules/core/core.module");
const shared_module_1 = require("./modules/shared/shared.module");
const app_routing_1 = require("./app.routing");
const app_component_1 = require("./app.component");
let AppModule = 
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_client_1.NativeScriptHttpClientModule,
            core_module_1.CoreModule,
            shared_module_1.SharedModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVix3Q0FBMkQ7QUFFM0QsZUFBZTtBQUNmLGtGQUE4RTtBQUM5RSxrRUFBZ0Y7QUFFaEYsTUFBTTtBQUNOLDREQUF3RDtBQUN4RCxrRUFBOEQ7QUFDOUQsK0NBQWlEO0FBQ2pELG1EQUErQztBQWlCL0MsSUFBYSxTQUFTO0FBSHRCOztFQUVFO0FBQ0Y7Q0FBeUIsQ0FBQTtBQUFaLFNBQVM7SUFmckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLDBDQUE0QjtZQUM1Qix3QkFBVTtZQUNWLDRCQUFZO1lBQ1osOEJBQWdCO1NBQ2pCO1FBQ0QsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUM1QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzVCLENBQUM7SUFDRjs7TUFFRTtHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbmF0aXZlc2NyaXB0XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudCc7XG5cbi8vIGFwcFxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9jb3JlL2NvcmUubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQ29yZU1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==