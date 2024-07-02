import React from 'react';
import Basic from '../layout/basic';
import '../styles/terminos.css';

const Terminos = () => {
    return (
        <Basic>
            <terminos>
                <div className="container">
                    <div className="container text-center">
                        <div className="col">
                            <h1>TÉRMINOS Y CONDICIONES</h1>
                        </div>
                        <div className="col">
                            <h6>LOS TÉRMINOS DE USO Y POLÍTICA DE TRATO DE DATOS E INFORMACIÓN DE LOS USUARIOS
                                PARA SU CONSERVACIÓN, ELIMINACIÓN O ENVÍO DE ACUERDO A LAS LEYES DENTRO DE LA
                                JURISTICCIÓN DE LA UNIÓN EUROPEA Y OTRA SECCIÓN FUERA DE ELLA EXCEPTUANDO EL ESTADO
                                DE CALIFORNIA DE TRATO ESPECIAL.</h6><br></br>
                        </div>
                    </div>

                    <div className="col-terms-details">

                        <div className="col">
                            <p className="text">El presente acuerdo es una comunicación entre el usuario (mayor de 18 años quien lo está usando
                                o en otro caso un menor con la autorización del padre y control) usando los servicios que ofrece
                                la página web, así como sus enlaces. Este es de carácter jurídico legal y compromete a usted y a
                                la empresa proveedora del sitio web con el que accede. TECNO ALEX S.A.C. es quien da la información
                                en el sitio y es responsable de todo lo que se publica y transmite por el sitio. Necesita conocer sus
                                derechos para saber que puede hacer y las diversas restricciones que puede haber con su uso.
                            </p>
                        </div>
                        <div className="col">
                            <p className="text">
                                <span>1. PROPIEDAD INTELECTUAL</span>
                                <br></br>
                                <span>2. DERECHOS COMO CONSUMIDOR</span>
                                <br></br>
                                <span>3. DATOS RECOPILADOS DE USTED</span>
                                <br></br>
                                <span>4. CONSERVACIÓN DE DATOS</span>
                                <br></br>
                                <span>5. CANCELACIÓN O ELIMINACIÓN DE SUS DATOS</span>
                                <br></br>
                                <span>6. CONDUCTA ACEPTADA Y RECHAZADA EN EL SITIO WEB</span>
                            </p>
                        </div>
                        <div className="col">
                            <p className="text">
                                <h6>1. Derechos como consumidor.</h6> 
                                En el presente sitio web usted tiene derechos los cuales según las normas puede escoger frente a lo que pueda ofrecer la página web.
                            </p>
                            <p className="text">
                                <h6>2. Datos recopilados de usted.</h6> 
                                La presente página web conserva sus datos de ubicación, dirección, manejo de la página web, y eventos realizados frente a la misma de los usuarios.
                            </p>
                            <p className="text">
                                <h6>3. Conservación de datos.</h6> 
                                La presente página web conserva sus datos con el único fin de estadísticas de investigación y mejorar la experiencia de ellos mismos, lo hacemos por un año y será guardado correctamente.
                            </p>
                            <p className="text">
                                <h6>4. Cancelación o eliminación de sus datos.</h6> 
                                Usted puede solicitud una eliminación o borrado de sus datos o cookies según lo establecido con las normas europeas.
                            </p>
                            <p className="text">
                                <h6>5. Conducta aceptada y rechazada en nuestro sitio web.</h6> 
                                El presente sitio web solo aceptará contenido creado por el usuario que cumpa las reglas de comportamiento de buena conducta del mismo.
                            </p>
                        </div>
                    </div>
                </div>
            </terminos>
        </Basic>
    );
}
export default Terminos;