'use client'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import Preloader from './Preloader'

export default function ProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <Preloader>
        {children}
      </Preloader>
    </Provider>
  )
}
