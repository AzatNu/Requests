import { useState } from "react";
import { ref, remove } from "firebase/database";
import { db } from "../firebase.js";

export const useRequestDelete = (refresh) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const requestDelete = () => {
        setIsDeleting(true);
        const productsDbRef = ref(db, "products/3");

        remove(productsDbRef)
            .then((data) => {
                console.log(`ответ от сервера: удаление прошло успешно`, data);
            })
            .finally(() => {
                setIsDeleting(false);
            });
    };

    return { isDeleting, requestDelete };
};
