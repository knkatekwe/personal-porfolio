export class ActivityLog {
  activityName: string;
  ipAddress: string;
  deviceType: string;
  devicePlatform: string;
  devicePlatformVersion: string;
  browserName: string;
  browserVersion: string;
  userAgent: string;
  address: string;
  latitude: string;
  longitude: string;

  constructor(
    activityName,
    ipAddress,
    deviceType,
    devicePlatform,
    devicePlatformVersion,
    browserName,
    browserVersion,
    userAgent,
    address,
    latitude,
    longitude
  ) {
    this.activityName = activityName;
    this.ipAddress = ipAddress;
    this.deviceType = deviceType;
    this.devicePlatform = devicePlatform;
    this.devicePlatformVersion = devicePlatformVersion;
    this.browserName = browserName;
    this.browserVersion = browserVersion;
    this.userAgent = userAgent;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
