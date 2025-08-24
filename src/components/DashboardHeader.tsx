import { Wallet } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-primary/80">
              <Wallet className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">BudgetBuddy</h1>
              <p className="text-sm text-muted-foreground">Your Personal Finance Tracker</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Welcome back!</p>
            <p className="font-semibold text-foreground">Track your finances</p>
          </div>
        </div>
      </div>
    </header>
  );
};