export async function apply_operation(func, args) {
  const currentAccount = await ContentosWallet.getDefaultAccount();
  args.unshift(currentAccount.account);
  return await func.apply(this, args)
}
