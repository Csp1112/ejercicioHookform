import { useForm } from "react-hook-form";
import React from 'react'


const CompRegistro = () => {
    //register: es para hacer validaciones de formulario y registrar un campo

    const {register,formState:{errors}, handleSubmit} = useForm();

    const onSubmit = (data) => console.log(data);

  return (
    <div>
        <h2>Formulario de registro</h2>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombres</label>
                <input type="text" {...register('nombres',{required:true, maxLength:10})}/>
                {errors.nombres?.type === 'required' && <p>El campo Nombres es requerido</p>}
                {errors.nombres?.type === 'maxLength' && <p>El campo Nombres debe tener máximo 10 caracteres</p>}
            </div>

            <div>
                <label>Apellidos</label>
                <input type="text" {...register('apellidos',{required:true, maxLength:20})}/>
                {errors.apellidos?.type === 'required' && <p>El campo Apellidos es requerido</p>}
                {errors.apellidos?.type === 'maxLength' && <p>El campo Apellidos debe tener máximo 20 caracteres</p>}
            </div>

            <div>
                <label>Dirección</label>
                <input type="text" {...register('direccion',{required:true, maxLength:20})}/>
                {errors.direccion?.type === 'required' && <p>El campo Dirección es requerido</p>}
                {errors.direccion?.type === 'maxLength' && <p>El campo Dirección debe tener máximo 20 caracteres</p>}
            </div>

            <div>
                <label>Edad</label>
                <input type="number" {...register('edad',{required:true, maxLength:2})}/>
                {errors.edad?.type === 'required' && <p>El campo Edad es requerido</p>}
                {errors.edad?.type === 'maxLength' && <p>El campo Edad debe tener máximo 2 caracteres</p>}
            </div>

            <div>
                <label>País</label>
                <select {...register('pais')}>
                    <option value="colombia">Colombia</option>
                    <option value="venezuela">Venezuela</option>
                    <option value="chile">Chile</option>
                    <option value="argentina">Argentina</option>
                </select>
            </div>
            
            <input type="submit" value="Guardar"/>
        </form>
    </div>
  )
};

export default CompRegistro;

