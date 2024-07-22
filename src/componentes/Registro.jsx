import { useForm } from "react-hook-form";
import React from 'react'


function Registro() {
    //register: es para hacer validaciones de formulario y registrar un campo

    const {register, handleSubmit, watch, formState:{errors}} = useForm();

    const password = watch('password','');

  return (
    <div>
        <form onSubmit={handleSubmit((data)=>console.log(data))}>
        
            <label htmlFor="nombre"> Nombre </label>
            <input type="text" {...register('nombres',{
                required:{
                    value:true,
                    message:'El campo Nombres es requerido'
                }, 
                maxLength:{
                    value:12,
                    message:'El campo Nombres debe tener máximo 10 caracteres'
                },
                minLength:{
                    value:6,
                    message:'El campo Nombres debe tener mínimo 6 caracteres'
                }
            })}/>
            {errors.nombres && (<span className="text-danger">{errors.nombres.message}</span>)}
            <br />

            <label> Correo </label>
            <input {...register('correo',{
                required:{
                    value:true,
                    message:'El campo Correo es requerido'
                },
                pattern:{
                    value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message:'El campo Correo no es válido'
                }
            })}/>
            {errors.correo && (<span className="text-danger">{errors.correo.message}</span>)}
            <br />

            <label> Password </label>
            <input {...register('password',{
                required:{
                    value:true,
                    message:'El campo Password es requerido'
                },
                pattern:{
                    value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message:'El campo Password debe tener mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número'
                }
            })}/>
            {errors.password && (<span className="text-danger">{errors.password.message}</span>)}

            <br />
            <label> Confirmar Password </label>
            <input {...register('confirmarPassword',{
                required:true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/,
                validate:(value)=>value==password
            })}/>
            {errors.confirmarPassword?.type=='validate' && (<span className="text-danger">Las contraseñas no coinciden</span>)}

            <br />
            <label htmlFor="fechadenacimiento">Fecha de nacimiento</label>
            <input type="date" {...register('fechadenacimiento',{
                required:{
                    value:true,
                    message:'El campo Fecha de nacimiento es requerido'
                }
            })}/>
            {errors.fechadenacimiento && (<span className="text-danger">{errors.fechadenacimiento.message}</span>)}
            <br />
            <button className="btn btn-primary" type="submit">Registrarse</button>
        </form>
    </div>
  )
};

export default Registro;

