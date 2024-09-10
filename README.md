
[Screencast from 10-09-24 06:46:53 PM IST.webm](https://github.com/user-attachments/assets/b05e8542-4516-430d-9ba8-d31902ceb8cf)

The Morph-dev-kit is a toolkit designed to help you develop, deploy, and integrate smart contracts on the Morph Holesky testnet. It includes tools and configurations to make it easier to build decentralized applications (dApps) with support for wallet connections.

**Tech Stack:**
- **Frontend:** JavaScript/TypeScript, Tailwind CSS, Nextjs.
- **Backend:** Solidity using Hardhat for development and deployment
- **Integration:** WAGMI for wallet management, and WalletConnect & Rainbow Kit for multi-chain support

**Overview:**
The Morph-dev-kit is a complete solution for working with smart contracts on the Morph Holesky testnet. The project is already deployed on this testnet, but you can set it up locally to further develop or test the application.

**Steps to Set Up Locally:**

1. **Clone the Repository:**  
   First, clone the project repository to your local machine using the following command in your terminal or command prompt:

   ```bash
   git clone https://github.com/Adityaakr/Morph-dev.git
   ```

### 2. Navigate to the Project Directory

```bash
cd Morph-dev
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Rename the `.env.example` file to `.env.local`:

```bash
mv .env.example .env.local
```

Open `.env.local` and configure the following environment variables:

```bash
NEXT_PUBLIC_WC_PROJECT_ID=#WalletConnect project ID
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_CONTRACT_ADDRESS=0xAB7391FBbCE3a30bf0418bB3A55F8634dE4629b4 # Add your contract address here
PRIVATE_KEY= #Your private key
```

### 5. Get Your WalletConnect ID

To get the `NEXT_PUBLIC_WC_PROJECT_ID`, go to [WalletConnect Cloud](https://walletconnect.com/cloud) and generate a project ID. Replace the `NEXT_PUBLIC_WC_PROJECT_ID` in the `.env.local` file with this value.

### 6. Add Your Contract Address

Deploy your contract on the Morph Holesky testnet and replace the value of `NEXT_PUBLIC_CONTRACT_ADDRESS` in the `.env.local` file with your deployed contract address.

### 7. Add Your Private Key

Replace the `PRIVATE_KEY` in the `.env.local` file with your wallet's private key.

### 8. Running the Application

Once all environment variables are set, start the development server:

```bash
npm run dev
```

You will see options to connect to multiple networks:
- Ethereum mainnet
- Sepolia
- Morph Holesky (as "morph")
- Holesky

Now you're ready to start building dApps on Morph!

Problem? Reachout to me - https://twitter.com/adityakrx
