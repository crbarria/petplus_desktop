export class ConsuProcedimiento {

     constructor(
        public id_consulta_procedimiento:number,
        public observaciones:string,
        public emp_id_emp_id:number,
        public procedimiento_id_procedimiento_id:number,
        public consulta_reserva_id_consulta_reserva_id:number,
        public motivo_consulta:string,
        public peso:number,
        public fecha_pro:string
    ){}

}
