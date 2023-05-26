import { Component, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouteItem } from 'src/app/models/interfaces/route-item.interface';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent implements OnInit, OnDestroy {
  @Input() routesData: RouteItem[] = [];
  private routerSubj$: Subscription;
  public isOpen: boolean = false;
  protected currentUrl: string;

  constructor(private renderer: Renderer2, private router: Router) {}

  checkActiveRoute() {
    this.currentUrl = this.router.url;

    this.routerSubj$ = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.renderer.setStyle(
      document.body,
      'overflow',
      this.isOpen ? 'hidden' : ''
    );
  }

  ngOnInit() {
    this.checkActiveRoute();
  }

  ngOnDestroy(): void {
    this.routerSubj$.unsubscribe();
  }
}
