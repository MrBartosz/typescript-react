import { useState } from "react";
import './css/ShoppingCart.css'

export const ShoppingCart = () => {

    const [show, toggleShow] = useState(false);
    const [inTotal, setInTotal] = useState(0);
    const [tvPrice, setTvPrice] = useState(0);
    const [wardrobePrice, setWardrobePrice] = useState(0);
    const [showTv, setShowTv] = useState(true);
    const [showWardrobe, setShowWardrobe] = useState(true);

    const handleChangeTv = (e: any) => {
        setTvPrice(e.target.value * 2999)
        let toAdd = (e.target.value * 2999) + wardrobePrice;
        setInTotal(toAdd)
    }

    const handleChangeWardrobe = (e: any) => {
        setWardrobePrice(e.target.value * 6799)
        let toAdd = (e.target.value * 6799) + tvPrice;
        setInTotal(toAdd);
    }

    const deleteButton = (key: string) => {
        if (key === 'tv') {
            setShowTv(false)
            setTvPrice(0)
            setInTotal(wardrobePrice)
        }
        else if (key === 'wardrobe') {
            setShowWardrobe(false)
            setWardrobePrice(0)
            setInTotal(tvPrice)
        }
    }

    const addButton = (key: string) => {
        if (key === 'tv') {
            setShowTv(true)
        }
        else if (key === 'wardrobe') {
            setShowWardrobe(true)
        }
    }


    return (
    <>
        <div className='App'>
            <button className='button' onClick={() => toggleShow(!show)}>
                {show ? 'Hide' : 'Show Shopping Cart'}
            </button>
        </div>
            {show && 
                <div className="shopping-cart-p">
                    <p>Zadanie polega na dodawaniu i usuwaniu przedmiotów z koszyka, obliczanie i wyświetlanie łączniej sumy zamówienia.</p>
                </div>
            }
            {show &&
            <div className="ShoppingCart-body">
                <h1 className="ShoppingCart-h1">Podsumowanie Zamówienia</h1>
                <div className="ShoppingCart-container">
                {!showTv &&
                    <div className="ShoppingCart-h1">
                        Pokaż Telewizor
                        <button className="ShoppingCart-add-button" onClick={() => addButton('tv')}>
                            +
                        </button>
                    </div> 
                }
                {showTv &&
                    <div className="ShoppingCart-row">
                        <div className="ShoppingCart-type">
                            <h2>Telewizor</h2>
                            <p>AGD do salonu</p>
                        </div>
                        <div className="ShoppingCart-quantity-price">
                            <div className="ShoppingCart-input-container">
                                <input className='ShoppingCart-input' type="number" min='0' onChange={handleChangeTv} />
                            </div>
                            <div>
                                2999 zł
                            </div>
                            <div className="ShoppingCart-x-button">
                                <button className="ShoppingCart-x" onClick={() => deleteButton('tv')}>X</button>
                            </div>
                        </div>
                    </div>
                    }
                    {!showWardrobe &&
                    <div className="ShoppingCart-h1">
                        Pokaż Szafe
                        <button className="ShoppingCart-add-button" onClick={() => addButton('wardrobe')}>
                            +
                        </button>
                    </div> 
                    }
                    {showWardrobe &&
                    <div className="ShoppingCart-row">
                        <div className="ShoppingCart-type">
                            <h2>Dębowa Szafa</h2>
                            <p>Meble do garderoby</p>
                        </div>
                        <div className="ShoppingCart-quantity-price">
                            <div className="ShoppingCart-input-container">
                                <input className='ShoppingCart-input' type="number"  min='0' onChange={handleChangeWardrobe}/>
                            </div>
                            {showWardrobe &&
                                <div>
                                    6799 zł
                                </div>
                            }
                            <div className="ShoppingCart-x-button">
                                <button className="ShoppingCart-x" onClick={() => deleteButton('wardrobe')}>X</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>

                <footer className="ShoppingCart-footer">
                    <div>
                        Podsumowanie: <span>{inTotal}</span>
                    </div>
                    <div >
                        <button className="ShoppingCart-button">Wchodzę w to!</button>
                    </div>
                </footer>
            </div>
            }
    </>
    )
}