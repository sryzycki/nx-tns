Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
// libs
const nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
// app
const services_1 = require("./services");
const services_2 = require("../items/services");
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                fa: './assets/font-awesome.min.css'
            })
        ],
        providers: [
            ...services_1.CORE_PROVIDERS,
            ...services_2.ITEMS_PROVIDERS
        ]
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0NBQXlDO0FBRXpDLE9BQU87QUFDUCx5RUFBOEQ7QUFFOUQsTUFBTTtBQUNOLHlDQUE0QztBQUM1QyxnREFBb0Q7QUFhcEQsSUFBYSxVQUFVLEdBQXZCO0NBQTBCLENBQUE7QUFBYixVQUFVO0lBWHRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDeEIsRUFBRSxFQUFFLCtCQUErQjthQUNwQyxDQUFDO1NBQ0g7UUFDRCxTQUFTLEVBQUU7WUFDVCxHQUFHLHlCQUFjO1lBQ2pCLEdBQUcsMEJBQWU7U0FDbkI7S0FDRixDQUFDO0dBQ1csVUFBVSxDQUFHO0FBQWIsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuXG4vLyBhcHBcbmltcG9ydCB7IENPUkVfUFJPVklERVJTIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBJVEVNU19QUk9WSURFUlMgfSBmcm9tICcuLi9pdGVtcy9zZXJ2aWNlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgIGZhOiAnLi9hc3NldHMvZm9udC1hd2Vzb21lLm1pbi5jc3MnXG4gICAgfSlcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4uQ09SRV9QUk9WSURFUlMsXG4gICAgLi4uSVRFTVNfUFJPVklERVJTXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7fVxuIl19