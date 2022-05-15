import { MapsAPILoader } from '@agm/core';
import { Component, NgZone } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ActivityType } from './core/enums/ActivityType.enum';
import { DeviceType } from './core/enums/DeviceType.enum';
import { ActivityLog } from './core/models/activity-log';
import { ActivityLogService } from './core/services/activity-log.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  deviceInfo = null;
  ipAddress = { ip: '' };

  latitude: number;
  longitude: number;
  address: string;
  private geoCoder;

  constructor(
    private readonly deviceService: DeviceDetectorService,
    private readonly activityLogService: ActivityLogService,
    private readonly mapsAPILoader: MapsAPILoader,
    private readonly ngZone: NgZone
  ) {
    setTimeout(() => {
      this.collectInfo();
    }, 2000);
  }

  async ngOnInit() {
    // this.mapsAPILoader.load().then(() => {
    //   this.setCurrentLocation();
    //   this.geoCoder = new google.maps.Geocoder();
    // });
    this.ipAddress = await this.activityLogService.getIPAddress();
    // console.log('### IP Address', this.ipAddress);
  }

  async collectInfo() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();

    let deviceType = null;

    if (isDesktopDevice) {
      deviceType = DeviceType.DESKTOP;
    }
    if (isMobile) {
      deviceType = DeviceType.MOBILE;
    }
    if (isTablet) {
      deviceType = DeviceType.TABLET;
    }

    const result = await this.activityLogService.postActivityLog(
      new ActivityLog(
        ActivityType.VISIT_LANDING_PAGE,
        this.ipAddress.ip,
        deviceType,
        this.deviceService.os,
        this.deviceService.os_version,
        this.deviceService.browser,
        this.deviceService.browser_version,
        this.deviceService.userAgent,
        this.address,
        this.latitude,
        this.longitude
      )
    );
    // console.log('### Log result {}', result);
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        //this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            //this.zoom = 12;
            this.address = results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      }
    );
  }
}
