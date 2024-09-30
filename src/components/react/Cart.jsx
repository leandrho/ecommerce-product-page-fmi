import { useRef } from "react";
import { cartStore, removeFromCart, clearCart } from "../../shared/cart"
import { useStore } from "@nanostores/react"

export const Cart = () => {
    const cart = useStore(cartStore);
    const count = cart.reduce((t,p)=> t+p.count, 0);
    const basket = useRef(0);
    const showBasket = () => {
        // basket.current.classList.add('animation-bounce4');
        basket.current.classList.toggle('hidden');
        basket.current.classList.toggle('flex');
    }
    const doCheckout = () => {
        showBasket();
        clearCart();
    }
    return (
        <>
           <button aria-label="icon cart" className="relative cursor-pointer"
                    onClick={()=>showBasket()}
           >
                <img src="./images/icon-cart.svg" alt=""/>
                {
                    count > 0 && <p className="absolute right-[50%] translate-x-[-50%] top-[-8px] text-[10px] font-bold px-2 bg-orangeCustom rounded-lg text-white leading-snug  animate-bounce2">{count}</p>
                }
           </button>
           
           <div ref={basket} className="absolute top-20 right-[10px] max-w-[355px] w-[95%] sm:max-w-[355px] min-h-[256px] bg-white rounded-lg shadow-xl z-50 flex-col animate-bounce3 hidden xl:right-[-40px]">{/* Basket */}
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
                                    <button className="cursor-pointer" onClick={()=>removeFromCart(prod.id)}>
                                        <img src="./images/icon-delete.svg" alt="" />
                                    </button>
                                </div>
                            ))
                        }
                        <button 
                            className="bg-orangeCustom text-veryDarkBlueCustom h-14 rounded-lg font-bold hover:bg-hoverOrange cursor-pointer"
                            onClick={()=>doCheckout()}
                        >
                            Checkout
                        </button>
                    </div>
                    
                }

           </div>
        </>
    )
}
