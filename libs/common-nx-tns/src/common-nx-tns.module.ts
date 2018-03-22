import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppenderPipe } from './appender.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [AppenderPipe],
  exports: [AppenderPipe],
})
export class CommonNxTnsModule {}
