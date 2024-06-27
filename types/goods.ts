export interface ILoadOneProductFx {
  productId: string
  category: string
  setSpinner?: (arg0: boolean) => void
  withShowingSizeTable?: boolean
}
export interface IProductSizesItemProps {
  currentSize: [string, boolean]
  selectedSize: string
  setSelectedSize: (arg0: string) => void
  currentCartItems: []
}
export interface IProductCounterProps {
  className: string
  count: number
}
export interface IAddToCartBtnProps {
  text: string
  className?: string
}
