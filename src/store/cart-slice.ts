import { createSlice } from "@reduxjs/toolkit"

interface IItem {
	id: number
	name: string
	img: string
	price: number
	quantity: number
}

interface ICart {
	items: IItem[]
	totalQuantity: number
}

const initialState: ICart = {
	items: [],
	totalQuantity: 0,
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action) {
			const newItem = action.payload

			const oldItem = state.items.find((item) => item.id === newItem.id)
			if (!oldItem) {
				state.totalQuantity++
				state.items.push({
					id: newItem.id,
					name: newItem.name,
					img: newItem.img,
					price: newItem.price,
					quantity: newItem.count,
				})
			} else {
				oldItem.quantity += newItem.count
			}
		},
		removeFromCart(state, action) {
			const id = action.payload.id
			const count = action.payload.count
			const item = state.items.find((item) => item.id === id)!
			if (item?.quantity > count) {
				item.quantity -= count
			} else {
				state.totalQuantity--
				state.items = state.items.filter((item) => item.id !== id)
			}
		},
	},
})

export const cartActions = cartSlice.actions
export default cartSlice
