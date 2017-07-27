import './src/android_toast.css';
import AndroidToast from './src/android_toast.js';

export default function(option){
    if (typeof option === 'string') {
        option = {
            content: option
        };
    }

    return new AndroidToast(option);
};
