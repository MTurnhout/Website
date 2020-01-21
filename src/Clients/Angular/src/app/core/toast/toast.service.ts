import { Injectable, TemplateRef } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  private toasts: any[] = [];

  public show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.showToast(textOrTpl, options);
  }

  public showSuccess(message: string) {
    this.showToast(message, { classname: "bg-success text-light" });
  }

  public showWarning(message: string) {
    this.showToast(message, { classname: "bg-warning text-dark" });
  }

  public showError(message: string) {
    this.showToast(message, { classname: "bg-danger text-light" });
  }

  public remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  private showToast(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, autoHide: true, ...options });
  }
}
