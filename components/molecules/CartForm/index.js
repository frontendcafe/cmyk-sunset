import styles from './styles.module.scss';

import Input from 'components/atoms/Input/index'
import Title from 'components/atoms/Title/index';

// cambiar la fuente, el color del placeholder y el focus del input 
// agregar el required
// :invalid


export default function CartForm() {

    const inputHandler = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className={`${styles.container}`}>
            <Title
                size="md"
                className={`${styles.titleHidden}`}
                content="Información de compra"
            />
            <div className={`${styles.desktop}`}>
                <Title
                    size="md"
                    className={`${styles.title}`}
                    content="Datos de contacto"
                />
                <form className={`${styles.form}`}>
                    <label>
                        Nombre
                        <Input
                            size='sm'
                            type='text'
                            placeholder="Escribe aquí tu nombre"
                            onChange={inputHandler}
                        />
                    </label>
                    <label>
                        Apellido
                        <Input
                            size='sm'
                            type='text'
                            placeholder="Escribe aquí tu Apellido"
                            onChange={inputHandler}
                        />
                    </label>
                    <label>
                        Dirección
                        <Input
                            size='sm'
                            type='text'
                            placeholder="Ej: San Martin 882, Cba"
                            onChange={inputHandler}
                        />
                    </label>
                </form>
                <div className={`${styles.space}`}>
                    <Title
                        size="md"
                        className={`${styles.title}`}
                        content="Datos de la tarjeta"
                    />
                    <form className={`${styles.card}`}>
                        {/* debe tener entre 11 y 16 numeros  minlength="11" maxlength="16" size="10" */}
                        <label>
                            Número de la tarjeta
                            <Input
                                size='sm'
                                type='number'
                                placeholder="Ej: 0123 4567 8901 1234"
                                onChange={inputHandler}
                            />
                        </label>
                        <label>
                            Fecha de expiración
                            <Input
                                size='sm'
                                isDisabled={false}
                                type='date'
                                placeholder="Ej: 04/12/2040"
                                onChange={inputHandler}
                            />
                        </label>
                        {/* debe tener 3 size="10" */}
                        <label>
                            Código
                            <Input
                                size='sm'
                                isDisabled={false}
                                type='number'
                                placeholder="Ej: 123"
                                onChange={inputHandler}
                            />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
}
