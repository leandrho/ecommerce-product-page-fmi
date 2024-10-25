import { useRef } from "react";
import { cartStore, removeFromCart, clearCart } from "../../shared/cart"
import { useStore } from "@nanostores/react"

export const Cart = () => {
    const cart = useStore(cartStore);
    const count = cart.reduce((t,p)=> t+p.count, 0);
    const basket = useRef(0);
    const showBasket = () => {
        basket.current.classList.toggle('hidden');
        basket.current.classList.toggle('flex');
    }
    const doCheckout = () => {
        showBasket();
        clearCart();
    }
    return (
        <>
           <button aria-label="Icon cart" className="relative cursor-pointer text-darkGrayishBlueCustom hover:text-veryDarkBlueCustom"
                    onClick={()=>showBasket()}
           >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="currentColor" fillRule="nonzero"/></svg>
                {
                    count > 0 && <p className="absolute right-[-8px] top-[-8px] text-[10px] font-bold px-2 bg-orangeCustom rounded-lg text-white leading-snug  animate-bounce2">{count}</p>
                }
           </button>
           
           <div ref={basket} className="absolute top-20 right-[10px] max-w-[355px] w-[95%] sm:max-w-[355px] min-h-[256px] bg-white rounded-lg shadow-2xl z-50 flex-col animate-bounce3 hidden xl:right-[-40px]">{/* Basket */}
                <h2 className="p-4 pb-5 font-bold">Cart</h2>
                <div className="h-[1px] w-full bg-grayisBlueCustom"></div>
                {
                    cart.length==0
                    ?
                        <div className="flex flex-col items-center justify-center flex-grow">
                            <p className="font-bold text-base text-darkGrayishBlueCustom">Your cart is empty.</p>
                        </div>
                    :
                    <div className="flex flex-col gap-8 px-6 py-8 ">
                        {
                            cart.map( prod => (
                                <div key={prod.id} className="flex gap-4 items-center justify-between">{/* Product */}
                                    <figure className="max-w-[50px] ">
                                        <img  src={prod.thumb1} alt="" className="rounded-md" />
                                    </figure>
                                    <div className="flex flex-col justify-between text-darkGrayishBlueCustom">
                                        <h3 className="text-[15px] font-bold">{prod.name}</h3>
                                        <p className="text-[16px]">${((prod.price*prod.discount)/100).toFixed(2)} x {prod.count} <span className="font-bold text-veryDarkBlueCustom">${(((prod.price*prod.discount)/100)*prod.count).toFixed(2)}</span></p>
                                    </div>
                                    <button className="cursor-pointer" onClick={()=>removeFromCart(prod.id)} arial-label="Delete Item Cart">
                                        <img src="./images/icon-delete.svg" alt="" />
                                    </button>
                                </div>
                            ))
                        }
                        <button 
                            className="bg-orangeCustom text-veryDarkBlueCustom h-14 rounded-lg font-bold hover:bg-hoverOrange cursor-pointer"
                            onClick={()=>doCheckout()}
                            arial-label="Checkout"
                        >
                            Checkout
                        </button>
                    </div>
                    
                }

           </div>
        </>
    )
}
