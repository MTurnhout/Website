import { Component, TemplateRef, HostBinding } from "@angular/core";
import { ToastService } from "./toast.service";

@Component({
  selector: "app-toasts-container",
  template: `
    <div class="ngb-toasts" style="margin-top: 70px;">
      <ngb-toast
        *ngFor="let toast of toastService.toasts"
        [class]="toast.classname"
        style="cursor: pointer;"
        [autohide]="toast.autoHide"
        (mouseenter)="toast.autoHide = false"
        (mouseleave)="toast.autoHide = true"
        (click)="toast.autoHide = false; toastService.remove(toast)"
        [delay]="toast.delay || 5000"
        (hide)="toastService.remove(toast)"
      >
        <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
          <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
        </ng-template>

        <ng-template #text>{{ toast.textOrTpl }}</ng-template>
      </ngb-toast>
    </div>
  `
})
export class ToastsContainerComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
