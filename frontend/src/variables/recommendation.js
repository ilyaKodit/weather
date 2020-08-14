function recommendation (temp) {
    temp = parseInt(temp);
    let result = '';

    if (temp < -25) {
        result = 'Советуем надеть зимнюю одежду, на улице очень холодно';
    }
    if (temp >= -25 && temp < -15) {
        result = 'Оденьтесь потеплее, на улице холодно';
    }
    if (temp >= -15 && temp < 0) {
        result = 'Тёплое пальто, это то, что вам нужно! на улице холодно';
    }
    if (temp >= 0 && temp < 15) {
        result = 'Пальто или ветровка подойдёт лучше всего! на улице прохладно';
    }
    if (temp >= 15 && temp < 20) {
        result = 'На улице тепло, можно идти без вурхней одежды, но шорты надевать не стоит';
    }
    if (temp >= 20 && temp < 25) {
        result = 'На улице очень тепло, одевайте что хотите)';
    }
    if (temp >= 25) {
        result = 'На улице жарко! шорты будут лучшим выбором)';
    }
    return result;
}

export default recommendation;