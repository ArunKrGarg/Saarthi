import {
  getDeviceType,
  getBaseOs,
  getSystemVersion,
  getManufacturer,
  getModel,
  getUniqueId,
  supportedAbisSync,
} from 'react-native-device-info';
import {PixelRatio} from 'react-native';
import 'react-native-get-random-values';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const moment = require('moment');
import {Platform} from 'react-native';
import {getAsValue, setAsValue} from '@utils';
import {v4 as uuidv4} from 'uuid';
import {NetworkInfo} from 'react-native-network-info';

const getDeviceDetails = async () => {
  var appId = await getAsValue('appId');
  console.log(('app_IId:', appId));
  // Get Local IP
  const local_ip = await NetworkInfo.getIPAddress();
  const ssid = await NetworkInfo.getSSID();
  const ipv4 = await NetworkInfo.getIPV4Address();

  console.log('ipv4:', ipv4);
  console.log('ssid:', ssid);
  console.log('local_ip:', local_ip);

  if (!appId) {
    const app_id = uuidv4();
    setAsValue('appId', app_id);
    appId = app_id;
  }

  console.log('ipv4:', ipv4);
  console.log('ssid:', ssid);
  console.log('local_ip:', local_ip);
  console.log('app_id:', appId);
  let obj = {};

  const device_category = 'N';
  const device_type = getDeviceType();
  const device_os = Platform.OS;
  const device_os_version = getSystemVersion();
  const device_make = await getManufacturer();
  const device_model = getModel();
  const notification_token = '';
  const deviceScreenSize = hp('100') + 'x' + wp('100');
  const deviceDPI = PixelRatio.get() * 160 + 'dpi';
  const deviceNativePlatform = supportedAbisSync().join(',');
  const deviceOpenGLVersion = 'NA';
  const app_install_time = moment().format();
  const app_id = appId;

  obj = {
    device_category,
    device_type,
    device_os,
    device_os_version,
    device_make,
    device_model,
    notification_token,
    deviceScreenSize,
    deviceDPI,
    deviceNativePlatform,
    deviceOpenGLVersion,
    app_install_time,
    app_id,
    ssid: ssid ? ssid : '',
    ipv4,
    local_ip,
  };

  return obj;
};

export default getDeviceDetails;
