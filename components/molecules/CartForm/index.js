import styles from './styles.module.scss';
import React, { useState } from "react";
import Input from 'components/atoms/Input/index'
import Title from 'components/atoms/Title/index';
import Button from 'components/atoms/Button/index';
import Price from 'components/atoms/Price/index';


export default function CartForm({ price, onSubmitForm }) {
    const [values, setValues] = useState(
        {
            name: "", lastName: "", adress: "", numCard: "", dateCard: "", cvv: ""
        }
    );

    const set = (name) => {
        return ({ target: { value } }) => {
            setValues((oldValues) => ({ ...oldValues, [name]: value }));
        };
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            onSubmitForm?.(values);
        }
        catch (e) {
            alert(`Registration failed! ${e.message}`);
        }
    }
    return (

        <form className={`${styles.container}`} onSubmit={onSubmit}>
            <Title
                size="md"
                className={`${styles.titleHidden}`}
            >Información de compra</Title>
            <div className={`${styles.desktop}`}>
                <Title
                    size="md"
                    className={`${styles.title}`}
                >Datos de contacto</Title>
                <div className={`${styles.form}`}>
                    <label>
                        Nombre
                        <Input
                            size='sm'
                            type='text'
                            placeholder="Escribe aquí tu nombre"
                            onChange={set("name")}
                            required
                            value={values.name}
                        />
                    </label>
                    <label>
                        Apellido
                        <Input
                            size='sm'
                            type='text'
                            placeholder="Escribe aquí tu Apellido"
                            onChange={set("lastName")}
                            required
                            value={values.lastName}
                        />
                    </label>
                    <label>
                        Dirección
                        <Input
                            size='sm'
                            type='text'
                            placeholder="Ej: San Martin 882, Cba"
                            onChange={set("adress")}
                            required
                            value={values.adress}
                        />
                    </label>
                </div>
                <div className={`${styles.space}`}>
                    <Title
                        size="md"
                        className={`${styles.title}`}
                    >Datos de la tarjeta</Title>
                    <div className={`${styles.card}`}>
                        <label>
                            Número de la tarjeta
                            <Input
                                size='sm'
                                type='number'
                                placeholder="Ej: 0123 4567 8901 1234"
                                minLength="11"
                                maxLength="16"
                                pattern={"[-+]?[0-9]"}
                                onChange={set("numCard")}
                                value={values.numCard}
                                required
                            />
                        </label>
                        <label>
                            Fecha de expiración
                            <Input
                                size='sm'
                                isDisabled={false}
                                type='date'
                                placeholder="Ej: 04/12/2040"
                                onChange={set("dateCard")}
                                value={values.dateCard}
                                required
                            />
                        </label>
                        <label>
                            Código
                            <Input
                                size='sm'
                                isDisabled={false}
                                type='number'
                                placeholder="Ej: 123"
                                maxLength="3"
                                pattern={"[-+]?[0-9]"}
                                onChange={set("cvv")}
                                value={values.cvv}
                                required
                            />
                        </label>
                        <div className={`${styles.align}`}>
                            <Price size="lg" price={price} currency="$"></Price>
                            <Button size="md" className={`$styles.invalid`} color={"green"} type="submit">Finalizar compra</Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}