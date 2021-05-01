import styles from './styles.module.scss';
import React, { useState } from "react";

import Input from 'components/atoms/Input/index'
import Title from 'components/atoms/Title/index';
import Button from 'components/atoms/Button/index';


export default function CartForm() {
    const [values, setValues] = useState(
        {
            name: "", lastName: "", adress: "", numCard: "", dateCard: "", cvv: ""
        });

    const set = (name) => {
        return ({ target: { value } }) => {
            setValues((oldValues) => ({ ...oldValues, [name]: value }));
        };
    };

    const saveFormData = async () => {
        const response = await fetch('/api/registration', {
            method: 'POST',
            body: JSON.stringify(values)
        });
        if (response.status !== 200) {
            throw new Error(`Request failed: ${response.status}`);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await saveFormData();
            alert('Your registration was successfully submitted!');
            setValues(
                {
                    name: "", lastName: "", adress: "", numCard: "", dateCard: "", cvv: ""
                });
        } catch (e) {
            alert(`Registration failed! ${e.message}`);
        }
    }

    return (
        <form className={`${styles.container}`} onSubmit={onSubmit}>
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
                <div className={`${styles.form}`}>
                    <label>
                        Nombre
                        <Input
                            size='sm'
                            type='text'
                            placeholder="Escribe aquí tu nombre"
                            onChange={set("name")}
                            required
                            // className={`${styles.invalid}`}
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
                        content="Datos de la tarjeta"
                    />
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
                            />
                        </label>
                        <Button size="md" className={`$styles.invalid`} color={"green"}>Finalizar compra</Button>
                    </div>
                </div>
            </div>
        </form>
    );
}