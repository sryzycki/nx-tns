Object.defineProperty(exports, "__esModule", { value: true });
// angular
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
// nativescript
const tnsApp = require("tns-core-modules/application");
const tnsUtils = require("tns-core-modules/utils/utils");
const platform_1 = require("tns-core-modules/platform");
const enums_1 = require("tns-core-modules/ui/enums");
const router_2 = require("nativescript-angular/router");
const nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
// libs
const Subject_1 = require("rxjs/Subject");
/**
 * This service can be used for low level app wiring
 * for best practice purposes, this service sets up:
 * - app version
 * - orientation handling including a Subject the app can observe
 * - deviceType to help component bindings
 * - example of global app event wiring for resume/suspend
 * - injection of TNSFontIconService to ensure font icons are loaded on boot
 */
let AppService = class AppService {
    constructor(_router, _ngRouter, _ngZone, 
        // ensures font icon's are initialized on app boot
        _fonticon) {
        this._router = _router;
        this._ngRouter = _ngRouter;
        this._ngZone = _ngZone;
        this._fonticon = _fonticon;
        this._orientation$ = new Subject_1.Subject();
        // initialize core services
        this._initAppVersion();
        this._initOrientation();
        this._initAppEvents();
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(value) {
        console.log('setting orientation:', value);
        this._orientation = value;
        this._orientation$.next(value);
    }
    get orientation$() {
        return this._orientation$;
    }
    get deviceType() {
        return this._deviceType;
    }
    get appVersion() {
        return this._appVersion;
    }
    _initAppVersion() {
        let versionName;
        let buildNumber;
        if (tnsApp.android) {
            const pi = tnsApp.android.context.getPackageManager().getPackageInfo(tnsApp.android.context.getPackageName(), 0);
            versionName = pi.versionName;
            buildNumber = pi.versionCode.toString();
        }
        else if (tnsApp.ios) {
            versionName = NSBundle.mainBundle.objectForInfoDictionaryKey('CFBundleShortVersionString');
            buildNumber = NSBundle.mainBundle.objectForInfoDictionaryKey('CFBundleVersion');
        }
        this._appVersion = `v${versionName} (${buildNumber})`;
        console.log('App version:', this._appVersion);
    }
    _initAppEvents() {
        // For the future - may want to use these
        tnsApp.on(tnsApp.resumeEvent, () => {
            console.log('tnsApp.resumeEvent');
        });
        tnsApp.on(tnsApp.suspendEvent, () => {
            console.log('tnsApp.suspendEvent');
        });
    }
    _initOrientation() {
        this._deviceType = platform_1.device.deviceType;
        console.log('deviceType:', this._deviceType);
        console.log('initializing orientation handling.');
        // set initial orientation
        this.orientation = getOrientation();
        console.log('current orientation:', this.orientation);
        // handle orientation changes
        tnsApp.on(tnsApp.orientationChangedEvent, e => {
            // sometimes e.newValue will be undefined, ignore those
            if (e.newValue && this.orientation !== e.newValue) {
                console.log(`Old: ${this.orientation}; New: ${e.newValue}`);
                this._ngZone.run(() => {
                    this.orientation = getOrientation();
                });
            }
        });
    }
};
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        router_1.Router,
        core_1.NgZone,
        nativescript_ngx_fonticon_1.TNSFontIconService])
], AppService);
exports.AppService = AppService;
const getOrientation = function () {
    if (platform_1.isIOS) {
        const deviceOrientation = tnsUtils.ios.getter(UIDevice, UIDevice.currentDevice).orientation;
        return deviceOrientation === 3 /* LandscapeLeft */ ||
            deviceOrientation === 4 /* LandscapeRight */
            ? enums_1.DeviceOrientation.landscape
            : enums_1.DeviceOrientation.portrait;
    }
    else {
        const orientation = getContext()
            .getResources()
            .getConfiguration().orientation;
        switch (orientation) {
            case 1 /* ORIENTATION_PORTRAIT (0x00000001) */:
                return enums_1.DeviceOrientation.portrait;
            case 2 /* ORIENTATION_LANDSCAPE (0x00000002) */:
                return enums_1.DeviceOrientation.landscape;
            default:
                /* ORIENTATION_UNDEFINED (0x00000000) */
                return enums_1.DeviceOrientation.portrait;
        }
    }
};
const getContext = function () {
    const ctx = java.lang.Class
        .forName('android.app.AppGlobals')
        .getMethod('getInitialApplication', null)
        .invoke(null, null);
    if (ctx) {
        return ctx;
    }
    return java.lang.Class
        .forName('android.app.ActivityThread')
        .getMethod('currentApplication', null)
        .invoke(null, null);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHdDQUFtRDtBQUNuRCw0Q0FBd0Q7QUFFeEQsZUFBZTtBQUNmLHVEQUF1RDtBQUN2RCx5REFBeUQ7QUFDekQsd0RBQXFFO0FBQ3JFLHFEQUE4RDtBQUM5RCx3REFBK0Q7QUFDL0QseUVBQStEO0FBRS9ELE9BQU87QUFDUCwwQ0FBdUM7QUFFdkM7Ozs7Ozs7O0dBUUc7QUFFSCxJQUFhLFVBQVUsR0FBdkI7SUFTRSxZQUNVLE9BQXlCLEVBQ3pCLFNBQWlCLEVBQ2pCLE9BQWU7UUFDdkIsa0RBQWtEO1FBQzFDLFNBQTZCO1FBSjdCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUVmLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBUi9CLGtCQUFhLEdBQWlCLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBVWxELDJCQUEyQjtRQUMzQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQVcsV0FBVyxDQUFDLEtBQUs7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBVyxZQUFZO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFB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SSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDUixNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDbkIsT0FBTyxDQUFDLDRCQUE0QixDQUFDO1NBQ3JDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUM7U0FDckMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIG5hdGl2ZXNjcmlwdFxuaW1wb3J0ICogYXMgdG5zQXBwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuaW1wb3J0ICogYXMgdG5zVXRpbHMgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlscyc7XG5pbXBvcnQgeyBkZXZpY2UsIGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbmltcG9ydCB7IERldmljZU9yaWVudGF0aW9uIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtcyc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xuXG4vLyBsaWJzXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgY2FuIGJlIHVzZWQgZm9yIGxvdyBsZXZlbCBhcHAgd2lyaW5nXG4gKiBmb3IgYmVzdCBwcmFjdGljZSBwdXJwb3NlcywgdGhpcyBzZXJ2aWNlIHNldHMgdXA6XG4gKiAtIGFwcCB2ZXJzaW9uXG4gKiAtIG9yaWVudGF0aW9uIGhhbmRsaW5nIGluY2x1ZGluZyBhIFN1YmplY3QgdGhlIGFwcCBjYW4gb2JzZXJ2ZVxuICogLSBkZXZpY2VUeXBlIHRvIGhlbHAgY29tcG9uZW50IGJpbmRpbmdzXG4gKiAtIGV4YW1wbGUgb2YgZ2xvYmFsIGFwcCBldmVudCB3aXJpbmcgZm9yIHJlc3VtZS9zdXNwZW5kXG4gKiAtIGluamVjdGlvbiBvZiBUTlNGb250SWNvblNlcnZpY2UgdG8gZW5zdXJlIGZvbnQgaWNvbnMgYXJlIGxvYWRlZCBvbiBib290XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcbiAgLy8gZnVuZGFtZW50YWxzXG4gIHByaXZhdGUgX2FwcFZlcnNpb246IHN0cmluZztcblxuICAvLyBvcmllbnRhdGlvbiBoZWxwZXJcbiAgcHJpdmF0ZSBfb3JpZW50YXRpb246IHN0cmluZztcbiAgcHJpdmF0ZSBfb3JpZW50YXRpb24kOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF9kZXZpY2VUeXBlOiAnUGhvbmUnIHwgJ1RhYmxldCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgX25nUm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgLy8gZW5zdXJlcyBmb250IGljb24ncyBhcmUgaW5pdGlhbGl6ZWQgb24gYXBwIGJvb3RcbiAgICBwcml2YXRlIF9mb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlXG4gICkge1xuICAgIC8vIGluaXRpYWxpemUgY29yZSBzZXJ2aWNlc1xuICAgIHRoaXMuX2luaXRBcHBWZXJzaW9uKCk7XG4gICAgdGhpcy5faW5pdE9yaWVudGF0aW9uKCk7XG4gICAgdGhpcy5faW5pdEFwcEV2ZW50cygpO1xuICB9XG5cbiAgcHVibGljIGdldCBvcmllbnRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JpZW50YXRpb247XG4gIH1cblxuICBwdWJsaWMgc2V0IG9yaWVudGF0aW9uKHZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coJ3NldHRpbmcgb3JpZW50YXRpb246JywgdmFsdWUpO1xuICAgIHRoaXMuX29yaWVudGF0aW9uID0gdmFsdWU7XG4gICAgdGhpcy5fb3JpZW50YXRpb24kLm5leHQodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldCBvcmllbnRhdGlvbiQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yaWVudGF0aW9uJDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGV2aWNlVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXBwVmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwVmVyc2lvbjtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRBcHBWZXJzaW9uKCkge1xuICAgIGxldCB2ZXJzaW9uTmFtZTogc3RyaW5nO1xuICAgIGxldCBidWlsZE51bWJlcjogc3RyaW5nO1xuXG4gICAgaWYgKHRuc0FwcC5hbmRyb2lkKSB7XG4gICAgICBjb25zdCBwaSA9IHRuc0FwcC5hbmRyb2lkLmNvbnRleHQuZ2V0UGFja2FnZU1hbmFnZXIoKS5nZXRQYWNrYWdlSW5mbyh0bnNBcHAuYW5kcm9pZC5jb250ZXh0LmdldFBhY2thZ2VOYW1lKCksIDApO1xuICAgICAgdmVyc2lvbk5hbWUgPSBwaS52ZXJzaW9uTmFtZTtcbiAgICAgIGJ1aWxkTnVtYmVyID0gcGkudmVyc2lvbkNvZGUudG9TdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRuc0FwcC5pb3MpIHtcbiAgICAgIHZlcnNpb25OYW1lID0gTlNCdW5kbGUubWFpbkJ1bmRsZS5vYmplY3RGb3JJbmZvRGljdGlvbmFyeUtleSgnQ0ZCdW5kbGVTaG9ydFZlcnNpb25TdHJpbmcnKTtcbiAgICAgIGJ1aWxkTnVtYmVyID0gTlNCdW5kbGUubWFpbkJ1bmRsZS5vYmplY3RGb3JJbmZvRGljdGlvbmFyeUtleSgnQ0ZCdW5kbGVWZXJzaW9uJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwcFZlcnNpb24gPSBgdiR7dmVyc2lvbk5hbWV9ICgke2J1aWxkTnVtYmVyfSlgO1xuICAgIGNvbnNvbGUubG9nKCdBcHAgdmVyc2lvbjonLCB0aGlzLl9hcHBWZXJzaW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRBcHBFdmVudHMoKSB7XG4gICAgLy8gRm9yIHRoZSBmdXR1cmUgLSBtYXkgd2FudCB0byB1c2UgdGhlc2VcbiAgICB0bnNBcHAub24odG5zQXBwLnJlc3VtZUV2ZW50LCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndG5zQXBwLnJlc3VtZUV2ZW50Jyk7XG4gICAgfSk7XG4gICAgdG5zQXBwLm9uKHRuc0FwcC5zdXNwZW5kRXZlbnQsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd0bnNBcHAuc3VzcGVuZEV2ZW50Jyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0T3JpZW50YXRpb24oKSB7XG4gICAgdGhpcy5fZGV2aWNlVHlwZSA9IGRldmljZS5kZXZpY2VUeXBlO1xuICAgIGNvbnNvbGUubG9nKCdkZXZpY2VUeXBlOicsIHRoaXMuX2RldmljZVR5cGUpO1xuICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmcgb3JpZW50YXRpb24gaGFuZGxpbmcuJyk7XG5cbiAgICAvLyBzZXQgaW5pdGlhbCBvcmllbnRhdGlvblxuICAgIHRoaXMub3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IG9yaWVudGF0aW9uOicsIHRoaXMub3JpZW50YXRpb24pO1xuXG4gICAgLy8gaGFuZGxlIG9yaWVudGF0aW9uIGNoYW5nZXNcbiAgICB0bnNBcHAub24odG5zQXBwLm9yaWVudGF0aW9uQ2hhbmdlZEV2ZW50LCBlID0+IHtcbiAgICAgIC8vIHNvbWV0aW1lcyBlLm5ld1ZhbHVlIHdpbGwgYmUgdW5kZWZpbmVkLCBpZ25vcmUgdGhvc2VcbiAgICAgIGlmIChlLm5ld1ZhbHVlICYmIHRoaXMub3JpZW50YXRpb24gIT09IGUubmV3VmFsdWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYE9sZDogJHt0aGlzLm9yaWVudGF0aW9ufTsgTmV3OiAke2UubmV3VmFsdWV9YCk7XG4gICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBnZXRPcmllbnRhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICBpZiAoaXNJT1MpIHtcbiAgICBjb25zdCBkZXZpY2VPcmllbnRhdGlvbiA9IHRuc1V0aWxzLmlvcy5nZXR0ZXIoVUlEZXZpY2UsIFVJRGV2aWNlLmN1cnJlbnREZXZpY2UpLm9yaWVudGF0aW9uO1xuXG4gICAgcmV0dXJuIGRldmljZU9yaWVudGF0aW9uID09PSBVSURldmljZU9yaWVudGF0aW9uLkxhbmRzY2FwZUxlZnQgfHxcbiAgICAgIGRldmljZU9yaWVudGF0aW9uID09PSBVSURldmljZU9yaWVudGF0aW9uLkxhbmRzY2FwZVJpZ2h0XG4gICAgICA/IERldmljZU9yaWVudGF0aW9uLmxhbmRzY2FwZVxuICAgICAgOiBEZXZpY2VPcmllbnRhdGlvbi5wb3J0cmFpdDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IGdldENvbnRleHQoKVxuICAgICAgLmdldFJlc291cmNlcygpXG4gICAgICAuZ2V0Q29uZmlndXJhdGlvbigpLm9yaWVudGF0aW9uO1xuICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgIGNhc2UgMSAvKiBPUklFTlRBVElPTl9QT1JUUkFJVCAoMHgwMDAwMDAwMSkgKi86XG4gICAgICAgIHJldHVybiBEZXZpY2VPcmllbnRhdGlvbi5wb3J0cmFpdDtcbiAgICAgIGNhc2UgMiAvKiBPUklFTlRBVElPTl9MQU5EU0NBUEUgKDB4MDAwMDAwMDIpICovOlxuICAgICAgICByZXR1cm4gRGV2aWNlT3JpZW50YXRpb24ubGFuZHNjYXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLyogT1JJRU5UQVRJT05fVU5ERUZJTkVEICgweDAwMDAwMDAwKSAqL1xuICAgICAgICByZXR1cm4gRGV2aWNlT3JpZW50YXRpb24ucG9ydHJhaXQ7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBnZXRDb250ZXh0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGN0eCA9IGphdmEubGFuZy5DbGFzc1xuICAgIC5mb3JOYW1lKCdhbmRyb2lkLmFwcC5BcHBHbG9iYWxzJylcbiAgICAuZ2V0TWV0aG9kKCdnZXRJbml0aWFsQXBwbGljYXRpb24nLCBudWxsKVxuICAgIC5pbnZva2UobnVsbCwgbnVsbCk7XG4gIGlmIChjdHgpIHtcbiAgICByZXR1cm4gY3R4O1xuICB9XG5cbiAgcmV0dXJuIGphdmEubGFuZy5DbGFzc1xuICAgIC5mb3JOYW1lKCdhbmRyb2lkLmFwcC5BY3Rpdml0eVRocmVhZCcpXG4gICAgLmdldE1ldGhvZCgnY3VycmVudEFwcGxpY2F0aW9uJywgbnVsbClcbiAgICAuaW52b2tlKG51bGwsIG51bGwpO1xufTtcbiJdfQ==