import { http, cookieStorage, createConfig, createStorage, Chain } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
// Morph Holesky Testnet ka configuration
const morph: Chain = {
  id: 2810,
  name: 'Morph',
  network: 'morph-holesky-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://rpc-quicknode-holesky.morphl2.io'] },
    default: { http: ['https://rpc-quicknode-holesky.morphl2.io'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer-holesky.morphl2.io' },
  },
  iconUrl: 'https://www.hackquest.io/_next/static/media/Morph_logo.10561d9a.png'
}

// Ethereum Holesky ka configuration
const ethereumHolesky: Chain = {
  id: 17000,
  name: 'Ethereum Holesky',
  network: 'ethereum-holesky',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://ethereum-holesky-rpc.publicnode.com/'] },
    default: { http: ['https://ethereum-holesky-rpc.publicnode.com/'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://holesky.etherscan.io' },
  },
}

export function getConfig() {
  return createConfig({
    chains: [mainnet, sepolia, morph, ethereumHolesky], // Saare networks add kiye
    connectors: [
      injected(),
      coinbaseWallet(),
      walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [morph.id]: http(),
      [ethereumHolesky.id]: http(),
    },
  })
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>
  }
}