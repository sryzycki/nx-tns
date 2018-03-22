import { NgModule } from '@angular/core';

// nativescript
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

// libs
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import {CommonNxTnsModule} from "@nx-tns/common-nx-tns";

const SHARED_MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  TNSFontIconModule,
  CommonNxTnsModule,
];

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES
  ]
})
export class SharedModule { }
