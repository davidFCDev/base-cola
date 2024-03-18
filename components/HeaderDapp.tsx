import Link from "next/link";
import Web3Connectors from '../components/Web3Connectors'
import styles from '../styles/Home.module.css'
import { useCallback, useRef } from "react";
import { useActiveProvider } from "../connectors";

export const HeaderDapp = () => {
    // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
    const connectors = useRef<HTMLDivElement>(null)
    const focusConnectors = useCallback(() => connectors.current?.focus(), [])

    // The provider to pass to the SwapWidget.
    // This is a Web3Provider (from @ethersproject) supplied by @web3-react; see ./connectors.ts.
    const provider = useActiveProvider()

    return (
        <header className="flex justify-between items-center p-5 lg:py-2 lg:px-10 font-semibold bg-gradient text-white shadow shadow-primary h-20">
            {/* <div className="hover:cursor-pointer">
                <Link href={"/"} >
                    <img src="/delicious.webp" alt="Letra logos" className="w-16 hidden lg:block hover:scale-105" />
                </Link>
            </div> */}
            <div className="text-xl flex items-center justify-center gap-4">
                <Link href={"/"} >
                    <h2 className="px-4 py-2 rounded-md hover:text-red-500 hover:cursor-pointer">HOME</h2>
                </Link>
                <h2 className="px-4 py-2 rounded-md text-red-500 hover:text-red-500 hover:cursor-pointer">SWAP</h2>
                <h2 className="px-4 py-2 rounded-md hover:text-red-500 hover:cursor-pointer">COMING SOON</h2>
                <h2 className="px-4 py-2 rounded-md hover:text-red-500 hover:cursor-pointer">COMING SOON</h2>
            </div>
            <div className="" ref={connectors} tabIndex={-1}>
                <Web3Connectors />
            </div>
        </header>
    );
};
