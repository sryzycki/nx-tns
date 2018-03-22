Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
// nativescript
const router_1 = require("nativescript-angular/router");
// app
const shared_module_1 = require("../shared/shared.module");
const components_1 = require("./components");
exports.routes = [
    {
        path: '',
        component: components_1.ItemsComponent
    },
    {
        path: ':id',
        component: components_1.ItemDetailComponent
    }
];
let ItemsModule = class ItemsModule {
};
ItemsModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.NativeScriptRouterModule.forChild(exports.routes)
        ],
        declarations: [
            ...components_1.COMPONENTS
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], ItemsModule);
exports.ItemsModule = ItemsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3Q0FBMkQ7QUFHM0QsZUFBZTtBQUNmLHdEQUF1RTtBQUV2RSxNQUFNO0FBQ04sMkRBQXVEO0FBQ3ZELDZDQUErRTtBQUVsRSxRQUFBLE1BQU0sR0FBVztJQUM1QjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDJCQUFjO0tBQzFCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsS0FBSztRQUNYLFNBQVMsRUFBRSxnQ0FBbUI7S0FDL0I7Q0FDRixDQUFDO0FBY0YsSUFBYSxXQUFXLEdBQXhCO0NBQTJCLENBQUE7QUFBZCxXQUFXO0lBWnZCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDRCQUFZO1lBQ1osaUNBQXdCLENBQUMsUUFBUSxDQUFDLGNBQU0sQ0FBQztTQUMxQztRQUNELFlBQVksRUFBRTtZQUNaLEdBQUcsdUJBQVU7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxXQUFXLENBQUc7QUFBZCxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBuYXRpdmVzY3JpcHRcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbi8vIGFwcFxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ09NUE9ORU5UUywgSXRlbXNDb21wb25lbnQsIEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEl0ZW1zQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnOmlkJyxcbiAgICBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnRcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DT01QT05FTlRTXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNNb2R1bGUge31cbiJdfQ==