import {
  Component,
  AfterViewInit,
  EventEmitter,
  Output,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

declare var $: any;

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements AfterViewInit, OnDestroy, OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public showSearch = false;
  private authSubscription: Subscription = new Subscription();
  userName: string | null = '';

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }

  // This is for Notifications
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM',
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM',
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM',
    },
    {
      btn: 'btn-warning',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM',
    },
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/user1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM',
    },
    {
      useravatar: 'assets/images/users/user2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM',
    },
    {
      useravatar: 'assets/images/users/user2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM',
    },
    {
      useravatar: 'assets/images/users/user4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM',
    },
  ];

  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us',
  };

  public languages: any[] = [
    {
      language: 'English',
      code: 'en',
      type: 'US',
      icon: 'us',
    },
    {
      language: 'Español',
      code: 'es',
      icon: 'es',
    },
    {
      language: 'Français',
      code: 'fr',
      icon: 'fr',
    },
    {
      language: 'German',
      code: 'de',
      icon: 'de',
    },
  ];

  ngAfterViewInit() {}

  ngOnInit() {
    const userString: string | null = localStorage.getItem('user');
    if (userString !== null) {
      const user: any = JSON.parse(userString);
      this.userName = user.userName;
    }
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
