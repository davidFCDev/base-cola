import type { NextPage } from 'next'
import { SupportedLocale, SUPPORTED_LOCALES, SwapWidget, Theme } from '@uniswap/widgets'
import Web3Connectors from '../../components/Web3Connectors'

// ↓↓↓ Don't forget to import the widgets' fonts! ↓↓↓
import '@uniswap/widgets/fonts.css'
// ↑↑↑

import styles from '../../styles/Home.module.css'
import { useActiveProvider } from '../../connectors'
import { useCallback, useRef, useState } from 'react'
import { JSON_RPC_URL } from '../../constants'
import { HeaderDapp } from '../../components/HeaderDapp'

const TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'
const UNI = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'

const Home: NextPage = () => {
  // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
  const connectors = useRef<HTMLDivElement>(null)
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])

  // The provider to pass to the SwapWidget.
  // This is a Web3Provider (from @ethersproject) supplied by @web3-react; see ./connectors.ts.
  const provider = useActiveProvider()

  // The locale to pass to the SwapWidget.
  // This is a value from the SUPPORTED_LOCALES exported by @uniswap/widgets.
  const [locale, setLocale] = useState<SupportedLocale>('en-US')
  const onSelectLocale = useCallback((e) => setLocale(e.target.value), [])

  const theme: Theme = {
    primary: '#000',
    secondary: '#666',
    interactive: '#0089EC',
    container: '#FFF',
    module: '#E7E7E7',
    accent: '#3D3B31',
    outline: '#343D3A',
    dialog: '#FFF',
    fontFamily: 'Verdana',
    borderRadius: 0.8,
  }

  return (
    <>
      <HeaderDapp />
      <div className='fondo min-h-screen'>
        <div className="sm:hidden" ref={connectors} tabIndex={-1}>
          <Web3Connectors />
        </div>
        <main className='p-10'>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16'>
            <div className="flex flex-col justify-center items-center gap-3">
              <h2 className="text-3xl px-4 py-2 shadow-black text-primary bg-white font-semibold shadow rounded-lg">Vending Machine</h2>
              <img src="/maquina.png" alt="maquina" className="w-80 sm:w-96" />
            </div>
            <img src='/toshi2-cola.png' alt="toshi2-cola" className="hidden small:w-72 fixed z-0 opacity-80 bottom-0 right-5" />
            <img src='/mochi2-cola.png' alt="mochi2-cola" className="hidden small:w-96 fixed z-0 opacity-80 bottom-0 left-0" />
            <div className='flex flex-col relative'>
              <div className='flex justify-center items-end'>
                <img src='/toshi2-cola.png' alt="toshi2-cola" className="w-36 z-0 opacity-80" />
                <img src='/mochi2-cola.png' alt="mochi2-cola" className="w-44 z-0 opacity-80" />
              </div>
              <div className={`${styles.widget}`}>
                <SwapWidget
                  theme={theme}
                  jsonRpcEndpoint={JSON_RPC_URL}
                  tokenList={TOKEN_LIST}
                  provider={provider}
                  locale={locale}
                  onConnectWallet={focusConnectors}
                  defaultInputTokenAddress="NATIVE"
                  defaultInputAmount="1"
                  defaultOutputTokenAddress={UNI}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>

  )
}

export default Home
