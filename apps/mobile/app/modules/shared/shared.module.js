Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
// nativescript
const forms_1 = require("nativescript-angular/forms");
const common_1 = require("nativescript-angular/common");
const router_1 = require("nativescript-angular/router");
// libs
const nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
const common_nx_tns_1 = require("@nx-tns/common-nx-tns");
const SHARED_MODULES = [
    common_1.NativeScriptCommonModule,
    forms_1.NativeScriptFormsModule,
    router_1.NativeScriptRouterModule,
    nativescript_ngx_fonticon_1.TNSFontIconModule,
    common_nx_tns_1.CommonNxTnsModule,
];
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            ...SHARED_MODULES
        ],
        exports: [
            ...SHARED_MODULES
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdDQUF5QztBQUV6QyxlQUFlO0FBQ2Ysc0RBQXFFO0FBQ3JFLHdEQUF1RTtBQUN2RSx3REFBdUU7QUFFdkUsT0FBTztBQUNQLHlFQUE4RDtBQUM5RCx5REFBd0Q7QUFFeEQsTUFBTSxjQUFjLEdBQUc7SUFDckIsaUNBQXdCO0lBQ3hCLCtCQUF1QjtJQUN2QixpQ0FBd0I7SUFDeEIsNkNBQWlCO0lBQ2pCLGlDQUFpQjtDQUNsQixDQUFDO0FBVUYsSUFBYSxZQUFZLEdBQXpCO0NBQTZCLENBQUE7QUFBaEIsWUFBWTtJQVJ4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxHQUFHLGNBQWM7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxHQUFHLGNBQWM7U0FDbEI7S0FDRixDQUFDO0dBQ1csWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gbmF0aXZlc2NyaXB0XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuaW1wb3J0IHtDb21tb25OeFRuc01vZHVsZX0gZnJvbSBcIkBueC10bnMvY29tbW9uLW54LXRuc1wiO1xuXG5jb25zdCBTSEFSRURfTU9EVUxFUyA9IFtcbiAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICBUTlNGb250SWNvbk1vZHVsZSxcbiAgQ29tbW9uTnhUbnNNb2R1bGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLi4uU0hBUkVEX01PRFVMRVNcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLlNIQVJFRF9NT0RVTEVTXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuIl19