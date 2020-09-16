import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
//declare var $: any;

@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  constructor(public router: Router, private modalService: NgbModal) {}

  public isCollapsed = false;

  public innerWidth: number=-1;
  public defaultSidebar: string='';
  public showMobileMenu = false;
  public expandLogo = false;

  options = {
    sidebartype: 'full',
  };

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  openLicense(content:string) {
		this.modalService.open(content, { centered: true });
	}

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/dashboard/dashboard1']);
    }
    this.defaultSidebar = this.options.sidebartype;
    this.handleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:string) {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    switch (this.defaultSidebar) {
      case 'full':
        if (this.innerWidth < 1170) {
          this.options.sidebartype = 'mini-sidebar';
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;
      default:
    }
  }
}
