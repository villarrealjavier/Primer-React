// import { Fragment } from "react";
import PropTypes from "prop-types"

// const PrimeraApp=(props)=>{
//     const saludo='Bienvenido Joaquin, soy tu doble del futuro'
//     const maestro={nombre:"Joaquin", trabajo:"Maestro"}
//     const evaluacionWindows=[' 10 ','10 ','9 ']
//     return (
//         //ESTA VALDRIA PERO DICE JOAQUIN QUE NO ES LA BUENA
//         // <Fragment>
//         //     <h1>Hola mundo, hermano</h1>
//         //     <h2>Jonnhie la gente esta muy loca</h2>
//         // </Fragment>
//         <>
//             <h1>{saludo}</h1>
//             <h1>Me gusta Windows</h1> 
//             <h2>Notas:{evaluacionWindows}</h2> 
//             <h2>{JSON.stringify(maestro)}</h2>  
//             <h3>¿Como me llamaba? Ah si claro, {props.nombre}</h3>   
//         </>
    
//     )
// }
const CounterApp=({value})=>{
    // const saludo='Bienvenido Joaquin, soy tu doble del futuro'
    // const maestro={nombre:"Joaquin", trabajo:"Maestro"}
    // const evaluacionWindows=[' 10 ','10 ','9 ']
    return (
        //ESTA VALDRIA PERO DICE JOAQUIN QUE NO ES LA BUENA
        // <Fragment>
        //     <h1>Hola mundo, hermano</h1>
        //     <h2>Jonnhie la gente esta muy loca</h2>
        // </Fragment>
        <>
            <h1>Counter App</h1>
            <h2>{value}</h2>
        </>
    
    )
}
CounterApp.propTypes={
    value: PropTypes.number,
   
}
CounterApp.defaultProps={
    value: 12,
}


export default CounterApp;