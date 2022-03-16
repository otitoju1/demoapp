import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { TokenStorageService } from '../services/tokenStorage.service';

@Directive({
  selector: '[appDisableRole]'
})
export class DisableRoleDirective {
  @Input() disableRole: string;

  constructor(
    private tokenService: TokenStorageService,
    private renderer: Renderer2,  // make effect on the style of the element
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
    this.tokenService.getUser().subscribe( user => {
      
    })
  }
}
