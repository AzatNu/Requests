import { useState } from "react";
import {
    useRequestAdd,
    useRequestDelete,
    useRequestGet,
    useRequestUpdate,
} from "./hooks";
export const Requester = () => {
    const { isCreating, requestAdd } = useRequestAdd();
    const { isDeleting, requestDelete } = useRequestDelete();
    const { isUpdating, requestUpdate } = useRequestUpdate();
    const { products, isLoading } = useRequestGet();

    return (
        <>
            {isLoading && <div>Загрузка...</div>}
            <div>
                {Object.keys(products).map((key) => (
                    <div key={key}>
                        {products[key].name} - {products[key].price}
                    </div>
                ))}
            </div>
            <button onClick={requestAdd} disabled={isCreating}>
                Добавить колонку
            </button>
            <button onClick={requestDelete} disabled={isDeleting}>
                Удалить смартфон
            </button>
            <button onClick={requestUpdate} disabled={isUpdating}>
                Обновить утюг
            </button>
        </>
    );
};
