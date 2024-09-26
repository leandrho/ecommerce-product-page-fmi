import { atom } from "nanostores";

export const cartStore = atom([]);

export const addToCart = (product) => {
    cartStore.set([...cartStore.get(), product]);
}
export const removeFromCart = (id) => {
    cartStore.set(cartStore.get().filter( p => p.id !== id));
}
export const updateCart = (product) => {
    const newCartStore = cartStore.get().map( p => { return p.id == product.id ? product : p});
    cartStore.set(newCartStore);
}
export const clearCart = () => {
    cartStore.set([]);
}