import { useState } from "react"
import { addToCart, cartStore, updateCart } from "../../shared/cart";

export const HeroActions = ({product}) => {
    const [count, setCount] = useState(0);

    const total = ()=>{
        return (product.price*product.discount)/100;
    }

    const increment = () => {
        if(count<10){
            if(cartStore.get().some( p => p.id === product.id))
                updateCart({...product,count: count+1});
            setCount(count+1)
        }
    }
    const decrement = () => {
        if(count>0){
            if(cartStore.get().some( p => p.id === product.id))
                updateCart({...product,count: count-1});
            setCount(count-1);
        }
    }
    const addProductToCart = (product) => {
        if(cartStore.get().some(p=> p.id==product.id))
            return;
        const item = {...product, count};
        addToCart(item);
        
    }
    return (
        <>
            <div className="flex flex-col gap-4"> {/* Contenedor */}
                <div className="flex items-center justify-between w-full"> {/* price section */}
                    <div className="flex items-center gap-4 font-bold">
                        <p className=" text-veryDarkBlueCustom text-[28px] ">${total().toFixed(2)}</p>
                        <p className="text-white bg-black/75 text-[16px] py-[2px] px-2 rounded-md">{product.discount}%</p>
                    </div>
                    <p className="text-darkGrayishBlueCustom font-bold line-through text-[16px]">${product.price.toFixed(2)}</p>
                </div>
                <div className="">{/* Count of product */}
                    <div className="h-14 rounded-lg px-6 flex justify-between items-center bg-lightBrayishBlueCustom"> {/* Box */}
                        <button arial-label="increment" 
                                className="text-orangeCustom hover:text-hoverOrange"
                                onClick={()=>decrement()}
                                >
                            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" ><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="currentColor" fillRule="nonzero" xlinkHref="#a"/></svg>
                        </button>
                        <p className="font-bold">{count}</p>{/* count*/}
                        <button arial-label="decrement" 
                                className="text-orangeCustom hover:text-hoverOrange"
                                onClick={()=>increment()}
                                >
                            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="currentColor" fillRule="nonzero" xlinkHref="#b"/></svg>
                        </button>
                    </div>
                </div>
                <div className="h-14 "> 
                    <button className="w-full h-full flex justify-center items-center gap-4 bg-orangeCustom rounded-lg text-veryDarkBlueCustom font-bold text-[15px] hover:bg-hoverOrange cursor-pointer shadow-lg shadow-orange-200"
                            disabled={count==0}
                            onClick={()=>addProductToCart(product)}
                    >
                        <svg className="scale-75" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="currentColor" fillRule="nonzero"/></svg>
                        Add to cart
                    </button>
                </div>{/* Add btn */}
            </div>
        </>
    )
}
