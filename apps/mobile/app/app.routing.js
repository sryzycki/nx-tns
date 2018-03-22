Object.defineProperty(exports, "__esModule", { value: true });
// angular
const core_1 = require("@angular/core");
// nativescript
const router_1 = require("nativescript-angular/router");
// app
const shared_module_1 = require("./modules/shared/shared.module");
const routes = [
    {
        path: '',
        redirectTo: '/items',
        pathMatch: 'full'
    },
    {
        path: 'items',
        loadChildren: './modules/items/items.module#ItemsModule'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, router_1.NativeScriptRouterModule.forRoot(routes)]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHdDQUF5QztBQUd6QyxlQUFlO0FBQ2Ysd0RBQXVFO0FBRXZFLE1BQU07QUFDTixrRUFBOEQ7QUFFOUQsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFlBQVksRUFBRSwwQ0FBMEM7S0FDekQ7Q0FDRixDQUFDO0FBS0YsSUFBYSxnQkFBZ0IsR0FBN0I7Q0FBZ0MsQ0FBQTtBQUFuQixnQkFBZ0I7SUFINUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsNEJBQVksRUFBRSxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbEUsQ0FBQztHQUNXLGdCQUFnQixDQUFHO0FBQW5CLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBuYXRpdmVzY3JpcHRcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbi8vIGFwcFxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICByZWRpcmVjdFRvOiAnL2l0ZW1zJyxcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICB9LFxuICB7XG4gICAgcGF0aDogJ2l0ZW1zJyxcbiAgICBsb2FkQ2hpbGRyZW46ICcuL21vZHVsZXMvaXRlbXMvaXRlbXMubW9kdWxlI0l0ZW1zTW9kdWxlJ1xuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG4iXX0=