/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useUnit } from 'effector-react'
import { useForm } from 'react-hook-form'
import { IInputs, ISignUpFx } from '@/types/authPopup'
import { EventCallable, Store } from 'effector'
// import { useEffect } from 'react'

export const useAuthForm = (
  initialSpinner: Store<boolean>,
  isSideActive: boolean,
  event: EventCallable<ISignUpFx>
) => {
  const spinner = useUnit(initialSpinner)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IInputs>()

  // useEffect(() => {
  //   if (isSideActive) {
  //     if (isConnected) {
  //       event({
  //         name: user?.user.displayName,
  //         email: user?.user.email,
  //         password: user?.user.uid,
  //         isOAuth: true,
  //       })
  //     }
  //   }
  // }, [isConnected])

  // const handleSignupWithOAuth = () =>
  //   connectWithPopup({
  //     accessId: `${process.env.NEXT_PUBLIC_OAUTH_ACCESS_ID}`,
  //   })

  return {
    spinner,
    register,
    errors,
    handleSubmit,
    // handleSignupWithOAuth,
  }
}
