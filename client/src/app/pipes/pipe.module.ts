import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncateCharactersPipe } from './truncateCharacters.pipe';
import { TruncateWordsPipe } from './truncateWords.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TruncateCharactersPipe,
    TruncateWordsPipe
  ],
  declarations: [
    TruncateCharactersPipe,
    TruncateWordsPipe
  ],
  providers: [],
})
export class PipeModule { }
