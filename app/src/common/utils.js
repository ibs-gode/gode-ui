import {notify} from 'react-notify-toast';
import $ from 'jquery';

export const StatusEnum = {
    SUCCESS: 'SUCCESS',
    FAIL: 'FAILED',
    WARN: 'WARNING'
}
export const HandleToastMessage= (msg,status) =>{
    var successColor;
    switch (status) {
        case "SUCCESS":
            successColor = { background: '#00B300', text: "#FFFFFF" };
            break;
    
        default:
            successColor = { background: '#8B0000', text: "#FFFFFF" };
            break;
    }
    
  notify.show(msg, 'custom', 2000, successColor);
  $('#collapseTwo').collapse('toggle');
}