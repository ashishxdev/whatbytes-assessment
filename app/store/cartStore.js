import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist((set, get) => ({
        cart: [],

        addToCart: (product, qty = 1) => {
            const existing = get().cart.find((item) => item.id === product.id);

            if (existing) {
                set({
                    cart: get().cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + qty }
                            : item
                    )
                });
            } else {
                set({
                    cart: [...get().cart, { ...product, quantity: qty }]
                });
            }
        },

        removeFromCart: (productId) => {
            set({
                cart: get().cart.filter((item) => item.id !== productId)
            })
        },

        increaseQuantity: (productId) => {
            set({
                cart: get().cart.map((item) => item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item)
            })
        },

        decreaseQuantity: (productId) => {
            const item = get().cart.find((item) => item.id === productId);

            if (item && item.quantity <= 1) {
                set({
                    cart: get().cart.filter((item) => item.id !== productId)
                })
            } else {
                set({
                    cart: get().cart.map((item) => item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                    )
                })
            }
        }
    }),
        {
            name: "cart-storage"
        }
    )
)