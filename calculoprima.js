function calcularPrima(salarioMensual, mesesTrabajados, ausenciasInjustificadas) {
    const DiasEnSeisMeses= 180;
    const DiasPorMes = 30;
    let primaBase = salarioMensual / 2; 
    
   
    if (mesesTrabajados <= 6) {
        const diasTotalesTrabajados = mesesTrabajados * DiasPorMes;
        primaBase = (primaBase / DiasEnSeisMeses) * diasTotalesTrabajados;
    }
    

    if (ausenciasInjustificadas > 5) {
        const porcentajeDeduccion = 0.1;
        primaBase -= primaBase * porcentajeDeduccion;
    }
    
    return primaBase;
}

const salarioMensual =1462000;       
const mesesTrabajados = 6;            
const ausenciasInjustificadas = 6;

const prima = calcularPrima(salarioMensual, mesesTrabajados, ausenciasInjustificadas);
console.log("La prima de servicios es: $" + prima.toFixed(2));