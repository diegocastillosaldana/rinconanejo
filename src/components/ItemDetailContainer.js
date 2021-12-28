import React from 'react'
import '../App.css';
import productos from "../data/productos";
import ItemDetail from './ItemDetail';
import Loader from "react-loader-spinner";
import { useEffect, useState } from 'react';
import { useParams, Navigate } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [item, setItem] = useState(productos[id - 1]);
    const [isLoading, setIsLoading] = useState(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadItems = async () => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos[id - 1]);
      }, 2 * 1000);
    });

    return response;
  };
  useEffect(() => {
    const getItems = async () => {
      const result = await loadItems();
      setIsLoading(false);
      setItem(result);
    };
    getItems();
  }, [loadItems]);

    return (
        <div>
            {isLoading ? (
                <Loader
                    className="loader"
                    type="TailSpin"
                    color="#fa6647"
                    height={40}
                    width={40}
                />
            ) : productos[id - 1] ? (
                <ItemDetail item={item} />
                ) : (
                <Navigate to="/" />
            )}
        </div>
    )
}

export default ItemDetailContainer