import { createEffect } from 'effector'
import { toast } from 'react-hot-toast'
import api from './apiInstance'
import { ILoadOneProductFx } from '@/types/goods'

export const loadOneProductFx = createEffect(
  async ({ productId, category }: ILoadOneProductFx) => {
    try {
      const { data } = await api.post('api/goods/one', {
        productId,
        category,
      })
      if (data?.message === 'Wrong producr id') {
        return { productitem: { errorMessage: 'Wrong producr id' } }
      }
      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)
