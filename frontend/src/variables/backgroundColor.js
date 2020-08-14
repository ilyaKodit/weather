function backgroundColor (weather) {
    let result;
    switch (weather) {
        case '01d':
            result = '#f5e186';
            break;
        case '01n':
            result = '#989898';
            break;
        case '02d':
            result = '#f5e186';
            break;
        case '02n':
            result = '#989898';
            break;
        case '03d':
            result = '#e8e7e1';
            break;
        case '03n':
            result = '#989898';
            break;
        case '04d':
            result = '#e8e7e1';
            break;
        case '04n':
            result = '#989898';
            break;
        case '09d':
            result = '#989898';
            break;
        case '09n':
            result = '#989898';
            break;
        case '10d':
            result = '#efe6b1';
            break;
        case '10n':
            result = '#5f5f5e';
            break;
        case '11d':
            result = '#5f5f5e';
            break;
        case '11n':
            result = '#5f5f5e';
            break;
        case '13d':
            result = '#e8e7e1';
            break;
        case '13n':
            result = '#989898';
            break;
        case '50d':
            result = '#e8e7e1';
            break;
        case '50n':
            result = '#989898';
            break;
        default:
    }
    
    return result;
}

export default backgroundColor;