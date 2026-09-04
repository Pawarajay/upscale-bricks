import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, IndianRupee, Percent, CalendarDays } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const emiDetails = useMemo(() => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const months = tenure * 12;

    if (rate === 0) {
      const emi = principal / months;
      return {
        emi: Math.round(emi),
        totalPayment: Math.round(principal),
        totalInterest: 0,
      };
    }

    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    }
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-12">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
              <Calculator className="w-8 h-8 text-gold" />
            </div>
            <h1 className="heading-display text-foreground mb-4">
              EMI Calculator
            </h1>
            <p className="body-large">
              Plan your home loan with our easy-to-use EMI calculator
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Input Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-8"
              >
                {/* Loan Amount */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-foreground font-medium">
                      <IndianRupee className="w-5 h-5 text-gold" />
                      Loan Amount
                    </label>
                    <span className="font-heading text-lg font-semibold text-primary">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={500000}
                    max={50000000}
                    step={100000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>₹5 L</span>
                    <span>₹5 Cr</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-foreground font-medium">
                      <Percent className="w-5 h-5 text-gold" />
                      Interest Rate (p.a.)
                    </label>
                    <span className="font-heading text-lg font-semibold text-primary">
                      {interestRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={15}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5%</span>
                    <span>15%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-foreground font-medium">
                      <CalendarDays className="w-5 h-5 text-gold" />
                      Loan Tenure
                    </label>
                    <span className="font-heading text-lg font-semibold text-primary">
                      {tenure} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1 Year</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </motion.div>

              {/* Results Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-card rounded-lg p-8 shadow-elevated border border-border">
                  <h3 className="heading-card text-foreground mb-6">Your EMI Details</h3>

                  <div className="text-center mb-8 py-6 bg-gold/10 rounded-lg">
                    <span className="text-sm text-muted-foreground">Monthly EMI</span>
                    <p className="font-heading text-4xl font-bold text-primary mt-1">
                      ₹{emiDetails.emi.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Principal Amount</span>
                      <span className="font-semibold text-foreground">
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Total Interest</span>
                      <span className="font-semibold text-foreground">
                        {formatCurrency(emiDetails.totalInterest)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">Total Payment</span>
                      <span className="font-heading text-xl font-semibold text-primary">
                        {formatCurrency(emiDetails.totalPayment)}
                      </span>
                    </div>
                  </div>

                  {/* Visual Breakdown */}
                  <div className="mt-6">
                    <div className="h-4 rounded-full overflow-hidden flex">
                      <div
                        className="bg-gold"
                        style={{
                          width: `${(loanAmount / emiDetails.totalPayment) * 100}%`,
                        }}
                      />
                      <div
                        className="bg-charcoal"
                        style={{
                          width: `${(emiDetails.totalInterest / emiDetails.totalPayment) * 100}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-gold rounded-sm" />
                        Principal
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3 bg-charcoal rounded-sm" />
                        Interest
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 p-4 bg-secondary rounded-lg"
            >
              <p className="text-sm text-muted-foreground text-center">
                <strong>Disclaimer:</strong> This calculator provides an estimate based on the inputs provided. 
                Actual EMI may vary based on the bank's terms and conditions. Please consult with your 
                financial advisor or bank for accurate calculations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EMICalculator;
