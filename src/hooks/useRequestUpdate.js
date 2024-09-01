import { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase.js";
export const useRequestUpdate = (refresh) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const requestUpdate = () => {
        setIsUpdating(true);
        const productsDbRef = ref(db, "products/1");

        set(productsDbRef, {
            name: "11111",
            price: "12",
            class: "2222",
        })
            .then((data) => {
                console.log(
                    `ответ от сервера: обновление прошло успешно`,
                    data
                );
            })
            .finally(() => {
                setIsUpdating(false);
            });
    };
    return { isUpdating, requestUpdate };
};
