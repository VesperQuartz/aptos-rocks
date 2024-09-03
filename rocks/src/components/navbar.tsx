import { useGetBalance } from "@/hooks";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Copy } from "lucide-react";

export const NavBar = () => {
  const { connected, account } = useWallet();
  const balance = useGetBalance(account!);
  return (
    <nav className="flex justify-between p-4 items-center">
      {connected && account && balance.data && (
        <div className="text-2xl font-bold">
          <p>
            {balance.data} <span className="text">APT</span>
          </p>
          <p className="text-green-500">
            <span className="text-white">~</span>
            {" $ "}
            {Number(balance.data.toFixed(2)) * 6.37}
          </p>
        </div>
      )}
      <div className="flex flex-col p-2">
        <WalletSelector />
        {connected && account ? (
          <div className="flex gap-2 p-1">
            <p>{account.address.slice(0, 10) + "..."}</p>
            <Copy
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(account.address);
                alert("Copied to clipboard");
              }}
            />
          </div>
        ) : (
          <p>No wallet connected</p>
        )}
      </div>
    </nav>
  );
};
