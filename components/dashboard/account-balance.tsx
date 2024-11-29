import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import RefreshIcon from "../icons/refreshIcon";

const accounts = [
  { currency: "NGN", balance: "50,000.00", flag: "🇳🇬" },
  { currency: "CAD", balance: "0.00", flag: "🇨🇦" },
  { currency: "GBP", balance: "0.00", flag: "🇬🇧" },
  { currency: "USD", balance: "2,000.00", flag: "🇺🇸" },
];

export function AccountBalances() {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl font-semibold">Your accounts</h2>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-muted-foreground">
              Last updated 3 mins ago
            </p>
           <RefreshIcon />
          </div>
        </div>


        <div className="mt-4 flex justify-end">
          <Button
            variant="default"
            className="bg-[#6139E7] hover:bg-[#6139E9]  text-primary-foreground"
          >
            + Fund account
          </Button>
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {accounts.map((account) => (
          <Card key={account.currency} className="bg-white shadow-[#6139E74D] dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {account.flag}{" "}
                {account.currency === "NGN"
                  ? "Nigerian account"
                  : account.currency === "CAD"
                    ? "Canadian account"
                    : account.currency === "GBP"
                      ? "British account"
                      : "United states account"}{" "}
                ({account.currency})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {account.currency === "NGN"
                  ? "₦"
                  : account.currency === "CAD"
                    ? "$"
                    : account.currency === "GBP"
                      ? "£"
                      : "$"}
                {account.balance}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
}