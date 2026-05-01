export function calculatePortfolioValue(portfolio) {
  return portfolio.reduce((total, stock) => {
    return total + stock.price * stock.quantity;
  }, 0);
}