import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { TokenStorageService } from '../services/tokenStorage.service';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective {
  @Input('appHasPermission') permissions: string[];

  constructor(
    private tokenService: TokenStorageService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {

    this.tokenService.getUser().subscribe(_ => {
      if(this.tokenService.hasPermission(this.permissions)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
      else {
        this.viewContainer.clear(); // hide the element that has no permission
      }
    })
  }

}
