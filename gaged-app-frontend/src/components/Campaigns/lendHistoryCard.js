import React from 'react'

const LendHistoryCard = (lend) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-20 border-b-2 pt-4 pb-1 px-2">
  <div>01/02/2022</div>
  <div>You lent ${lend.amountInvested} to this {lend.organiser} campaign</div>
</div>
        </div>
    )
}

export default LendHistoryCard
