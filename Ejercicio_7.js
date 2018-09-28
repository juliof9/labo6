function prom_inc(med1, med2, med3, med4, med5, med6){
    xi = parseFloat(med1 + med2 + med3 + med4 + med5 + med6);
    promedio = parseFloat(med1 + med2 + med3 + med4 + med5 + med6)/6;
    incerteza = Math.sqrt(1/5*(Math.pow(xi - promedio,2)));
    console.log(incerteza);
    return promedio;
}