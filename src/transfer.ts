import {
    Field,
    Poseidon,
    PublicKey,
    UInt32,
    Encoding,
  } from 'snarkyjs';

  export { transfer };

@method transfer(
    balancesCID: Bytes,
    toAddress: Bytes,
    value: UInt32,
    s: SignatureWithSigner,
    mockId: Field
) {
    const nonce: UInt32 = this.nonce;
    s.signature.verify(s.signer, nonce.toFields()).assertEquals(true)
    const signer: PublicKey = s.signer;

    const balancesHash = Poseidon.hash(
        Encoding.stringToFields(balancesCID.value)
    )
    balancesHash.assertEquals(this._balanceOf.get())

    const balancesObj: Array<Balances> = getDataFromOracle(
        balancesCID.value,
        Number(mockId.toString())
    )

    const fromIndex = balancesObj.findIndex(
        (item) => item.address === signer.toBase58()
    )
    const toIndex = balancesObj.findIndex(
        (item) => item.address === toAddress.value
    )

    const from = balancesObj[fromIndex]
    const to = balancesObj[toIndex]

    from.balance = from.balance.sub(1)
    to.balance = to.balance.add(1)

    const newIds = from.ids.filter((item) => !item.equals(value))
    from.ids = newIds
    to.ids.push(value)

    balancesObj[fromIndex] = from
    balancesObj[toIndex] = to

    const newBalances = JSON.stringify(balancesObj)

    this.emitEvent(new BalanceEvent(Encoding.stringToFields(newBalances)))

    return this._balanceOf.get()
}
