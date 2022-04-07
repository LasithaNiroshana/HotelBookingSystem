import { Component, OnInit,OnDestroy,Output } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit,OnDestroy {
  @Output()
  toggleOpen: boolean = false;
  mediaSub: Subscription = new Subscription;
  deviceXs: boolean = false;
  constructor(private router:Router,
    private route:ActivatedRoute, public mediaObserver:MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      this.deviceXs=result.mqAlias==='xs'?true:false;
    });
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

  showDashboard(){
    this.router.navigate(['dashboard'],{relativeTo:this.route});
  }

  showBookings(){
    this.router.navigate(['bookings'],{relativeTo:this.route});
  }

  showPayments(){
    this.router.navigate(['payments'],{relativeTo:this.route});
  }

  showRooms(){
    this.router.navigate(['rooms'],{relativeTo:this.route});
  }

  toggleNav(){
    this.toggleOpen=!this.toggleOpen;
  }

}
