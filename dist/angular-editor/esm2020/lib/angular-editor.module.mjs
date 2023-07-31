import { NgModule } from '@angular/core';
import { AngularEditorComponent } from './angular-editor.component';
import { AngularEditorToolbarComponent } from './angular-editor-toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AeSelectComponent } from './ae-select/ae-select.component';
import { AeButtonComponent } from "./ae-button/ae-button.component";
import { AeToolbarSetComponent } from './ae-toolbar-set/ae-toolbar-set.component';
import * as i0 from "@angular/core";
export class AngularEditorModule {
}
AngularEditorModule.ɵfac = function AngularEditorModule_Factory(t) { return new (t || AngularEditorModule)(); };
AngularEditorModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AngularEditorModule });
AngularEditorModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule, FormsModule, ReactiveFormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularEditorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule, FormsModule, ReactiveFormsModule
                ],
                declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent, AeButtonComponent, AeToolbarSetComponent],
                exports: [AngularEditorComponent, AngularEditorToolbarComponent, AeButtonComponent, AeToolbarSetComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularEditorModule, { declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent, AeButtonComponent, AeToolbarSetComponent], imports: [CommonModule, FormsModule, ReactiveFormsModule], exports: [AngularEditorComponent, AngularEditorToolbarComponent, AeButtonComponent, AeToolbarSetComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1lZGl0b3Ivc3JjL2xpYi9hbmd1bGFyLWVkaXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQVNsRixNQUFNLE9BQU8sbUJBQW1COztzRkFBbkIsbUJBQW1CO3FFQUFuQixtQkFBbUI7eUVBTnJCO1lBQ1AsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUI7U0FDL0M7dUZBSVUsbUJBQW1CO2NBUC9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUI7aUJBQy9DO2dCQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO2dCQUNsSSxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSw2QkFBNkIsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQzthQUMzRzs7d0ZBQ1ksbUJBQW1CLG1CQUhmLHNCQUFzQixFQUFFLDZCQUE2QixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixhQUYvSCxZQUFZLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixhQUd0QyxzQkFBc0IsRUFBRSw2QkFBNkIsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW5ndWxhckVkaXRvckNvbXBvbmVudH0gZnJvbSAnLi9hbmd1bGFyLWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHtBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudH0gZnJvbSAnLi9hbmd1bGFyLWVkaXRvci10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFlU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9hZS1zZWxlY3QvYWUtc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0FlQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9hZS1idXR0b24vYWUtYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWVUb29sYmFyU2V0Q29tcG9uZW50IH0gZnJvbSAnLi9hZS10b29sYmFyLXNldC9hZS10b29sYmFyLXNldC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBbmd1bGFyRWRpdG9yQ29tcG9uZW50LCBBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudCwgQWVTZWxlY3RDb21wb25lbnQsIEFlQnV0dG9uQ29tcG9uZW50LCBBZVRvb2xiYXJTZXRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQW5ndWxhckVkaXRvckNvbXBvbmVudCwgQW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnQsIEFlQnV0dG9uQ29tcG9uZW50LCBBZVRvb2xiYXJTZXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJFZGl0b3JNb2R1bGUge1xufVxuIl19