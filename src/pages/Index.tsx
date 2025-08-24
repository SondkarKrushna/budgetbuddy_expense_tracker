import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { BudgetOverview } from "@/components/BudgetOverview";
import { ExpenseChart } from "@/components/ExpenseChart";
import { CategoryBreakdown } from "@/components/CategoryBreakdown";
import { AddExpenseForm } from "@/components/AddExpenseForm";
import { ExpenseList } from "@/components/ExpenseList";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

const Index = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: "1", title: "Groceries", amount: 120, category: "Food", date: "2024-08-20" },
    { id: "2", title: "Gas", amount: 60, category: "Transportation", date: "2024-08-19" },
    { id: "3", title: "Netflix", amount: 15, category: "Entertainment", date: "2024-08-18" },
    { id: "4", title: "Coffee", amount: 25, category: "Food", date: "2024-08-17" },
    { id: "5", title: "Utilities", amount: 150, category: "Bills", date: "2024-08-16" },
  ]);

  const [budget] = useState(2000);

  const addExpense = (expense: Omit<Expense, "id">) => {
    const newExpense = {
      ...expense,
      id: Date.now().toString(),
    };
    setExpenses([newExpense, ...expenses]);
  };

  const totalSpent = expenses.reduce((total, expense) => total + expense.amount, 0);
  const totalSaved = budget - totalSpent;

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-background)' }}>
      <DashboardHeader />
      
      <main className="container mx-auto p-6 space-y-8">
        <BudgetOverview 
          budget={budget}
          spent={totalSpent}
          saved={totalSaved}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExpenseChart expenses={expenses} />
          <CategoryBreakdown expenses={expenses} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <AddExpenseForm onAddExpense={addExpense} />
          </div>
          <div className="lg:col-span-2">
            <ExpenseList expenses={expenses} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;